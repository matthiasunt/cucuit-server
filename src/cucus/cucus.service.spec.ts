import { Test, TestingModule } from '@nestjs/testing';
import { CucusService } from './cucus.service';

describe('CucusService', () => {
  let service: CucusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CucusService],
    }).compile();

    service = module.get<CucusService>(CucusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
