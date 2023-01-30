import express from 'express';
import {indexPage, aboutPage} from '../controllers/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);

export default indexRouter;
