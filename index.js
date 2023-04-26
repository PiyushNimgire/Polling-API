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

// app.get('/questions/:id') view specific question with its options DONE
// app.post('/questions/create')  create a question DONE
// app.post('/questions/:id/options/create') create options for specific question DONE
// app.delete('/questions/:id/delete') delete specific question
// app.delete('/options/:id/delete') delete specific option
// app.patch('/options/:id/add_vote') increment vote of that option

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