const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const app = express();
const session = require('express-session');




app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"))
app.use(express.static('public'));
app.use(session({secret:"frase secreta"}))

const indexRouter = require('./src/routes/indexRouter')
const userRouter = require('./src/routes/userRouter')
const productRouter = require('./src/routes/productRouter')

//const productCartRouter = require('./src/routes/productCartRouter')

const folderPublic = path.resolve(__dirname,'./public');
app.use(express.static(folderPublic));

app.use('/', indexRouter)
app.use('/Usuarios', userRouter)
app.use('/Productos', productRouter)


app.set('view engine', 'ejs')

app.listen(3030,()=>{
    console.log("Levantando un servidor con Express");
})

// app.use((req,res,next)=>{
// 	res.status(404).render('not-found')
//pagina de error 404
// })
