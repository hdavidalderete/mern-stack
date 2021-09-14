const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin1234.@mern.k7vyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then( db => {
    console.log('DB is connected');
}).catch( err => {
    console.error(err);
})

module.exports = mongoose;