const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_1995 = sequelize.define("Tbl_1995",{
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
    tableName: "Tbl_1995"
});

module.exports = Tbl_1995;