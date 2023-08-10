const Users = require('../models/userModel');

// update  User identified by the id in the request

exports.update = (req,res) =>{
    let data = req.body;

 Users.updateById(req.params.id, new Users(data), (err,data) =>{
    if(err){
        if(err.kind === "not_found"){
            res.status(404).send({
                message:`Not found User with id ${req.params.id}`
            })
        }else{
            res.status(500).send({
                message:"Error updating User with id" + req.params.id
        })
    }
    }else{
        res.send(data);
        console.log(`Update user with id ${req.params.id}`);
    }
})};

exports.findAll = (req, res) => {
    Users.getAllUsers((err,data)=>{
        if(err){
            res.status(500).send({message:
            err.message || "some error occurred while retrieving users."
        })
        }else res.send(data); 
    })
}

exports.Delete = (req,res)=>{
    Users.removeByID(req.params.id,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({message:`Not found User with id ${req.params.id}`})
            }else{
                res.status(500).send({message:`Error updating User with id`+req.params.id})
            }
        }else{
            res.send(data);
            console.log(`Update user with id ${req.params.id}`);
        }
    })
}
exports.Create = (req,res)=>{
    let data = req.body;
    Users.createUser(data,(err,data)=>{
        if(err)
        res.status(500).send({
    message: err.message || "some error occurred while creating the user"
});
else res.send(data);
    })
}