const express = require('express') // Requiriendo la librería (módulo) express. Recordar instalarla con npm install express
const app = express() // Inicializando el objeto app de tipo express. 
const port = 3000  // Declarando el numero de puerto a utilizar en la variable port. 
const { engine } = require ('express-handlebars');// Requiriendo módulo express-handlebars para utilizarlo con handlebars e importanto el objeto engine
 

// Configurando handlebars como el motor de plantillas por defecto que será utilizado por nuestra aplicación express. 
app.engine('handlebars', engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


/* 
Middleware static - 
Tiene el mismo efecto que crear una ruta para cada archivo estático 
que desee entregar al cliente.
*/
app.use(express.static(__dirname + '/public')) 

app.get('/', (req, res) => {  //app.get es el método mediante el cual agregamos las rutas. 
    // res.type('text/plain')
    // res.send('Sitio Web - TDA-252 ')
    res.render('home')
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Acerca de : Sitio Web - TDA-252 ')
})


/*
app.use([ruta,] callback [, callback...]) https://expressjs.com/en/4x/api.html#app.use

Monta la función o funciones de middleware especificadas en la ruta especificada: 
la función de middleware se ejecuta cuando la base de la ruta solicitada coincide con la ruta.
*/
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Recurso no encontrado')
})

/*
Express puede distinguir entre los controladores para errores 404 y 500 
por la cantidad de argumentos que toman sus funciones callback.

404 : app.use((req, res) => { }) -- 2 argumentos. 
500 : app.use((err, req, res, next) => { }) -- 4 argumentos.
*/

app.use((err, req, res, next) => {

    console.error(err.message)

    res.type('text/plain')
    res.status(500)
    res.send('500 - Ocurrió un error en el Servidor')
})

app.listen(port, () => {
    console.log(`Aplicación de Express iniciada en http://localhost:${port}`)
})

