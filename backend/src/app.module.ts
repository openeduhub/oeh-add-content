import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendToEsController } from './send-to-es/send-to-es.controller';
import { SendToEsService } from './send-to-es/send-to-es.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '../.env' }),
    HttpModule.register({
      timeout: 10000,
    }),
  ],
  controllers: [AppController, SendToEsController],
  providers: [AppService, SendToEsService],
})
export class AppModule {}
