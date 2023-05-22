import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { StagiaireService } from '../service/stagiaire.service';
import { StagiaireDto } from '../dto/stagiaire.dto';

@Controller('stagiaires')
export class StagiaireController {
constructor(private stagiaireService: StagiaireService) {}

    @Get()
    findAll(): StagiaireDto[] {
      return this.stagiaireService.findAll();
    }
  
    @Get(':id')
    findOne(@Param() params: any): StagiaireDto {
        return this.stagiaireService.findOne(params.id);
    }
  
    @Post()
    create(@Body() stagiaire: StagiaireDto): StagiaireDto {
        return this.stagiaireService.create(stagiaire);
    }
}
