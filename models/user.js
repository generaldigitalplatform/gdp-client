var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
	username:String,
	password:String,
	role:String
},{strict:false});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);