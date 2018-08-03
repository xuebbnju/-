var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    passWord: String,
    gender: String

});

userSchema.static = {
    findAllUser: function(){
        return this.find()
                   .sort({_id:-1})
                   .exec();
    },
    findUserByName: function(name, cb){
        return this.find({"userName": name})
                .exec(cb);
    }

}
module.exports = userSchema;