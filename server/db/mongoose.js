var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(('mongodb://localhost:27017/todoApp' || 'mongodb://palmor7:olumpiakoss7@ds123513.mlab.com:23513/todoapp'), {useNewUrlParser: true});

module.exports = {mongoose};


//'mongodb://palmor7:olumpiakoss7@ds123513.mlab.com:23513/todoapp' || 