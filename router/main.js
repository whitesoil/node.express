module.exports = function(app,fs)
{
     app.get('/',function(req,res){
        res.render('index',{
          title : "My Homepage",
          length : 5
        })
     });
}
