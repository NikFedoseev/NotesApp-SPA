import express from 'express';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json'

import * as db from './utils/DataBaseUtils';

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.get('/notes', (req, res) => {
	res.send('Hello');
	db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
	db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
	db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(8080,() => {
	console.log('Server is up and running on port 8080');
});