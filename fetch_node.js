aa = require("apache-arrow");

async function main(){
    const table = await aa.Table.from(fetch(("./pw.arrow")));
    console.log(table.get(0).toString());
}

main();