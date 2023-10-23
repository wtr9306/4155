// DEPRECATED FOR NOW


/*A "routes" file is responsible for defining the routing rules in a WebApp that uses the 
MVC model. It maps the URLs to the corresponding controller actions 
(found in the "controllers" folder), allowing the application to respond to user 
requests effectively.

userRoutes specifically handles all site navigation involving a user's 
personalized interface and personal data.*/

/*
const myExpress = require('express')
const thisController = require('../controllers/userController')

const thisRouter = myExpress.Router()
*/

// Because userRoutes involves database entries, we should invoke the 7 routes of the REST model 
// (except 1 and 6, we don't want to delete users or list them):
/*  1. GET /resource - Retrieve a list of resources.
    2. POST /resource - Create a new resource.
    3. GET /resource/:id - Retrieve a specific resource by its ID.
    4. PUT /resource/:id - Update an existing resource.
    5. PATCH /resource/:id - Partially update an existing resource.
    6. DELETE /resource/:id - Delete a specific resource by its ID. 
    7. OPTIONS /resource - Return the allowed HTTP methods for the specified resource.
*/

// GET /login: sends user's HTTP request for Profile to mainController
/*
thisRouter.get('/login', thisController.login)
thisRouter.get('/log_in', thisController.login)
thisRouter.get('/log-in', thisController.login)
*/