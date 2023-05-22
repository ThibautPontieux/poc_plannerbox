import { Injectable } from '@nestjs/common';
import { StagiaireDto } from '../dto/stagiaire.dto';

@Injectable()
export class StagiaireService {
    public stagiaires: StagiaireDto[] = [];

    create(stagiaire: StagiaireDto): StagiaireDto {
        this.stagiaires.push(stagiaire);
        return stagiaire;
    }

    findAll(): StagiaireDto[] {
        return this.stagiaires;
    }

    findOne(id: number): StagiaireDto {
        return this.stagiaires.find(s => s.id === id);
    }
}
