module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "plannerbox",
    synchronize: false,
    logging: false,
    entities: ['src/entity/**/models/*.entity.ts'],
    migrations: ['src/migration/**/*.ts'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
    }
};