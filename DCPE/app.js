/*In a framework like Express.js, app.js plays a crucial role as the root file. 
It serves as the central starting point for the WebApp, 
where all the necessary configurations, middleware, and routes are defined. Unlike a framework 
that starts with an HTML file and loads the linked JS, HTML "partials" are loaded later.

app.js plays 5 distinct roles in an Express.js application.*/

/* 1. INITIALIZATION: 
The app.js file is the first point of execution in the application. 
It initializes the Express application and sets up the necessary configurations.*/
const myExpress = require('express')
const myApp = myExpress()

myApp.use( myExpress.static('public'))
myApp.use( myExpress.urlencoded( { extended: true } ))
 
/* 2. MIDDLEWARE:
The app.js file is where you define the middleware functions (all 3rd-party plugins) that 
will be used by the application. Middleware functions are executed in the order they are 
defined and can perform tasks such as logging, authentication, and error handling.*/
const myMorgan = require('morgan')
const myMethodOverride = require('method-override')

myApp.use( myMorgan('tiny'))
myApp.use( myMethodOverride('_method'))

/* 3. ROUTES: 
In app.js, you define the routes for your application. Routes are the paths in your 
application that the client can access. Each route is associated with a specific controller 
action (in the controllers folder), which is responsible for processing the client's request 
and returning a response.*/

const mainRoutes = require('./routes/mainRoutes') // these are all in the "routes" folder
const userRoutes = require('./routes/userRoutes')
    // we might want to add a jobRoutes if we choose to save jobs to a local 
    // database and update periodically instead of pulling the data each time  

myApp.use('/', mainRoutes)
myApp.use('/users', userRoutes)

/* 4. ERROR HANDLING: 
The app.js file is also where you define the error handling middleware for your application. 
This middleware is responsible for catching any errors that occur during the processing of a 
client's request and returning an appropriate error response.*/

// 404:  
    // if this line is reached on the user end, none of our routes match the URL they gave,
    // so execute this instead
myApp.use( (req, res, next)=>{ // this is called an "arrow function"
    let err = new Error('The server cannot locate the URL ' + req.url)
    err.status = 404
    next(err) // go to line 55
})

myApp.use( (err, req, res, next)=>{
    console.log(err.stack)
    // if line 48 was executed, skip 57
    if(!err.status){
        // 500: error is a serverside issue (our fault)
        err.status = 500
        err.message = ("Internal Server Error")
    }
    // render error page on user's end with appropriate error code
    res.status(err.status)
    res.render('error', {error: err})
})

/* 5. SERVER LISTENING: 
Finally, the app.js file is where you start the server and 
make it listen for incoming requests on a specific port.*/
myApp.listen(myPort, myHost, ()=>{
    console.log('Server is running on port', myPort)
})