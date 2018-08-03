var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    classify: {
        type: String,
        default: ''
    },
    title: String,
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }

});

blogSchema.static = {
    findAllBlogs: function(){
        return this.find()
                   .sort({_id:-1})
                   .exec();
    },
    findBlogByClassify: function(classify, cb){
        return this.find({classify})
                .sort({_id:-1})
                .exec(cb);
    },
    findUserBlogByClassify: function(classify, author, cb){
        return this.find({classify,author})
                .sort({_id:-1})
                .exec(cb);
    },
    findBlogByAuthor: function(author, cb){
        return this.find({author})
                .sort({_id:-1})
                .exec(cb);
    },
    findBlogByPostId: function(postId, cb){
        return this.find({_id: postId})
                .sort({_id:-1})
                .exec(cb);
    },
    removeOneBlog: function(postId, cb){
        return this.remove({_id: postId})
                   .exec(cb);
    },
    updateOneBlog: function(postId, data){
        return this.update({_id: postId}, {$set:data}).exec();
    }


}
module.exports = blogSchema;