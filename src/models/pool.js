import * as pg from 'pg';
const { Pool } = pg.default;
import dotenv from 'dotenv';
import { connectionString } from '../settings.js';
dotenv.config();

export const pool = new Pool({ connectionString });