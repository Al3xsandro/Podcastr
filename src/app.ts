// Modules
import express from 'express';
// Routes
import { routes } from './routes';

const app = express()

// template engine 
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes)

export { app };