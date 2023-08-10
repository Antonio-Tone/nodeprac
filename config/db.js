require('dotenv').config();
module.exports ={
    HOST: process.env.dbHost,
    USER: process.env.dbUser,
    PASSWORD: process.env.dbPassword,
    PORT: process.env.dbPort,
    DATABASE: process.env.dbName,
    multipleStatements:true
};