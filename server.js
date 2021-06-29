// Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

require('dotenv').config()

// importing files
const routes = require('./routes/api');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// Configuration
app.use(express.json())
app.use(express.urlencoded())
app.use('/', routes);

// Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    log(`Server is starting at PORT: ${PORT}`);
});