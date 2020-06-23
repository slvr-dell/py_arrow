# py_arrow

pythonで作成したarrowデータをブラウザ側のJSで読み込むプログラム群
テスト用環境としてnode.js用のプログラムも含まれている。

## csv_to_arrow.py
pythonでdata.csvをreadしてpw.arrowに書き出す。
pandasで書き出すとint64になってしまい、jsで読み込む際に配列として扱われ
やりづらい。そのため、列の型指定をして、int32で書き出す必要あり。

## test.js
node.jsでpw.arrowを読み込んでコンソールに表示する

## table_join_test.js
arrow file を読み込んで、tableを内部結合させるためのプログラム。

## sample.html
arrowファイルを読み込んで、cesium.jsで表示するためのプログラム。
現時点ではentityを使用している。


## 注意書き
node.js環境から、ブラウザ環境で動作するようにwebpackを使用することがあるため
bundle.jsが生成物としてある。
