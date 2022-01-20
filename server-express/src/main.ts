import 'reflect-metadata';
import './app.module.ts';
import express from 'express';
import router from './user/user.controller.ts';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(router);

app.set('port', process.env.PORT_START);

const server = app.listen(app.get('port'), () => {
  console.log(`Server work on port ${server.address().port}`);
});
