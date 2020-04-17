import { Test, TestingModule } from '@nestjs/testing';
import { CucusController } from './cucus.controller';

describe('Cucus Controller', () => {
  let controller: CucusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CucusController],
    }).compile();

    controller = module.get<CucusController>(CucusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
