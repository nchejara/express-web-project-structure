module.exports = function(app){

    app.get('/', function(req, res){
        var renderData = {
            title: 'Folder structure in Express with HTML engine',
            author: {name: 'Naren Chejara', details:'http://my-info.herokuapp.com'}
        }

        res.render('index', renderData);
    });
}