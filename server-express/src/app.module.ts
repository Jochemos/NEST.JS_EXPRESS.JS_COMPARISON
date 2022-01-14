import { createConnection } from 'typeorm';


require('dotenv').config();

createConnection({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: false,
  entities: [
    // entity add
  ],
  autoLoadEntities: true,
  synchronize: true
});


console.log(`on this part active AppModule`);
