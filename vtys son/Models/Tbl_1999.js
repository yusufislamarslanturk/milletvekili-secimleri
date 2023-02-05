const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_1999 = sequelize.define("Tbl_1999",{
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
    tableName: "Tbl_1999"
});

module.exports = Tbl_1999;