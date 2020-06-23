aa = require("apache-arrow");
fs = require("fs")

function main(){
    const table1 = aa.Table.from(fs.readFileSync("./arrow_data/pw.arrow"));
    const table2 = aa.Table.from(fs.readFileSync("./arrow_data/pw.arrow"));
    console.log(table1.get(0).toString());
    var res = inner_join(table1,table2,"bar")   
    console.log(res)   
}

main();


function intersection_for_list(lst1,lst2){
    //in(list型、list型)　out (set型)
    const set1 = new Set(lst1);
    const set2 = new Set(lst2);
    var intersection = new Set()

    for (let i of set1){
        if(set2.has(i)){
            intersection.add(i)
        }
    }
    return intersection
}

function inner_join(table1,table2,key){
    //table1,2はarrowのtableを想定。keyは結合に使う列名
    table1_key_col = table1.getColumn(key).toArray()
    table2_key_col = table2.getColumn(key).toArray()
    var intersection_id = intersection_for_list(table1_key_col,table2_key_col)

    name_list_table1 = []
    name_list_table2 = []

    for(let i = 0; i<table1.numCols; i++){
        name_list_table1.push(table1.schema.fields[i].name)
    }

    for(let i = 0; i<table2.numCols; i++){
        name_list_table2.push(table2.schema.fields[i].name)
    }

    console.log(name_list_table2)

    var intersection_colname = intersection_for_list(name_list_table1,name_list_table2)
    console.log("-------")
    console.log(intersection_colname)
    cnt = 0
    table1_and = {}

    while (table1.get(cnt)){
        iid = table1.getColumn(key).toArray()[cnt]
        //console.log(iid)
        if(intersection_id.has(iid)){
            data = table1.get(cnt).toArray()
            table1_and[iid] = data
            
        }
        cnt += 1
    }
    cnt = 0
    table2_and = {}
    console.log("jjjjjj")
    var ignore_list = []
    for (let colname of intersection_colname){
        ignore_list.push(table2.getColumnIndex(colname))
    }
    
    while (table2.get(cnt)){
        iid = table2.getColumn(key).toArray()[cnt]
        if(intersection_id.has(iid)){
            data = table2.get(cnt).toArray()
            for (let j of ignore_list){
                delete data[j]
            }
            const x_data = data.filter(v => v)
            table2_and[iid] = x_data
        }
        cnt += 1
    }
    ans = []
    //console.log(table1_and)

    for (let i of intersection_id){
        var ar1 = table1_and[i]
        var ar2 = table2_and[i]
        //console.log(ar1)
        var ar_new = ar1.concat(ar2)
        ans.push(ar_new)
    }
    return ans
}