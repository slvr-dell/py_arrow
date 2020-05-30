"use strict"
// apache-arrow service :p

const express = require("express");
const port = 8010;
const app = express();
app.use(express.static("./public"));

// allow CrossSiteScript
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// say hello
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// arrow
app.get("/input", (req, res) => {
    const fs = require("fs");
    const aa = require("apache-arrow");
    const path = "./";
    const encoding = "binary";

    var filename = req.query.n;
    //console.log("filename: " + filename);

    // result data
    var result = [1,2];

    if(filename != undefined){
        try {
            //var adata = fs.readFileSync(path + filename);
            const table = await aa.Table.from(fetch((path + filename)))
            //var table = aa.Table.from([adata]);
            result = table
            /*
            var schema = table.schema;      
            var fldnames = new Array();
            for(var i = 0; i < schema.fields.length; i++){
                fldnames.push(schema.fields[i].name);
                result[schema.fields[i].name] = new Array();
            }
            for(var j = 0; j < fldnames.length; j++){
                var column = table.getColumn(fldnames[j]);
                for(var i = 0; i < column.length; i++){
                    result[fldnames[j]].push(column.get(i));
                    //console.log(column.get(i));
                }
            }
            */   
        } catch(ex){
            console.log(ex)
        }   
    }
    res.json(result);
});

// run service!
app.listen(port);