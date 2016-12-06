var express = require('express');
var router = express.Router();

var Client = require('node-rest-client').Client,
    path = require('path');
var client = new Client();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.get('/allimages/:selection_type/:sort_type/:window_type', function(req, res, next) {
     
     var selection_type  = req.params.selection_type;
     var  sort_type  = req.params.sort_type;
     var window_type = req.params.window_type;
console.log('selection is: '+window_type);
    var args = {     
        
        headers: {'Authorization': 'Client-ID ' + '31dfb4730c2d6e5'} // request headers 
    };

    client.get(' https://api.imgur.com/3/gallery/'+selection_type+'/'+sort_type+'/'+window_type , args, function(data, response) {
        // parsed response body as js object 
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

         // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        console.log(data);
        res.json({
            result: 'success',
            images: data
        });
        
        console.log(response);
    });
    
 });



router.get('/allimages/:image_id', function(req, res, next) {
   
    var image_id = req.params.image_id;

    var args = {     
        
        headers: {'Authorization': 'Client-ID ' + '31dfb4730c2d6e5'} // request headers 
    };

    client.get(' https://api.imgur.com/3/gallery/image/' + image_id , args, function(data, response) {
        // parsed response body as js object
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
         // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        console.log(data);
        res.json({
            result: 'success',
            images: data
        })
       
        console.log(response);
    });
    
 });


router.get('/allimages/:id/comments', function(req, res, next) {
     
     var id  = req.params.id;

    var args = {     
        
        headers: {'Authorization': 'Client-ID ' + '31dfb4730c2d6e5'} // request headers 
    };

    client.get(' https://api.imgur.com/3/gallery/'+id+'/comments' , args, function(data, response) {
        // parsed response body as js object 
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

         // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        console.log(data);
        res.json({
            result: 'success',
            images: data
        });
        
        console.log(response);
    });
    
 });



       module.exports = router;