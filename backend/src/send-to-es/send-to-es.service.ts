import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { env } from 'process';
import { RequestData } from './RequestData';

@Injectable()
export class SendToEsService {
  private static readonly REST_URL_PREFIX = '/rest/node/v1/nodes/-home-/';
  private static readonly WORKFLOW_COMMENT =
    'URL Vorschlag durch Browser-Plugin';

  private readonly apiUrl =
    this.configService.get('EDU_SHARING_URL') + SendToEsService.REST_URL_PREFIX;
  private readonly saveToUploadDirUrl =
    this.apiUrl +
    this.configService.get('EDU_SHARING_UPLOAD_DIR_ID') +
    '/children?type=ccm%3Aio&renameIfExists=true';
  private headers = {
    Authorization:
      'Basic ' +
      Buffer.from(
        this.configService.get('EDU_SHARING_USER') +
          ':' +
          this.configService.get('EDU_SHARING_PASSWORD'),
      ).toString('base64'),
  };

  private workflowBody = {
    receiver: [{ authorityName: 'GROUP_ORG_WLO-Uploadmanager' }],
    comment: SendToEsService.WORKFLOW_COMMENT,
    status: '200_tocheck',
  };

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  /**
   * Creates a new node in Edu-Sharing with the provided data.
   *
   * @returns the new node's id
   */
  async saveToUploadDir(data: RequestData): Promise<string> {
    const response = await this.httpService
      .post(this.saveToUploadDirUrl, this.mapRequestData(data), {
        headers: this.headers,
      })
      .toPromise();
    const nodeId = response.data.node.ref.id;
    return nodeId;
  }

  async createUploadManagerWorkflow(nodeId: string): Promise<void> {
    const url = this.apiUrl + nodeId + '/workflow';
    await this.httpService
      .put(url, this.workflowBody, {
        headers: this.headers,
      })
      .toPromise();
  }

  private mapRequestData(data: RequestData): { [property: string]: string[] } {
    return {
      'cm:name': [data.title],
      // 'cclom:title': [data.title],
      'ccm:wwwurl': [data.url],
      'ccm:taxonid': [data.discipline],
      'ccm:educationalintendedenduserrole': [data.intendedEndUserRole],
      'ccm:educationalcontext': [data.educationalContext],
      'ccm:educationallearningresourcetype': [data.learningResourceType],
      'ccm:sourceContentType': [data.sourceContentType],
      'ccm:toolCategory': [data.toolCategory],
      'ccm:objecttype': [data.objectType],
    };
  }
}
