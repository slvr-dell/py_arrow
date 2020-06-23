import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq


df = pd.read_csv("./data.csv")
df1 = pd.read_csv("./data1.csv")
df = df.astype({'id': "int32"})
df1 = df1.astype({'id': "int32"})
print(df)
print(df1)


table = pa.Table.from_pandas(df)
table1 = pa.Table.from_pandas(df1)


record_batch = table.to_batches()
record_batch1 = table1.to_batches()

with pa.OSFile("pw.arrow","wb") as sink:

    schema = record_batch[0].schema
    writer = pa.RecordBatchFileWriter(sink, schema)
    writer.write_batch(record_batch[0])
    writer.close()

with pa.OSFile("pw1.arrow","wb") as sink:

    schema = record_batch1[0].schema
    writer = pa.RecordBatchFileWriter(sink, schema)
    writer.write_batch(record_batch[0])
    writer.close()

'''
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
'''