var express = require('express');
var router = express.Router();
var Models = require('../Models');
createToken = require('../middleware/createToken');
checkToken = require('../middleware/checkToken');
/* GET users listing. */
router.post('/post', function(req, res, next) {
    var user = req.body;
    Models.User.findUserByName(user.username, function(err, users){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }
        if(!users){
             var _user = new Models.User(user);
             _user.save();
             return res.json({
                code: 200,
                msg: '注册成功',
                token: createToken(user.username)
            });
        }else{
           return res.json({
               code: -200,
               msg: '用户名已存在'
           });
        }
    });
});
router.post('/login', function(req, res, next) {
    var user = req.body;
    Models.User.findUserByName(user.username, function(err, users){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }
        if(!users){
            return res.json({
                code: -200,
                msg: '用户已存在'
            });
        }else{
           if(user.password === users.password){
                return res.json({
                    code: 200,
                    msg: '登陆成功',
                    token: createToken(user.username)
                });
           }else{
            return res.json({
                code: 500,
                msg: '密码错误',
            });
           }
        }
    });
});

module.exports = router;
