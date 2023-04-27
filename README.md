# Polling-API

## Steps to use this project locally

step 1) First download/clone the code in local system

step 2) then run "npm install"

step 3) create a file with .env name

step 4) create variable named "MONGO_URI" and give it your mongoDb Atlas connection string or local mongodb url

#### Done with setup

## routes of api

app.get('/questions/:id') -----> view specific question with its options

app.post('/questions/create')  -------> create a question

app.post('/questions/:id/options/create') ------> create options for specific question

app.delete('/questions/:id/delete') -----> delete specific question

app.delete('/options/:id/delete') -------> delete specific option

app.patch('/options/:id/add_vote') --------> increment vote of that option
