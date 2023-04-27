const express = require('express');
const app = express();

const questions = require('./routes/questions');
const options = require('./routes/options');

const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());


//routes
app.get('/', (req, res) => {
    res.send("Landing page of Question bank.");
})

app.use('/questions', questions);
app.use('/options', options);

const port = 8000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is up and running on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();
