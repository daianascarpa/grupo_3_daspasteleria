const indexController = {
    index : function(req,res){
        res.render('index', {titulo:'DAS Pasteleria'})
    }
}

module.exports = indexController