import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StagiaireModule } from './stagiaire/stagiaire.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StagiaireModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
