module.exports = app=>{
    let router = require('express').Router();


    const user = require("../controllers/userControllers.js");
    router.put("/user/:id", user.update);
    router.get("/users", user.findAll);
    router.delete("/user/:id", user.Delete);
    router.post("/user", user.Create);

    app.use('/',router);

}
