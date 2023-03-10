import express from 'express';
import {indexPage, aboutPage, messagesPage} from '../controllers/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/about', aboutPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;
