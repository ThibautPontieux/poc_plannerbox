import { Module } from '@nestjs/common';
import { StagiaireController } from './controller/stagiaire.controller';

@Module({
  controllers: [StagiaireController]
})
export class StagiaireModule {}
