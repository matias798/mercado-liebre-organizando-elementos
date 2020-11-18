const express = require('express');
const app = express ();
const port = 3008;

app.get('/',(req,res)=>{

    res.sendFile(__dirname +'/views'+req.url);   

});
   
app.get('/register.html',(req,res)=>{

    res.sendFile(__dirname +'/views' + req.url);   

});

app.get('/login.html',(req,res)=>{

    res.sendFile(__dirname +'/views' + req.url);   

});

app.get('/validar',(req,res)=>{

    res.sendFile(__dirname + '/views/index.html');   

});

app.get('*', (req, res) => {


res.sendFile(__dirname + '/public' + req.url);

});
   
app.listen(port,() => console.log('estamos corriendo en el puerto ' + port))  ;
