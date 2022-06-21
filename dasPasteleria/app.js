const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./src/routes/indexRouter')
const loginRouter = require('./src/routes/loginRouter')
const productCardRouter = require('./src/routes/productCartRouter')
const productDetailRouter = require('./src/routes/productDetailRouter')
const registerRouter = require('./src/routes/registerRouter')

app.set('view engine', 'ejs')

app.use(express.static('public'));


app.use('/', indexRouter)
app.use('/', loginRouter)
app.use('/', productCardRouter)
app.use('/', productDetailRouter)
app.use('/', registerRouter)

app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})


