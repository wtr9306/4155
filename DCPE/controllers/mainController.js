/*In the MVC model, the Controller file plays the role as the bridge between the 
model and the view. It receives user input from the view, processes it, and updates the 
model accordingly (this controller file does not). Additionally, it retrieves data from the model and formats it for 
display in the view. By managing the flow of data between the model and the view, the 
controller ensures that the application adheres to the MVC design pattern and maintains 
a clear separation of concerns.*/

// Sends HTTP response to user with rendered "index" page when requested by mainRoutes
exports.index = (req, res)=>{   res.render('./main/index')   }

// Sends HTTP response to user with rendered "about" page when requested by mainRoutes
exports.about = (req, res)=>{   res.render('./main/about')   }

// Sends HTTP response to user with rendered "contact" page when requested by mainRoutes
exports.contact = (req, res)=>{ res.render('./main/contact') }

// Sends HTTP response to user with rendered "login" page when requested by mainRoutes
exports.login = (req, res)=>{   res.render('./main/login')   }