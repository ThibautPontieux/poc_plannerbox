import { Test, TestingModule } from '@nestjs/testing';
import { StagiaireService } from './stagiaire.service';

describe('StagiaireService', () => {
  let service: StagiaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StagiaireService],
    }).compile();

    service = module.get<StagiaireService>(StagiaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
