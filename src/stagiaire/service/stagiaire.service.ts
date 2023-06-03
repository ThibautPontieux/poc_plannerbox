import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Stagiaire } from '../models/stagiaire.entity';
import { IStagiaire } from '../models/stagiaire.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class StagiaireService {
    constructor(
        @InjectRepository(Stagiaire)
        private readonly stagiaireRepository: Repository<Stagiaire>
    ) {}

    create(stagiaire: IStagiaire): Observable<IStagiaire> {
        return from(this.stagiaireRepository.save(stagiaire));
    }

    findAll(): Observable<IStagiaire[]> {
        return from(this.stagiaireRepository.find());
    }

    update(id: number, stagiaire: IStagiaire): Observable<UpdateResult> {
        return from(this.stagiaireRepository.update(id, stagiaire));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.stagiaireRepository.delete(id));
    }
}
