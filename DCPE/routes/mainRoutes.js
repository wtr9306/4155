/*A "routes" file is responsible for defining the routing rules in a WebApp that uses the 
MVC model. It maps the URLs to the corresponding controller actions 
(found in the "controllers" folder), allowing the application to respond to user 
requests effectively.

mainRoutes specifically handles all site navigation that does NOT involve 
dynamic database entries.*/

const myExpress = require('express')
const thisController = require('../controllers/mainController')

const thisRouter = myExpress.Router()

// GET /: sends user's HTTP request for Home to mainController
thisRouter.get('/', thisController.index)
thisRouter.get('/home', thisController.index)
thisRouter.get('/main', thisController.index)
thisRouter.get('/index', thisController.index)

// GET /about: sends user's HTTP request for About to mainController
thisRouter.get('/about', thisController.about)
thisRouter.get('/aboutus', thisController.about)
thisRouter.get('/about_us', thisController.about)
thisRouter.get('/about-us', thisController.about)

// GET /contact: sends user's HTTP request for Contact to mainController
thisRouter.get('/contact', thisController.contact)
thisRouter.get('/contactus', thisController.contact)
thisRouter.get('/contact_us', thisController.contact)
thisRouter.get('/contact-us', thisController.contact)

// GET /login: sends user's HTTP request for Login to mainController
thisRouter.get('/login', thisController.login)
thisRouter.get('/log_in', thisController.login)
thisRouter.get('/log-in', thisController.login)

/* In Node.js, "module.exports" exposes the functionality 
of this "module" to any module that imports it via the "requires()" method.*/
module.exports = thisRouter