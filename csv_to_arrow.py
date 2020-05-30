import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq


df = pd.read_csv("./data.csv")
print(df)

table = pa.Table.from_pandas(df)
print(type(table))

record_batch = table.to_batches()

with pa.OSFile("pw.arrow","wb") as sink:

    schema = record_batch[0].schema
    writer = pa.RecordBatchFileWriter(sink, schema)
    writer.write_batch(record_batch[0])
    writer.close()

table1 = pa.RecordBatch.from_pandas(df)    
with open("./arrow-out.ipc", 'wb') as f:
    writer = pa.ipc.RecordBatchFileWriter(f, table1.schema)
    writer.write_batch(table1)
    writer.close()

pq.write_table(table,"exm.parquet")#外部の静的ファイルに書き出し

table2 = pq.read_table('exm.parquet')#書き出したファイルを読み込む

table3 = table2.to_pandas()
print(type(table2))
print(type(table3))
