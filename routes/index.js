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

router.get('/search/',(req,res,next)=>{
  var name = req.query.name;
  fs.readFile('key.txt','utf-8',(err,key)=>{
    if(err){
      console.log(err)
    };
    var API_KEY = key;
    const URL = `https://superheroapi.com/api/${API_KEY}/search/${name}`
    request.get(URL,(err,response,body)=>{
      if(err){
        return next(err)
      }
      console.log(JSON.parse(body))
      res.render('results', { title: name,data : JSON.parse(body)});
    })  
  })

})

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
      res.render('detail', { title: 'Superhero App',data : JSON.parse(body)});
    })  
  })
}
  catch(err){
    next(404)
  }  
})
module.exports = router;
