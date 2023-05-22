import { Module } from '@nestjs/common';
import { StagiaireController } from './controller/stagiaire.controller';
import { StagiaireService } from './service/stagiaire.service';

@Module({
  controllers: [StagiaireController],
  providers: [StagiaireService]
})
export class StagiaireModule {}
