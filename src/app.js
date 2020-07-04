// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');

// ************ express() - (No tocar) ************
const app = express();

// ************ Middlewares - (No tocar) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Template Engine - (No tocar) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas



// ************ Sistema de Rutas ************
app.use('/', mainRouter);
app.use('/products', productsRouter);




// ************ Arrancando el servidor - (No tocar) ************
app.listen(3000, ()=>{
    console.log('El servidor está corriendo en el puerto 3000');
    
})


// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;