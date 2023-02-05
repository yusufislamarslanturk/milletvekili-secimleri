const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_2007 = sequelize.define("Tbl_2007",{
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
    tableName: "Tbl_2007"
});

module.exports = Tbl_2007;