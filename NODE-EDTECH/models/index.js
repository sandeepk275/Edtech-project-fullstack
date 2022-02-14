const dbconfig = require('../config/db.config');
const mongoose = require("mongoose");

let db = {};

db.mongoose = mongoose;
db.url = dbconfig.url;
db.user=require('./user.model')(mongoose);
db.Enrollment=require('./enrollment.model')(mongoose);
db.Tutorial=require('./tutorial.model')(mongoose);
module.exports = db;