var express = require('express');
var router = express.Router();
const app = express();
const PORT = 3000
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/', (req, res, next) =>{

  
      res.render('index', { title: 'Superhero'});
  
  
 
});

/*
if URL matches with pattern '/search',
-> fetch query 'name'
-> read access token
-> if there is error in reading access token, show the output to the console
-> respond the data after fetching from API
*/ 
router.get('/search/',(req,res,next)=>{
  var name = req.query.name;          /*fetching 'name' from URL*/ 
  fs.readFile('key.txt','utf-8',(err,key)=>{    /* Reading txt file which has access token*/
    if(err){
      console.log(err)
    };
    var API_KEY = key;        /*storing access token in variables */
    const URL = `https://superheroapi.com/api/${API_KEY}/search/${name}`    /*Generating URL for api call */
    request.get(URL,(err,response,body)=>{
      if(err){
        return next(err)
      }
      /*console.log(JSON.parse(body))*/
      /*if data is successfully fetched from API
      -> render results.pug
      */ 
      res.render('results', { title: name,data : JSON.parse(body)});
    })  
  })

})
/*for URL pattern localhost/id  */
router.get("/:id",(req,res,next)=>{
  try{
  var id = req.params.id;
  fs.readFile('key.txt','utf-8',(err,key)=>{
    if(err){
      console.log(err)
    };
    var API_KEY = key;
    const URL = `https://superheroapi.com/api/${API_KEY}/${id}`
    request.get(URL,(err,response,body)=>{
      if(err){
        return next(err)
      }
      console.log(JSON.parse(body))
      res.render('detail', { title: JSON.parse(body).name,data : JSON.parse(body)});
    })  
  })
}
  catch(err){
    next(404)
  }  
})
module.exports = router;
