import * as bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log(`Server listening on port 5000`);
});
