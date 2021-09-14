const express = require('express');     // back end framework
const mongoose = require('mongoose');   // ORM to interact with the mongoose database
const bodyParser = require('body-parser'); // take request and get information from the request
const items = require('./routes/api/items'); //




const app = express();      // initialize express

// BodyParser middleware
app.use(bodyParser.json());

// mongoDB config
const mongoDB = require('./config/keys').mongoURI; // want only specific mongo db key from the object in the keys file hence the .mongoURI after requiring the correct file


// Connect to mongo ... will print in console, whether it is connected or the error if not connected
mongoose.connect(mongoDB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Use routes. Any requests going to the first parameter or endpoint (api/items) will refer to the items variable (items file in api folder)
app.use('/api/items', items);




// when using heroku must set to the below, OR port 5000
const port = process.env.PORT || 5000;

// want app to listen on port and console log the port #
app.listen(port, () => console.log(`server started on port ${port}`));