const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"))
app.use(express.static('public'));


const indexRouter = require('./src/routes/indexRouter')
const userRouter = require('./src/routes/userRouter')
const productRouter = require('./src/routes/productRouter')
//const productCartRouter = require('./src/routes/productCartRouter')


app.use('/', indexRouter)
app.use('/Usuarios', userRouter)
app.use('/Productos', productRouter)
//app.use('/carrito-de-compras', productCartRouter)

app.set('view engine', 'ejs')

app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})


