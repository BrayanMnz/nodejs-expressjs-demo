const express = require('express');

const app = express(); 

app.get('/hello', (req, res) => {

	const queryParams = req.query;

	console.log(queryParams);

	const name = req.query.name;

	res.send('Hola, ' + name);
});

app.get('/', (req, res) => {
	res.status(200);
	res.setHeader("Content-Type", "text/plain");
	res.send('Ruta principal');
});


app.listen(3000, () => {
	console.log('Express Server listening on port 3000!');
});
