const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('webmv', 'postgres' ,'admin',{
    host: 'localhost',
    dialect: 'postgres'
  });

sequelize.authenticate()  // DB CONNECTION TEST
.then(()=>console.log("DB Connected Succesfully.")).catch(err => console.log("DB Connection Error: " + err));

module.exports = sequelize;