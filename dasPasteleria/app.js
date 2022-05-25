const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})

app.get('/home',(req,resp)=>{
    resp.send('hola lo estas logrando')
    resp.sendFile(path.join(__dirname,'/views/index.html'))
})
app.get('/login',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'/views/login.html'))
})
app.get('/carrito-de-compras',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'/views/productCart.html'))
})
app.get('/detalle-de-producto',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'/views/productDetail.html'))
})
app.get('/registro',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'/views/register.html'))
})

