import {DataSourceOptions} from 'typeorm';
import { ConfigService } from '@nestjs/config';

let configService = new ConfigService();

export function getConfig() {
    return {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "plannerbox",
        entities: ['dist/**/models/*.entity.ts'],
        migrations: ['dist/migrations/*{.js, .ts}'],
        migrationsTableName: '_migrations'
    } as DataSourceOptions;
}