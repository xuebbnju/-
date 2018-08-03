var express = require('express');
var router = express.Router();
var Models = require('../Models');
createToken = require('../middleware/createToken');
checkToken = require('../middleware/checkToken');
/* GET users listing. */
router.post('/post',checkToken, function(req, res, next) {
    let blog = req.body;
    Models.Blog.findBlogByAuthor(blog.author, function(err, blogs){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
            let _blog = new Models.Blog({blog});
            _blog.save();
            return res.json({
                code:200,
                message:'发布成功',
            });
        }
        
    });
});
router.post('/getByClass',checkToken, function(req, res, next) {
    let blog = req.body;
    Models.Blog.findUserBlogByClassify(blog.classify, blog.author, function(err, blogs){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
            let blogList = [];
            blogs.forEach(function(item){
                let temp = {
                    title: blogs.title,
                    content: blog.content,
                    date: blog.date
                }
                blogList.push(temp);
            });
            return res.json({
                code:200,
                message:'获取成功',
                blogList
            });
        }
        
    });
});
router.post('/getByAuthor',checkToken, function(req, res, next) {
    let blog = req.body;
    Models.Blog.findBlogByAuthor(blog.author, blog.author, function(err, blogs){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
            let blogList = [];
            blogs.forEach(function(item){
                let temp = {
                    title: blogs.title,
                    content: blog.content,
                    date: blog.date
                }
                blogList.push(temp);
            });
            return res.json({
                code:200,
                message:'获取成功',
                blogList
            });
        }
        
    });
});
router.post('/getById',checkToken, function(req, res, next) {
    let postId = req.body.postId;
    Models.Blog.findBlogByPostId(postId, function(err, blog){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
            if(blog){
            return res.json({
                code:200,
                message:'获取成功',
                blog
            });
        }
        }
        
    });
});
router.post('/deleteById', checkToken,function(req, res, next) {
    let postId = req.body.postId;
    Models.Blog.removeOneBlog(postId, function(err, blogs){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
           
            return res.json({
                code:200,
                message:'删除成功',
            });
        }
        
    });
});
router.post('/update', checkToken,function(req, res, next) {
    let postId = req.body.postId;
    let blog = req.body;
    Models.Blog.updateOneBlog(postId, blog, function(err, blogs){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }else{
           
            return res.json({
                code:200,
                message:'更新成功',
            });
        }
        
    });
});

module.exports = router;
