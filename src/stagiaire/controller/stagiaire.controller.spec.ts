import { Test, TestingModule } from '@nestjs/testing';
import { StagiaireController } from './stagiaire.controller';

describe('StagiaireController', () => {
  let controller: StagiaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StagiaireController],
    }).compile();

    controller = module.get<StagiaireController>(StagiaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
