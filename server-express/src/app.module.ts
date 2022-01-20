import { createConnection } from 'typeorm';
import CommentEntity from '../database/entities/user.entity.ts';
import 'dotenv/config';

createConnection({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: false,
  entities: [
    CommentEntity,
  ],
  autoLoadEntities: true,
  synchronize: true,
});

console.log('AppModule is active');
