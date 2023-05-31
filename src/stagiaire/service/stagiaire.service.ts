import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { StagiaireEntity } from '../models/stagiaire.entity';
import { Stagiaire } from '../models/stagiaire.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class StagiaireService {
    constructor(
        @InjectRepository(StagiaireEntity)
        private readonly stagiaireRepository: Repository<StagiaireEntity>
    ) {}

    create(stagiaire: Stagiaire): Observable<Stagiaire> {
        return from(this.stagiaireRepository.save(stagiaire));
    }

    findAll(): Observable<Stagiaire[]> {
        return from(this.stagiaireRepository.find());
    }

    update(id: number, stagiaire: Stagiaire): Observable<UpdateResult> {
        return from(this.stagiaireRepository.update(id, stagiaire));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.stagiaireRepository.delete(id));
    }
}
