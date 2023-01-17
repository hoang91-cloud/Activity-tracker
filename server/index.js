const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect("mongodb+srv://hoang91:Dlts5bau2!@cluster0.mbiiwov.mongodb.net/activity-tracker?retryWrites=true&w=majority");
mongoose.connection = mongoose.connection;
mongoose.connection.once('open', () =>{
    console.log("MongoDB database connection established!");
});

app.use(cors());
app.use(express.json());

const activityRouter = require('./routes/activity_routes');
const usersRouter = require('./routes/users_routes');

app.use('/activity', activityRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log("SERVER IS RUNNING PERFECTLY!");
});