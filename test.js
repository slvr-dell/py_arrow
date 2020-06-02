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

console.log(table.get(0).toString());
console.log(table.get(1).toString());
var s = table.getColumn('bar').toArray()
var ss = table.getColumnAt(1).toArray()
//intだけで構成されたカラムを読むと間に0が挟まるのはなぜ？

const LENGTH = 3;

const rainAmounts = Float32Array.from(
  { length: LENGTH },
  () => 1.2);

const rainDates = Int32Array.from(
  { length: LENGTH },
  () => 1);

const rainfall = aa.Table.new(
  [aa.FloatVector.from(rainAmounts), aa.IntVector.from(rainDates)],
  ['real', 'int']
);
var xx = rainfall.getColumn("int").toArray();
console.log(xx);
var ss2 = table.toArray();
console.log(s);
console.log(ss);
console.log(ss2);
//console.log(table.get(2).toString());
console.log(schema.fields.length);
for(var i = 0; i < schema.fields.length; i++){
    console.log(schema.fields[i].name)
    fldnames.push(schema.fields[i].name);
    result[schema.fields[i].name] = new Array();
}
console.log(result)
for(var j = 0; j < fldnames.length; j++){
    var column = table.getColumn(fldnames[j]);
    console.log("-----");
    for(var i = 0; i < column.length; i++){
        result[fldnames[j]].push(column.get(i));
        console.log(column.get(i));
    }
} 

console.log(result)
