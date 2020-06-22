aa = require("apache-arrow");
fs = require("fs")

function main(){
    const table1 = aa.Table.from(fs.readFileSync("./arrow_data/pw.arrow"));
    const table2 = aa.Table.from(fs.readFileSync("./arrow_data/pw.arrow"));
    console.log(table1.get(0).toString());
    var res = inner_join(table1,table2,"bar")   
    console.log(res)
    var foo = table1.concat(table2)
    console.log(foo.toArray())
    mx = foo.numCols
    for(let i = 0;i<mx;i++){
        console.log(foo.schema.fields[i].name)
    }
    
}

main();

function inner_join(table1,table2,key){
    //table1,2はarrowのtableを想定。keyは結合に使う列名
    table1_key_col = table1.getColumn(key).toArray()
    table2_key_col = table2.getColumn(key).toArray()

    const table1_key_col_set = new Set(table1_key_col);
    const table2_key_col_set = new Set(table2_key_col);
    var intersection = new Set()

    for (let i of table1_key_col_set){
        if(table2_key_col_set.has(i)){
            intersection.add(i)
        }
    }
    //console.log(intersection)
    cnt = 0
    table1_and = {}

    while (table1.get(cnt)){
        iid = table1.getColumn(key).toArray()[cnt]
        //console.log(iid)
        if(intersection.has(iid)){
            console.log("hi")
            data = table1.get(cnt).toArray()
            table1_and[iid] = data
            
        }
        cnt += 1
    }
    cnt = 0
    table2_and = {}

    while (table2.get(cnt)){
        iid = table2.getColumn(key).toArray()[cnt]
        if(intersection.has(iid)){
            data = table2.get(cnt).toArray()
            table2_and[iid] = data
        }
        cnt += 1
    }
    ans = []
    //console.log(table1_and)

    for (let i of intersection){
        var ar1 = table1_and[i]
        var ar2 = table2_and[i]
        //console.log(ar1)
        var ar_new = ar1.concat(ar2)
        ans.push(ar_new)
    }
    return ans
}