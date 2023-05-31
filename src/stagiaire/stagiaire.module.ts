import { Module } from '@nestjs/common';
import { StagiaireController } from './controller/stagiaire.controller';
import { StagiaireService } from './service/stagiaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StagiaireEntity } from './models/stagiaire.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StagiaireEntity])
  ],
  controllers: [StagiaireController],
  providers: [StagiaireService]
})
export class StagiaireModule {}
