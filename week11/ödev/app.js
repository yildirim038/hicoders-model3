import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// Routers
import studentsRouter from  './routes/students.js';


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/students', studentsRouter);


app.listen(3000, ()=>{
    console.log("listening on 3000");
});