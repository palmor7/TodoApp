var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URL || 'mongodb://localhost:27017/todoApp');

module.exports = {mongoose};


//'mongodb://palmor7:olumpiakoss7@ds123513.mlab.com:23513/todoapp' || 
//('mongodb://localhost:27017/todoApp' || 
//, {useNewUrlParser: true}