ff = require("fs");
aa = require("apache-arrow");

//const arrow = ff.readFileSync('./arrow-out.ipc');
//const ar_1 = ff.readFileSync('./ex.parquet');
/*
const arrow = ff.readFileSync('./pw.arrow');
const table = aa.Table.from([arrow]);
console.log(table.toString());
*/

//const table1 = aa.Table.from([ar_1]);
//console.log(table1.toString());


var adata = ff.readFileSync('./pw.arrow');
var table = aa.Table.from([adata]);
var schema = table.schema;      
var fldnames = new Array();
var result = {}

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

console.log(result)
