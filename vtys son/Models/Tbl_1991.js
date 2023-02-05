const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect.js");


const Tbl_1991 = sequelize.define("Tbl_1991",{
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
    tableName: "Tbl_1991"
});

module.exports = Tbl_1991;