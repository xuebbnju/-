module.exports = function(app){
  app.use('/user', require('./user'));
  app.use('/blog', require('./blog'));
  app.use('./classify', require('./classify'));
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
};
