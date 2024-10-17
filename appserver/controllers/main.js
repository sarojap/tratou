module.exports.index=function(req,res){
    res.render('index', { title: 'About' });
};
module.exports.signin=function(req,res){
    res.render('signin', { title: 'Location' });
};
module.exports.review=function(req,res){
    res.render('review', { title: 'Review' });
};    

