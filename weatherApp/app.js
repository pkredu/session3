const express = require('express');
const request = require('request');

app= express();

const port = 3000;

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=metric&cnt=5&appid=f6741561ad8662c06cb2bf865cc8a0ea";

app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    console.log('user requested home page')
    res.send('Server is up , please go ahead');
})

app.get('/weather',(req,res)=>{
    console.log('user requested weather deatils, checking from openweather')
    request(url,(err,response,body)=>{
        if(err){
            console.log(err)
        }else{
            const output = JSON.parse(body);
            //res.send(output)
            res.render('main',{output,title:'Weather App'})
        }
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('running at ', port)
    }
})