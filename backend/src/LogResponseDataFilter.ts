import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class LogResponseDataFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
    if (exception.isAxiosError) {
      console.error('request url:', exception.config.url);
      console.error('request data:', JSON.parse(exception.config.data));
      console.error('response statusText:', exception.response?.statusText);
      console.error('response data:', exception.response?.data);
    }
  }
}
