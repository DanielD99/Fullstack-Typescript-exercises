import * as dotenv from 'dotenv';
dotenv.config();

import express = require('express');
const app = express();


app.get('/', (req, res) => {
   res.send('Hello, world!');
});

app.listen(3000, () => {
   console.log(`Server is listening to http://localhost:3000`);
});
