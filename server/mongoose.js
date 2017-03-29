var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dduke_blog')
mongoose.Promise = global.Promise
module.exports = mongoose
