//controller


//home page GET
const index = (req, res, next) => {
    res.render('index', { title: 'Express' });
  };
  
  module.exports = {
      index //index = GET
  };