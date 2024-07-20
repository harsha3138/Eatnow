const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require('./db');

app.use(cors());
app.use(express.json());

const startServer = async () => {
    await mongoDB();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.use('/api', require('./Routes/Createuser'));

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer();
