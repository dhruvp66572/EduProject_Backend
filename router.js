const user_api = require("./API/user_route.js");
const project_collection_route = require("./API/project_collection_route.js");
const cloudinaryDelete = require("./API/CloudinaryDelete.js");

function routes(app) {
    
app.use("/api/auth", user_api);
app.use("/api/projects", project_collection_route);
app.use("/api/delete-file", cloudinaryDelete);

}

module.exports = routes;