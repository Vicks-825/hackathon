const connetToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connetToMongo();

const app = express()
const port = 5000

app.use(cors())

app.use(express.json());

app.use('/api/auth/', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(process.env.PORT || port, () => {
    console.log(`App is connected`);
})