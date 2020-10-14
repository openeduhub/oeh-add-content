import { Test, TestingModule } from '@nestjs/testing';
import { SendToEsController } from './send-to-es.controller';

describe('SendToEsController', () => {
  let controller: SendToEsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendToEsController],
    }).compile();

    controller = module.get<SendToEsController>(SendToEsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
