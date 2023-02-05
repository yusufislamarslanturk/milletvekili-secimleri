const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_2011 = sequelize.define("Tbl_2011",{
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
    tableName: "Tbl_2011"
});

module.exports = Tbl_2011;