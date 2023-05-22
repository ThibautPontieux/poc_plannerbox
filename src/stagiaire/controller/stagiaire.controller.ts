import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('stagiaires')
export class StagiaireController {
    @Get()
    findAll(): string {
      return 'retourne la liste des stagiaires';
    }
  
    @Get(':id')
    findOne(@Param() params: any): string {
        return 'retourne un stagiaire avec l\'id ' + params.id;
    }
  
    @Post()
    create(): string {
        return 'création d\'un stagiaire';
    }
}
