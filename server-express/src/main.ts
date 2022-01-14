import './app.module';
import express from 'express';

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT_START);

const server = app.listen(app.get('port'), () =>{
  console.log(`Server work on port ${ server.address().port }`);
})
