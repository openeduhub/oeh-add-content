import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { LogResponseDataFilter } from './LogResponseDataFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (env.NODE_ENV !== 'production') {
    console.log('Running in development mode.');
    app.enableCors({ origin: 'http://localhost:9090' });
  } else {
    console.log('Running in production mode.');
  }
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new LogResponseDataFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
