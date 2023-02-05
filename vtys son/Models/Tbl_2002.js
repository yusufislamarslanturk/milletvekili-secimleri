const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_2002 = sequelize.define("Tbl_2002",{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    iller:{
        type: DataTypes.STRING,
        allowNull: true,

    },
    partiler:{
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    mvsayilari:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
    
},{
    tableName: "Tbl_2002"
});

module.exports = Tbl_2002;