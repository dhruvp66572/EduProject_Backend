const user_api = require("./user_route.js");
const project_collection_route = require("./project_collection_route.js");
const cloudinaryDelete = require("./CloudinaryDelete.js");

function routes(app) {
    
app.use("/api/auth", user_api);
app.use("/api/projects", project_collection_route);
app.use("/api/delete-file", cloudinaryDelete);

}

module.exports = routes;