const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./src/routes/indexRouter')
const loginRouter = require('./src/routes/loginRouter')
const productCartRouter = require('./src/routes/productCartRouter')
const productDetailRouter = require('./src/routes/productDetailRouter')
const registerRouter = require('./src/routes/registerRouter')
const createProdRouter = require('./src/routes/createProdRouter')
const modifyProdRouter = require('./src/routes/modifyProdRouter')

app.set('view engine', 'ejs')

app.use(express.static('public'));


app.use('/', indexRouter)
app.use('/', loginRouter)
app.use('/', productCartRouter)
app.use('/', productDetailRouter)
app.use('/', registerRouter)
app.use('/', createProdRouter)
app.use('/', modifyProdRouter)

app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})


