const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const {geocode} =require('../dataFetching/geo');
const {weather} =require('../dataFetching/weatherData');
const validate = require('validator');

// define paths
const Base_DIR= path.join(__dirname,'../public');
const Views_DIR=path.join(__dirname,'../template/views');
const Partials_DIR = path.join(__dirname,'../template/partials');

// register the paths
hbs.registerPartials(Partials_DIR);
app.use(express.static(Base_DIR));
app.set('views',Views_DIR)

// set hbs
app.set('view engine', 'hbs');


app.get('/weather', (req,response)=>{
    const city = req.query.address;
    if(validate.isEmpty(city)){
        return response.send({
            error:"The place name is required"
        })}
    geocode(city,(err,res)=>{
        if(err){return response.send(err)}
        weather(res,(er,re)=>{
            if(er){return response.send({er,name:res.name})}
            return response.send({...re,name:res.name})
        })})
     });

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})



app.listen(3000,()=>{
    console.log('worked');
    
})