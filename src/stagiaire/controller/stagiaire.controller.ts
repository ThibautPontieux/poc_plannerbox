import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { StagiaireService } from '../service/stagiaire.service';
import { IStagiaire } from '../models/stagiaire.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('stagiaires')
export class StagiaireController {
    constructor(private stagiaireService: StagiaireService) {}

    @Post()
    create(@Body() stagiaire: IStagiaire): Observable<IStagiaire> {
        return this.stagiaireService.create(stagiaire);
    }

    @Get()
    findAll(): Observable<IStagiaire[]> {
        return this.stagiaireService.findAll();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() stagiaire: IStagiaire
    ): Observable<UpdateResult> {
        return this.stagiaireService.update(id, stagiaire);
    }

    @Delete(':id')
    delete(@Param('id') id: number,): Observable<DeleteResult> {
        return this.stagiaireService.delete(id);
    }
}
