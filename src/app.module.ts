import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StagiaireModule } from './stagiaire/stagiaire.module';

@Module({
  imports: [StagiaireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
