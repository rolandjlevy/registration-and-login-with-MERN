const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected...');
});

// Schema
const UserSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});
const User = mongoose.model('User', UserSchema);

// saving data into db
const data = {
    title: 'Welcome to the test',
    body: 'This is a full-stack test using Node'
};

// instance of model
const newUser = new User(data);

newUser.save((error) => {
    if (error) {
        console.log({error});
    } else {    
        console.log('data has been saved');
    }
})

// Routes
app.get('/', (req, res) => {
    User.find({  })
    .then(data => {
        // console.log('Data: ', data);
        res.json(data);
    })
    .catch(error => {
        console.log('error: ', error);
    });
});

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});