const express = require('express');
// morgan logger middleware function using the given format and options
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const p = require('process');

console.error
app = express();

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()) // replace to bodyParser 

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
    p.stdout.write
})