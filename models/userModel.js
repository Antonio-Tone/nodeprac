const sql = require('./dbmodel.js')

const Users  = function(user){
    this.username = user.username
    this.email = user.email
    this.user_password = user.user_password
}


Users.updateById = (id, user, result) =>{
    sql.query('UPDATE users SET username = ?, email = ?, user_password = ? WHERE id = ?', [user.username, user.email, user.user_password,id],
    (err,res) => {
    if (err){
        console.log("error:", err);
        result(err,null);
        return;
    }
    if(res.affectedRows == 0){
        // not found Users with the id
        result({kind:'not_found'}, null);
        return;
    }
    console.log("update user:",{id:id, ...user});
    result(null,{id:id, ...user});
})
};

Users.getAllUsers = (result) =>{
sql.query("SELECT * FROM users", (err,res) =>{
    if(err){
        console.log(err);
        result(err ,null)
        return;
    }else{
        console.log(err);
        result(null ,res)
    }

})
}

Users.removeByID = (id, result) =>{
    sql.query("delete from users where id = ?",[id],(err,res)=>{
            if (err){
                console.log("error:", err);
                result(err,null);
                return;
            }
            if(res.affectedRows == 0){
                // not found Users with the id
                result({kind:'not_found'}, null);
                return;
            }
            console.log("update user:",{id:id});
            result(null,{id:id});
        })
    }
    Users.createUser = (user, result)=>{
        sql.query ("INSERT INTO users (username,email,user_password) VALUES(?,?,?)",[user.username,user.email,user.user_password],(err, res)=>{
            if(err){
                console.log("error:", err);
                result(err,null);
                return;
            }else{
                result(null,res)
            }
        }
        )
    }


module.exports= Users;