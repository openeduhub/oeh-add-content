import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class LogResponseDataFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
    if (exception.isAxiosError) {
      console.error('statusText:', exception.response.statusText);
      console.error('data:', exception.response.data);
    }
  }
}
