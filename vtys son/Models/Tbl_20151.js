const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_20151 = sequelize.define("Tbl_20151",{
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
    tableName: "Tbl_20151"
});

module.exports = Tbl_20151;