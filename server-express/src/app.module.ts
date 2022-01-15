import { createConnection } from 'typeorm';
import { Comment_Entity } from './user/user.entity';


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
    Comment_Entity
  ],
  autoLoadEntities: true,
  synchronize: true
});


console.log(`AppModule is active`);
