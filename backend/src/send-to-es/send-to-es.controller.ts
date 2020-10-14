import { Body, Controller, Post } from '@nestjs/common';
import { RequestData } from './RequestData';
import { SendToEsService } from './send-to-es.service';

@Controller('send-to-es')
export class SendToEsController {
  constructor(private readonly sendToEsService: SendToEsService) {}

  @Post()
  async sendToEs(@Body() body: RequestData) {
    console.log(body);
    const nodeId = await this.sendToEsService.saveToUploadDir(body);
    await this.sendToEsService.createUploadManagerWorkflow(nodeId);
  }
}
