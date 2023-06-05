# poc_plannerbox
NestJS POC to initiate school project

run `npm i` to install dependancies  
run `npm run start:dev` to start the app in development environment

Configure the port in /src/main.ts, change the :port -> app.listen(:port)

## API Development  
I am using postman to test my routes

## DB management 

Sequelize ? TypeORM ? Flyway ?

Sequelize & TypeORM = ORM
Utiliser les deux = pas très pertinent.

TypeORM model generator = générer le modèle de données à partir de la BDD

__Proposition__  
ORM : TypeORM, très puissant & dans colle parfaitement à nos besoins. 