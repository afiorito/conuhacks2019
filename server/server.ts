import * as bodyParser from 'body-parser';
import express from 'express';

const app = express();
var port:number = 80;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ` + port);
});
