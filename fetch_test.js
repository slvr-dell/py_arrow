worker = perspective.worker();
table = worker.Table.from(fetch(("./pw.arrow")));
ss = table.toArray()
console.log(ss);
