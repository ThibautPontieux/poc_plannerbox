module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'plannerbox',
    entities: ['src/**/*.entity.ts'],
    url: 'postgres://postgres:postgres@localhost:5432/plannerbox'
};
//TODO: revoir config typeORM + config BDD