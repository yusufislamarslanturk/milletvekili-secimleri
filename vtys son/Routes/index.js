const express = require('express');
const { NText } = require('mssql');
const index = express.Router()
const Tbl_1991 = require("../Models/Tbl_1991");
const Tbl_1995 = require("../Models/Tbl_1995");
const Tbl_1999 = require("../Models/Tbl_1999");
const Tbl_2002 = require("../Models/Tbl_2002");
const Tbl_2007 = require("../Models/Tbl_2007");
const Tbl_2011 = require("../Models/Tbl_2011");
const Tbl_2018 = require("../Models/Tbl_2018");
const Tbl_20151 = require("../Models/Tbl_20151");
const Tbl_20157 = require("../Models/Tbl_20157");




index.get('/', (req, res) => {
    res.redirect("/1991");
});



index.get('/:yil', (req, res) => {
    const yil = req.params.yil;
    res.render("index", { yil: yil });
});



index.get('/:yil/:sehir', async (req, res) => {

    const yil = req.params.yil;
    const sehir = req.params.sehir;
    if (yil === "1991") {
        const data = await Tbl_1991.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
        console.log(data);
    }
    else if (yil === "1995") {
        const data = await Tbl_1995.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    }
    else if (yil === "1999") {
        const data = await Tbl_1999.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    }
    else if (yil === "2002") {
        const data = await Tbl_2002.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    } else if (yil === "2007") {
        const data = await Tbl_2007.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    } else if (yil === "2011") {
        const data = await Tbl_2011.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    } else if (yil === "20151") {
        const data = await Tbl_20151.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    } else if (yil === "20157") {
        const data = await Tbl_20157.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    } else if (yil === "2018") {
        const data = await Tbl_2018.findAll({ where: { iller: sehir } });
        res.render("sehir", { yil: yil, sehir: data });
    }
    else { res.send("SEHIR VERISI YOK"); }


});




module.exports = index;