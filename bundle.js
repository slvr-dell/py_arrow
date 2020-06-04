/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./foo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./foo.js":
/*!****************!*\
  !*** ./foo.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

aa = __webpack_require__(/*! apache-arrow */ "./node_modules/apache-arrow/Arrow.dom.mjs");

async function main(){
    const table = await aa.Table.from(fetch(("./pw.arrow")));
    console.log(table.get(0).toString());
}

main();

/***/ }),

/***/ "./node_modules/apache-arrow/Arrow.dom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/Arrow.dom.mjs ***!
  \*************************************************/
/*! exports provided: ArrowType, DateUnit, IntervalUnit, MessageHeader, MetadataVersion, Precision, TimeUnit, Type, UnionMode, BufferType, Data, DataType, Null, Bool, Int, Int8, Int16, Int32, Int64, Uint8, Uint16, Uint32, Uint64, Float, Float16, Float32, Float64, Utf8, Binary, FixedSizeBinary, Date_, DateDay, DateMillisecond, Timestamp, TimestampSecond, TimestampMillisecond, TimestampMicrosecond, TimestampNanosecond, Time, TimeSecond, TimeMillisecond, TimeMicrosecond, TimeNanosecond, Decimal, List, Struct, Union, DenseUnion, SparseUnion, Dictionary, Interval, IntervalDayTime, IntervalYearMonth, FixedSizeList, Map_, Table, Column, Schema, Field, Visitor, Vector, BaseVector, BinaryVector, BoolVector, Chunked, DateVector, DateDayVector, DateMillisecondVector, DecimalVector, DictionaryVector, FixedSizeBinaryVector, FixedSizeListVector, FloatVector, Float16Vector, Float32Vector, Float64Vector, IntervalVector, IntervalDayTimeVector, IntervalYearMonthVector, IntVector, Int8Vector, Int16Vector, Int32Vector, Int64Vector, Uint8Vector, Uint16Vector, Uint32Vector, Uint64Vector, ListVector, MapVector, NullVector, StructVector, TimestampVector, TimestampSecondVector, TimestampMillisecondVector, TimestampMicrosecondVector, TimestampNanosecondVector, TimeVector, TimeSecondVector, TimeMillisecondVector, TimeMicrosecondVector, TimeNanosecondVector, UnionVector, DenseUnionVector, SparseUnionVector, Utf8Vector, ByteStream, AsyncByteStream, AsyncByteQueue, RecordBatchReader, RecordBatchFileReader, RecordBatchStreamReader, AsyncRecordBatchFileReader, AsyncRecordBatchStreamReader, RecordBatchWriter, RecordBatchFileWriter, RecordBatchStreamWriter, RecordBatchJSONWriter, MessageReader, AsyncMessageReader, JSONMessageReader, Message, RecordBatch, DataFrame, FilteredDataFrame, CountByResult, predicate, util, Builder, BinaryBuilder, BoolBuilder, DateBuilder, DateDayBuilder, DateMillisecondBuilder, DecimalBuilder, DictionaryBuilder, FixedSizeBinaryBuilder, FixedSizeListBuilder, FloatBuilder, Float16Builder, Float32Builder, Float64Builder, IntervalBuilder, IntervalDayTimeBuilder, IntervalYearMonthBuilder, IntBuilder, Int8Builder, Int16Builder, Int32Builder, Int64Builder, Uint8Builder, Uint16Builder, Uint32Builder, Uint64Builder, ListBuilder, MapBuilder, NullBuilder, StructBuilder, TimestampBuilder, TimestampSecondBuilder, TimestampMillisecondBuilder, TimestampMicrosecondBuilder, TimestampNanosecondBuilder, TimeBuilder, TimeSecondBuilder, TimeMillisecondBuilder, TimeMicrosecondBuilder, TimeNanosecondBuilder, UnionBuilder, DenseUnionBuilder, SparseUnionBuilder, Utf8Builder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _io_adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io/adapters */ "./node_modules/apache-arrow/io/adapters.mjs");
/* harmony import */ var _builder_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder/index */ "./node_modules/apache-arrow/builder/index.mjs");
/* harmony import */ var _ipc_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipc/reader */ "./node_modules/apache-arrow/ipc/reader.mjs");
/* harmony import */ var _ipc_writer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ipc/writer */ "./node_modules/apache-arrow/ipc/writer.mjs");
/* harmony import */ var _io_whatwg_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./io/whatwg/iterable */ "./node_modules/apache-arrow/io/whatwg/iterable.mjs");
/* harmony import */ var _io_whatwg_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./io/whatwg/builder */ "./node_modules/apache-arrow/io/whatwg/builder.mjs");
/* harmony import */ var _io_whatwg_reader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./io/whatwg/reader */ "./node_modules/apache-arrow/io/whatwg/reader.mjs");
/* harmony import */ var _io_whatwg_writer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./io/whatwg/writer */ "./node_modules/apache-arrow/io/whatwg/writer.mjs");
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Arrow */ "./node_modules/apache-arrow/Arrow.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowType", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["ArrowType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateUnit", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalUnit", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["MessageHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataVersion", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["MetadataVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Precision", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Precision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeUnit", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionMode", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["UnionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BufferType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Data"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Null", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Null"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bool", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Bool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Utf8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Binary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinary", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date_", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Date_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDay", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampSecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMicrosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampNanosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeSecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMicrosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecond", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeNanosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decimal", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Decimal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Struct", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Struct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Union", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnion", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DenseUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnion", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["SparseUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Dictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Interval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTime", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalDayTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonth", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalYearMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map_", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Map_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Column"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Visitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BaseVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BinaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BoolVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chunked", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Chunked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateDayVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DecimalVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DictionaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeListVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FloatVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalDayTimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalYearMonthVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["ListVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["MapVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["NullVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["StructVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampNanosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeNanosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["UnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DenseUnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionVector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["SparseUnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Vector", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Utf8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ByteStream", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["ByteStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncByteStream", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["AsyncByteStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncByteQueue", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["AsyncByteQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchFileReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchStreamReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchFileReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["AsyncRecordBatchFileReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchStreamReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["AsyncRecordBatchStreamReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchWriter", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileWriter", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchFileWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamWriter", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchStreamWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchJSONWriter", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatchJSONWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["MessageReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncMessageReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["AsyncMessageReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONMessageReader", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["JSONMessageReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatch", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["RecordBatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DataFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteredDataFrame", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FilteredDataFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountByResult", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["CountByResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "predicate", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["predicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BinaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["BoolBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateDayBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DateMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DecimalBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DictionaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FixedSizeListBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["FloatBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Float64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalDayTimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntervalYearMonthBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["IntBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Int64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Uint64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["ListBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["MapBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["NullBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["StructBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimestampNanosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["TimeNanosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["UnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["DenseUnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionBuilder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["SparseUnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Builder", function() { return _Arrow__WEBPACK_IMPORTED_MODULE_8__["Utf8Builder"]; });

// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.








_io_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].toDOMStream = _io_whatwg_iterable__WEBPACK_IMPORTED_MODULE_4__["toDOMStream"];
_builder_index__WEBPACK_IMPORTED_MODULE_1__["Builder"]['throughDOM'] = _io_whatwg_builder__WEBPACK_IMPORTED_MODULE_5__["builderThroughDOMStream"];
_ipc_reader__WEBPACK_IMPORTED_MODULE_2__["RecordBatchReader"]['throughDOM'] = _io_whatwg_reader__WEBPACK_IMPORTED_MODULE_6__["recordBatchReaderThroughDOMStream"];
_ipc_writer__WEBPACK_IMPORTED_MODULE_3__["RecordBatchWriter"]['throughDOM'] = _io_whatwg_writer__WEBPACK_IMPORTED_MODULE_7__["recordBatchWriterThroughDOMStream"];


//# sourceMappingURL=Arrow.dom.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/Arrow.mjs":
/*!*********************************************!*\
  !*** ./node_modules/apache-arrow/Arrow.mjs ***!
  \*********************************************/
/*! exports provided: ArrowType, DateUnit, IntervalUnit, MessageHeader, MetadataVersion, Precision, TimeUnit, Type, UnionMode, BufferType, Data, DataType, Null, Bool, Int, Int8, Int16, Int32, Int64, Uint8, Uint16, Uint32, Uint64, Float, Float16, Float32, Float64, Utf8, Binary, FixedSizeBinary, Date_, DateDay, DateMillisecond, Timestamp, TimestampSecond, TimestampMillisecond, TimestampMicrosecond, TimestampNanosecond, Time, TimeSecond, TimeMillisecond, TimeMicrosecond, TimeNanosecond, Decimal, List, Struct, Union, DenseUnion, SparseUnion, Dictionary, Interval, IntervalDayTime, IntervalYearMonth, FixedSizeList, Map_, Table, Column, Visitor, Schema, Field, Vector, BaseVector, BinaryVector, BoolVector, Chunked, DateVector, DateDayVector, DateMillisecondVector, DecimalVector, DictionaryVector, FixedSizeBinaryVector, FixedSizeListVector, FloatVector, Float16Vector, Float32Vector, Float64Vector, IntervalVector, IntervalDayTimeVector, IntervalYearMonthVector, IntVector, Int8Vector, Int16Vector, Int32Vector, Int64Vector, Uint8Vector, Uint16Vector, Uint32Vector, Uint64Vector, ListVector, MapVector, NullVector, StructVector, TimestampVector, TimestampSecondVector, TimestampMillisecondVector, TimestampMicrosecondVector, TimestampNanosecondVector, TimeVector, TimeSecondVector, TimeMillisecondVector, TimeMicrosecondVector, TimeNanosecondVector, UnionVector, DenseUnionVector, SparseUnionVector, Utf8Vector, Builder, BinaryBuilder, BoolBuilder, DateBuilder, DateDayBuilder, DateMillisecondBuilder, DecimalBuilder, DictionaryBuilder, FixedSizeBinaryBuilder, FixedSizeListBuilder, FloatBuilder, Float16Builder, Float32Builder, Float64Builder, IntervalBuilder, IntervalDayTimeBuilder, IntervalYearMonthBuilder, IntBuilder, Int8Builder, Int16Builder, Int32Builder, Int64Builder, Uint8Builder, Uint16Builder, Uint32Builder, Uint64Builder, ListBuilder, MapBuilder, NullBuilder, StructBuilder, TimestampBuilder, TimestampSecondBuilder, TimestampMillisecondBuilder, TimestampMicrosecondBuilder, TimestampNanosecondBuilder, TimeBuilder, TimeSecondBuilder, TimeMillisecondBuilder, TimeMicrosecondBuilder, TimeNanosecondBuilder, UnionBuilder, DenseUnionBuilder, SparseUnionBuilder, Utf8Builder, ByteStream, AsyncByteStream, AsyncByteQueue, RecordBatchReader, RecordBatchFileReader, RecordBatchStreamReader, AsyncRecordBatchFileReader, AsyncRecordBatchStreamReader, RecordBatchWriter, RecordBatchFileWriter, RecordBatchStreamWriter, RecordBatchJSONWriter, MessageReader, AsyncMessageReader, JSONMessageReader, Message, RecordBatch, DataFrame, FilteredDataFrame, CountByResult, predicate, util */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return util; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowType", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["ArrowType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateUnit", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["DateUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalUnit", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["IntervalUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetadataVersion", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["MetadataVersion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Precision", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["Precision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeUnit", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["TimeUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionMode", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["UnionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return _enum__WEBPACK_IMPORTED_MODULE_0__["BufferType"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./node_modules/apache-arrow/data.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return _data__WEBPACK_IMPORTED_MODULE_1__["Data"]; });

/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["DataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Null", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Null"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bool", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Bool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Int"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Int8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Int16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Int32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Int64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Uint8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Uint16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Uint32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Uint64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Float"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Float16"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Float32"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Float64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Utf8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Binary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinary", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["FixedSizeBinary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date_", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Date_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDay", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["DateDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["DateMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Timestamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimestampSecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimestampMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimestampMicrosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimestampNanosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimeSecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimeMillisecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimeMicrosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecond", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["TimeNanosecond"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decimal", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Decimal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Struct", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Struct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Union", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnion", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["DenseUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnion", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["SparseUnion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Interval"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTime", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["IntervalDayTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonth", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["IntervalYearMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["FixedSizeList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map_", function() { return _type__WEBPACK_IMPORTED_MODULE_2__["Map_"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./node_modules/apache-arrow/table.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_3__["Table"]; });

/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column */ "./node_modules/apache-arrow/column.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _column__WEBPACK_IMPORTED_MODULE_4__["Column"]; });

/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return _visitor__WEBPACK_IMPORTED_MODULE_5__["Visitor"]; });

/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return _schema__WEBPACK_IMPORTED_MODULE_6__["Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _schema__WEBPACK_IMPORTED_MODULE_6__["Field"]; });

/* harmony import */ var _vector_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vector/index */ "./node_modules/apache-arrow/vector/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["BaseVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["BinaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["BoolVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chunked", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Chunked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DateVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DateDayVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DateMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DecimalVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DictionaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["FixedSizeBinaryVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["FixedSizeListVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["FloatVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Float16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Float32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Float64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["IntervalVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["IntervalDayTimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["IntervalYearMonthVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["IntVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Int8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Int16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Int32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Int64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Uint8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Uint16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Uint32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Uint64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["ListVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["MapVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["NullVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["StructVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimestampVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimestampSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimestampMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimestampMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimestampNanosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimeSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimeMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimeMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["TimeNanosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["UnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["DenseUnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionVector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["SparseUnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Vector", function() { return _vector_index__WEBPACK_IMPORTED_MODULE_7__["Utf8Vector"]; });

/* harmony import */ var _builder_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./builder/index */ "./node_modules/apache-arrow/builder/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["BinaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["BoolBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DateDayBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DateMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DecimalBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DictionaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinaryBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["FixedSizeListBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["FloatBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Float16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Float32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Float64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["IntervalBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["IntervalDayTimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["IntervalYearMonthBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["IntBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Int8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Int16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Int32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Int64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Uint8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Uint16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Uint32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Uint64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["ListBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["MapBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["NullBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["StructBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimestampBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimestampSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimestampMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimestampMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimestampNanosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimeSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimeMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimeMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["TimeNanosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["UnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["DenseUnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionBuilder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["SparseUnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Builder", function() { return _builder_index__WEBPACK_IMPORTED_MODULE_8__["Utf8Builder"]; });

/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ByteStream", function() { return _io_stream__WEBPACK_IMPORTED_MODULE_9__["ByteStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncByteStream", function() { return _io_stream__WEBPACK_IMPORTED_MODULE_9__["AsyncByteStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncByteQueue", function() { return _io_stream__WEBPACK_IMPORTED_MODULE_9__["AsyncByteQueue"]; });

/* harmony import */ var _ipc_reader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ipc/reader */ "./node_modules/apache-arrow/ipc/reader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchReader", function() { return _ipc_reader__WEBPACK_IMPORTED_MODULE_10__["RecordBatchReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileReader", function() { return _ipc_reader__WEBPACK_IMPORTED_MODULE_10__["RecordBatchFileReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamReader", function() { return _ipc_reader__WEBPACK_IMPORTED_MODULE_10__["RecordBatchStreamReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchFileReader", function() { return _ipc_reader__WEBPACK_IMPORTED_MODULE_10__["AsyncRecordBatchFileReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchStreamReader", function() { return _ipc_reader__WEBPACK_IMPORTED_MODULE_10__["AsyncRecordBatchStreamReader"]; });

/* harmony import */ var _ipc_writer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ipc/writer */ "./node_modules/apache-arrow/ipc/writer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchWriter", function() { return _ipc_writer__WEBPACK_IMPORTED_MODULE_11__["RecordBatchWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileWriter", function() { return _ipc_writer__WEBPACK_IMPORTED_MODULE_11__["RecordBatchFileWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamWriter", function() { return _ipc_writer__WEBPACK_IMPORTED_MODULE_11__["RecordBatchStreamWriter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatchJSONWriter", function() { return _ipc_writer__WEBPACK_IMPORTED_MODULE_11__["RecordBatchJSONWriter"]; });

/* harmony import */ var _ipc_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ipc/message */ "./node_modules/apache-arrow/ipc/message.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageReader", function() { return _ipc_message__WEBPACK_IMPORTED_MODULE_12__["MessageReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncMessageReader", function() { return _ipc_message__WEBPACK_IMPORTED_MODULE_12__["AsyncMessageReader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSONMessageReader", function() { return _ipc_message__WEBPACK_IMPORTED_MODULE_12__["JSONMessageReader"]; });

/* harmony import */ var _ipc_metadata_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ipc/metadata/message */ "./node_modules/apache-arrow/ipc/metadata/message.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _ipc_metadata_message__WEBPACK_IMPORTED_MODULE_13__["Message"]; });

/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecordBatch", function() { return _recordbatch__WEBPACK_IMPORTED_MODULE_14__["RecordBatch"]; });

/* harmony import */ var _compute_dataframe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compute/dataframe */ "./node_modules/apache-arrow/compute/dataframe.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return _compute_dataframe__WEBPACK_IMPORTED_MODULE_15__["DataFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteredDataFrame", function() { return _compute_dataframe__WEBPACK_IMPORTED_MODULE_15__["FilteredDataFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountByResult", function() { return _compute_dataframe__WEBPACK_IMPORTED_MODULE_15__["CountByResult"]; });

/* harmony import */ var _util_bn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/bn */ "./node_modules/apache-arrow/util/bn.mjs");
/* harmony import */ var _util_int__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/int */ "./node_modules/apache-arrow/util/int.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./util/math */ "./node_modules/apache-arrow/util/math.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/vector */ "./node_modules/apache-arrow/util/vector.mjs");
/* harmony import */ var _compute_predicate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./compute/predicate */ "./node_modules/apache-arrow/compute/predicate.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "predicate", function() { return _compute_predicate__WEBPACK_IMPORTED_MODULE_22__; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
























/** @ignore */
const util = {
    ..._util_bn__WEBPACK_IMPORTED_MODULE_16__,
    ..._util_int__WEBPACK_IMPORTED_MODULE_17__,
    ..._util_bit__WEBPACK_IMPORTED_MODULE_18__,
    ..._util_math__WEBPACK_IMPORTED_MODULE_19__,
    ..._util_buffer__WEBPACK_IMPORTED_MODULE_20__,
    ..._util_vector__WEBPACK_IMPORTED_MODULE_21__
};

//# sourceMappingURL=Arrow.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/builder.mjs ***!
  \***********************************************/
/*! exports provided: Builder, FixedWidthBuilder, VariableWidthBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedWidthBuilder", function() { return FixedWidthBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableWidthBuilder", function() { return VariableWidthBuilder; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _builder_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder/valid */ "./node_modules/apache-arrow/builder/valid.mjs");
/* harmony import */ var _builder_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builder/buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.






/**
 * An abstract base class for types that construct Arrow Vectors from arbitrary JavaScript values.
 *
 * A `Builder` is responsible for writing arbitrary JavaScript values
 * to ArrayBuffers and/or child Builders according to the Arrow specification
 * for each DataType, creating or resizing the underlying ArrayBuffers as necessary.
 *
 * The `Builder` for each Arrow `DataType` handles converting and appending
 * values for a given `DataType`. The high-level {@link Builder.new `Builder.new()`} convenience
 * method creates the specific `Builder` subclass for the supplied `DataType`.
 *
 * Once created, `Builder` instances support both appending values to the end
 * of the `Builder`, and random-access writes to specific indices
 * (`Builder.prototype.append(value)` is a convenience method for
 * `builder.set(builder.length, value)`). Appending or setting values beyond the
 * Builder's current length may cause the builder to grow its underlying buffers
 * or child Builders (if applicable) to accommodate the new values.
 *
 * After enough values have been written to a `Builder`, `Builder.prototype.flush()`
 * will commit the values to the underlying ArrayBuffers (or child Builders). The
 * internal Builder state will be reset, and an instance of `Data<T>` is returned.
 * Alternatively, `Builder.prototype.toVector()` will flush the `Builder` and return
 * an instance of `Vector<T>` instead.
 *
 * When there are no more values to write, use `Builder.prototype.finish()` to
 * finalize the `Builder`. This does not reset the internal state, so it is
 * necessary to call `Builder.prototype.flush()` or `toVector()` one last time
 * if there are still values queued to be flushed.
 *
 * Note: calling `Builder.prototype.finish()` is required when using a `DictionaryBuilder`,
 * because this is when it flushes the values that have been enqueued in its internal
 * dictionary's `Builder`, and creates the `dictionaryVector` for the `Dictionary` `DataType`.
 *
 * ```ts
 * import { Builder, Utf8 } from 'apache-arrow';
 *
 * const utf8Builder = Builder.new({
 *     type: new Utf8(),
 *     nullValues: [null, 'n/a']
 * });
 *
 * utf8Builder
 *     .append('hello')
 *     .append('n/a')
 *     .append('world')
 *     .append(null);
 *
 * const utf8Vector = utf8Builder.finish().toVector();
 *
 * console.log(utf8Vector.toJSON());
 * // > ["hello", null, "world", null]
 * ```
 *
 * @typeparam T The `DataType` of this `Builder`.
 * @typeparam TNull The type(s) of values which will be considered null-value sentinels.
 */
class Builder {
    /**
     * Construct a builder with the given Arrow DataType with optional null values,
     * which will be interpreted as "null" when set or appended to the `Builder`.
     * @param {{ type: T, nullValues?: any[] }} options A `BuilderOptions` object used to create this `Builder`.
     */
    constructor({ 'type': type, 'nullValues': nulls }) {
        /**
         * The number of values written to the `Builder` that haven't been flushed yet.
         * @readonly
         */
        this.length = 0;
        /**
         * A boolean indicating whether `Builder.prototype.finish()` has been called on this `Builder`.
         * @readonly
         */
        this.finished = false;
        this.type = type;
        this.children = [];
        this.nullValues = nulls;
        this.stride = Object(_type__WEBPACK_IMPORTED_MODULE_5__["strideForType"])(type);
        this._nulls = new _builder_buffer__WEBPACK_IMPORTED_MODULE_4__["BitmapBufferBuilder"]();
        if (nulls && nulls.length > 0) {
            this._isValid = Object(_builder_valid__WEBPACK_IMPORTED_MODULE_3__["createIsValidFunction"])(nulls);
        }
    }
    /**
     * Create a `Builder` instance based on the `type` property of the supplied `options` object.
     * @param {BuilderOptions<T, TNull>} options An object with a required `DataType` instance
     * and other optional parameters to be passed to the `Builder` subclass for the given `type`.
     *
     * @typeparam T The `DataType` of the `Builder` to create.
     * @typeparam TNull The type(s) of values which will be considered null-value sentinels.
     * @nocollapse
     */
    // @ts-ignore
    static new(options) { }
    /** @nocollapse */
    // @ts-ignore
    static throughNode(options) {
        throw new Error(`"throughNode" not available in this environment`);
    }
    /** @nocollapse */
    // @ts-ignore
    static throughDOM(options) {
        throw new Error(`"throughDOM" not available in this environment`);
    }
    /**
     * Transform a synchronous `Iterable` of arbitrary JavaScript values into a
     * sequence of Arrow Vector<T> following the chunking semantics defined in
     * the supplied `options` argument.
     *
     * This function returns a function that accepts an `Iterable` of values to
     * transform. When called, this function returns an Iterator of `Vector<T>`.
     *
     * The resulting `Iterator<Vector<T>>` yields Vectors based on the
     * `queueingStrategy` and `highWaterMark` specified in the `options` argument.
     *
     * * If `queueingStrategy` is `"count"` (or omitted), The `Iterator<Vector<T>>`
     *   will flush the underlying `Builder` (and yield a new `Vector<T>`) once the
     *   Builder's `length` reaches or exceeds the supplied `highWaterMark`.
     * * If `queueingStrategy` is `"bytes"`, the `Iterator<Vector<T>>` will flush
     *   the underlying `Builder` (and yield a new `Vector<T>`) once its `byteLength`
     *   reaches or exceeds the supplied `highWaterMark`.
     *
     * @param {IterableBuilderOptions<T, TNull>} options An object of properties which determine the `Builder` to create and the chunking semantics to use.
     * @returns A function which accepts a JavaScript `Iterable` of values to
     *          write, and returns an `Iterator` that yields Vectors according
     *          to the chunking semantics defined in the `options` argument.
     * @nocollapse
     */
    static throughIterable(options) {
        return throughIterable(options);
    }
    /**
     * Transform an `AsyncIterable` of arbitrary JavaScript values into a
     * sequence of Arrow Vector<T> following the chunking semantics defined in
     * the supplied `options` argument.
     *
     * This function returns a function that accepts an `AsyncIterable` of values to
     * transform. When called, this function returns an AsyncIterator of `Vector<T>`.
     *
     * The resulting `AsyncIterator<Vector<T>>` yields Vectors based on the
     * `queueingStrategy` and `highWaterMark` specified in the `options` argument.
     *
     * * If `queueingStrategy` is `"count"` (or omitted), The `AsyncIterator<Vector<T>>`
     *   will flush the underlying `Builder` (and yield a new `Vector<T>`) once the
     *   Builder's `length` reaches or exceeds the supplied `highWaterMark`.
     * * If `queueingStrategy` is `"bytes"`, the `AsyncIterator<Vector<T>>` will flush
     *   the underlying `Builder` (and yield a new `Vector<T>`) once its `byteLength`
     *   reaches or exceeds the supplied `highWaterMark`.
     *
     * @param {IterableBuilderOptions<T, TNull>} options An object of properties which determine the `Builder` to create and the chunking semantics to use.
     * @returns A function which accepts a JavaScript `AsyncIterable` of values
     *          to write, and returns an `AsyncIterator` that yields Vectors
     *          according to the chunking semantics defined in the `options`
     *          argument.
     * @nocollapse
     */
    static throughAsyncIterable(options) {
        return throughAsyncIterable(options);
    }
    /**
     * Flush the `Builder` and return a `Vector<T>`.
     * @returns {Vector<T>} A `Vector<T>` of the flushed values.
     */
    toVector() { return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new(this.flush()); }
    get ArrayType() { return this.type.ArrayType; }
    get nullCount() { return this._nulls.numInvalid; }
    get numChildren() { return this.children.length; }
    /**
     * @returns The aggregate length (in bytes) of the values that have been written.
     */
    get byteLength() {
        let size = 0;
        this._offsets && (size += this._offsets.byteLength);
        this._values && (size += this._values.byteLength);
        this._nulls && (size += this._nulls.byteLength);
        this._typeIds && (size += this._typeIds.byteLength);
        return this.children.reduce((size, child) => size + child.byteLength, size);
    }
    /**
     * @returns The aggregate number of rows that have been reserved to write new values.
     */
    get reservedLength() {
        return this._nulls.reservedLength;
    }
    /**
     * @returns The aggregate length (in bytes) that has been reserved to write new values.
     */
    get reservedByteLength() {
        let size = 0;
        this._offsets && (size += this._offsets.reservedByteLength);
        this._values && (size += this._values.reservedByteLength);
        this._nulls && (size += this._nulls.reservedByteLength);
        this._typeIds && (size += this._typeIds.reservedByteLength);
        return this.children.reduce((size, child) => size + child.reservedByteLength, size);
    }
    get valueOffsets() { return this._offsets ? this._offsets.buffer : null; }
    get values() { return this._values ? this._values.buffer : null; }
    get nullBitmap() { return this._nulls ? this._nulls.buffer : null; }
    get typeIds() { return this._typeIds ? this._typeIds.buffer : null; }
    /**
     * Appends a value (or null) to this `Builder`.
     * This is equivalent to `builder.set(builder.length, value)`.
     * @param {T['TValue'] | TNull } value The value to append.
     */
    append(value) { return this.set(this.length, value); }
    /**
     * Validates whether a value is valid (true), or null (false)
     * @param {T['TValue'] | TNull } value The value to compare against null the value representations
     */
    // @ts-ignore
    isValid(value) { return this._isValid(value); }
    /**
     * Write a value (or null-value sentinel) at the supplied index.
     * If the value matches one of the null-value representations, a 1-bit is
     * written to the null `BitmapBufferBuilder`. Otherwise, a 0 is written to
     * the null `BitmapBufferBuilder`, and the value is passed to
     * `Builder.prototype.setValue()`.
     * @param {number} index The index of the value to write.
     * @param {T['TValue'] | TNull } value The value to write at the supplied index.
     * @returns {this} The updated `Builder` instance.
     */
    set(index, value) {
        if (this.setValid(index, this.isValid(value))) {
            this.setValue(index, value);
        }
        return this;
    }
    /**
     * Write a value to the underlying buffers at the supplied index, bypassing
     * the null-value check. This is a low-level method that
     * @param {number} index
     * @param {T['TValue'] | TNull } value
     */
    // @ts-ignore
    setValue(index, value) { this._setValue(this, index, value); }
    setValid(index, valid) {
        this.length = this._nulls.set(index, +valid).length;
        return valid;
    }
    // @ts-ignore
    addChild(child, name = `${this.numChildren}`) {
        throw new Error(`Cannot append children to non-nested type "${this.type}"`);
    }
    /**
     * Retrieve the child `Builder` at the supplied `index`, or null if no child
     * exists at that index.
     * @param {number} index The index of the child `Builder` to retrieve.
     * @returns {Builder | null} The child Builder at the supplied index or null.
     */
    getChildAt(index) {
        return this.children[index] || null;
    }
    /**
     * Commit all the values that have been written to their underlying
     * ArrayBuffers, including any child Builders if applicable, and reset
     * the internal `Builder` state.
     * @returns A `Data<T>` of the buffers and childData representing the values written.
     */
    flush() {
        const buffers = [];
        const values = this._values;
        const offsets = this._offsets;
        const typeIds = this._typeIds;
        const { length, nullCount } = this;
        if (typeIds) { /* Unions */
            buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].TYPE] = typeIds.flush(length);
            // DenseUnions
            offsets && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] = offsets.flush(length));
        }
        else if (offsets) { /* Variable-width primitives (Binary, Utf8) and Lists */
            // Binary, Utf8
            values && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] = values.flush(offsets.last()));
            buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] = offsets.flush(length);
        }
        else if (values) { /* Fixed-width primitives (Int, Float, Decimal, Time, Timestamp, and Interval) */
            buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] = values.flush(length);
        }
        nullCount > 0 && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY] = this._nulls.flush(length));
        const data = _data__WEBPACK_IMPORTED_MODULE_2__["Data"].new(this.type, 0, length, nullCount, buffers, this.children.map((child) => child.flush()));
        this.clear();
        return data;
    }
    /**
     * Finalize this `Builder`, and child builders if applicable.
     * @returns {this} The finalized `Builder` instance.
     */
    finish() {
        this.finished = true;
        this.children.forEach((child) => child.finish());
        return this;
    }
    /**
     * Clear this Builder's internal state, including child Builders if applicable, and reset the length to 0.
     * @returns {this} The cleared `Builder` instance.
     */
    clear() {
        this.length = 0;
        this._offsets && (this._offsets.clear());
        this._values && (this._values.clear());
        this._nulls && (this._nulls.clear());
        this._typeIds && (this._typeIds.clear());
        this.children.forEach((child) => child.clear());
        return this;
    }
}
Builder.prototype.length = 1;
Builder.prototype.stride = 1;
Builder.prototype.children = null;
Builder.prototype.finished = false;
Builder.prototype.nullValues = null;
Builder.prototype._isValid = () => true;
/** @ignore */
class FixedWidthBuilder extends Builder {
    constructor(opts) {
        super(opts);
        this._values = new _builder_buffer__WEBPACK_IMPORTED_MODULE_4__["DataBufferBuilder"](new this.ArrayType(0), this.stride);
    }
    setValue(index, value) {
        const values = this._values;
        values.reserve(index - values.length + 1);
        return super.setValue(index, value);
    }
}
/** @ignore */
class VariableWidthBuilder extends Builder {
    constructor(opts) {
        super(opts);
        this._pendingLength = 0;
        this._offsets = new _builder_buffer__WEBPACK_IMPORTED_MODULE_4__["OffsetsBufferBuilder"]();
    }
    setValue(index, value) {
        const pending = this._pending || (this._pending = new Map());
        const current = pending.get(index);
        current && (this._pendingLength -= current.length);
        this._pendingLength += value.length;
        pending.set(index, value);
    }
    setValid(index, isValid) {
        if (!super.setValid(index, isValid)) {
            (this._pending || (this._pending = new Map())).set(index, undefined);
            return false;
        }
        return true;
    }
    clear() {
        this._pendingLength = 0;
        this._pending = undefined;
        return super.clear();
    }
    flush() {
        this._flush();
        return super.flush();
    }
    finish() {
        this._flush();
        return super.finish();
    }
    _flush() {
        const pending = this._pending;
        const pendingLength = this._pendingLength;
        this._pendingLength = 0;
        this._pending = undefined;
        if (pending && pending.size > 0) {
            this._flushPending(pending, pendingLength);
        }
        return this;
    }
}
/** @ignore */
function throughIterable(options) {
    const { ['queueingStrategy']: queueingStrategy = 'count' } = options;
    const { ['highWaterMark']: highWaterMark = queueingStrategy !== 'bytes' ? 1000 : 2 ** 14 } = options;
    const sizeProperty = queueingStrategy !== 'bytes' ? 'length' : 'byteLength';
    return function* (source) {
        let numChunks = 0;
        let builder = Builder.new(options);
        for (const value of source) {
            if (builder.append(value)[sizeProperty] >= highWaterMark) {
                ++numChunks && (yield builder.toVector());
            }
        }
        if (builder.finish().length > 0 || numChunks === 0) {
            yield builder.toVector();
        }
    };
}
/** @ignore */
function throughAsyncIterable(options) {
    const { ['queueingStrategy']: queueingStrategy = 'count' } = options;
    const { ['highWaterMark']: highWaterMark = queueingStrategy !== 'bytes' ? 1000 : 2 ** 14 } = options;
    const sizeProperty = queueingStrategy !== 'bytes' ? 'length' : 'byteLength';
    return async function* (source) {
        let numChunks = 0;
        let builder = Builder.new(options);
        for await (const value of source) {
            if (builder.append(value)[sizeProperty] >= highWaterMark) {
                ++numChunks && (yield builder.toVector());
            }
        }
        if (builder.finish().length > 0 || numChunks === 0) {
            yield builder.toVector();
        }
    };
}

//# sourceMappingURL=builder.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/binary.mjs":
/*!******************************************************!*\
  !*** ./node_modules/apache-arrow/builder/binary.mjs ***!
  \******************************************************/
/*! exports provided: BinaryBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryBuilder", function() { return BinaryBuilder; });
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class BinaryBuilder extends _builder__WEBPACK_IMPORTED_MODULE_2__["VariableWidthBuilder"] {
    constructor(opts) {
        super(opts);
        this._values = new _buffer__WEBPACK_IMPORTED_MODULE_1__["BufferBuilder"](new Uint8Array(0));
    }
    get byteLength() {
        let size = this._pendingLength + (this.length * 4);
        this._offsets && (size += this._offsets.byteLength);
        this._values && (size += this._values.byteLength);
        this._nulls && (size += this._nulls.byteLength);
        return size;
    }
    setValue(index, value) {
        return super.setValue(index, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(value));
    }
    _flushPending(pending, pendingLength) {
        const offsets = this._offsets;
        const data = this._values.reserve(pendingLength).buffer;
        let index = 0, length = 0, offset = 0, value;
        for ([index, value] of pending) {
            if (value === undefined) {
                offsets.set(index, 0);
            }
            else {
                length = value.length;
                data.set(value, offset);
                offsets.set(index, length);
                offset += length;
            }
        }
    }
}

//# sourceMappingURL=binary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/bool.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/bool.mjs ***!
  \****************************************************/
/*! exports provided: BoolBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolBuilder", function() { return BoolBuilder; });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
class BoolBuilder extends _builder__WEBPACK_IMPORTED_MODULE_1__["Builder"] {
    constructor(options) {
        super(options);
        this._values = new _buffer__WEBPACK_IMPORTED_MODULE_0__["BitmapBufferBuilder"]();
    }
    setValue(index, value) {
        this._values.set(index, +value);
    }
}

//# sourceMappingURL=bool.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/buffer.mjs":
/*!******************************************************!*\
  !*** ./node_modules/apache-arrow/builder/buffer.mjs ***!
  \******************************************************/
/*! exports provided: BufferBuilder, DataBufferBuilder, BitmapBufferBuilder, OffsetsBufferBuilder, WideBufferBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferBuilder", function() { return BufferBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBufferBuilder", function() { return DataBufferBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapBufferBuilder", function() { return BitmapBufferBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffsetsBufferBuilder", function() { return OffsetsBufferBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WideBufferBuilder", function() { return WideBufferBuilder; });
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
const roundLengthUpToNearest64Bytes = (len, BPE) => ((((len * BPE) + 63) & ~63) || 64) / BPE;
/** @ignore */
const sliceOrExtendArray = (arr, len = 0) => (arr.length >= len ? arr.subarray(0, len) : Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["memcpy"])(new arr.constructor(len), arr, 0));
/** @ignore */
class BufferBuilder {
    constructor(buffer, stride = 1) {
        this.buffer = buffer;
        this.stride = stride;
        this.BYTES_PER_ELEMENT = buffer.BYTES_PER_ELEMENT;
        this.ArrayType = buffer.constructor;
        this._resize(this.length = buffer.length / stride | 0);
    }
    get byteLength() { return this.length * this.stride * this.BYTES_PER_ELEMENT | 0; }
    get reservedLength() { return this.buffer.length / this.stride; }
    get reservedByteLength() { return this.buffer.byteLength; }
    // @ts-ignore
    set(index, value) { return this; }
    append(value) { return this.set(this.length, value); }
    reserve(extra) {
        if (extra > 0) {
            this.length += extra;
            const stride = this.stride;
            const length = this.length * stride;
            const reserved = this.buffer.length;
            if (length >= reserved) {
                this._resize(reserved === 0
                    ? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT)
                    : roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT));
            }
        }
        return this;
    }
    flush(length = this.length) {
        length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
        const array = sliceOrExtendArray(this.buffer, length);
        this.clear();
        return array;
    }
    clear() {
        this.length = 0;
        this._resize(0);
        return this;
    }
    _resize(newLength) {
        return this.buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["memcpy"])(new this.ArrayType(newLength), this.buffer);
    }
}
BufferBuilder.prototype.offset = 0;
/** @ignore */
class DataBufferBuilder extends BufferBuilder {
    last() { return this.get(this.length - 1); }
    get(index) { return this.buffer[index]; }
    set(index, value) {
        this.reserve(index - this.length + 1);
        this.buffer[index * this.stride] = value;
        return this;
    }
}
/** @ignore */
class BitmapBufferBuilder extends DataBufferBuilder {
    constructor(data = new Uint8Array(0)) {
        super(data, 1 / 8);
        this.numValid = 0;
    }
    get numInvalid() { return this.length - this.numValid; }
    get(idx) { return this.buffer[idx >> 3] >> idx % 8 & 1; }
    set(idx, val) {
        const { buffer } = this.reserve(idx - this.length + 1);
        const byte = idx >> 3, bit = idx % 8, cur = buffer[byte] >> bit & 1;
        // If `val` is truthy and the current bit is 0, flip it to 1 and increment `numValid`.
        // If `val` is falsey and the current bit is 1, flip it to 0 and decrement `numValid`.
        val ? cur === 0 && ((buffer[byte] |= (1 << bit)), ++this.numValid)
            : cur === 1 && ((buffer[byte] &= ~(1 << bit)), --this.numValid);
        return this;
    }
    clear() {
        this.numValid = 0;
        return super.clear();
    }
}
/** @ignore */
class OffsetsBufferBuilder extends DataBufferBuilder {
    constructor(data = new Int32Array(1)) { super(data, 1); }
    append(value) {
        return this.set(this.length - 1, value);
    }
    set(index, value) {
        const offset = this.length - 1;
        const buffer = this.reserve(index - offset + 1).buffer;
        if (offset < index++) {
            buffer.fill(buffer[offset], offset, index);
        }
        buffer[index] = buffer[index - 1] + value;
        return this;
    }
    flush(length = this.length - 1) {
        if (length > this.length) {
            this.set(length - 1, 0);
        }
        return super.flush(length + 1);
    }
}
/** @ignore */
class WideBufferBuilder extends BufferBuilder {
    get ArrayType64() {
        return this._ArrayType64 || (this._ArrayType64 = (this.buffer instanceof Int32Array ? _util_compat__WEBPACK_IMPORTED_MODULE_1__["BigInt64Array"] : _util_compat__WEBPACK_IMPORTED_MODULE_1__["BigUint64Array"]));
    }
    set(index, value) {
        this.reserve(index - this.length + 1);
        switch (typeof value) {
            case 'bigint':
                this.buffer64[index] = value;
                break;
            case 'number':
                this.buffer[index * this.stride] = value;
                break;
            default: this.buffer.set(value, index * this.stride);
        }
        return this;
    }
    _resize(newLength) {
        const data = super._resize(newLength);
        const length = data.byteLength / (this.BYTES_PER_ELEMENT * this.stride);
        if (_util_compat__WEBPACK_IMPORTED_MODULE_1__["BigIntAvailable"]) {
            this.buffer64 = new this.ArrayType64(data.buffer, data.byteOffset, length);
        }
        return data;
    }
}

//# sourceMappingURL=buffer.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/date.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/date.mjs ***!
  \****************************************************/
/*! exports provided: DateBuilder, DateDayBuilder, DateMillisecondBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateBuilder", function() { return DateBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDayBuilder", function() { return DateDayBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondBuilder", function() { return DateMillisecondBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class DateBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}
/** @ignore */
class DateDayBuilder extends DateBuilder {
}
/** @ignore */
class DateMillisecondBuilder extends DateBuilder {
}

//# sourceMappingURL=date.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/decimal.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/apache-arrow/builder/decimal.mjs ***!
  \*******************************************************/
/*! exports provided: DecimalBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalBuilder", function() { return DecimalBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class DecimalBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}

//# sourceMappingURL=decimal.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/dictionary.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/apache-arrow/builder/dictionary.mjs ***!
  \**********************************************************/
/*! exports provided: DictionaryBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryBuilder", function() { return DictionaryBuilder; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
class DictionaryBuilder extends _builder__WEBPACK_IMPORTED_MODULE_1__["Builder"] {
    constructor({ 'type': type, 'nullValues': nulls, 'dictionaryHashFunction': hashFn }) {
        super({ type: new _type__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](type.dictionary, type.indices, type.id, type.isOrdered) });
        this._nulls = null;
        this._dictionaryOffset = 0;
        this._keysToIndices = Object.create(null);
        this.indices = _builder__WEBPACK_IMPORTED_MODULE_1__["Builder"].new({ 'type': this.type.indices, 'nullValues': nulls });
        this.dictionary = _builder__WEBPACK_IMPORTED_MODULE_1__["Builder"].new({ 'type': this.type.dictionary, 'nullValues': null });
        if (typeof hashFn === 'function') {
            this.valueToKey = hashFn;
        }
    }
    get values() { return this.indices.values; }
    get nullCount() { return this.indices.nullCount; }
    get nullBitmap() { return this.indices.nullBitmap; }
    get byteLength() { return this.indices.byteLength + this.dictionary.byteLength; }
    get reservedLength() { return this.indices.reservedLength + this.dictionary.reservedLength; }
    get reservedByteLength() { return this.indices.reservedByteLength + this.dictionary.reservedByteLength; }
    isValid(value) { return this.indices.isValid(value); }
    setValid(index, valid) {
        const indices = this.indices;
        valid = indices.setValid(index, valid);
        this.length = indices.length;
        return valid;
    }
    setValue(index, value) {
        let keysToIndices = this._keysToIndices;
        let key = this.valueToKey(value);
        let idx = keysToIndices[key];
        if (idx === undefined) {
            keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value).length - 1;
        }
        return this.indices.setValue(index, idx);
    }
    flush() {
        const type = this.type;
        const prev = this._dictionary;
        const curr = this.dictionary.toVector();
        const data = this.indices.flush().clone(type);
        data.dictionary = prev ? prev.concat(curr) : curr;
        this.finished || (this._dictionaryOffset += curr.length);
        this._dictionary = data.dictionary;
        this.clear();
        return data;
    }
    finish() {
        this.indices.finish();
        this.dictionary.finish();
        this._dictionaryOffset = 0;
        this._keysToIndices = Object.create(null);
        return super.finish();
    }
    clear() {
        this.indices.clear();
        this.dictionary.clear();
        return super.clear();
    }
    valueToKey(val) {
        return typeof val === 'string' ? val : `${val}`;
    }
}

//# sourceMappingURL=dictionary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/fixedsizebinary.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/apache-arrow/builder/fixedsizebinary.mjs ***!
  \***************************************************************/
/*! exports provided: FixedSizeBinaryBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryBuilder", function() { return FixedSizeBinaryBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class FixedSizeBinaryBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}

//# sourceMappingURL=fixedsizebinary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/fixedsizelist.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/apache-arrow/builder/fixedsizelist.mjs ***!
  \*************************************************************/
/*! exports provided: FixedSizeListBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListBuilder", function() { return FixedSizeListBuilder; });
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run */ "./node_modules/apache-arrow/builder/run.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class FixedSizeListBuilder extends _builder__WEBPACK_IMPORTED_MODULE_2__["Builder"] {
    constructor() {
        super(...arguments);
        this._run = new _run__WEBPACK_IMPORTED_MODULE_0__["Run"]();
    }
    setValue(index, value) {
        super.setValue(index, this._run.bind(value));
    }
    addChild(child, name = '0') {
        if (this.numChildren > 0) {
            throw new Error('FixedSizeListBuilder can only have one child.');
        }
        const childIndex = this.children.push(child);
        this.type = new _type__WEBPACK_IMPORTED_MODULE_3__["FixedSizeList"](this.type.listSize, new _schema__WEBPACK_IMPORTED_MODULE_1__["Field"](name, child.type, true));
        return childIndex;
    }
    clear() {
        this._run.clear();
        return super.clear();
    }
}

//# sourceMappingURL=fixedsizelist.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/float.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/float.mjs ***!
  \*****************************************************/
/*! exports provided: FloatBuilder, Float16Builder, Float32Builder, Float64Builder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatBuilder", function() { return FloatBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float16Builder", function() { return Float16Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float32Builder", function() { return Float32Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float64Builder", function() { return Float64Builder; });
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/math */ "./node_modules/apache-arrow/util/math.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
class FloatBuilder extends _builder__WEBPACK_IMPORTED_MODULE_1__["FixedWidthBuilder"] {
}
/** @ignore */
class Float16Builder extends FloatBuilder {
    setValue(index, value) {
        // convert JS float64 to a uint16
        this._values.set(index, Object(_util_math__WEBPACK_IMPORTED_MODULE_0__["float64ToUint16"])(value));
    }
}
/** @ignore */
class Float32Builder extends FloatBuilder {
    setValue(index, value) {
        this._values.set(index, value);
    }
}
/** @ignore */
class Float64Builder extends FloatBuilder {
    setValue(index, value) {
        this._values.set(index, value);
    }
}

//# sourceMappingURL=float.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/index.mjs ***!
  \*****************************************************/
/*! exports provided: Builder, BoolBuilder, NullBuilder, DateBuilder, DateDayBuilder, DateMillisecondBuilder, DecimalBuilder, DictionaryBuilder, FixedSizeBinaryBuilder, FloatBuilder, Float16Builder, Float32Builder, Float64Builder, IntBuilder, Int8Builder, Int16Builder, Int32Builder, Int64Builder, Uint8Builder, Uint16Builder, Uint32Builder, Uint64Builder, TimeBuilder, TimeSecondBuilder, TimeMillisecondBuilder, TimeMicrosecondBuilder, TimeNanosecondBuilder, TimestampBuilder, TimestampSecondBuilder, TimestampMillisecondBuilder, TimestampMicrosecondBuilder, TimestampNanosecondBuilder, IntervalBuilder, IntervalDayTimeBuilder, IntervalYearMonthBuilder, Utf8Builder, BinaryBuilder, ListBuilder, FixedSizeListBuilder, MapBuilder, StructBuilder, UnionBuilder, SparseUnionBuilder, DenseUnionBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Builder", function() { return _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"]; });

/* harmony import */ var _bool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bool */ "./node_modules/apache-arrow/builder/bool.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolBuilder", function() { return _bool__WEBPACK_IMPORTED_MODULE_1__["BoolBuilder"]; });

/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./null */ "./node_modules/apache-arrow/builder/null.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullBuilder", function() { return _null__WEBPACK_IMPORTED_MODULE_2__["NullBuilder"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ "./node_modules/apache-arrow/builder/date.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateBuilder", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["DateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayBuilder", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["DateDayBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondBuilder", function() { return _date__WEBPACK_IMPORTED_MODULE_3__["DateMillisecondBuilder"]; });

/* harmony import */ var _decimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decimal */ "./node_modules/apache-arrow/builder/decimal.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalBuilder", function() { return _decimal__WEBPACK_IMPORTED_MODULE_4__["DecimalBuilder"]; });

/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dictionary */ "./node_modules/apache-arrow/builder/dictionary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryBuilder", function() { return _dictionary__WEBPACK_IMPORTED_MODULE_5__["DictionaryBuilder"]; });

/* harmony import */ var _fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fixedsizebinary */ "./node_modules/apache-arrow/builder/fixedsizebinary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryBuilder", function() { return _fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__["FixedSizeBinaryBuilder"]; });

/* harmony import */ var _float__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./float */ "./node_modules/apache-arrow/builder/float.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatBuilder", function() { return _float__WEBPACK_IMPORTED_MODULE_7__["FloatBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Builder", function() { return _float__WEBPACK_IMPORTED_MODULE_7__["Float16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Builder", function() { return _float__WEBPACK_IMPORTED_MODULE_7__["Float32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Builder", function() { return _float__WEBPACK_IMPORTED_MODULE_7__["Float64Builder"]; });

/* harmony import */ var _int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./int */ "./node_modules/apache-arrow/builder/int.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntBuilder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["IntBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Int8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Int16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Int32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Int64Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Uint8Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Uint16Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Uint32Builder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Builder", function() { return _int__WEBPACK_IMPORTED_MODULE_8__["Uint64Builder"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time */ "./node_modules/apache-arrow/builder/time.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeBuilder", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["TimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondBuilder", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["TimeSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondBuilder", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["TimeMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondBuilder", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["TimeMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondBuilder", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["TimeNanosecondBuilder"]; });

/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ "./node_modules/apache-arrow/builder/timestamp.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampBuilder", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_10__["TimestampBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondBuilder", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_10__["TimestampSecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondBuilder", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_10__["TimestampMillisecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondBuilder", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_10__["TimestampMicrosecondBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondBuilder", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_10__["TimestampNanosecondBuilder"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interval */ "./node_modules/apache-arrow/builder/interval.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalBuilder", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeBuilder", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalDayTimeBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthBuilder", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalYearMonthBuilder"]; });

/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utf8 */ "./node_modules/apache-arrow/builder/utf8.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Builder", function() { return _utf8__WEBPACK_IMPORTED_MODULE_12__["Utf8Builder"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./binary */ "./node_modules/apache-arrow/builder/binary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryBuilder", function() { return _binary__WEBPACK_IMPORTED_MODULE_13__["BinaryBuilder"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list */ "./node_modules/apache-arrow/builder/list.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListBuilder", function() { return _list__WEBPACK_IMPORTED_MODULE_14__["ListBuilder"]; });

/* harmony import */ var _fixedsizelist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fixedsizelist */ "./node_modules/apache-arrow/builder/fixedsizelist.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListBuilder", function() { return _fixedsizelist__WEBPACK_IMPORTED_MODULE_15__["FixedSizeListBuilder"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./map */ "./node_modules/apache-arrow/builder/map.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapBuilder", function() { return _map__WEBPACK_IMPORTED_MODULE_16__["MapBuilder"]; });

/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./struct */ "./node_modules/apache-arrow/builder/struct.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructBuilder", function() { return _struct__WEBPACK_IMPORTED_MODULE_17__["StructBuilder"]; });

/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./union */ "./node_modules/apache-arrow/builder/union.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionBuilder", function() { return _union__WEBPACK_IMPORTED_MODULE_18__["UnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionBuilder", function() { return _union__WEBPACK_IMPORTED_MODULE_18__["SparseUnionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionBuilder", function() { return _union__WEBPACK_IMPORTED_MODULE_18__["DenseUnionBuilder"]; });

/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _visitor_set__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../visitor/set */ "./node_modules/apache-arrow/visitor/set.mjs");
/* harmony import */ var _visitor_builderctor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../visitor/builderctor */ "./node_modules/apache-arrow/visitor/builderctor.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/** @ignore */
























/** @nocollapse */
_builder__WEBPACK_IMPORTED_MODULE_0__["Builder"].new = newBuilder;
function newBuilder(options) {
    const type = options.type;
    const builder = new (_visitor_builderctor__WEBPACK_IMPORTED_MODULE_21__["instance"].getVisitFn(type)())(options);
    if (type.children && type.children.length > 0) {
        const children = options['children'] || [];
        const defaultOptions = { 'nullValues': options['nullValues'] };
        const getChildOptions = Array.isArray(children)
            ? ((_, i) => children[i] || defaultOptions)
            : (({ name }) => children[name] || defaultOptions);
        type.children.forEach((field, index) => {
            const { type } = field;
            const opts = getChildOptions(field, index);
            builder.children.push(newBuilder({ ...opts, type }));
        });
    }
    return builder;
}
Object.keys(_enum__WEBPACK_IMPORTED_MODULE_19__["Type"])
    .map((T) => _enum__WEBPACK_IMPORTED_MODULE_19__["Type"][T])
    .filter((T) => typeof T === 'number' && T !== _enum__WEBPACK_IMPORTED_MODULE_19__["Type"].NONE)
    .forEach((typeId) => {
    const BuilderCtor = _visitor_builderctor__WEBPACK_IMPORTED_MODULE_21__["instance"].visit(typeId);
    BuilderCtor.prototype._setValue = _visitor_set__WEBPACK_IMPORTED_MODULE_20__["instance"].getVisitFn(typeId);
});
_utf8__WEBPACK_IMPORTED_MODULE_12__["Utf8Builder"].prototype._setValue = _visitor_set__WEBPACK_IMPORTED_MODULE_20__["instance"].visitBinary;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/int.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/builder/int.mjs ***!
  \***************************************************/
/*! exports provided: IntBuilder, Int8Builder, Int16Builder, Int32Builder, Int64Builder, Uint8Builder, Uint16Builder, Uint32Builder, Uint64Builder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntBuilder", function() { return IntBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int8Builder", function() { return Int8Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int16Builder", function() { return Int16Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int32Builder", function() { return Int32Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int64Builder", function() { return Int64Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8Builder", function() { return Uint8Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint16Builder", function() { return Uint16Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint32Builder", function() { return Uint32Builder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint64Builder", function() { return Uint64Builder; });
/* harmony import */ var _util_bn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/bn */ "./node_modules/apache-arrow/util/bn.mjs");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class IntBuilder extends _builder__WEBPACK_IMPORTED_MODULE_3__["FixedWidthBuilder"] {
    setValue(index, value) {
        this._values.set(index, value);
    }
}
/** @ignore */
class Int8Builder extends IntBuilder {
}
/** @ignore */
class Int16Builder extends IntBuilder {
}
/** @ignore */
class Int32Builder extends IntBuilder {
}
/** @ignore */
class Int64Builder extends IntBuilder {
    constructor(options) {
        if (options['nullValues']) {
            options['nullValues'] = options['nullValues'].map(toBigInt);
        }
        super(options);
        this._values = new _buffer__WEBPACK_IMPORTED_MODULE_1__["WideBufferBuilder"](new Int32Array(0), 2);
    }
    get values64() { return this._values.buffer64; }
    isValid(value) { return super.isValid(toBigInt(value)); }
}
/** @ignore */
class Uint8Builder extends IntBuilder {
}
/** @ignore */
class Uint16Builder extends IntBuilder {
}
/** @ignore */
class Uint32Builder extends IntBuilder {
}
/** @ignore */
class Uint64Builder extends IntBuilder {
    constructor(options) {
        if (options['nullValues']) {
            options['nullValues'] = options['nullValues'].map(toBigInt);
        }
        super(options);
        this._values = new _buffer__WEBPACK_IMPORTED_MODULE_1__["WideBufferBuilder"](new Uint32Array(0), 2);
    }
    get values64() { return this._values.buffer64; }
    isValid(value) { return super.isValid(toBigInt(value)); }
}
const toBigInt = ((memo) => (value) => {
    if (ArrayBuffer.isView(value)) {
        memo.buffer = value.buffer;
        memo.byteOffset = value.byteOffset;
        memo.byteLength = value.byteLength;
        value = Object(_util_bn__WEBPACK_IMPORTED_MODULE_0__["bignumToBigInt"])(memo);
        memo.buffer = null;
    }
    return value;
})({ 'BigIntArray': _util_compat__WEBPACK_IMPORTED_MODULE_2__["BigInt64Array"] });

//# sourceMappingURL=int.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/interval.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/builder/interval.mjs ***!
  \********************************************************/
/*! exports provided: IntervalBuilder, IntervalDayTimeBuilder, IntervalYearMonthBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalBuilder", function() { return IntervalBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeBuilder", function() { return IntervalDayTimeBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthBuilder", function() { return IntervalYearMonthBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class IntervalBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}
/** @ignore */
class IntervalDayTimeBuilder extends IntervalBuilder {
}
/** @ignore */
class IntervalYearMonthBuilder extends IntervalBuilder {
}

//# sourceMappingURL=interval.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/list.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/list.mjs ***!
  \****************************************************/
/*! exports provided: ListBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBuilder", function() { return ListBuilder; });
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run */ "./node_modules/apache-arrow/builder/run.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */
class ListBuilder extends _builder__WEBPACK_IMPORTED_MODULE_4__["VariableWidthBuilder"] {
    constructor(opts) {
        super(opts);
        this._run = new _run__WEBPACK_IMPORTED_MODULE_0__["Run"]();
        this._offsets = new _buffer__WEBPACK_IMPORTED_MODULE_3__["OffsetsBufferBuilder"]();
    }
    addChild(child, name = '0') {
        if (this.numChildren > 0) {
            throw new Error('ListBuilder can only have one child.');
        }
        this.children[this.numChildren] = child;
        this.type = new _type__WEBPACK_IMPORTED_MODULE_2__["List"](new _schema__WEBPACK_IMPORTED_MODULE_1__["Field"](name, child.type, true));
        return this.numChildren - 1;
    }
    clear() {
        this._run.clear();
        return super.clear();
    }
    _flushPending(pending) {
        const run = this._run;
        const offsets = this._offsets;
        const setValue = this._setValue;
        let index = 0, value;
        for ([index, value] of pending) {
            if (value === undefined) {
                offsets.set(index, 0);
            }
            else {
                offsets.set(index, value.length);
                setValue(this, index, run.bind(value));
            }
        }
    }
}

//# sourceMappingURL=list.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/map.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/builder/map.mjs ***!
  \***************************************************/
/*! exports provided: MapBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBuilder", function() { return MapBuilder; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class MapBuilder extends _builder__WEBPACK_IMPORTED_MODULE_2__["VariableWidthBuilder"] {
    set(index, value) {
        return super.set(index, value);
    }
    setValue(index, value) {
        value = value instanceof Map ? value : new Map(Object.entries(value));
        const pending = this._pending || (this._pending = new Map());
        const current = pending.get(index);
        current && (this._pendingLength -= current.size);
        this._pendingLength += value.size;
        pending.set(index, value);
    }
    addChild(child, name = `${this.numChildren}`) {
        if (this.numChildren > 0) {
            throw new Error('ListBuilder can only have one child.');
        }
        this.children[this.numChildren] = child;
        this.type = new _type__WEBPACK_IMPORTED_MODULE_1__["Map_"](new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](name, child.type, true), this.type.keysSorted);
        return this.numChildren - 1;
    }
    _flushPending(pending) {
        const offsets = this._offsets;
        const setValue = this._setValue;
        pending.forEach((value, index) => {
            if (value === undefined) {
                offsets.set(index, 0);
            }
            else {
                offsets.set(index, value.size);
                setValue(this, index, value);
            }
        });
    }
}

//# sourceMappingURL=map.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/null.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/null.mjs ***!
  \****************************************************/
/*! exports provided: NullBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullBuilder", function() { return NullBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class NullBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["Builder"] {
    // @ts-ignore
    setValue(index, value) { }
    setValid(index, valid) {
        this.length = Math.max(index + 1, this.length);
        return valid;
    }
}

//# sourceMappingURL=null.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/run.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/builder/run.mjs ***!
  \***************************************************/
/*! exports provided: Run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Run", function() { return Run; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class Run {
    get length() { return this._values.length; }
    get(index) { return this._values[index]; }
    clear() { this._values = null; return this; }
    bind(values) {
        if (values instanceof _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]) {
            return values;
        }
        this._values = values;
        return this;
    }
}

//# sourceMappingURL=run.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/struct.mjs":
/*!******************************************************!*\
  !*** ./node_modules/apache-arrow/builder/struct.mjs ***!
  \******************************************************/
/*! exports provided: StructBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructBuilder", function() { return StructBuilder; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class StructBuilder extends _builder__WEBPACK_IMPORTED_MODULE_1__["Builder"] {
    addChild(child, name = `${this.numChildren}`) {
        const childIndex = this.children.push(child);
        this.type = new _type__WEBPACK_IMPORTED_MODULE_2__["Struct"]([...this.type.children, new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](name, child.type, true)]);
        return childIndex;
    }
}

//# sourceMappingURL=struct.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/time.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/time.mjs ***!
  \****************************************************/
/*! exports provided: TimeBuilder, TimeSecondBuilder, TimeMillisecondBuilder, TimeMicrosecondBuilder, TimeNanosecondBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeBuilder", function() { return TimeBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSecondBuilder", function() { return TimeSecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondBuilder", function() { return TimeMillisecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondBuilder", function() { return TimeMicrosecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondBuilder", function() { return TimeNanosecondBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class TimeBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}
/** @ignore */
class TimeSecondBuilder extends TimeBuilder {
}
/** @ignore */
class TimeMillisecondBuilder extends TimeBuilder {
}
/** @ignore */
class TimeMicrosecondBuilder extends TimeBuilder {
}
/** @ignore */
class TimeNanosecondBuilder extends TimeBuilder {
}

//# sourceMappingURL=time.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/timestamp.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/builder/timestamp.mjs ***!
  \*********************************************************/
/*! exports provided: TimestampBuilder, TimestampSecondBuilder, TimestampMillisecondBuilder, TimestampMicrosecondBuilder, TimestampNanosecondBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampBuilder", function() { return TimestampBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondBuilder", function() { return TimestampSecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondBuilder", function() { return TimestampMillisecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondBuilder", function() { return TimestampMicrosecondBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondBuilder", function() { return TimestampNanosecondBuilder; });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class TimestampBuilder extends _builder__WEBPACK_IMPORTED_MODULE_0__["FixedWidthBuilder"] {
}
/** @ignore */
class TimestampSecondBuilder extends TimestampBuilder {
}
/** @ignore */
class TimestampMillisecondBuilder extends TimestampBuilder {
}
/** @ignore */
class TimestampMicrosecondBuilder extends TimestampBuilder {
}
/** @ignore */
class TimestampNanosecondBuilder extends TimestampBuilder {
}

//# sourceMappingURL=timestamp.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/union.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/union.mjs ***!
  \*****************************************************/
/*! exports provided: UnionBuilder, SparseUnionBuilder, DenseUnionBuilder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionBuilder", function() { return UnionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparseUnionBuilder", function() { return SparseUnionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenseUnionBuilder", function() { return DenseUnionBuilder; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class UnionBuilder extends _builder__WEBPACK_IMPORTED_MODULE_2__["Builder"] {
    constructor(options) {
        super(options);
        this._typeIds = new _buffer__WEBPACK_IMPORTED_MODULE_1__["DataBufferBuilder"](new Int8Array(0), 1);
        if (typeof options['valueToChildTypeId'] === 'function') {
            this._valueToChildTypeId = options['valueToChildTypeId'];
        }
    }
    get typeIdToChildIndex() { return this.type.typeIdToChildIndex; }
    append(value, childTypeId) {
        return this.set(this.length, value, childTypeId);
    }
    set(index, value, childTypeId) {
        if (childTypeId === undefined) {
            childTypeId = this._valueToChildTypeId(this, value, index);
        }
        if (this.setValid(index, this.isValid(value))) {
            this.setValue(index, value, childTypeId);
        }
        return this;
    }
    // @ts-ignore
    setValue(index, value, childTypeId) {
        this._typeIds.set(index, childTypeId);
        super.setValue(index, value);
    }
    // @ts-ignore
    addChild(child, name = `${this.children.length}`) {
        const childTypeId = this.children.push(child);
        const { type: { children, mode, typeIds } } = this;
        const fields = [...children, new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](name, child.type)];
        this.type = new _type__WEBPACK_IMPORTED_MODULE_3__["Union"](mode, [...typeIds, childTypeId], fields);
        return childTypeId;
    }
    /** @ignore */
    // @ts-ignore
    _valueToChildTypeId(builder, value, offset) {
        throw new Error(`Cannot map UnionBuilder value to child typeId. \
Pass the \`childTypeId\` as the second argument to unionBuilder.append(), \
or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
    }
}
/** @ignore */
class SparseUnionBuilder extends UnionBuilder {
}
/** @ignore */
class DenseUnionBuilder extends UnionBuilder {
    constructor(options) {
        super(options);
        this._offsets = new _buffer__WEBPACK_IMPORTED_MODULE_1__["DataBufferBuilder"](new Int32Array(0));
    }
    /** @ignore */
    setValue(index, value, childTypeId) {
        const childIndex = this.type.typeIdToChildIndex[childTypeId];
        this._offsets.set(index, this.getChildAt(childIndex).length);
        return super.setValue(index, value, childTypeId);
    }
}

//# sourceMappingURL=union.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/utf8.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/utf8.mjs ***!
  \****************************************************/
/*! exports provided: Utf8Builder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf8Builder", function() { return Utf8Builder; });
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binary */ "./node_modules/apache-arrow/builder/binary.mjs");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/builder/buffer.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class Utf8Builder extends _builder__WEBPACK_IMPORTED_MODULE_3__["VariableWidthBuilder"] {
    constructor(opts) {
        super(opts);
        this._values = new _buffer__WEBPACK_IMPORTED_MODULE_2__["BufferBuilder"](new Uint8Array(0));
    }
    get byteLength() {
        let size = this._pendingLength + (this.length * 4);
        this._offsets && (size += this._offsets.byteLength);
        this._values && (size += this._values.byteLength);
        this._nulls && (size += this._nulls.byteLength);
        return size;
    }
    setValue(index, value) {
        return super.setValue(index, Object(_util_utf8__WEBPACK_IMPORTED_MODULE_0__["encodeUtf8"])(value));
    }
    // @ts-ignore
    _flushPending(pending, pendingLength) { }
}
Utf8Builder.prototype._flushPending = _binary__WEBPACK_IMPORTED_MODULE_1__["BinaryBuilder"].prototype._flushPending;

//# sourceMappingURL=utf8.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/builder/valid.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/builder/valid.mjs ***!
  \*****************************************************/
/*! exports provided: createIsValidFunction */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIsValidFunction", function() { return createIsValidFunction; });
/* harmony import */ var _util_pretty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pretty */ "./node_modules/apache-arrow/util/pretty.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/**
 * Dynamically compile the null values into an `isValid()` function whose
 * implementation is a switch statement. Microbenchmarks in v8 indicate
 * this approach is 25% faster than using an ES6 Map.
 *
 * @example
 * console.log(createIsValidFunction([null, 'N/A', NaN]));
 * `function (x) {
 *     if (x !== x) return false;
 *     switch (x) {
 *         case null:
 *         case "N/A":
 *             return false;
 *     }
 *     return true;
 * }`
 *
 * @ignore
 * @param nullValues
 */
function createIsValidFunction(nullValues) {
    if (!nullValues || nullValues.length <= 0) {
        // @ts-ignore
        return function isValid(value) { return true; };
    }
    let fnBody = '';
    let noNaNs = nullValues.filter((x) => x === x);
    if (noNaNs.length > 0) {
        fnBody = `
    switch (x) {${noNaNs.map((x) => `
        case ${valueToCase(x)}:`).join('')}
            return false;
    }`;
    }
    // NaN doesn't equal anything including itself, so it doesn't work as a
    // switch case. Instead we must explicitly check for NaN before the switch.
    if (nullValues.length !== noNaNs.length) {
        fnBody = `if (x !== x) return false;\n${fnBody}`;
    }
    return new Function(`x`, `${fnBody}\nreturn true;`);
}
/** @ignore */
function valueToCase(x) {
    if (typeof x !== 'bigint') {
        return Object(_util_pretty__WEBPACK_IMPORTED_MODULE_0__["valueToString"])(x);
    }
    else if (_util_compat__WEBPACK_IMPORTED_MODULE_1__["BigIntAvailable"]) {
        return `${Object(_util_pretty__WEBPACK_IMPORTED_MODULE_0__["valueToString"])(x)}n`;
    }
    return `"${Object(_util_pretty__WEBPACK_IMPORTED_MODULE_0__["valueToString"])(x)}"`;
}

//# sourceMappingURL=valid.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/column.mjs":
/*!**********************************************!*\
  !*** ./node_modules/apache-arrow/column.mjs ***!
  \**********************************************/
/*! exports provided: Column */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _vector_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector/chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



class Column extends _vector_chunked__WEBPACK_IMPORTED_MODULE_2__["Chunked"] {
    constructor(field, vectors = [], offsets) {
        vectors = _vector_chunked__WEBPACK_IMPORTED_MODULE_2__["Chunked"].flatten(...vectors);
        super(field.type, vectors, offsets);
        this._field = field;
        if (vectors.length === 1 && !(this instanceof SingleChunkColumn)) {
            return new SingleChunkColumn(field, vectors[0], this._chunkOffsets);
        }
    }
    /** @nocollapse */
    static new(field, data, ...rest) {
        const chunks = _vector_chunked__WEBPACK_IMPORTED_MODULE_2__["Chunked"].flatten(Array.isArray(data) ? [...data, ...rest] :
            data instanceof _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"] ? [data, ...rest] :
                [_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(data, ...rest)]);
        if (typeof field === 'string') {
            const type = chunks[0].data.type;
            field = new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](field, type, true);
        }
        else if (!field.nullable && chunks.some(({ nullCount }) => nullCount > 0)) {
            field = field.clone({ nullable: true });
        }
        return new Column(field, chunks);
    }
    get field() { return this._field; }
    get name() { return this._field.name; }
    get nullable() { return this._field.nullable; }
    get metadata() { return this._field.metadata; }
    clone(chunks = this._chunks) {
        return new Column(this._field, chunks);
    }
    getChildAt(index) {
        if (index < 0 || index >= this.numChildren) {
            return null;
        }
        let columns = this._children || (this._children = []);
        let column, field, chunks;
        if (column = columns[index]) {
            return column;
        }
        if (field = (this.type.children || [])[index]) {
            chunks = this._chunks
                .map((vector) => vector.getChildAt(index))
                .filter((vec) => vec != null);
            if (chunks.length > 0) {
                return (columns[index] = new Column(field, chunks));
            }
        }
        return null;
    }
}
/** @ignore */
class SingleChunkColumn extends Column {
    constructor(field, vector, offsets) {
        super(field, [vector], offsets);
        this._chunk = vector;
    }
    search(index, then) {
        return then ? then(this, 0, index) : [0, index];
    }
    isValid(index) {
        return this._chunk.isValid(index);
    }
    get(index) {
        return this._chunk.get(index);
    }
    set(index, value) {
        this._chunk.set(index, value);
    }
    indexOf(element, offset) {
        return this._chunk.indexOf(element, offset);
    }
}

//# sourceMappingURL=column.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/compute/dataframe.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/compute/dataframe.mjs ***!
  \*********************************************************/
/*! exports provided: DataFrame, CountByResult, FilteredDataFrame */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return DataFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountByResult", function() { return CountByResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredDataFrame", function() { return FilteredDataFrame; });
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table */ "./node_modules/apache-arrow/table.mjs");
/* harmony import */ var _vector_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector/int */ "./node_modules/apache-arrow/vector/int.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _predicate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./predicate */ "./node_modules/apache-arrow/compute/predicate.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.






_table__WEBPACK_IMPORTED_MODULE_0__["Table"].prototype.countBy = function (name) { return new DataFrame(this.chunks).countBy(name); };
_table__WEBPACK_IMPORTED_MODULE_0__["Table"].prototype.scan = function (next, bind) { return new DataFrame(this.chunks).scan(next, bind); };
_table__WEBPACK_IMPORTED_MODULE_0__["Table"].prototype.scanReverse = function (next, bind) { return new DataFrame(this.chunks).scanReverse(next, bind); };
_table__WEBPACK_IMPORTED_MODULE_0__["Table"].prototype.filter = function (predicate) { return new DataFrame(this.chunks).filter(predicate); };
class DataFrame extends _table__WEBPACK_IMPORTED_MODULE_0__["Table"] {
    filter(predicate) {
        return new FilteredDataFrame(this.chunks, predicate);
    }
    scan(next, bind) {
        const batches = this.chunks, numBatches = batches.length;
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            if (bind) {
                bind(batch);
            }
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                next(index, batch);
            }
        }
    }
    scanReverse(next, bind) {
        const batches = this.chunks, numBatches = batches.length;
        for (let batchIndex = numBatches; --batchIndex >= 0;) {
            // load batches
            const batch = batches[batchIndex];
            if (bind) {
                bind(batch);
            }
            // yield all indices
            for (let index = batch.length; --index >= 0;) {
                next(index, batch);
            }
        }
    }
    countBy(name) {
        const batches = this.chunks, numBatches = batches.length;
        const count_by = typeof name === 'string' ? new _predicate__WEBPACK_IMPORTED_MODULE_3__["Col"](name) : name;
        // Assume that all dictionary batches are deltas, which means that the
        // last record batch has the most complete dictionary
        count_by.bind(batches[numBatches - 1]);
        const vector = count_by.vector;
        if (!_type__WEBPACK_IMPORTED_MODULE_5__["DataType"].isDictionary(vector.type)) {
            throw new Error('countBy currently only supports dictionary-encoded columns');
        }
        const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
        const CountsArrayType = countByteLength == 4 ? Uint32Array :
            countByteLength >= 2 ? Uint16Array : Uint8Array;
        const counts = new CountsArrayType(vector.dictionary.length);
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            // rebind the countBy Col
            count_by.bind(batch);
            const keys = count_by.vector.indices;
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                let key = keys.get(index);
                if (key !== null) {
                    counts[key]++;
                }
            }
        }
        return new CountByResult(vector.dictionary, _vector_int__WEBPACK_IMPORTED_MODULE_1__["IntVector"].from(counts));
    }
}
/** @ignore */
class CountByResult extends _table__WEBPACK_IMPORTED_MODULE_0__["Table"] {
    constructor(values, counts) {
        const schema = new _schema__WEBPACK_IMPORTED_MODULE_2__["Schema"]([
            new _schema__WEBPACK_IMPORTED_MODULE_2__["Field"]('values', values.type),
            new _schema__WEBPACK_IMPORTED_MODULE_2__["Field"]('counts', counts.type)
        ]);
        super(new _recordbatch__WEBPACK_IMPORTED_MODULE_4__["RecordBatch"](schema, counts.length, [values, counts]));
    }
    toJSON() {
        const values = this.getColumnAt(0);
        const counts = this.getColumnAt(1);
        const result = {};
        for (let i = -1; ++i < this.length;) {
            result[values.get(i)] = counts.get(i);
        }
        return result;
    }
}
/** @ignore */
class FilteredDataFrame extends DataFrame {
    constructor(batches, predicate) {
        super(batches);
        this._predicate = predicate;
    }
    scan(next, bind) {
        // inlined version of this:
        // this.parent.scan((idx, columns) => {
        //     if (this.predicate(idx, columns)) next(idx, columns);
        // });
        const batches = this._chunks;
        const numBatches = batches.length;
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            let isBound = false;
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                if (predicate(index, batch)) {
                    // bind batches lazily - if predicate doesn't match anything
                    // in the batch we don't need to call bind on the batch
                    if (bind && !isBound) {
                        bind(batch);
                        isBound = true;
                    }
                    next(index, batch);
                }
            }
        }
    }
    scanReverse(next, bind) {
        const batches = this._chunks;
        const numBatches = batches.length;
        for (let batchIndex = numBatches; --batchIndex >= 0;) {
            // load batches
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            let isBound = false;
            // yield all indices
            for (let index = batch.length; --index >= 0;) {
                if (predicate(index, batch)) {
                    // bind batches lazily - if predicate doesn't match anything
                    // in the batch we don't need to call bind on the batch
                    if (bind && !isBound) {
                        bind(batch);
                        isBound = true;
                    }
                    next(index, batch);
                }
            }
        }
    }
    count() {
        // inlined version of this:
        // let sum = 0;
        // this.parent.scan((idx, columns) => {
        //     if (this.predicate(idx, columns)) ++sum;
        // });
        // return sum;
        let sum = 0;
        const batches = this._chunks;
        const numBatches = batches.length;
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                if (predicate(index, batch)) {
                    ++sum;
                }
            }
        }
        return sum;
    }
    *[Symbol.iterator]() {
        // inlined version of this:
        // this.parent.scan((idx, columns) => {
        //     if (this.predicate(idx, columns)) next(idx, columns);
        // });
        const batches = this._chunks;
        const numBatches = batches.length;
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            // TODO: bind batches lazily
            // If predicate doesn't match anything in the batch we don't need
            // to bind the callback
            const predicate = this._predicate.bind(batch);
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                if (predicate(index, batch)) {
                    yield batch.get(index);
                }
            }
        }
    }
    filter(predicate) {
        return new FilteredDataFrame(this._chunks, this._predicate.and(predicate));
    }
    countBy(name) {
        const batches = this._chunks, numBatches = batches.length;
        const count_by = typeof name === 'string' ? new _predicate__WEBPACK_IMPORTED_MODULE_3__["Col"](name) : name;
        // Assume that all dictionary batches are deltas, which means that the
        // last record batch has the most complete dictionary
        count_by.bind(batches[numBatches - 1]);
        const vector = count_by.vector;
        if (!_type__WEBPACK_IMPORTED_MODULE_5__["DataType"].isDictionary(vector.type)) {
            throw new Error('countBy currently only supports dictionary-encoded columns');
        }
        const countByteLength = Math.ceil(Math.log(vector.length) / Math.log(256));
        const CountsArrayType = countByteLength == 4 ? Uint32Array :
            countByteLength >= 2 ? Uint16Array : Uint8Array;
        const counts = new CountsArrayType(vector.dictionary.length);
        for (let batchIndex = -1; ++batchIndex < numBatches;) {
            // load batches
            const batch = batches[batchIndex];
            const predicate = this._predicate.bind(batch);
            // rebind the countBy Col
            count_by.bind(batch);
            const keys = count_by.vector.indices;
            // yield all indices
            for (let index = -1, numRows = batch.length; ++index < numRows;) {
                let key = keys.get(index);
                if (key !== null && predicate(index, batch)) {
                    counts[key]++;
                }
            }
        }
        return new CountByResult(vector.dictionary, _vector_int__WEBPACK_IMPORTED_MODULE_1__["IntVector"].from(counts));
    }
}

//# sourceMappingURL=dataframe.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/compute/predicate.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/compute/predicate.mjs ***!
  \*********************************************************/
/*! exports provided: Value, Literal, Col, Predicate, ComparisonPredicate, CombinationPredicate, And, Or, Equals, LTeq, GTeq, Not, CustomPredicate, lit, col, and, or, custom */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predicate", function() { return Predicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonPredicate", function() { return ComparisonPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationPredicate", function() { return CombinationPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "And", function() { return And; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Or", function() { return Or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equals", function() { return Equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LTeq", function() { return LTeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTeq", function() { return GTeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Not", function() { return Not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPredicate", function() { return CustomPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lit", function() { return lit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "col", function() { return col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return custom; });
/* harmony import */ var _vector_dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector/dictionary */ "./node_modules/apache-arrow/vector/dictionary.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class Value {
    eq(other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new Equals(this, other);
    }
    le(other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new LTeq(this, other);
    }
    ge(other) {
        if (!(other instanceof Value)) {
            other = new Literal(other);
        }
        return new GTeq(this, other);
    }
    lt(other) {
        return new Not(this.ge(other));
    }
    gt(other) {
        return new Not(this.le(other));
    }
    ne(other) {
        return new Not(this.eq(other));
    }
}
/** @ignore */
class Literal extends Value {
    constructor(v) {
        super();
        this.v = v;
    }
}
/** @ignore */
class Col extends Value {
    constructor(name) {
        super();
        this.name = name;
    }
    bind(batch) {
        if (!this.colidx) {
            // Assume column index doesn't change between calls to bind
            //this.colidx = cols.findIndex(v => v.name.indexOf(this.name) != -1);
            this.colidx = -1;
            const fields = batch.schema.fields;
            for (let idx = -1; ++idx < fields.length;) {
                if (fields[idx].name === this.name) {
                    this.colidx = idx;
                    break;
                }
            }
            if (this.colidx < 0) {
                throw new Error(`Failed to bind Col "${this.name}"`);
            }
        }
        const vec = this.vector = batch.getChildAt(this.colidx);
        return (idx) => vec.get(idx);
    }
}
/** @ignore */
class Predicate {
    and(...expr) { return new And(this, ...expr); }
    or(...expr) { return new Or(this, ...expr); }
    not() { return new Not(this); }
}
/** @ignore */
class ComparisonPredicate extends Predicate {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    bind(batch) {
        if (this.left instanceof Literal) {
            if (this.right instanceof Literal) {
                return this._bindLitLit(batch, this.left, this.right);
            }
            else { // right is a Col
                return this._bindLitCol(batch, this.left, this.right);
            }
        }
        else { // left is a Col
            if (this.right instanceof Literal) {
                return this._bindColLit(batch, this.left, this.right);
            }
            else { // right is a Col
                return this._bindColCol(batch, this.left, this.right);
            }
        }
    }
}
/** @ignore */
class CombinationPredicate extends Predicate {
    constructor(...children) {
        super();
        this.children = children;
    }
}
// add children to prototype so it doesn't get mangled in es2015/umd
CombinationPredicate.prototype.children = Object.freeze([]); // freeze for safety
/** @ignore */
class And extends CombinationPredicate {
    constructor(...children) {
        // Flatten any Ands
        children = children.reduce((accum, p) => {
            return accum.concat(p instanceof And ? p.children : p);
        }, []);
        super(...children);
    }
    bind(batch) {
        const bound = this.children.map((p) => p.bind(batch));
        return (idx, batch) => bound.every((p) => p(idx, batch));
    }
}
/** @ignore */
class Or extends CombinationPredicate {
    constructor(...children) {
        // Flatten any Ors
        children = children.reduce((accum, p) => {
            return accum.concat(p instanceof Or ? p.children : p);
        }, []);
        super(...children);
    }
    bind(batch) {
        const bound = this.children.map((p) => p.bind(batch));
        return (idx, batch) => bound.some((p) => p(idx, batch));
    }
}
/** @ignore */
class Equals extends ComparisonPredicate {
    _bindLitLit(_batch, left, right) {
        const rtrn = left.v == right.v;
        return () => rtrn;
    }
    _bindColCol(batch, left, right) {
        const left_func = left.bind(batch);
        const right_func = right.bind(batch);
        return (idx, batch) => left_func(idx, batch) == right_func(idx, batch);
    }
    _bindColLit(batch, col, lit) {
        const col_func = col.bind(batch);
        if (col.vector instanceof _vector_dictionary__WEBPACK_IMPORTED_MODULE_0__["DictionaryVector"]) {
            let key;
            const vector = col.vector;
            if (vector.dictionary !== this.lastDictionary) {
                key = vector.reverseLookup(lit.v);
                this.lastDictionary = vector.dictionary;
                this.lastKey = key;
            }
            else {
                key = this.lastKey;
            }
            if (key === -1) {
                // the value doesn't exist in the dictionary - always return
                // false
                // TODO: special-case of PredicateFunc that encapsulates this
                // "always false" behavior. That way filtering operations don't
                // have to bother checking
                return () => false;
            }
            else {
                return (idx) => {
                    return vector.getKey(idx) === key;
                };
            }
        }
        else {
            return (idx, cols) => col_func(idx, cols) == lit.v;
        }
    }
    _bindLitCol(batch, lit, col) {
        // Equals is commutative
        return this._bindColLit(batch, col, lit);
    }
}
/** @ignore */
class LTeq extends ComparisonPredicate {
    _bindLitLit(_batch, left, right) {
        const rtrn = left.v <= right.v;
        return () => rtrn;
    }
    _bindColCol(batch, left, right) {
        const left_func = left.bind(batch);
        const right_func = right.bind(batch);
        return (idx, cols) => left_func(idx, cols) <= right_func(idx, cols);
    }
    _bindColLit(batch, col, lit) {
        const col_func = col.bind(batch);
        return (idx, cols) => col_func(idx, cols) <= lit.v;
    }
    _bindLitCol(batch, lit, col) {
        const col_func = col.bind(batch);
        return (idx, cols) => lit.v <= col_func(idx, cols);
    }
}
/** @ignore */
class GTeq extends ComparisonPredicate {
    _bindLitLit(_batch, left, right) {
        const rtrn = left.v >= right.v;
        return () => rtrn;
    }
    _bindColCol(batch, left, right) {
        const left_func = left.bind(batch);
        const right_func = right.bind(batch);
        return (idx, cols) => left_func(idx, cols) >= right_func(idx, cols);
    }
    _bindColLit(batch, col, lit) {
        const col_func = col.bind(batch);
        return (idx, cols) => col_func(idx, cols) >= lit.v;
    }
    _bindLitCol(batch, lit, col) {
        const col_func = col.bind(batch);
        return (idx, cols) => lit.v >= col_func(idx, cols);
    }
}
/** @ignore */
class Not extends Predicate {
    constructor(child) {
        super();
        this.child = child;
    }
    bind(batch) {
        const func = this.child.bind(batch);
        return (idx, batch) => !func(idx, batch);
    }
}
/** @ignore */
class CustomPredicate extends Predicate {
    constructor(next, bind_) {
        super();
        this.next = next;
        this.bind_ = bind_;
    }
    bind(batch) {
        this.bind_(batch);
        return this.next;
    }
}
function lit(v) { return new Literal(v); }
function col(n) { return new Col(n); }
function and(...p) { return new And(...p); }
function or(...p) { return new Or(...p); }
function custom(next, bind) {
    return new CustomPredicate(next, bind);
}

//# sourceMappingURL=predicate.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/data.mjs":
/*!********************************************!*\
  !*** ./node_modules/apache-arrow/data.mjs ***!
  \********************************************/
/*! exports provided: kUnknownNullCount, Data */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kUnknownNullCount", function() { return kUnknownNullCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */ const kUnknownNullCount = -1;
/** @ignore */
class Data {
    constructor(type, offset, length, nullCount, buffers, childData, dictionary) {
        this.type = type;
        this.dictionary = dictionary;
        this.offset = Math.floor(Math.max(offset || 0, 0));
        this.length = Math.floor(Math.max(length || 0, 0));
        this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
        this.childData = (childData || []).map((x) => x instanceof Data ? x : x.data);
        let buffer;
        if (buffers instanceof Data) {
            this.stride = buffers.stride;
            this.values = buffers.values;
            this.typeIds = buffers.typeIds;
            this.nullBitmap = buffers.nullBitmap;
            this.valueOffsets = buffers.valueOffsets;
        }
        else {
            this.stride = Object(_type__WEBPACK_IMPORTED_MODULE_2__["strideForType"])(type);
            if (buffers) {
                (buffer = buffers[0]) && (this.valueOffsets = buffer);
                (buffer = buffers[1]) && (this.values = buffer);
                (buffer = buffers[2]) && (this.nullBitmap = buffer);
                (buffer = buffers[3]) && (this.typeIds = buffer);
            }
        }
    }
    get typeId() { return this.type.typeId; }
    get ArrayType() { return this.type.ArrayType; }
    get buffers() {
        return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
    }
    get byteLength() {
        let byteLength = 0;
        let { valueOffsets, values, nullBitmap, typeIds } = this;
        valueOffsets && (byteLength += valueOffsets.byteLength);
        values && (byteLength += values.byteLength);
        nullBitmap && (byteLength += nullBitmap.byteLength);
        typeIds && (byteLength += typeIds.byteLength);
        return this.childData.reduce((byteLength, child) => byteLength + child.byteLength, byteLength);
    }
    get nullCount() {
        let nullCount = this._nullCount;
        let nullBitmap;
        if (nullCount <= kUnknownNullCount && (nullBitmap = this.nullBitmap)) {
            this._nullCount = nullCount = this.length - Object(_util_bit__WEBPACK_IMPORTED_MODULE_0__["popcnt_bit_range"])(nullBitmap, this.offset, this.offset + this.length);
        }
        return nullCount;
    }
    clone(type, offset = this.offset, length = this.length, nullCount = this._nullCount, buffers = this, childData = this.childData) {
        return new Data(type, offset, length, nullCount, buffers, childData, this.dictionary);
    }
    slice(offset, length) {
        const { stride, typeId, childData } = this;
        // +true === 1, +false === 0, so this means
        // we keep nullCount at 0 if it's already 0,
        // otherwise set to the invalidated flag -1
        const nullCount = +(this._nullCount === 0) - 1;
        const childStride = typeId === 16 /* FixedSizeList */ ? stride : 1;
        const buffers = this._sliceBuffers(offset, length, stride, typeId);
        return this.clone(this.type, this.offset + offset, length, nullCount, buffers, 
        // Don't slice children if we have value offsets (the variable-width types)
        (!childData.length || this.valueOffsets) ? childData : this._sliceChildren(childData, childStride * offset, childStride * length));
    }
    _changeLengthAndBackfillNullBitmap(newLength) {
        if (this.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Null) {
            return this.clone(this.type, 0, newLength, 0);
        }
        const { length, nullCount } = this;
        // start initialized with 0s (nulls), then fill from 0 to length with 1s (not null)
        const bitmap = new Uint8Array(((newLength + 63) & ~63) >> 3).fill(255, 0, length >> 3);
        // set all the bits in the last byte (up to bit `length - length % 8`) to 1 (not null)
        bitmap[length >> 3] = (1 << (length - (length & ~7))) - 1;
        // if we have a nullBitmap, truncate + slice and set it over the pre-filled 1s
        if (nullCount > 0) {
            bitmap.set(Object(_util_bit__WEBPACK_IMPORTED_MODULE_0__["truncateBitmap"])(this.offset, length, this.nullBitmap), 0);
        }
        const buffers = this.buffers;
        buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY] = bitmap;
        return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
    }
    _sliceBuffers(offset, length, stride, typeId) {
        let arr, { buffers } = this;
        // If typeIds exist, slice the typeIds buffer
        (arr = buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].TYPE]) && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].TYPE] = arr.subarray(offset, offset + length));
        // If offsets exist, only slice the offsets buffer
        (arr = buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET]) && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] = arr.subarray(offset, offset + length + 1)) ||
            // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
            (arr = buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA]) && (buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
        return buffers;
    }
    _sliceChildren(childData, offset, length) {
        return childData.map((child) => child.slice(offset, length));
    }
    //
    // Convenience methods for creating Data instances for each of the Arrow Vector types
    //
    /** @nocollapse */
    static new(type, offset, length, nullCount, buffers, childData, dictionary) {
        if (buffers instanceof Data) {
            buffers = buffers.buffers;
        }
        else if (!buffers) {
            buffers = [];
        }
        switch (type.typeId) {
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Null: return Data.Null(type, offset, length);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Int: return Data.Int(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Dictionary: return Data.Dictionary(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || [], dictionary);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Float: return Data.Float(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Bool: return Data.Bool(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Decimal: return Data.Decimal(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Date: return Data.Date(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Time: return Data.Time(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Timestamp: return Data.Timestamp(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Interval: return Data.Interval(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeBinary: return Data.FixedSizeBinary(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Binary: return Data.Binary(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] || [], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Utf8: return Data.Utf8(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] || [], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].DATA] || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].List: return Data.List(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] || [], (childData || [])[0]);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeList: return Data.FixedSizeList(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], (childData || [])[0]);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Struct: return Data.Struct(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], childData || []);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Map: return Data.Map(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] || [], (childData || [])[0]);
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Union: return Data.Union(type, offset, length, nullCount || 0, buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].VALIDITY], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].TYPE] || [], buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] || childData, childData);
        }
        throw new Error(`Unrecognized typeId ${type.typeId}`);
    }
    /** @nocollapse */
    static Null(type, offset, length) {
        return new Data(type, offset, length, 0);
    }
    /** @nocollapse */
    static Int(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Dictionary(type, offset, length, nullCount, nullBitmap, data, dictionary) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.indices.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)], [], dictionary);
    }
    /** @nocollapse */
    static Float(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Bool(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Decimal(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Date(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Time(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Timestamp(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Interval(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static FixedSizeBinary(type, offset, length, nullCount, nullBitmap, data) {
        return new Data(type, offset, length, nullCount, [undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Binary(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
        return new Data(type, offset, length, nullCount, [Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toInt32Array"])(valueOffsets), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static Utf8(type, offset, length, nullCount, nullBitmap, valueOffsets, data) {
        return new Data(type, offset, length, nullCount, [Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toInt32Array"])(valueOffsets), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(data), Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)]);
    }
    /** @nocollapse */
    static List(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
        return new Data(type, offset, length, nullCount, [Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toInt32Array"])(valueOffsets), undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)], [child]);
    }
    /** @nocollapse */
    static FixedSizeList(type, offset, length, nullCount, nullBitmap, child) {
        return new Data(type, offset, length, nullCount, [undefined, undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)], [child]);
    }
    /** @nocollapse */
    static Struct(type, offset, length, nullCount, nullBitmap, children) {
        return new Data(type, offset, length, nullCount, [undefined, undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)], children);
    }
    /** @nocollapse */
    static Map(type, offset, length, nullCount, nullBitmap, valueOffsets, child) {
        return new Data(type, offset, length, nullCount, [Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toInt32Array"])(valueOffsets), undefined, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap)], [child]);
    }
    /** @nocollapse */
    static Union(type, offset, length, nullCount, nullBitmap, typeIds, valueOffsetsOrChildren, children) {
        const buffers = [
            undefined, undefined,
            Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(nullBitmap),
            Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toArrayBufferView"])(type.ArrayType, typeIds)
        ];
        if (type.mode === _enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"].Sparse) {
            return new Data(type, offset, length, nullCount, buffers, valueOffsetsOrChildren);
        }
        buffers[_enum__WEBPACK_IMPORTED_MODULE_1__["BufferType"].OFFSET] = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toInt32Array"])(valueOffsetsOrChildren);
        return new Data(type, offset, length, nullCount, buffers, children);
    }
}
Data.prototype.childData = Object.freeze([]);

//# sourceMappingURL=data.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/enum.mjs":
/*!********************************************!*\
  !*** ./node_modules/apache-arrow/enum.mjs ***!
  \********************************************/
/*! exports provided: ArrowType, DateUnit, TimeUnit, Precision, UnionMode, IntervalUnit, MessageHeader, MetadataVersion, Type, BufferType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowType", function() { return ArrowType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUnit", function() { return DateUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeUnit", function() { return TimeUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Precision", function() { return Precision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionMode", function() { return UnionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalUnit", function() { return IntervalUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return MessageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataVersion", function() { return MetadataVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferType", function() { return BufferType; });
/* harmony import */ var _fb_Schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fb/Schema */ "./node_modules/apache-arrow/fb/Schema.mjs");
/* harmony import */ var _fb_Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fb/Message */ "./node_modules/apache-arrow/fb/Message.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


var ArrowType = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Type;
var DateUnit = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.DateUnit;
var TimeUnit = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.TimeUnit;
var Precision = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Precision;
var UnionMode = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.UnionMode;
var IntervalUnit = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.IntervalUnit;
var MessageHeader = _fb_Message__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.MessageHeader;
var MetadataVersion = _fb_Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.MetadataVersion;
/**
 * Main data type enumeration.
 *
 * Data types in this library are all *logical*. They can be expressed as
 * either a primitive physical type (bytes or bits of some fixed size), a
 * nested type consisting of other data types, or another data type (e.g. a
 * timestamp encoded as an int64).
 *
 * **Note**: Only enum values 0-17 (NONE through Map) are written to an Arrow
 * IPC payload.
 *
 * The rest of the values are specified here so TypeScript can narrow the type
 * signatures further beyond the base Arrow Types. The Arrow DataTypes include
 * metadata like `bitWidth` that impact the type signatures of the values we
 * accept and return.
 *
 * For example, the `Int8Vector` reads 1-byte numbers from an `Int8Array`, an
 * `Int32Vector` reads a 4-byte number from an `Int32Array`, and an `Int64Vector`
 * reads a pair of 4-byte lo, hi 32-bit integers as a zero-copy slice from the
 * underlying `Int32Array`.
 *
 * Library consumers benefit by knowing the narrowest type, since we can ensure
 * the types across all public methods are propagated, and never bail to `any`.
 * These values are _never_ used at runtime, and they will _never_ be written
 * to the flatbuffers metadata of serialized Arrow IPC payloads.
 */
var Type;
(function (Type) {
    /** The default placeholder type */
    Type[Type["NONE"] = 0] = "NONE";
    /** A NULL type having no physical storage */
    Type[Type["Null"] = 1] = "Null";
    /** Signed or unsigned 8, 16, 32, or 64-bit little-endian integer */
    Type[Type["Int"] = 2] = "Int";
    /** 2, 4, or 8-byte floating point value */
    Type[Type["Float"] = 3] = "Float";
    /** Variable-length bytes (no guarantee of UTF8-ness) */
    Type[Type["Binary"] = 4] = "Binary";
    /** UTF8 variable-length string as List<Char> */
    Type[Type["Utf8"] = 5] = "Utf8";
    /** Boolean as 1 bit, LSB bit-packed ordering */
    Type[Type["Bool"] = 6] = "Bool";
    /** Precision-and-scale-based decimal type. Storage type depends on the parameters. */
    Type[Type["Decimal"] = 7] = "Decimal";
    /** int32_t days or int64_t milliseconds since the UNIX epoch */
    Type[Type["Date"] = 8] = "Date";
    /** Time as signed 32 or 64-bit integer, representing either seconds, milliseconds, microseconds, or nanoseconds since midnight since midnight */
    Type[Type["Time"] = 9] = "Time";
    /** Exact timestamp encoded with int64 since UNIX epoch (Default unit millisecond) */
    Type[Type["Timestamp"] = 10] = "Timestamp";
    /** YEAR_MONTH or DAY_TIME interval in SQL style */
    Type[Type["Interval"] = 11] = "Interval";
    /** A list of some logical data type */
    Type[Type["List"] = 12] = "List";
    /** Struct of logical types */
    Type[Type["Struct"] = 13] = "Struct";
    /** Union of logical types */
    Type[Type["Union"] = 14] = "Union";
    /** Fixed-size binary. Each value occupies the same number of bytes */
    Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
    /** Fixed-size list. Each value occupies the same number of bytes */
    Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
    /** Map of named logical types */
    Type[Type["Map"] = 17] = "Map";
    /** Dictionary aka Category type */
    Type[Type["Dictionary"] = -1] = "Dictionary";
    Type[Type["Int8"] = -2] = "Int8";
    Type[Type["Int16"] = -3] = "Int16";
    Type[Type["Int32"] = -4] = "Int32";
    Type[Type["Int64"] = -5] = "Int64";
    Type[Type["Uint8"] = -6] = "Uint8";
    Type[Type["Uint16"] = -7] = "Uint16";
    Type[Type["Uint32"] = -8] = "Uint32";
    Type[Type["Uint64"] = -9] = "Uint64";
    Type[Type["Float16"] = -10] = "Float16";
    Type[Type["Float32"] = -11] = "Float32";
    Type[Type["Float64"] = -12] = "Float64";
    Type[Type["DateDay"] = -13] = "DateDay";
    Type[Type["DateMillisecond"] = -14] = "DateMillisecond";
    Type[Type["TimestampSecond"] = -15] = "TimestampSecond";
    Type[Type["TimestampMillisecond"] = -16] = "TimestampMillisecond";
    Type[Type["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
    Type[Type["TimestampNanosecond"] = -18] = "TimestampNanosecond";
    Type[Type["TimeSecond"] = -19] = "TimeSecond";
    Type[Type["TimeMillisecond"] = -20] = "TimeMillisecond";
    Type[Type["TimeMicrosecond"] = -21] = "TimeMicrosecond";
    Type[Type["TimeNanosecond"] = -22] = "TimeNanosecond";
    Type[Type["DenseUnion"] = -23] = "DenseUnion";
    Type[Type["SparseUnion"] = -24] = "SparseUnion";
    Type[Type["IntervalDayTime"] = -25] = "IntervalDayTime";
    Type[Type["IntervalYearMonth"] = -26] = "IntervalYearMonth";
})(Type || (Type = {}));
var BufferType;
(function (BufferType) {
    /**
     * used in List type, Dense Union and variable length primitive types (String, Binary)
     */
    BufferType[BufferType["OFFSET"] = 0] = "OFFSET";
    /**
     * actual data, either wixed width primitive types in slots or variable width delimited by an OFFSET vector
     */
    BufferType[BufferType["DATA"] = 1] = "DATA";
    /**
     * Bit vector indicating if each value is null
     */
    BufferType[BufferType["VALIDITY"] = 2] = "VALIDITY";
    /**
     * Type vector used in Union type
     */
    BufferType[BufferType["TYPE"] = 3] = "TYPE";
})(BufferType || (BufferType = {}));

//# sourceMappingURL=enum.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/fb/File.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/fb/File.mjs ***!
  \***********************************************/
/*! exports provided: org */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "org", function() { return org; });
/* harmony import */ var _Schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema */ "./node_modules/apache-arrow/fb/Schema.mjs");
// automatically generated by the FlatBuffers compiler, do not modify

/**
 * ----------------------------------------------------------------------
 * Arrow File metadata
 *
 *
 * @constructor
 */
var org;
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Footer {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Footer
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Footer= obj
                     * @returns Footer
                     */
                    static getRootAsFooter(bb, obj) {
                        return (obj || new Footer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.MetadataVersion
                     */
                    version() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.MetadataVersion.V1;
                    }
                    /**
                     * @param org.apache.arrow.flatbuf.Schema= obj
                     * @returns org.apache.arrow.flatbuf.Schema|null
                     */
                    schema(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Schema).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    }
                    /**
                     * @param number index
                     * @param org.apache.arrow.flatbuf.Block= obj
                     * @returns org.apache.arrow.flatbuf.Block
                     */
                    dictionaries(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Block).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    dictionariesLength() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param number index
                     * @param org.apache.arrow.flatbuf.Block= obj
                     * @returns org.apache.arrow.flatbuf.Block
                     */
                    recordBatches(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Block).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    recordBatchesLength() {
                        let offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startFooter(builder) {
                        builder.startObject(4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.MetadataVersion version
                     */
                    static addVersion(builder, version) {
                        builder.addFieldInt16(0, version, _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.MetadataVersion.V1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset schemaOffset
                     */
                    static addSchema(builder, schemaOffset) {
                        builder.addFieldOffset(1, schemaOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset dictionariesOffset
                     */
                    static addDictionaries(builder, dictionariesOffset) {
                        builder.addFieldOffset(2, dictionariesOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startDictionariesVector(builder, numElems) {
                        builder.startVector(24, numElems, 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset recordBatchesOffset
                     */
                    static addRecordBatches(builder, recordBatchesOffset) {
                        builder.addFieldOffset(3, recordBatchesOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startRecordBatchesVector(builder, numElems) {
                        builder.startVector(24, numElems, 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endFooter(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset offset
                     */
                    static finishFooterBuffer(builder, offset) {
                        builder.finish(offset);
                    }
                    static createFooter(builder, version, schemaOffset, dictionariesOffset, recordBatchesOffset) {
                        Footer.startFooter(builder);
                        Footer.addVersion(builder, version);
                        Footer.addSchema(builder, schemaOffset);
                        Footer.addDictionaries(builder, dictionariesOffset);
                        Footer.addRecordBatches(builder, recordBatchesOffset);
                        return Footer.endFooter(builder);
                    }
                }
                flatbuf.Footer = Footer;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Block {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Block
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * Index to the start of the RecordBlock (note this is past the Message header)
                     *
                     * @returns flatbuffers.Long
                     */
                    offset() {
                        return this.bb.readInt64(this.bb_pos);
                    }
                    /**
                     * Length of the metadata
                     *
                     * @returns number
                     */
                    metaDataLength() {
                        return this.bb.readInt32(this.bb_pos + 8);
                    }
                    /**
                     * Length of the data (this is aligned so there can be a gap between this and
                     * the metatdata).
                     *
                     * @returns flatbuffers.Long
                     */
                    bodyLength() {
                        return this.bb.readInt64(this.bb_pos + 16);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long offset
                     * @param number metaDataLength
                     * @param flatbuffers.Long bodyLength
                     * @returns flatbuffers.Offset
                     */
                    static createBlock(builder, offset, metaDataLength, bodyLength) {
                        builder.prep(8, 24);
                        builder.writeInt64(bodyLength);
                        builder.pad(4);
                        builder.writeInt32(metaDataLength);
                        builder.writeInt64(offset);
                        return builder.offset();
                    }
                }
                flatbuf.Block = Block;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));

//# sourceMappingURL=File.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/fb/Message.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/fb/Message.mjs ***!
  \**************************************************/
/*! exports provided: org */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "org", function() { return org; });
/* harmony import */ var _Schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema */ "./node_modules/apache-arrow/fb/Schema.mjs");
// automatically generated by the FlatBuffers compiler, do not modify

var org;
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                flatbuf.Schema = _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Schema;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * The root Message type
 * This union enables us to easily send different message types without
 * redundant storage, and in the future we can easily add new message types.
 *
 * Arrow implementations do not need to implement all of the message types,
 * which may include experimental metadata types. For maximum compatibility,
 * it is best to send data using RecordBatch
 *
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let MessageHeader;
                (function (MessageHeader) {
                    MessageHeader[MessageHeader["NONE"] = 0] = "NONE";
                    MessageHeader[MessageHeader["Schema"] = 1] = "Schema";
                    MessageHeader[MessageHeader["DictionaryBatch"] = 2] = "DictionaryBatch";
                    MessageHeader[MessageHeader["RecordBatch"] = 3] = "RecordBatch";
                    MessageHeader[MessageHeader["Tensor"] = 4] = "Tensor";
                    MessageHeader[MessageHeader["SparseTensor"] = 5] = "SparseTensor";
                })(MessageHeader = flatbuf.MessageHeader || (flatbuf.MessageHeader = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * Data structures for describing a table row batch (a collection of
 * equal-length Arrow arrays)
 * Metadata about a field at some level of a nested type tree (but not
 * its children).
 *
 * For example, a List<Int16> with values [[1, 2, 3], null, [4], [5, 6], null]
 * would have {length: 5, null_count: 2} for its List node, and {length: 6,
 * null_count: 0} for its Int16 node, as separate FieldNode structs
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class FieldNode {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns FieldNode
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * The number of value slots in the Arrow array at this level of a nested
                     * tree
                     *
                     * @returns flatbuffers.Long
                     */
                    length() {
                        return this.bb.readInt64(this.bb_pos);
                    }
                    /**
                     * The number of observed nulls. Fields with null_count == 0 may choose not
                     * to write their physical validity bitmap out as a materialized buffer,
                     * instead setting the length of the bitmap buffer to 0.
                     *
                     * @returns flatbuffers.Long
                     */
                    nullCount() {
                        return this.bb.readInt64(this.bb_pos + 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long length
                     * @param flatbuffers.Long null_count
                     * @returns flatbuffers.Offset
                     */
                    static createFieldNode(builder, length, null_count) {
                        builder.prep(8, 16);
                        builder.writeInt64(null_count);
                        builder.writeInt64(length);
                        return builder.offset();
                    }
                }
                flatbuf.FieldNode = FieldNode;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * A data header describing the shared memory layout of a "record" or "row"
 * batch. Some systems call this a "row batch" internally and others a "record
 * batch".
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class RecordBatch {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns RecordBatch
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param RecordBatch= obj
                     * @returns RecordBatch
                     */
                    static getRootAsRecordBatch(bb, obj) {
                        return (obj || new RecordBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * number of records / rows. The arrays in the batch should all have this
                     * length
                     *
                     * @returns flatbuffers.Long
                     */
                    length() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    }
                    /**
                     * Nodes correspond to the pre-ordered flattened logical schema
                     *
                     * @param number index
                     * @param org.apache.arrow.flatbuf.FieldNode= obj
                     * @returns org.apache.arrow.flatbuf.FieldNode
                     */
                    nodes(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.FieldNode).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    nodesLength() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * Buffers correspond to the pre-ordered flattened buffer tree
                     *
                     * The number of buffers appended to this list depends on the schema. For
                     * example, most primitive arrays will have 2 buffers, 1 for the validity
                     * bitmap and 1 for the values. For struct arrays, there will only be a
                     * single buffer for the validity (nulls) bitmap
                     *
                     * @param number index
                     * @param org.apache.arrow.flatbuf.Buffer= obj
                     * @returns org.apache.arrow.flatbuf.Buffer
                     */
                    buffers(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Buffer).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    buffersLength() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startRecordBatch(builder) {
                        builder.startObject(3);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long length
                     */
                    static addLength(builder, length) {
                        builder.addFieldInt64(0, length, builder.createLong(0, 0));
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset nodesOffset
                     */
                    static addNodes(builder, nodesOffset) {
                        builder.addFieldOffset(1, nodesOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startNodesVector(builder, numElems) {
                        builder.startVector(16, numElems, 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset buffersOffset
                     */
                    static addBuffers(builder, buffersOffset) {
                        builder.addFieldOffset(2, buffersOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startBuffersVector(builder, numElems) {
                        builder.startVector(16, numElems, 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endRecordBatch(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createRecordBatch(builder, length, nodesOffset, buffersOffset) {
                        RecordBatch.startRecordBatch(builder);
                        RecordBatch.addLength(builder, length);
                        RecordBatch.addNodes(builder, nodesOffset);
                        RecordBatch.addBuffers(builder, buffersOffset);
                        return RecordBatch.endRecordBatch(builder);
                    }
                }
                flatbuf.RecordBatch = RecordBatch;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * For sending dictionary encoding information. Any Field can be
 * dictionary-encoded, but in this case none of its children may be
 * dictionary-encoded.
 * There is one vector / column per dictionary, but that vector / column
 * may be spread across multiple dictionary batches by using the isDelta
 * flag
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class DictionaryBatch {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns DictionaryBatch
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param DictionaryBatch= obj
                     * @returns DictionaryBatch
                     */
                    static getRootAsDictionaryBatch(bb, obj) {
                        return (obj || new DictionaryBatch).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns flatbuffers.Long
                     */
                    id() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    }
                    /**
                     * @param org.apache.arrow.flatbuf.RecordBatch= obj
                     * @returns org.apache.arrow.flatbuf.RecordBatch|null
                     */
                    data(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.RecordBatch).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    }
                    /**
                     * If isDelta is true the values in the dictionary are to be appended to a
                     * dictionary with the indicated id
                     *
                     * @returns boolean
                     */
                    isDelta() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startDictionaryBatch(builder) {
                        builder.startObject(3);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long id
                     */
                    static addId(builder, id) {
                        builder.addFieldInt64(0, id, builder.createLong(0, 0));
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset dataOffset
                     */
                    static addData(builder, dataOffset) {
                        builder.addFieldOffset(1, dataOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param boolean isDelta
                     */
                    static addIsDelta(builder, isDelta) {
                        builder.addFieldInt8(2, +isDelta, +false);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endDictionaryBatch(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createDictionaryBatch(builder, id, dataOffset, isDelta) {
                        DictionaryBatch.startDictionaryBatch(builder);
                        DictionaryBatch.addId(builder, id);
                        DictionaryBatch.addData(builder, dataOffset);
                        DictionaryBatch.addIsDelta(builder, isDelta);
                        return DictionaryBatch.endDictionaryBatch(builder);
                    }
                }
                flatbuf.DictionaryBatch = DictionaryBatch;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Message {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Message
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Message= obj
                     * @returns Message
                     */
                    static getRootAsMessage(bb, obj) {
                        return (obj || new Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.MetadataVersion
                     */
                    version() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.MetadataVersion.V1;
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.MessageHeader
                     */
                    headerType() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? /**  */ (this.bb.readUint8(this.bb_pos + offset)) : org.apache.arrow.flatbuf.MessageHeader.NONE;
                    }
                    /**
                     * @param flatbuffers.Table obj
                     * @returns ?flatbuffers.Table
                     */
                    header(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
                    }
                    /**
                     * @returns flatbuffers.Long
                     */
                    bodyLength() {
                        let offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    }
                    /**
                     * @param number index
                     * @param org.apache.arrow.flatbuf.KeyValue= obj
                     * @returns org.apache.arrow.flatbuf.KeyValue
                     */
                    customMetadata(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 12);
                        return offset ? (obj || new _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.KeyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    customMetadataLength() {
                        let offset = this.bb.__offset(this.bb_pos, 12);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startMessage(builder) {
                        builder.startObject(5);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.MetadataVersion version
                     */
                    static addVersion(builder, version) {
                        builder.addFieldInt16(0, version, _Schema__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.MetadataVersion.V1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.MessageHeader headerType
                     */
                    static addHeaderType(builder, headerType) {
                        builder.addFieldInt8(1, headerType, org.apache.arrow.flatbuf.MessageHeader.NONE);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset headerOffset
                     */
                    static addHeader(builder, headerOffset) {
                        builder.addFieldOffset(2, headerOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long bodyLength
                     */
                    static addBodyLength(builder, bodyLength) {
                        builder.addFieldInt64(3, bodyLength, builder.createLong(0, 0));
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset customMetadataOffset
                     */
                    static addCustomMetadata(builder, customMetadataOffset) {
                        builder.addFieldOffset(4, customMetadataOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<flatbuffers.Offset> data
                     * @returns flatbuffers.Offset
                     */
                    static createCustomMetadataVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startCustomMetadataVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endMessage(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset offset
                     */
                    static finishMessageBuffer(builder, offset) {
                        builder.finish(offset);
                    }
                    static createMessage(builder, version, headerType, headerOffset, bodyLength, customMetadataOffset) {
                        Message.startMessage(builder);
                        Message.addVersion(builder, version);
                        Message.addHeaderType(builder, headerType);
                        Message.addHeader(builder, headerOffset);
                        Message.addBodyLength(builder, bodyLength);
                        Message.addCustomMetadata(builder, customMetadataOffset);
                        return Message.endMessage(builder);
                    }
                }
                flatbuf.Message = Message;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));

//# sourceMappingURL=Message.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/fb/Schema.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/fb/Schema.mjs ***!
  \*************************************************/
/*! exports provided: org */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "org", function() { return org; });
/* tslint:disable:class-name */
/**
 * @enum {number}
 */
var org;
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let MetadataVersion;
                (function (MetadataVersion) {
                    /**
                     * 0.1.0
                     */
                    MetadataVersion[MetadataVersion["V1"] = 0] = "V1";
                    /**
                     * 0.2.0
                     */
                    MetadataVersion[MetadataVersion["V2"] = 1] = "V2";
                    /**
                     * 0.3.0 -> 0.7.1
                     */
                    MetadataVersion[MetadataVersion["V3"] = 2] = "V3";
                    /**
                     * >= 0.8.0
                     */
                    MetadataVersion[MetadataVersion["V4"] = 3] = "V4";
                })(MetadataVersion = flatbuf.MetadataVersion || (flatbuf.MetadataVersion = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let UnionMode;
                (function (UnionMode) {
                    UnionMode[UnionMode["Sparse"] = 0] = "Sparse";
                    UnionMode[UnionMode["Dense"] = 1] = "Dense";
                })(UnionMode = flatbuf.UnionMode || (flatbuf.UnionMode = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let Precision;
                (function (Precision) {
                    Precision[Precision["HALF"] = 0] = "HALF";
                    Precision[Precision["SINGLE"] = 1] = "SINGLE";
                    Precision[Precision["DOUBLE"] = 2] = "DOUBLE";
                })(Precision = flatbuf.Precision || (flatbuf.Precision = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let DateUnit;
                (function (DateUnit) {
                    DateUnit[DateUnit["DAY"] = 0] = "DAY";
                    DateUnit[DateUnit["MILLISECOND"] = 1] = "MILLISECOND";
                })(DateUnit = flatbuf.DateUnit || (flatbuf.DateUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let TimeUnit;
                (function (TimeUnit) {
                    TimeUnit[TimeUnit["SECOND"] = 0] = "SECOND";
                    TimeUnit[TimeUnit["MILLISECOND"] = 1] = "MILLISECOND";
                    TimeUnit[TimeUnit["MICROSECOND"] = 2] = "MICROSECOND";
                    TimeUnit[TimeUnit["NANOSECOND"] = 3] = "NANOSECOND";
                })(TimeUnit = flatbuf.TimeUnit || (flatbuf.TimeUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let IntervalUnit;
                (function (IntervalUnit) {
                    IntervalUnit[IntervalUnit["YEAR_MONTH"] = 0] = "YEAR_MONTH";
                    IntervalUnit[IntervalUnit["DAY_TIME"] = 1] = "DAY_TIME";
                })(IntervalUnit = flatbuf.IntervalUnit || (flatbuf.IntervalUnit = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * Top-level Type value, enabling extensible type-specific metadata. We can
 * add new logical types to Type without breaking backwards compatibility
 *
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let Type;
                (function (Type) {
                    Type[Type["NONE"] = 0] = "NONE";
                    Type[Type["Null"] = 1] = "Null";
                    Type[Type["Int"] = 2] = "Int";
                    Type[Type["FloatingPoint"] = 3] = "FloatingPoint";
                    Type[Type["Binary"] = 4] = "Binary";
                    Type[Type["Utf8"] = 5] = "Utf8";
                    Type[Type["Bool"] = 6] = "Bool";
                    Type[Type["Decimal"] = 7] = "Decimal";
                    Type[Type["Date"] = 8] = "Date";
                    Type[Type["Time"] = 9] = "Time";
                    Type[Type["Timestamp"] = 10] = "Timestamp";
                    Type[Type["Interval"] = 11] = "Interval";
                    Type[Type["List"] = 12] = "List";
                    Type[Type["Struct_"] = 13] = "Struct_";
                    Type[Type["Union"] = 14] = "Union";
                    Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
                    Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
                    Type[Type["Map"] = 17] = "Map";
                    Type[Type["Duration"] = 18] = "Duration";
                    Type[Type["LargeBinary"] = 19] = "LargeBinary";
                    Type[Type["LargeUtf8"] = 20] = "LargeUtf8";
                    Type[Type["LargeList"] = 21] = "LargeList";
                })(Type = flatbuf.Type || (flatbuf.Type = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * Endianness of the platform producing the data
 *
 * @enum {number}
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                let Endianness;
                (function (Endianness) {
                    Endianness[Endianness["Little"] = 0] = "Little";
                    Endianness[Endianness["Big"] = 1] = "Big";
                })(Endianness = flatbuf.Endianness || (flatbuf.Endianness = {}));
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * These are stored in the flatbuffer in the Type union below
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Null {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Null
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Null= obj
                     * @returns Null
                     */
                    static getRootAsNull(bb, obj) {
                        return (obj || new Null).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startNull(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endNull(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createNull(builder) {
                        Null.startNull(builder);
                        return Null.endNull(builder);
                    }
                }
                flatbuf.Null = Null;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * A Struct_ in the flatbuffer metadata is the same as an Arrow Struct
 * (according to the physical memory layout). We used Struct_ here as
 * Struct is a reserved word in Flatbuffers
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Struct_ {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Struct_
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Struct_= obj
                     * @returns Struct_
                     */
                    static getRootAsStruct_(bb, obj) {
                        return (obj || new Struct_).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startStruct_(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endStruct_(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createStruct_(builder) {
                        Struct_.startStruct_(builder);
                        return Struct_.endStruct_(builder);
                    }
                }
                flatbuf.Struct_ = Struct_;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class List {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns List
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param List= obj
                     * @returns List
                     */
                    static getRootAsList(bb, obj) {
                        return (obj || new List).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startList(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endList(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createList(builder) {
                        List.startList(builder);
                        return List.endList(builder);
                    }
                }
                flatbuf.List = List;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Same as List, but with 64-bit offsets, allowing to represent
 * extremely large data values.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class LargeList {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns LargeList
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param LargeList= obj
                     * @returns LargeList
                     */
                    static getRootAsLargeList(bb, obj) {
                        return (obj || new LargeList).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startLargeList(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endLargeList(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createLargeList(builder) {
                        LargeList.startLargeList(builder);
                        return LargeList.endLargeList(builder);
                    }
                }
                flatbuf.LargeList = LargeList;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class FixedSizeList {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns FixedSizeList
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param FixedSizeList= obj
                     * @returns FixedSizeList
                     */
                    static getRootAsFixedSizeList(bb, obj) {
                        return (obj || new FixedSizeList).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * Number of list items per value
                     *
                     * @returns number
                     */
                    listSize() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startFixedSizeList(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number listSize
                     */
                    static addListSize(builder, listSize) {
                        builder.addFieldInt32(0, listSize, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endFixedSizeList(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createFixedSizeList(builder, listSize) {
                        FixedSizeList.startFixedSizeList(builder);
                        FixedSizeList.addListSize(builder, listSize);
                        return FixedSizeList.endFixedSizeList(builder);
                    }
                }
                flatbuf.FixedSizeList = FixedSizeList;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * A Map is a logical nested type that is represented as
 *
 * List<entry: Struct<key: K, value: V>>
 *
 * In this layout, the keys and values are each respectively contiguous. We do
 * not constrain the key and value types, so the application is responsible
 * for ensuring that the keys are hashable and unique. Whether the keys are sorted
 * may be set in the metadata for this field
 *
 * In a Field with Map type, the Field has a child Struct field, which then
 * has two children: key type and the second the value type. The names of the
 * child fields may be respectively "entry", "key", and "value", but this is
 * not enforced
 *
 * Map
 *   - child[0] entry: Struct
 *     - child[0] key: K
 *     - child[1] value: V
 *
 * Neither the "entry" field nor the "key" field may be nullable.
 *
 * The metadata is structured so that Arrow systems without special handling
 * for Map can make Map an alias for List. The "layout" attribute for the Map
 * field must have the same contents as a List.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Map {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Map
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Map= obj
                     * @returns Map
                     */
                    static getRootAsMap(bb, obj) {
                        return (obj || new Map).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * Set to true if the keys within each value are sorted
                     *
                     * @returns boolean
                     */
                    keysSorted() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startMap(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param boolean keysSorted
                     */
                    static addKeysSorted(builder, keysSorted) {
                        builder.addFieldInt8(0, +keysSorted, +false);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endMap(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createMap(builder, keysSorted) {
                        Map.startMap(builder);
                        Map.addKeysSorted(builder, keysSorted);
                        return Map.endMap(builder);
                    }
                }
                flatbuf.Map = Map;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * A union is a complex type with children in Field
 * By default ids in the type vector refer to the offsets in the children
 * optionally typeIds provides an indirection between the child offset and the type id
 * for each child typeIds[offset] is the id used in the type vector
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Union {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Union
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Union= obj
                     * @returns Union
                     */
                    static getRootAsUnion(bb, obj) {
                        return (obj || new Union).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.UnionMode
                     */
                    mode() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.UnionMode.Sparse;
                    }
                    /**
                     * @param number index
                     * @returns number
                     */
                    typeIds(index) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
                    }
                    /**
                     * @returns number
                     */
                    typeIdsLength() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @returns Int32Array
                     */
                    typeIdsArray() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startUnion(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.UnionMode mode
                     */
                    static addMode(builder, mode) {
                        builder.addFieldInt16(0, mode, org.apache.arrow.flatbuf.UnionMode.Sparse);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset typeIdsOffset
                     */
                    static addTypeIds(builder, typeIdsOffset) {
                        builder.addFieldOffset(1, typeIdsOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<number> data
                     * @returns flatbuffers.Offset
                     */
                    static createTypeIdsVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addInt32(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startTypeIdsVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endUnion(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createUnion(builder, mode, typeIdsOffset) {
                        Union.startUnion(builder);
                        Union.addMode(builder, mode);
                        Union.addTypeIds(builder, typeIdsOffset);
                        return Union.endUnion(builder);
                    }
                }
                flatbuf.Union = Union;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Int {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Int
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Int= obj
                     * @returns Int
                     */
                    static getRootAsInt(bb, obj) {
                        return (obj || new Int).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns number
                     */
                    bitWidth() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @returns boolean
                     */
                    isSigned() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startInt(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number bitWidth
                     */
                    static addBitWidth(builder, bitWidth) {
                        builder.addFieldInt32(0, bitWidth, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param boolean isSigned
                     */
                    static addIsSigned(builder, isSigned) {
                        builder.addFieldInt8(1, +isSigned, +false);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endInt(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createInt(builder, bitWidth, isSigned) {
                        Int.startInt(builder);
                        Int.addBitWidth(builder, bitWidth);
                        Int.addIsSigned(builder, isSigned);
                        return Int.endInt(builder);
                    }
                }
                flatbuf.Int = Int;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class FloatingPoint {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns FloatingPoint
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param FloatingPoint= obj
                     * @returns FloatingPoint
                     */
                    static getRootAsFloatingPoint(bb, obj) {
                        return (obj || new FloatingPoint).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.Precision
                     */
                    precision() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.Precision.HALF;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startFloatingPoint(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.Precision precision
                     */
                    static addPrecision(builder, precision) {
                        builder.addFieldInt16(0, precision, org.apache.arrow.flatbuf.Precision.HALF);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endFloatingPoint(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createFloatingPoint(builder, precision) {
                        FloatingPoint.startFloatingPoint(builder);
                        FloatingPoint.addPrecision(builder, precision);
                        return FloatingPoint.endFloatingPoint(builder);
                    }
                }
                flatbuf.FloatingPoint = FloatingPoint;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Unicode with UTF-8 encoding
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Utf8 {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Utf8
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Utf8= obj
                     * @returns Utf8
                     */
                    static getRootAsUtf8(bb, obj) {
                        return (obj || new Utf8).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startUtf8(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endUtf8(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createUtf8(builder) {
                        Utf8.startUtf8(builder);
                        return Utf8.endUtf8(builder);
                    }
                }
                flatbuf.Utf8 = Utf8;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Opaque binary data
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Binary {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Binary
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Binary= obj
                     * @returns Binary
                     */
                    static getRootAsBinary(bb, obj) {
                        return (obj || new Binary).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startBinary(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endBinary(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createBinary(builder) {
                        Binary.startBinary(builder);
                        return Binary.endBinary(builder);
                    }
                }
                flatbuf.Binary = Binary;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Same as Utf8, but with 64-bit offsets, allowing to represent
 * extremely large data values.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class LargeUtf8 {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns LargeUtf8
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param LargeUtf8= obj
                     * @returns LargeUtf8
                     */
                    static getRootAsLargeUtf8(bb, obj) {
                        return (obj || new LargeUtf8).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startLargeUtf8(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endLargeUtf8(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createLargeUtf8(builder) {
                        LargeUtf8.startLargeUtf8(builder);
                        return LargeUtf8.endLargeUtf8(builder);
                    }
                }
                flatbuf.LargeUtf8 = LargeUtf8;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Same as Binary, but with 64-bit offsets, allowing to represent
 * extremely large data values.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class LargeBinary {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns LargeBinary
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param LargeBinary= obj
                     * @returns LargeBinary
                     */
                    static getRootAsLargeBinary(bb, obj) {
                        return (obj || new LargeBinary).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startLargeBinary(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endLargeBinary(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createLargeBinary(builder) {
                        LargeBinary.startLargeBinary(builder);
                        return LargeBinary.endLargeBinary(builder);
                    }
                }
                flatbuf.LargeBinary = LargeBinary;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class FixedSizeBinary {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns FixedSizeBinary
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param FixedSizeBinary= obj
                     * @returns FixedSizeBinary
                     */
                    static getRootAsFixedSizeBinary(bb, obj) {
                        return (obj || new FixedSizeBinary).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * Number of bytes per value
                     *
                     * @returns number
                     */
                    byteWidth() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startFixedSizeBinary(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number byteWidth
                     */
                    static addByteWidth(builder, byteWidth) {
                        builder.addFieldInt32(0, byteWidth, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endFixedSizeBinary(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createFixedSizeBinary(builder, byteWidth) {
                        FixedSizeBinary.startFixedSizeBinary(builder);
                        FixedSizeBinary.addByteWidth(builder, byteWidth);
                        return FixedSizeBinary.endFixedSizeBinary(builder);
                    }
                }
                flatbuf.FixedSizeBinary = FixedSizeBinary;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Bool {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Bool
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Bool= obj
                     * @returns Bool
                     */
                    static getRootAsBool(bb, obj) {
                        return (obj || new Bool).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startBool(builder) {
                        builder.startObject(0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endBool(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createBool(builder) {
                        Bool.startBool(builder);
                        return Bool.endBool(builder);
                    }
                }
                flatbuf.Bool = Bool;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Decimal {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Decimal
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Decimal= obj
                     * @returns Decimal
                     */
                    static getRootAsDecimal(bb, obj) {
                        return (obj || new Decimal).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * Total number of decimal digits
                     *
                     * @returns number
                     */
                    precision() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    }
                    /**
                     * Number of digits after the decimal point "."
                     *
                     * @returns number
                     */
                    scale() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startDecimal(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number precision
                     */
                    static addPrecision(builder, precision) {
                        builder.addFieldInt32(0, precision, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number scale
                     */
                    static addScale(builder, scale) {
                        builder.addFieldInt32(1, scale, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endDecimal(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createDecimal(builder, precision, scale) {
                        Decimal.startDecimal(builder);
                        Decimal.addPrecision(builder, precision);
                        Decimal.addScale(builder, scale);
                        return Decimal.endDecimal(builder);
                    }
                }
                flatbuf.Decimal = Decimal;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Date is either a 32-bit or 64-bit type representing elapsed time since UNIX
 * epoch (1970-01-01), stored in either of two units:
 *
 * * Milliseconds (64 bits) indicating UNIX time elapsed since the epoch (no
 *   leap seconds), where the values are evenly divisible by 86400000
 * * Days (32 bits) since the UNIX epoch
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Date {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Date
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Date= obj
                     * @returns Date
                     */
                    static getRootAsDate(bb, obj) {
                        return (obj || new Date).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.DateUnit
                     */
                    unit() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.DateUnit.MILLISECOND;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startDate(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.DateUnit unit
                     */
                    static addUnit(builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.DateUnit.MILLISECOND);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endDate(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createDate(builder, unit) {
                        Date.startDate(builder);
                        Date.addUnit(builder, unit);
                        return Date.endDate(builder);
                    }
                }
                flatbuf.Date = Date;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Time type. The physical storage type depends on the unit
 * - SECOND and MILLISECOND: 32 bits
 * - MICROSECOND and NANOSECOND: 64 bits
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Time {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Time
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Time= obj
                     * @returns Time
                     */
                    static getRootAsTime(bb, obj) {
                        return (obj || new Time).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.TimeUnit
                     */
                    unit() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.TimeUnit.MILLISECOND;
                    }
                    /**
                     * @returns number
                     */
                    bitWidth() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startTime(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.TimeUnit unit
                     */
                    static addUnit(builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.MILLISECOND);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number bitWidth
                     */
                    static addBitWidth(builder, bitWidth) {
                        builder.addFieldInt32(1, bitWidth, 32);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endTime(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createTime(builder, unit, bitWidth) {
                        Time.startTime(builder);
                        Time.addUnit(builder, unit);
                        Time.addBitWidth(builder, bitWidth);
                        return Time.endTime(builder);
                    }
                }
                flatbuf.Time = Time;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * Time elapsed from the Unix epoch, 00:00:00.000 on 1 January 1970, excluding
 * leap seconds, as a 64-bit integer. Note that UNIX time does not include
 * leap seconds.
 *
 * The Timestamp metadata supports both "time zone naive" and "time zone
 * aware" timestamps. Read about the timezone attribute for more detail
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Timestamp {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Timestamp
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Timestamp= obj
                     * @returns Timestamp
                     */
                    static getRootAsTimestamp(bb, obj) {
                        return (obj || new Timestamp).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.TimeUnit
                     */
                    unit() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.TimeUnit.SECOND;
                    }
                    timezone(optionalEncoding) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startTimestamp(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.TimeUnit unit
                     */
                    static addUnit(builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.SECOND);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset timezoneOffset
                     */
                    static addTimezone(builder, timezoneOffset) {
                        builder.addFieldOffset(1, timezoneOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endTimestamp(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createTimestamp(builder, unit, timezoneOffset) {
                        Timestamp.startTimestamp(builder);
                        Timestamp.addUnit(builder, unit);
                        Timestamp.addTimezone(builder, timezoneOffset);
                        return Timestamp.endTimestamp(builder);
                    }
                }
                flatbuf.Timestamp = Timestamp;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Interval {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Interval
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Interval= obj
                     * @returns Interval
                     */
                    static getRootAsInterval(bb, obj) {
                        return (obj || new Interval).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.IntervalUnit
                     */
                    unit() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startInterval(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.IntervalUnit unit
                     */
                    static addUnit(builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.IntervalUnit.YEAR_MONTH);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endInterval(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createInterval(builder, unit) {
                        Interval.startInterval(builder);
                        Interval.addUnit(builder, unit);
                        return Interval.endInterval(builder);
                    }
                }
                flatbuf.Interval = Interval;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Duration {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Duration
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Duration= obj
                     * @returns Duration
                     */
                    static getRootAsDuration(bb, obj) {
                        return (obj || new Duration).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.TimeUnit
                     */
                    unit() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.TimeUnit.MILLISECOND;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startDuration(builder) {
                        builder.startObject(1);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.TimeUnit unit
                     */
                    static addUnit(builder, unit) {
                        builder.addFieldInt16(0, unit, org.apache.arrow.flatbuf.TimeUnit.MILLISECOND);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endDuration(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createDuration(builder, unit) {
                        Duration.startDuration(builder);
                        Duration.addUnit(builder, unit);
                        return Duration.endDuration(builder);
                    }
                }
                flatbuf.Duration = Duration;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * user defined key value pairs to add custom metadata to arrow
 * key namespacing is the responsibility of the user
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class KeyValue {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns KeyValue
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param KeyValue= obj
                     * @returns KeyValue
                     */
                    static getRootAsKeyValue(bb, obj) {
                        return (obj || new KeyValue).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    key(optionalEncoding) {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    }
                    value(optionalEncoding) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startKeyValue(builder) {
                        builder.startObject(2);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset keyOffset
                     */
                    static addKey(builder, keyOffset) {
                        builder.addFieldOffset(0, keyOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset valueOffset
                     */
                    static addValue(builder, valueOffset) {
                        builder.addFieldOffset(1, valueOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endKeyValue(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createKeyValue(builder, keyOffset, valueOffset) {
                        KeyValue.startKeyValue(builder);
                        KeyValue.addKey(builder, keyOffset);
                        KeyValue.addValue(builder, valueOffset);
                        return KeyValue.endKeyValue(builder);
                    }
                }
                flatbuf.KeyValue = KeyValue;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * Dictionary encoding metadata
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class DictionaryEncoding {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns DictionaryEncoding
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param DictionaryEncoding= obj
                     * @returns DictionaryEncoding
                     */
                    static getRootAsDictionaryEncoding(bb, obj) {
                        return (obj || new DictionaryEncoding).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * The known dictionary id in the application where this data is used. In
                     * the file or streaming formats, the dictionary ids are found in the
                     * DictionaryBatch messages
                     *
                     * @returns flatbuffers.Long
                     */
                    id() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
                    }
                    /**
                     * The dictionary indices are constrained to be positive integers. If this
                     * field is null, the indices must be signed int32
                     *
                     * @param org.apache.arrow.flatbuf.Int= obj
                     * @returns org.apache.arrow.flatbuf.Int|null
                     */
                    indexType(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Int).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    }
                    /**
                     * By default, dictionaries are not ordered, or the order does not have
                     * semantic meaning. In some statistical, applications, dictionary-encoding
                     * is used to represent ordered categorical data, and we provide a way to
                     * preserve that metadata here
                     *
                     * @returns boolean
                     */
                    isOrdered() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startDictionaryEncoding(builder) {
                        builder.startObject(3);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long id
                     */
                    static addId(builder, id) {
                        builder.addFieldInt64(0, id, builder.createLong(0, 0));
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset indexTypeOffset
                     */
                    static addIndexType(builder, indexTypeOffset) {
                        builder.addFieldOffset(1, indexTypeOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param boolean isOrdered
                     */
                    static addIsOrdered(builder, isOrdered) {
                        builder.addFieldInt8(2, +isOrdered, +false);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endDictionaryEncoding(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createDictionaryEncoding(builder, id, indexTypeOffset, isOrdered) {
                        DictionaryEncoding.startDictionaryEncoding(builder);
                        DictionaryEncoding.addId(builder, id);
                        DictionaryEncoding.addIndexType(builder, indexTypeOffset);
                        DictionaryEncoding.addIsOrdered(builder, isOrdered);
                        return DictionaryEncoding.endDictionaryEncoding(builder);
                    }
                }
                flatbuf.DictionaryEncoding = DictionaryEncoding;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * A field represents a named column in a record / row batch or child of a
 * nested type.
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Field {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Field
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Field= obj
                     * @returns Field
                     */
                    static getRootAsField(bb, obj) {
                        return (obj || new Field).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    name(optionalEncoding) {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
                    }
                    /**
                     * Whether or not this field can contain nulls. Should be true in general.
                     *
                     * @returns boolean
                     */
                    nullable() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
                    }
                    /**
                     * @returns org.apache.arrow.flatbuf.Type
                     */
                    typeType() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? /**  */ (this.bb.readUint8(this.bb_pos + offset)) : org.apache.arrow.flatbuf.Type.NONE;
                    }
                    /**
                     * This is the type of the decoded value if the field is dictionary encoded.
                     *
                     * @param flatbuffers.Table obj
                     * @returns ?flatbuffers.Table
                     */
                    type(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 10);
                        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
                    }
                    /**
                     * Present only if the field is dictionary encoded.
                     *
                     * @param org.apache.arrow.flatbuf.DictionaryEncoding= obj
                     * @returns org.apache.arrow.flatbuf.DictionaryEncoding|null
                     */
                    dictionary(obj) {
                        let offset = this.bb.__offset(this.bb_pos, 12);
                        return offset ? (obj || new org.apache.arrow.flatbuf.DictionaryEncoding).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
                    }
                    /**
                     * children apply only to nested data types like Struct, List and Union. For
                     * primitive types children will have length 0.
                     *
                     * @param number index
                     * @param org.apache.arrow.flatbuf.Field= obj
                     * @returns org.apache.arrow.flatbuf.Field
                     */
                    children(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 14);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Field).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    childrenLength() {
                        let offset = this.bb.__offset(this.bb_pos, 14);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * User-defined metadata
                     *
                     * @param number index
                     * @param org.apache.arrow.flatbuf.KeyValue= obj
                     * @returns org.apache.arrow.flatbuf.KeyValue
                     */
                    customMetadata(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 16);
                        return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    customMetadataLength() {
                        let offset = this.bb.__offset(this.bb_pos, 16);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startField(builder) {
                        builder.startObject(7);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset nameOffset
                     */
                    static addName(builder, nameOffset) {
                        builder.addFieldOffset(0, nameOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param boolean nullable
                     */
                    static addNullable(builder, nullable) {
                        builder.addFieldInt8(1, +nullable, +false);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.Type typeType
                     */
                    static addTypeType(builder, typeType) {
                        builder.addFieldInt8(2, typeType, org.apache.arrow.flatbuf.Type.NONE);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset typeOffset
                     */
                    static addType(builder, typeOffset) {
                        builder.addFieldOffset(3, typeOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset dictionaryOffset
                     */
                    static addDictionary(builder, dictionaryOffset) {
                        builder.addFieldOffset(4, dictionaryOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset childrenOffset
                     */
                    static addChildren(builder, childrenOffset) {
                        builder.addFieldOffset(5, childrenOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<flatbuffers.Offset> data
                     * @returns flatbuffers.Offset
                     */
                    static createChildrenVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startChildrenVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset customMetadataOffset
                     */
                    static addCustomMetadata(builder, customMetadataOffset) {
                        builder.addFieldOffset(6, customMetadataOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<flatbuffers.Offset> data
                     * @returns flatbuffers.Offset
                     */
                    static createCustomMetadataVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startCustomMetadataVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endField(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    static createField(builder, nameOffset, nullable, typeType, typeOffset, dictionaryOffset, childrenOffset, customMetadataOffset) {
                        Field.startField(builder);
                        Field.addName(builder, nameOffset);
                        Field.addNullable(builder, nullable);
                        Field.addTypeType(builder, typeType);
                        Field.addType(builder, typeOffset);
                        Field.addDictionary(builder, dictionaryOffset);
                        Field.addChildren(builder, childrenOffset);
                        Field.addCustomMetadata(builder, customMetadataOffset);
                        return Field.endField(builder);
                    }
                }
                flatbuf.Field = Field;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * A Buffer represents a single contiguous memory segment
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Buffer {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Buffer
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * The relative offset into the shared memory page where the bytes for this
                     * buffer starts
                     *
                     * @returns flatbuffers.Long
                     */
                    offset() {
                        return this.bb.readInt64(this.bb_pos);
                    }
                    /**
                     * The absolute length (in bytes) of the memory buffer. The memory is found
                     * from offset (inclusive) to offset + length (non-inclusive).
                     *
                     * @returns flatbuffers.Long
                     */
                    length() {
                        return this.bb.readInt64(this.bb_pos + 8);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Long offset
                     * @param flatbuffers.Long length
                     * @returns flatbuffers.Offset
                     */
                    static createBuffer(builder, offset, length) {
                        builder.prep(8, 16);
                        builder.writeInt64(length);
                        builder.writeInt64(offset);
                        return builder.offset();
                    }
                }
                flatbuf.Buffer = Buffer;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
/**
 * ----------------------------------------------------------------------
 * A Schema describes the columns in a row batch
 *
 * @constructor
 */
(function (org) {
    var apache;
    (function (apache) {
        var arrow;
        (function (arrow) {
            var flatbuf;
            (function (flatbuf) {
                class Schema {
                    constructor() {
                        this.bb = null;
                        this.bb_pos = 0;
                    }
                    /**
                     * @param number i
                     * @param flatbuffers.ByteBuffer bb
                     * @returns Schema
                     */
                    __init(i, bb) {
                        this.bb_pos = i;
                        this.bb = bb;
                        return this;
                    }
                    /**
                     * @param flatbuffers.ByteBuffer bb
                     * @param Schema= obj
                     * @returns Schema
                     */
                    static getRootAsSchema(bb, obj) {
                        return (obj || new Schema).__init(bb.readInt32(bb.position()) + bb.position(), bb);
                    }
                    /**
                     * endianness of the buffer
                     * it is Little Endian by default
                     * if endianness doesn't match the underlying system then the vectors need to be converted
                     *
                     * @returns org.apache.arrow.flatbuf.Endianness
                     */
                    endianness() {
                        let offset = this.bb.__offset(this.bb_pos, 4);
                        return offset ? /**  */ (this.bb.readInt16(this.bb_pos + offset)) : org.apache.arrow.flatbuf.Endianness.Little;
                    }
                    /**
                     * @param number index
                     * @param org.apache.arrow.flatbuf.Field= obj
                     * @returns org.apache.arrow.flatbuf.Field
                     */
                    fields(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? (obj || new org.apache.arrow.flatbuf.Field).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    fieldsLength() {
                        let offset = this.bb.__offset(this.bb_pos, 6);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param number index
                     * @param org.apache.arrow.flatbuf.KeyValue= obj
                     * @returns org.apache.arrow.flatbuf.KeyValue
                     */
                    customMetadata(index, obj) {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? (obj || new org.apache.arrow.flatbuf.KeyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
                    }
                    /**
                     * @returns number
                     */
                    customMetadataLength() {
                        let offset = this.bb.__offset(this.bb_pos, 8);
                        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     */
                    static startSchema(builder) {
                        builder.startObject(3);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param org.apache.arrow.flatbuf.Endianness endianness
                     */
                    static addEndianness(builder, endianness) {
                        builder.addFieldInt16(0, endianness, org.apache.arrow.flatbuf.Endianness.Little);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset fieldsOffset
                     */
                    static addFields(builder, fieldsOffset) {
                        builder.addFieldOffset(1, fieldsOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<flatbuffers.Offset> data
                     * @returns flatbuffers.Offset
                     */
                    static createFieldsVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startFieldsVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset customMetadataOffset
                     */
                    static addCustomMetadata(builder, customMetadataOffset) {
                        builder.addFieldOffset(2, customMetadataOffset, 0);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param Array.<flatbuffers.Offset> data
                     * @returns flatbuffers.Offset
                     */
                    static createCustomMetadataVector(builder, data) {
                        builder.startVector(4, data.length, 4);
                        for (let i = data.length - 1; i >= 0; i--) {
                            builder.addOffset(data[i]);
                        }
                        return builder.endVector();
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param number numElems
                     */
                    static startCustomMetadataVector(builder, numElems) {
                        builder.startVector(4, numElems, 4);
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @returns flatbuffers.Offset
                     */
                    static endSchema(builder) {
                        let offset = builder.endObject();
                        return offset;
                    }
                    /**
                     * @param flatbuffers.Builder builder
                     * @param flatbuffers.Offset offset
                     */
                    static finishSchemaBuffer(builder, offset) {
                        builder.finish(offset);
                    }
                    static createSchema(builder, endianness, fieldsOffset, customMetadataOffset) {
                        Schema.startSchema(builder);
                        Schema.addEndianness(builder, endianness);
                        Schema.addFields(builder, fieldsOffset);
                        Schema.addCustomMetadata(builder, customMetadataOffset);
                        return Schema.endSchema(builder);
                    }
                }
                flatbuf.Schema = Schema;
            })(flatbuf = arrow.flatbuf || (arrow.flatbuf = {}));
        })(arrow = apache.arrow || (apache.arrow = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));

//# sourceMappingURL=Schema.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/adapters.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/io/adapters.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
/* harmony default export */ __webpack_exports__["default"] = ({
    fromIterable(source) {
        return pump(fromIterable(source));
    },
    fromAsyncIterable(source) {
        return pump(fromAsyncIterable(source));
    },
    fromDOMStream(source) {
        return pump(fromDOMStream(source));
    },
    fromNodeStream(stream) {
        return pump(fromNodeStream(stream));
    },
    // @ts-ignore
    toDOMStream(source, options) {
        throw new Error(`"toDOMStream" not available in this environment`);
    },
    // @ts-ignore
    toNodeStream(source, options) {
        throw new Error(`"toNodeStream" not available in this environment`);
    },
});
/** @ignore */
const pump = (iterator) => { iterator.next(); return iterator; };
/** @ignore */
function* fromIterable(source) {
    let done, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
        if (cmd === 'peek') {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size)[0];
        }
        [buffer, buffers, bufferLength] = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size);
        return buffer;
    }
    // Yield so the caller can inject the read command before creating the source Iterator
    ({ cmd, size } = yield null);
    // initialize the iterator
    let it = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8ArrayIterator"])(source)[Symbol.iterator]();
    try {
        do {
            // read the next value
            ({ done, value: buffer } = isNaN(size - bufferLength) ?
                it.next(undefined) : it.next(size - bufferLength));
            // if chunk is not null or empty, push it onto the queue
            if (!done && buffer.byteLength > 0) {
                buffers.push(buffer);
                bufferLength += buffer.byteLength;
            }
            // If we have enough bytes in our buffer, yield chunks until we don't
            if (done || size <= bufferLength) {
                do {
                    ({ cmd, size } = yield byteRange());
                } while (size < bufferLength);
            }
        } while (!done);
    }
    catch (e) {
        (threw = true) && (typeof it.throw === 'function') && (it.throw(e));
    }
    finally {
        (threw === false) && (typeof it.return === 'function') && (it.return());
    }
}
/** @ignore */
async function* fromAsyncIterable(source) {
    let done, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
        if (cmd === 'peek') {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size)[0];
        }
        [buffer, buffers, bufferLength] = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size);
        return buffer;
    }
    // Yield so the caller can inject the read command before creating the source AsyncIterator
    ({ cmd, size } = yield null);
    // initialize the iterator
    let it = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8ArrayAsyncIterator"])(source)[Symbol.asyncIterator]();
    try {
        do {
            // read the next value
            ({ done, value: buffer } = isNaN(size - bufferLength)
                ? await it.next(undefined)
                : await it.next(size - bufferLength));
            // if chunk is not null or empty, push it onto the queue
            if (!done && buffer.byteLength > 0) {
                buffers.push(buffer);
                bufferLength += buffer.byteLength;
            }
            // If we have enough bytes in our buffer, yield chunks until we don't
            if (done || size <= bufferLength) {
                do {
                    ({ cmd, size } = yield byteRange());
                } while (size < bufferLength);
            }
        } while (!done);
    }
    catch (e) {
        (threw = true) && (typeof it.throw === 'function') && (await it.throw(e));
    }
    finally {
        (threw === false) && (typeof it.return === 'function') && (await it.return());
    }
}
// All this manual Uint8Array chunk management can be avoided if/when engines
// add support for ArrayBuffer.transfer() or ArrayBuffer.prototype.realloc():
// https://github.com/domenic/proposal-arraybuffer-transfer
/** @ignore */
async function* fromDOMStream(source) {
    let done = false, threw = false;
    let buffers = [], buffer;
    let cmd, size, bufferLength = 0;
    function byteRange() {
        if (cmd === 'peek') {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size)[0];
        }
        [buffer, buffers, bufferLength] = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size);
        return buffer;
    }
    // Yield so the caller can inject the read command before we establish the ReadableStream lock
    ({ cmd, size } = yield null);
    // initialize the reader and lock the stream
    let it = new AdaptiveByteReader(source);
    try {
        do {
            // read the next value
            ({ done, value: buffer } = isNaN(size - bufferLength)
                ? await it['read'](undefined)
                : await it['read'](size - bufferLength));
            // if chunk is not null or empty, push it onto the queue
            if (!done && buffer.byteLength > 0) {
                buffers.push(Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(buffer));
                bufferLength += buffer.byteLength;
            }
            // If we have enough bytes in our buffer, yield chunks until we don't
            if (done || size <= bufferLength) {
                do {
                    ({ cmd, size } = yield byteRange());
                } while (size < bufferLength);
            }
        } while (!done);
    }
    catch (e) {
        (threw = true) && (await it['cancel'](e));
    }
    finally {
        (threw === false) ? (await it['cancel']())
            : source['locked'] && it.releaseLock();
    }
}
/** @ignore */
class AdaptiveByteReader {
    constructor(source) {
        this.source = source;
        this.byobReader = null;
        this.defaultReader = null;
        try {
            this.supportsBYOB = !!(this.reader = this.getBYOBReader());
        }
        catch (e) {
            this.supportsBYOB = !!!(this.reader = this.getDefaultReader());
        }
    }
    get closed() {
        return this.reader ? this.reader['closed'].catch(() => { }) : Promise.resolve();
    }
    releaseLock() {
        if (this.reader) {
            this.reader.releaseLock();
        }
        this.reader = this.byobReader = this.defaultReader = null;
    }
    async cancel(reason) {
        const { reader, source } = this;
        reader && (await reader['cancel'](reason).catch(() => { }));
        source && (source['locked'] && this.releaseLock());
    }
    async read(size) {
        if (size === 0) {
            return { done: this.reader == null, value: new Uint8Array(0) };
        }
        const result = !this.supportsBYOB || typeof size !== 'number'
            ? await this.getDefaultReader().read()
            : await this.readFromBYOBReader(size);
        !result.done && (result.value = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(result));
        return result;
    }
    getDefaultReader() {
        if (this.byobReader) {
            this.releaseLock();
        }
        if (!this.defaultReader) {
            this.defaultReader = this.source['getReader']();
            // We have to catch and swallow errors here to avoid uncaught promise rejection exceptions
            // that seem to be raised when we call `releaseLock()` on this reader. I'm still mystified
            // about why these errors are raised, but I'm sure there's some important spec reason that
            // I haven't considered. I hate to employ such an anti-pattern here, but it seems like the
            // only solution in this case :/
            this.defaultReader['closed'].catch(() => { });
        }
        return (this.reader = this.defaultReader);
    }
    getBYOBReader() {
        if (this.defaultReader) {
            this.releaseLock();
        }
        if (!this.byobReader) {
            this.byobReader = this.source['getReader']({ mode: 'byob' });
            // We have to catch and swallow errors here to avoid uncaught promise rejection exceptions
            // that seem to be raised when we call `releaseLock()` on this reader. I'm still mystified
            // about why these errors are raised, but I'm sure there's some important spec reason that
            // I haven't considered. I hate to employ such an anti-pattern here, but it seems like the
            // only solution in this case :/
            this.byobReader['closed'].catch(() => { });
        }
        return (this.reader = this.byobReader);
    }
    // This strategy plucked from the example in the streams spec:
    // https://streams.spec.whatwg.org/#example-manual-read-bytes
    async readFromBYOBReader(size) {
        return await readInto(this.getBYOBReader(), new ArrayBuffer(size), 0, size);
    }
}
/** @ignore */
async function readInto(reader, buffer, offset, size) {
    if (offset >= size) {
        return { done: false, value: new Uint8Array(buffer, 0, size) };
    }
    const { done, value } = await reader.read(new Uint8Array(buffer, offset, size - offset));
    if (((offset += value.byteLength) < size) && !done) {
        return await readInto(reader, value.buffer, offset, size);
    }
    return { done, value: new Uint8Array(value.buffer, 0, offset) };
}
/** @ignore */
const onEvent = (stream, event) => {
    let handler = (_) => resolve([event, _]);
    let resolve;
    return [event, handler, new Promise((r) => (resolve = r) && stream['once'](event, handler))];
};
/** @ignore */
async function* fromNodeStream(stream) {
    let events = [];
    let event = 'error';
    let done = false, err = null;
    let cmd, size, bufferLength = 0;
    let buffers = [], buffer;
    function byteRange() {
        if (cmd === 'peek') {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size)[0];
        }
        [buffer, buffers, bufferLength] = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["joinUint8Arrays"])(buffers, size);
        return buffer;
    }
    // Yield so the caller can inject the read command before we
    // add the listener for the source stream's 'readable' event.
    ({ cmd, size } = yield null);
    // ignore stdin if it's a TTY
    if (stream['isTTY']) {
        return yield new Uint8Array(0);
    }
    try {
        // initialize the stream event handlers
        events[0] = onEvent(stream, 'end');
        events[1] = onEvent(stream, 'error');
        do {
            events[2] = onEvent(stream, 'readable');
            // wait on the first message event from the stream
            [event, err] = await Promise.race(events.map((x) => x[2]));
            // if the stream emitted an Error, rethrow it
            if (event === 'error') {
                break;
            }
            if (!(done = event === 'end')) {
                // If the size is NaN, request to read everything in the stream's internal buffer
                if (!isFinite(size - bufferLength)) {
                    buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(stream['read'](undefined));
                }
                else {
                    buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(stream['read'](size - bufferLength));
                    // If the byteLength is 0, then the requested amount is more than the stream has
                    // in its internal buffer. In this case the stream needs a "kick" to tell it to
                    // continue emitting readable events, so request to read everything the stream
                    // has in its internal buffer right now.
                    if (buffer.byteLength < (size - bufferLength)) {
                        buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(stream['read'](undefined));
                    }
                }
                // if chunk is not null or empty, push it onto the queue
                if (buffer.byteLength > 0) {
                    buffers.push(buffer);
                    bufferLength += buffer.byteLength;
                }
            }
            // If we have enough bytes in our buffer, yield chunks until we don't
            if (done || size <= bufferLength) {
                do {
                    ({ cmd, size } = yield byteRange());
                } while (size < bufferLength);
            }
        } while (!done);
    }
    finally {
        await cleanup(events, event === 'error' ? err : null);
    }
    function cleanup(events, err) {
        buffer = buffers = null;
        return new Promise(async (resolve, reject) => {
            for (const [evt, fn] of events) {
                stream['off'](evt, fn);
            }
            try {
                // Some stream implementations don't call the destroy callback,
                // because it's really a node-internal API. Just calling `destroy`
                // here should be enough to conform to the ReadableStream contract
                const destroy = stream['destroy'];
                destroy && destroy.call(stream, err);
                err = undefined;
            }
            catch (e) {
                err = e || err;
            }
            finally {
                err != null ? reject(err) : resolve();
            }
        });
    }
}

//# sourceMappingURL=adapters.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/file.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/io/file.mjs ***!
  \***********************************************/
/*! exports provided: RandomAccessFile, AsyncRandomAccessFile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomAccessFile", function() { return RandomAccessFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncRandomAccessFile", function() { return AsyncRandomAccessFile; });
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
class RandomAccessFile extends _stream__WEBPACK_IMPORTED_MODULE_0__["ByteStream"] {
    constructor(buffer, byteLength) {
        super();
        this.position = 0;
        this.buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_1__["toUint8Array"])(buffer);
        this.size = typeof byteLength === 'undefined' ? this.buffer.byteLength : byteLength;
    }
    readInt32(position) {
        const { buffer, byteOffset } = this.readAt(position, 4);
        return new DataView(buffer, byteOffset).getInt32(0, true);
    }
    seek(position) {
        this.position = Math.min(position, this.size);
        return position < this.size;
    }
    read(nBytes) {
        const { buffer, size, position } = this;
        if (buffer && position < size) {
            if (typeof nBytes !== 'number') {
                nBytes = Infinity;
            }
            this.position = Math.min(size, position + Math.min(size - position, nBytes));
            return buffer.subarray(position, this.position);
        }
        return null;
    }
    readAt(position, nBytes) {
        const buf = this.buffer;
        const end = Math.min(this.size, position + nBytes);
        return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
    }
    close() { this.buffer && (this.buffer = null); }
    throw(value) { this.close(); return { done: true, value }; }
    return(value) { this.close(); return { done: true, value }; }
}
/** @ignore */
class AsyncRandomAccessFile extends _stream__WEBPACK_IMPORTED_MODULE_0__["AsyncByteStream"] {
    constructor(file, byteLength) {
        super();
        this.position = 0;
        this._handle = file;
        if (typeof byteLength === 'number') {
            this.size = byteLength;
        }
        else {
            this._pending = (async () => {
                this.size = (await file.stat()).size;
                delete this._pending;
            })();
        }
    }
    async readInt32(position) {
        const { buffer, byteOffset } = await this.readAt(position, 4);
        return new DataView(buffer, byteOffset).getInt32(0, true);
    }
    async seek(position) {
        this._pending && await this._pending;
        this.position = Math.min(position, this.size);
        return position < this.size;
    }
    async read(nBytes) {
        this._pending && await this._pending;
        const { _handle: file, size, position } = this;
        if (file && position < size) {
            if (typeof nBytes !== 'number') {
                nBytes = Infinity;
            }
            let pos = position, offset = 0, bytesRead = 0;
            let end = Math.min(size, pos + Math.min(size - pos, nBytes));
            let buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
            while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) {
                ({ bytesRead } = await file.read(buffer, offset, buffer.byteLength - offset, pos));
            }
            return buffer;
        }
        return null;
    }
    async readAt(position, nBytes) {
        this._pending && await this._pending;
        const { _handle: file, size } = this;
        if (file && (position + nBytes) < size) {
            const end = Math.min(size, position + nBytes);
            const buffer = new Uint8Array(end - position);
            return (await file.read(buffer, 0, nBytes, position)).buffer;
        }
        return new Uint8Array(nBytes);
    }
    async close() { const f = this._handle; this._handle = null; f && await f.close(); }
    async throw(value) { await this.close(); return { done: true, value }; }
    async return(value) { await this.close(); return { done: true, value }; }
}

//# sourceMappingURL=file.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/interfaces.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/io/interfaces.mjs ***!
  \*****************************************************/
/*! exports provided: ITERATOR_DONE, ArrowJSON, ReadableInterop, AsyncQueue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITERATOR_DONE", function() { return ITERATOR_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowJSON", function() { return ArrowJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadableInterop", function() { return ReadableInterop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncQueue", function() { return AsyncQueue; });
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters */ "./node_modules/apache-arrow/io/adapters.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
const ITERATOR_DONE = Object.freeze({ done: true, value: void (0) });
/** @ignore */
class ArrowJSON {
    // @ts-ignore
    constructor(_json) {
        this._json = _json;
    }
    get schema() { return this._json['schema']; }
    get batches() { return (this._json['batches'] || []); }
    get dictionaries() { return (this._json['dictionaries'] || []); }
}
/** @ignore */
class ReadableInterop {
    tee() {
        return this._getDOMStream().tee();
    }
    pipe(writable, options) {
        return this._getNodeStream().pipe(writable, options);
    }
    pipeTo(writable, options) { return this._getDOMStream().pipeTo(writable, options); }
    pipeThrough(duplex, options) {
        return this._getDOMStream().pipeThrough(duplex, options);
    }
    _getDOMStream() {
        return this._DOMStream || (this._DOMStream = this.toDOMStream());
    }
    _getNodeStream() {
        return this._nodeStream || (this._nodeStream = this.toNodeStream());
    }
}
/** @ignore */
class AsyncQueue extends ReadableInterop {
    constructor() {
        super();
        this._values = [];
        this.resolvers = [];
        this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
    }
    get closed() { return this._closedPromise; }
    async cancel(reason) { await this.return(reason); }
    write(value) {
        if (this._ensureOpen()) {
            this.resolvers.length <= 0
                ? (this._values.push(value))
                : (this.resolvers.shift().resolve({ done: false, value }));
        }
    }
    abort(value) {
        if (this._closedPromiseResolve) {
            this.resolvers.length <= 0
                ? (this._error = { error: value })
                : (this.resolvers.shift().reject({ done: true, value }));
        }
    }
    close() {
        if (this._closedPromiseResolve) {
            const { resolvers } = this;
            while (resolvers.length > 0) {
                resolvers.shift().resolve(ITERATOR_DONE);
            }
            this._closedPromiseResolve();
            this._closedPromiseResolve = undefined;
        }
    }
    [Symbol.asyncIterator]() { return this; }
    toDOMStream(options) {
        return _adapters__WEBPACK_IMPORTED_MODULE_0__["default"].toDOMStream((this._closedPromiseResolve || this._error)
            ? this
            : this._values, options);
    }
    toNodeStream(options) {
        return _adapters__WEBPACK_IMPORTED_MODULE_0__["default"].toNodeStream((this._closedPromiseResolve || this._error)
            ? this
            : this._values, options);
    }
    async throw(_) { await this.abort(_); return ITERATOR_DONE; }
    async return(_) { await this.close(); return ITERATOR_DONE; }
    async read(size) { return (await this.next(size, 'read')).value; }
    async peek(size) { return (await this.next(size, 'peek')).value; }
    next(..._args) {
        if (this._values.length > 0) {
            return Promise.resolve({ done: false, value: this._values.shift() });
        }
        else if (this._error) {
            return Promise.reject({ done: true, value: this._error.error });
        }
        else if (!this._closedPromiseResolve) {
            return Promise.resolve(ITERATOR_DONE);
        }
        else {
            return new Promise((resolve, reject) => {
                this.resolvers.push({ resolve, reject });
            });
        }
    }
    _ensureOpen() {
        if (this._closedPromiseResolve) {
            return true;
        }
        throw new Error(`${this} is closed`);
    }
}

//# sourceMappingURL=interfaces.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/stream.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/io/stream.mjs ***!
  \*************************************************/
/*! exports provided: AsyncByteQueue, ByteStream, AsyncByteStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncByteQueue", function() { return AsyncByteQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteStream", function() { return ByteStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncByteStream", function() { return AsyncByteStream; });
/* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapters */ "./node_modules/apache-arrow/io/adapters.mjs");
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./node_modules/apache-arrow/io/interfaces.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */
class AsyncByteQueue extends _interfaces__WEBPACK_IMPORTED_MODULE_2__["AsyncQueue"] {
    write(value) {
        if ((value = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["toUint8Array"])(value)).byteLength > 0) {
            return super.write(value);
        }
    }
    toString(sync = false) {
        return sync
            ? Object(_util_utf8__WEBPACK_IMPORTED_MODULE_1__["decodeUtf8"])(this.toUint8Array(true))
            : this.toUint8Array(false).then(_util_utf8__WEBPACK_IMPORTED_MODULE_1__["decodeUtf8"]);
    }
    toUint8Array(sync = false) {
        return sync ? Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["joinUint8Arrays"])(this._values)[0] : (async () => {
            let buffers = [], byteLength = 0;
            for await (const chunk of this) {
                buffers.push(chunk);
                byteLength += chunk.byteLength;
            }
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["joinUint8Arrays"])(buffers, byteLength)[0];
        })();
    }
}
/** @ignore */
class ByteStream {
    constructor(source) {
        if (source) {
            this.source = new ByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromIterable(source));
        }
    }
    [Symbol.iterator]() { return this; }
    next(value) { return this.source.next(value); }
    throw(value) { return this.source.throw(value); }
    return(value) { return this.source.return(value); }
    peek(size) { return this.source.peek(size); }
    read(size) { return this.source.read(size); }
}
/** @ignore */
class AsyncByteStream {
    constructor(source) {
        if (source instanceof AsyncByteStream) {
            this.source = source.source;
        }
        else if (source instanceof AsyncByteQueue) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromAsyncIterable(source));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isReadableNodeStream"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromNodeStream(source));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isReadableDOMStream"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromDOMStream(source));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isFetchResponse"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromDOMStream(source.body));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isIterable"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromIterable(source));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromAsyncIterable(source));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_4__["isAsyncIterable"])(source)) {
            this.source = new AsyncByteStreamSource(_adapters__WEBPACK_IMPORTED_MODULE_0__["default"].fromAsyncIterable(source));
        }
    }
    [Symbol.asyncIterator]() { return this; }
    next(value) { return this.source.next(value); }
    throw(value) { return this.source.throw(value); }
    return(value) { return this.source.return(value); }
    get closed() { return this.source.closed; }
    cancel(reason) { return this.source.cancel(reason); }
    peek(size) { return this.source.peek(size); }
    read(size) { return this.source.read(size); }
}
/** @ignore */
class ByteStreamSource {
    constructor(source) {
        this.source = source;
    }
    cancel(reason) { this.return(reason); }
    peek(size) { return this.next(size, 'peek').value; }
    read(size) { return this.next(size, 'read').value; }
    next(size, cmd = 'read') { return this.source.next({ cmd, size }); }
    throw(value) { return Object.create((this.source.throw && this.source.throw(value)) || _interfaces__WEBPACK_IMPORTED_MODULE_2__["ITERATOR_DONE"]); }
    return(value) { return Object.create((this.source.return && this.source.return(value)) || _interfaces__WEBPACK_IMPORTED_MODULE_2__["ITERATOR_DONE"]); }
}
/** @ignore */
class AsyncByteStreamSource {
    constructor(source) {
        this.source = source;
        this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
    }
    async cancel(reason) { await this.return(reason); }
    get closed() { return this._closedPromise; }
    async read(size) { return (await this.next(size, 'read')).value; }
    async peek(size) { return (await this.next(size, 'peek')).value; }
    async next(size, cmd = 'read') { return (await this.source.next({ cmd, size })); }
    async throw(value) {
        const result = (this.source.throw && await this.source.throw(value)) || _interfaces__WEBPACK_IMPORTED_MODULE_2__["ITERATOR_DONE"];
        this._closedPromiseResolve && this._closedPromiseResolve();
        this._closedPromiseResolve = undefined;
        return Object.create(result);
    }
    async return(value) {
        const result = (this.source.return && await this.source.return(value)) || _interfaces__WEBPACK_IMPORTED_MODULE_2__["ITERATOR_DONE"];
        this._closedPromiseResolve && this._closedPromiseResolve();
        this._closedPromiseResolve = undefined;
        return Object.create(result);
    }
}

//# sourceMappingURL=stream.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/whatwg/builder.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/io/whatwg/builder.mjs ***!
  \*********************************************************/
/*! exports provided: builderThroughDOMStream, BuilderTransform */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builderThroughDOMStream", function() { return builderThroughDOMStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderTransform", function() { return BuilderTransform; });
/* harmony import */ var _builder_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../builder/index */ "./node_modules/apache-arrow/builder/index.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
function builderThroughDOMStream(options) {
    return new BuilderTransform(options);
}
/** @ignore */
class BuilderTransform {
    constructor(options) {
        // Access properties by string indexers to defeat closure compiler
        this._numChunks = 0;
        this._finished = false;
        this._bufferedSize = 0;
        const { ['readableStrategy']: readableStrategy, ['writableStrategy']: writableStrategy, ['queueingStrategy']: queueingStrategy = 'count', ...builderOptions } = options;
        this._controller = null;
        this._builder = _builder_index__WEBPACK_IMPORTED_MODULE_0__["Builder"].new(builderOptions);
        this._getSize = queueingStrategy !== 'bytes' ? chunkLength : chunkByteLength;
        const { ['highWaterMark']: readableHighWaterMark = queueingStrategy === 'bytes' ? 2 ** 14 : 1000 } = { ...readableStrategy };
        const { ['highWaterMark']: writableHighWaterMark = queueingStrategy === 'bytes' ? 2 ** 14 : 1000 } = { ...writableStrategy };
        this['readable'] = new ReadableStream({
            ['cancel']: () => { this._builder.clear(); },
            ['pull']: (c) => { this._maybeFlush(this._builder, this._controller = c); },
            ['start']: (c) => { this._maybeFlush(this._builder, this._controller = c); },
        }, {
            'highWaterMark': readableHighWaterMark,
            'size': queueingStrategy !== 'bytes' ? chunkLength : chunkByteLength,
        });
        this['writable'] = new WritableStream({
            ['abort']: () => { this._builder.clear(); },
            ['write']: () => { this._maybeFlush(this._builder, this._controller); },
            ['close']: () => { this._maybeFlush(this._builder.finish(), this._controller); },
        }, {
            'highWaterMark': writableHighWaterMark,
            'size': (value) => this._writeValueAndReturnChunkSize(value),
        });
    }
    _writeValueAndReturnChunkSize(value) {
        const bufferedSize = this._bufferedSize;
        this._bufferedSize = this._getSize(this._builder.append(value));
        return this._bufferedSize - bufferedSize;
    }
    _maybeFlush(builder, controller) {
        if (controller === null) {
            return;
        }
        if (this._bufferedSize >= controller.desiredSize) {
            ++this._numChunks && this._enqueue(controller, builder.toVector());
        }
        if (builder.finished) {
            if (builder.length > 0 || this._numChunks === 0) {
                ++this._numChunks && this._enqueue(controller, builder.toVector());
            }
            if (!this._finished && (this._finished = true)) {
                this._enqueue(controller, null);
            }
        }
    }
    _enqueue(controller, chunk) {
        this._bufferedSize = 0;
        this._controller = null;
        chunk === null ? controller.close() : controller.enqueue(chunk);
    }
}
/** @ignore */ const chunkLength = (chunk) => chunk.length;
/** @ignore */ const chunkByteLength = (chunk) => chunk.byteLength;

//# sourceMappingURL=builder.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/whatwg/iterable.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/apache-arrow/io/whatwg/iterable.mjs ***!
  \**********************************************************/
/*! exports provided: toDOMStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDOMStream", function() { return toDOMStream; });
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
function toDOMStream(source, options) {
    if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_1__["isAsyncIterable"])(source)) {
        return asyncIterableAsReadableDOMStream(source, options);
    }
    if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_1__["isIterable"])(source)) {
        return iterableAsReadableDOMStream(source, options);
    }
    /* istanbul ignore next */
    throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
}
/** @ignore */
function iterableAsReadableDOMStream(source, options) {
    let it = null;
    const bm = (options && options.type === 'bytes') || false;
    const hwm = options && options.highWaterMark || (2 ** 24);
    return new ReadableStream({
        ...options,
        start(controller) { next(controller, it || (it = source[Symbol.iterator]())); },
        pull(controller) { it ? (next(controller, it)) : controller.close(); },
        cancel() { (it && (it.return && it.return()) || true) && (it = null); }
    }, { highWaterMark: bm ? hwm : undefined, ...options });
    function next(controller, it) {
        let buf;
        let r = null;
        let size = controller.desiredSize || null;
        while (!(r = it.next(bm ? size : null)).done) {
            if (ArrayBuffer.isView(r.value) && (buf = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(r.value))) {
                size != null && bm && (size = size - buf.byteLength + 1);
                r.value = buf;
            }
            controller.enqueue(r.value);
            if (size != null && --size <= 0) {
                return;
            }
        }
        controller.close();
    }
}
/** @ignore */
function asyncIterableAsReadableDOMStream(source, options) {
    let it = null;
    const bm = (options && options.type === 'bytes') || false;
    const hwm = options && options.highWaterMark || (2 ** 24);
    return new ReadableStream({
        ...options,
        async start(controller) { await next(controller, it || (it = source[Symbol.asyncIterator]())); },
        async pull(controller) { it ? (await next(controller, it)) : controller.close(); },
        async cancel() { (it && (it.return && await it.return()) || true) && (it = null); },
    }, { highWaterMark: bm ? hwm : undefined, ...options });
    async function next(controller, it) {
        let buf;
        let r = null;
        let size = controller.desiredSize || null;
        while (!(r = await it.next(bm ? size : null)).done) {
            if (ArrayBuffer.isView(r.value) && (buf = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(r.value))) {
                size != null && bm && (size = size - buf.byteLength + 1);
                r.value = buf;
            }
            controller.enqueue(r.value);
            if (size != null && --size <= 0) {
                return;
            }
        }
        controller.close();
    }
}

//# sourceMappingURL=iterable.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/whatwg/reader.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/io/whatwg/reader.mjs ***!
  \********************************************************/
/*! exports provided: recordBatchReaderThroughDOMStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordBatchReaderThroughDOMStream", function() { return recordBatchReaderThroughDOMStream; });
/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony import */ var _ipc_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ipc/reader */ "./node_modules/apache-arrow/ipc/reader.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
    const queue = new _io_stream__WEBPACK_IMPORTED_MODULE_0__["AsyncByteQueue"]();
    let reader = null;
    const readable = new ReadableStream({
        async cancel() { await queue.close(); },
        async start(controller) { await next(controller, reader || (reader = await open())); },
        async pull(controller) { reader ? await next(controller, reader) : controller.close(); }
    });
    return { writable: new WritableStream(queue, { 'highWaterMark': 2 ** 14, ...writableStrategy }), readable };
    async function open() {
        return await (await _ipc_reader__WEBPACK_IMPORTED_MODULE_1__["RecordBatchReader"].from(queue)).open(readableStrategy);
    }
    async function next(controller, reader) {
        let size = controller.desiredSize;
        let r = null;
        while (!(r = await reader.next()).done) {
            controller.enqueue(r.value);
            if (size != null && --size <= 0) {
                return;
            }
        }
        controller.close();
    }
}

//# sourceMappingURL=reader.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/io/whatwg/writer.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/io/whatwg/writer.mjs ***!
  \********************************************************/
/*! exports provided: recordBatchWriterThroughDOMStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordBatchWriterThroughDOMStream", function() { return recordBatchWriterThroughDOMStream; });
/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
    const writer = new this(writableStrategy);
    const reader = new _io_stream__WEBPACK_IMPORTED_MODULE_0__["AsyncByteStream"](writer);
    const readable = new ReadableStream({
        type: 'bytes',
        async cancel() { await reader.cancel(); },
        async pull(controller) { await next(controller); },
        async start(controller) { await next(controller); },
    }, { 'highWaterMark': 2 ** 14, ...readableStrategy });
    return { writable: new WritableStream(writer, writableStrategy), readable };
    async function next(controller) {
        let buf = null;
        let size = controller.desiredSize;
        while (buf = await reader.read(size || null)) {
            controller.enqueue(buf);
            if (size != null && (size -= buf.byteLength) <= 0) {
                return;
            }
        }
        controller.close();
    }
}

//# sourceMappingURL=writer.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/message.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/message.mjs ***!
  \***************************************************/
/*! exports provided: MessageReader, AsyncMessageReader, JSONMessageReader, PADDING, MAGIC_STR, MAGIC, checkForMagicArrowString, magicLength, magicAndPadding, magicX2AndPadding */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageReader", function() { return MessageReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncMessageReader", function() { return AsyncMessageReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONMessageReader", function() { return JSONMessageReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PADDING", function() { return PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_STR", function() { return MAGIC_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC", function() { return MAGIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForMagicArrowString", function() { return checkForMagicArrowString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magicLength", function() { return magicLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magicAndPadding", function() { return magicAndPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magicX2AndPadding", function() { return magicX2AndPadding; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var flatbuffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatbuffers */ "./node_modules/flatbuffers/js/flatbuffers.mjs");
/* harmony import */ var _metadata_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/message */ "./node_modules/apache-arrow/ipc/metadata/message.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _io_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../io/file */ "./node_modules/apache-arrow/io/file.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony import */ var _io_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../io/interfaces */ "./node_modules/apache-arrow/io/interfaces.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


var ByteBuffer = flatbuffers__WEBPACK_IMPORTED_MODULE_1__["flatbuffers"].ByteBuffer;






/** @ignore */ const invalidMessageType = (type) => `Expected ${_enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"][type]} Message in stream, but was null or length 0.`;
/** @ignore */ const nullMessage = (type) => `Header pointer of flatbuffer-encoded ${_enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"][type]} Message is null or length 0.`;
/** @ignore */ const invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
/** @ignore */ const invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
/** @ignore */
class MessageReader {
    constructor(source) {
        this.source = source instanceof _io_stream__WEBPACK_IMPORTED_MODULE_6__["ByteStream"] ? source : new _io_stream__WEBPACK_IMPORTED_MODULE_6__["ByteStream"](source);
    }
    [Symbol.iterator]() { return this; }
    next() {
        let r;
        if ((r = this.readMetadataLength()).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        // ARROW-6313: If the first 4 bytes are continuation indicator (-1), read
        // the next 4 for the 32-bit metadata length. Otherwise, assume this is a
        // pre-v0.15 message, where the first 4 bytes are the metadata length.
        if ((r.value === -1) &&
            (r = this.readMetadataLength()).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        if ((r = this.readMetadata(r.value)).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        return r;
    }
    throw(value) { return this.source.throw(value); }
    return(value) { return this.source.return(value); }
    readMessage(type) {
        let r;
        if ((r = this.next()).done) {
            return null;
        }
        if ((type != null) && r.value.headerType !== type) {
            throw new Error(invalidMessageType(type));
        }
        return r.value;
    }
    readMessageBody(bodyLength) {
        if (bodyLength <= 0) {
            return new Uint8Array(0);
        }
        const buf = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_5__["toUint8Array"])(this.source.read(bodyLength));
        if (buf.byteLength < bodyLength) {
            throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
        }
        // 1. Work around bugs in fs.ReadStream's internal Buffer pooling, see: https://github.com/nodejs/node/issues/24817
        // 2. Work around https://github.com/whatwg/streams/blob/0ebe4b042e467d9876d80ae045de3843092ad797/reference-implementation/lib/helpers.js#L126
        return /* 1. */ (buf.byteOffset % 8 === 0) &&
            /* 2. */ (buf.byteOffset + buf.byteLength) <= buf.buffer.byteLength ? buf : buf.slice();
    }
    readSchema(throwIfNull = false) {
        const type = _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].Schema;
        const message = this.readMessage(type);
        const schema = message && message.header();
        if (throwIfNull && !schema) {
            throw new Error(nullMessage(type));
        }
        return schema;
    }
    readMetadataLength() {
        const buf = this.source.read(PADDING);
        const bb = buf && new ByteBuffer(buf);
        const len = bb && bb.readInt32(0) || 0;
        return { done: len === 0, value: len };
    }
    readMetadata(metadataLength) {
        const buf = this.source.read(metadataLength);
        if (!buf) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        if (buf.byteLength < metadataLength) {
            throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
        }
        return { done: false, value: _metadata_message__WEBPACK_IMPORTED_MODULE_2__["Message"].decode(buf) };
    }
}
/** @ignore */
class AsyncMessageReader {
    constructor(source, byteLength) {
        this.source = source instanceof _io_stream__WEBPACK_IMPORTED_MODULE_6__["AsyncByteStream"] ? source
            : Object(_util_compat__WEBPACK_IMPORTED_MODULE_3__["isFileHandle"])(source)
                ? new _io_file__WEBPACK_IMPORTED_MODULE_4__["AsyncRandomAccessFile"](source, byteLength)
                : new _io_stream__WEBPACK_IMPORTED_MODULE_6__["AsyncByteStream"](source);
    }
    [Symbol.asyncIterator]() { return this; }
    async next() {
        let r;
        if ((r = await this.readMetadataLength()).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        // ARROW-6313: If the first 4 bytes are continuation indicator (-1), read
        // the next 4 for the 32-bit metadata length. Otherwise, assume this is a
        // pre-v0.15 message, where the first 4 bytes are the metadata length.
        if ((r.value === -1) &&
            (r = await this.readMetadataLength()).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        if ((r = await this.readMetadata(r.value)).done) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        return r;
    }
    async throw(value) { return await this.source.throw(value); }
    async return(value) { return await this.source.return(value); }
    async readMessage(type) {
        let r;
        if ((r = await this.next()).done) {
            return null;
        }
        if ((type != null) && r.value.headerType !== type) {
            throw new Error(invalidMessageType(type));
        }
        return r.value;
    }
    async readMessageBody(bodyLength) {
        if (bodyLength <= 0) {
            return new Uint8Array(0);
        }
        const buf = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_5__["toUint8Array"])(await this.source.read(bodyLength));
        if (buf.byteLength < bodyLength) {
            throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
        }
        // 1. Work around bugs in fs.ReadStream's internal Buffer pooling, see: https://github.com/nodejs/node/issues/24817
        // 2. Work around https://github.com/whatwg/streams/blob/0ebe4b042e467d9876d80ae045de3843092ad797/reference-implementation/lib/helpers.js#L126
        return /* 1. */ (buf.byteOffset % 8 === 0) &&
            /* 2. */ (buf.byteOffset + buf.byteLength) <= buf.buffer.byteLength ? buf : buf.slice();
    }
    async readSchema(throwIfNull = false) {
        const type = _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].Schema;
        const message = await this.readMessage(type);
        const schema = message && message.header();
        if (throwIfNull && !schema) {
            throw new Error(nullMessage(type));
        }
        return schema;
    }
    async readMetadataLength() {
        const buf = await this.source.read(PADDING);
        const bb = buf && new ByteBuffer(buf);
        const len = bb && bb.readInt32(0) || 0;
        return { done: len === 0, value: len };
    }
    async readMetadata(metadataLength) {
        const buf = await this.source.read(metadataLength);
        if (!buf) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
        }
        if (buf.byteLength < metadataLength) {
            throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
        }
        return { done: false, value: _metadata_message__WEBPACK_IMPORTED_MODULE_2__["Message"].decode(buf) };
    }
}
/** @ignore */
class JSONMessageReader extends MessageReader {
    constructor(source) {
        super(new Uint8Array(0));
        this._schema = false;
        this._body = [];
        this._batchIndex = 0;
        this._dictionaryIndex = 0;
        this._json = source instanceof _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ArrowJSON"] ? source : new _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ArrowJSON"](source);
    }
    next() {
        const { _json } = this;
        if (!this._schema) {
            this._schema = true;
            const message = _metadata_message__WEBPACK_IMPORTED_MODULE_2__["Message"].fromJSON(_json.schema, _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].Schema);
            return { done: false, value: message };
        }
        if (this._dictionaryIndex < _json.dictionaries.length) {
            const batch = _json.dictionaries[this._dictionaryIndex++];
            this._body = batch['data']['columns'];
            const message = _metadata_message__WEBPACK_IMPORTED_MODULE_2__["Message"].fromJSON(batch, _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].DictionaryBatch);
            return { done: false, value: message };
        }
        if (this._batchIndex < _json.batches.length) {
            const batch = _json.batches[this._batchIndex++];
            this._body = batch['columns'];
            const message = _metadata_message__WEBPACK_IMPORTED_MODULE_2__["Message"].fromJSON(batch, _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].RecordBatch);
            return { done: false, value: message };
        }
        this._body = [];
        return _io_interfaces__WEBPACK_IMPORTED_MODULE_7__["ITERATOR_DONE"];
    }
    readMessageBody(_bodyLength) {
        return flattenDataSources(this._body);
        function flattenDataSources(xs) {
            return (xs || []).reduce((buffers, column) => [
                ...buffers,
                ...(column['VALIDITY'] && [column['VALIDITY']] || []),
                ...(column['TYPE'] && [column['TYPE']] || []),
                ...(column['OFFSET'] && [column['OFFSET']] || []),
                ...(column['DATA'] && [column['DATA']] || []),
                ...flattenDataSources(column['children'])
            ], []);
        }
    }
    readMessage(type) {
        let r;
        if ((r = this.next()).done) {
            return null;
        }
        if ((type != null) && r.value.headerType !== type) {
            throw new Error(invalidMessageType(type));
        }
        return r.value;
    }
    readSchema() {
        const type = _enum__WEBPACK_IMPORTED_MODULE_0__["MessageHeader"].Schema;
        const message = this.readMessage(type);
        const schema = message && message.header();
        if (!message || !schema) {
            throw new Error(nullMessage(type));
        }
        return schema;
    }
}
/** @ignore */
const PADDING = 4;
/** @ignore */
const MAGIC_STR = 'ARROW1';
/** @ignore */
const MAGIC = new Uint8Array(MAGIC_STR.length);
for (let i = 0; i < MAGIC_STR.length; i += 1 | 0) {
    MAGIC[i] = MAGIC_STR.charCodeAt(i);
}
/** @ignore */
function checkForMagicArrowString(buffer, index = 0) {
    for (let i = -1, n = MAGIC.length; ++i < n;) {
        if (MAGIC[i] !== buffer[index + i]) {
            return false;
        }
    }
    return true;
}
/** @ignore */
const magicLength = MAGIC.length;
/** @ignore */
const magicAndPadding = magicLength + PADDING;
/** @ignore */
const magicX2AndPadding = magicLength * 2 + PADDING;

//# sourceMappingURL=message.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/metadata/file.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/metadata/file.mjs ***!
  \*********************************************************/
/*! exports provided: Footer, FileBlock */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBlock", function() { return FileBlock; });
/* harmony import */ var _fb_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fb/File */ "./node_modules/apache-arrow/fb/File.mjs");
/* harmony import */ var flatbuffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatbuffers */ "./node_modules/flatbuffers/js/flatbuffers.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/* tslint:disable:class-name */


var Long = flatbuffers__WEBPACK_IMPORTED_MODULE_1__["flatbuffers"].Long;
var Builder = flatbuffers__WEBPACK_IMPORTED_MODULE_1__["flatbuffers"].Builder;
var ByteBuffer = flatbuffers__WEBPACK_IMPORTED_MODULE_1__["flatbuffers"].ByteBuffer;
var _Block = _fb_File__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Block;
var _Footer = _fb_File__WEBPACK_IMPORTED_MODULE_0__["org"].apache.arrow.flatbuf.Footer;



/** @ignore */
class Footer_ {
    constructor(schema, version = _enum__WEBPACK_IMPORTED_MODULE_3__["MetadataVersion"].V4, recordBatches, dictionaryBatches) {
        this.schema = schema;
        this.version = version;
        recordBatches && (this._recordBatches = recordBatches);
        dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
    }
    /** @nocollapse */
    static decode(buf) {
        buf = new ByteBuffer(Object(_util_buffer__WEBPACK_IMPORTED_MODULE_4__["toUint8Array"])(buf));
        const footer = _Footer.getRootAsFooter(buf);
        const schema = _schema__WEBPACK_IMPORTED_MODULE_2__["Schema"].decode(footer.schema());
        return new OffHeapFooter(schema, footer);
    }
    /** @nocollapse */
    static encode(footer) {
        const b = new Builder();
        const schemaOffset = _schema__WEBPACK_IMPORTED_MODULE_2__["Schema"].encode(b, footer.schema);
        _Footer.startRecordBatchesVector(b, footer.numRecordBatches);
        [...footer.recordBatches()].slice().reverse().forEach((rb) => FileBlock.encode(b, rb));
        const recordBatchesOffset = b.endVector();
        _Footer.startDictionariesVector(b, footer.numDictionaries);
        [...footer.dictionaryBatches()].slice().reverse().forEach((db) => FileBlock.encode(b, db));
        const dictionaryBatchesOffset = b.endVector();
        _Footer.startFooter(b);
        _Footer.addSchema(b, schemaOffset);
        _Footer.addVersion(b, _enum__WEBPACK_IMPORTED_MODULE_3__["MetadataVersion"].V4);
        _Footer.addRecordBatches(b, recordBatchesOffset);
        _Footer.addDictionaries(b, dictionaryBatchesOffset);
        _Footer.finishFooterBuffer(b, _Footer.endFooter(b));
        return b.asUint8Array();
    }
    get numRecordBatches() { return this._recordBatches.length; }
    get numDictionaries() { return this._dictionaryBatches.length; }
    *recordBatches() {
        for (let block, i = -1, n = this.numRecordBatches; ++i < n;) {
            if (block = this.getRecordBatch(i)) {
                yield block;
            }
        }
    }
    *dictionaryBatches() {
        for (let block, i = -1, n = this.numDictionaries; ++i < n;) {
            if (block = this.getDictionaryBatch(i)) {
                yield block;
            }
        }
    }
    getRecordBatch(index) {
        return index >= 0
            && index < this.numRecordBatches
            && this._recordBatches[index] || null;
    }
    getDictionaryBatch(index) {
        return index >= 0
            && index < this.numDictionaries
            && this._dictionaryBatches[index] || null;
    }
}

/** @ignore */
class OffHeapFooter extends Footer_ {
    constructor(schema, _footer) {
        super(schema, _footer.version());
        this._footer = _footer;
    }
    get numRecordBatches() { return this._footer.recordBatchesLength(); }
    get numDictionaries() { return this._footer.dictionariesLength(); }
    getRecordBatch(index) {
        if (index >= 0 && index < this.numRecordBatches) {
            const fileBlock = this._footer.recordBatches(index);
            if (fileBlock) {
                return FileBlock.decode(fileBlock);
            }
        }
        return null;
    }
    getDictionaryBatch(index) {
        if (index >= 0 && index < this.numDictionaries) {
            const fileBlock = this._footer.dictionaries(index);
            if (fileBlock) {
                return FileBlock.decode(fileBlock);
            }
        }
        return null;
    }
}
/** @ignore */
class FileBlock {
    /** @nocollapse */
    static decode(block) {
        return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
    }
    /** @nocollapse */
    static encode(b, fileBlock) {
        const { metaDataLength } = fileBlock;
        const offset = new Long(fileBlock.offset, 0);
        const bodyLength = new Long(fileBlock.bodyLength, 0);
        return _Block.createBlock(b, offset, metaDataLength, bodyLength);
    }
    constructor(metaDataLength, bodyLength, offset) {
        this.metaDataLength = metaDataLength;
        this.offset = typeof offset === 'number' ? offset : offset.low;
        this.bodyLength = typeof bodyLength === 'number' ? bodyLength : bodyLength.low;
    }
}

//# sourceMappingURL=file.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/metadata/json.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/metadata/json.mjs ***!
  \*********************************************************/
/*! exports provided: schemaFromJSON, recordBatchFromJSON, dictionaryBatchFromJSON, fieldFromJSON */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaFromJSON", function() { return schemaFromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordBatchFromJSON", function() { return recordBatchFromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryBatchFromJSON", function() { return dictionaryBatchFromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldFromJSON", function() { return fieldFromJSON; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./node_modules/apache-arrow/ipc/metadata/message.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enum */ "./node_modules/apache-arrow/enum.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
function schemaFromJSON(_schema, dictionaries = new Map()) {
    return new _schema__WEBPACK_IMPORTED_MODULE_0__["Schema"](schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema['customMetadata']), dictionaries);
}
/** @ignore */
function recordBatchFromJSON(b) {
    return new _message__WEBPACK_IMPORTED_MODULE_2__["RecordBatch"](b['count'], fieldNodesFromJSON(b['columns']), buffersFromJSON(b['columns']));
}
/** @ignore */
function dictionaryBatchFromJSON(b) {
    return new _message__WEBPACK_IMPORTED_MODULE_2__["DictionaryBatch"](recordBatchFromJSON(b['data']), b['id'], b['isDelta']);
}
/** @ignore */
function schemaFieldsFromJSON(_schema, dictionaries) {
    return (_schema['fields'] || []).filter(Boolean).map((f) => _schema__WEBPACK_IMPORTED_MODULE_0__["Field"].fromJSON(f, dictionaries));
}
/** @ignore */
function fieldChildrenFromJSON(_field, dictionaries) {
    return (_field['children'] || []).filter(Boolean).map((f) => _schema__WEBPACK_IMPORTED_MODULE_0__["Field"].fromJSON(f, dictionaries));
}
/** @ignore */
function fieldNodesFromJSON(xs) {
    return (xs || []).reduce((fieldNodes, column) => [
        ...fieldNodes,
        new _message__WEBPACK_IMPORTED_MODULE_2__["FieldNode"](column['count'], nullCountFromJSON(column['VALIDITY'])),
        ...fieldNodesFromJSON(column['children'])
    ], []);
}
/** @ignore */
function buffersFromJSON(xs, buffers = []) {
    for (let i = -1, n = (xs || []).length; ++i < n;) {
        const column = xs[i];
        column['VALIDITY'] && buffers.push(new _message__WEBPACK_IMPORTED_MODULE_2__["BufferRegion"](buffers.length, column['VALIDITY'].length));
        column['TYPE'] && buffers.push(new _message__WEBPACK_IMPORTED_MODULE_2__["BufferRegion"](buffers.length, column['TYPE'].length));
        column['OFFSET'] && buffers.push(new _message__WEBPACK_IMPORTED_MODULE_2__["BufferRegion"](buffers.length, column['OFFSET'].length));
        column['DATA'] && buffers.push(new _message__WEBPACK_IMPORTED_MODULE_2__["BufferRegion"](buffers.length, column['DATA'].length));
        buffers = buffersFromJSON(column['children'], buffers);
    }
    return buffers;
}
/** @ignore */
function nullCountFromJSON(validity) {
    return (validity || []).reduce((sum, val) => sum + +(val === 0), 0);
}
/** @ignore */
function fieldFromJSON(_field, dictionaries) {
    let id;
    let keys;
    let field;
    let dictMeta;
    let type;
    let dictType;
    // If no dictionary encoding
    if (!dictionaries || !(dictMeta = _field['dictionary'])) {
        type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
        field = new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](_field['name'], type, _field['nullable'], customMetadataFromJSON(_field['customMetadata']));
    }
    // tslint:disable
    // If dictionary encoded and the first time we've seen this dictionary id, decode
    // the data type and child fields, then wrap in a Dictionary type and insert the
    // data type into the dictionary types map.
    else if (!dictionaries.has(id = dictMeta['id'])) {
        // a dictionary index defaults to signed 32 bit int if unspecified
        keys = (keys = dictMeta['indexType']) ? indexTypeFromJSON(keys) : new _type__WEBPACK_IMPORTED_MODULE_1__["Int32"]();
        dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
        dictType = new _type__WEBPACK_IMPORTED_MODULE_1__["Dictionary"](type, keys, id, dictMeta['isOrdered']);
        field = new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](_field['name'], dictType, _field['nullable'], customMetadataFromJSON(_field['customMetadata']));
    }
    // If dictionary encoded, and have already seen this dictionary Id in the schema, then reuse the
    // data type and wrap in a new Dictionary type and field.
    else {
        // a dictionary index defaults to signed 32 bit int if unspecified
        keys = (keys = dictMeta['indexType']) ? indexTypeFromJSON(keys) : new _type__WEBPACK_IMPORTED_MODULE_1__["Int32"]();
        dictType = new _type__WEBPACK_IMPORTED_MODULE_1__["Dictionary"](dictionaries.get(id), keys, id, dictMeta['isOrdered']);
        field = new _schema__WEBPACK_IMPORTED_MODULE_0__["Field"](_field['name'], dictType, _field['nullable'], customMetadataFromJSON(_field['customMetadata']));
    }
    return field || null;
}
/** @ignore */
function customMetadataFromJSON(_metadata) {
    return new Map(Object.entries(_metadata || {}));
}
/** @ignore */
function indexTypeFromJSON(_type) {
    return new _type__WEBPACK_IMPORTED_MODULE_1__["Int"](_type['isSigned'], _type['bitWidth']);
}
/** @ignore */
function typeFromJSON(f, children) {
    const typeId = f['type']['name'];
    switch (typeId) {
        case 'NONE': return new _type__WEBPACK_IMPORTED_MODULE_1__["Null"]();
        case 'null': return new _type__WEBPACK_IMPORTED_MODULE_1__["Null"]();
        case 'binary': return new _type__WEBPACK_IMPORTED_MODULE_1__["Binary"]();
        case 'utf8': return new _type__WEBPACK_IMPORTED_MODULE_1__["Utf8"]();
        case 'bool': return new _type__WEBPACK_IMPORTED_MODULE_1__["Bool"]();
        case 'list': return new _type__WEBPACK_IMPORTED_MODULE_1__["List"]((children || [])[0]);
        case 'struct': return new _type__WEBPACK_IMPORTED_MODULE_1__["Struct"](children || []);
        case 'struct_': return new _type__WEBPACK_IMPORTED_MODULE_1__["Struct"](children || []);
    }
    switch (typeId) {
        case 'int': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Int"](t['isSigned'], t['bitWidth']);
        }
        case 'floatingpoint': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Float"](_enum__WEBPACK_IMPORTED_MODULE_3__["Precision"][t['precision']]);
        }
        case 'decimal': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Decimal"](t['scale'], t['precision']);
        }
        case 'date': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Date_"](_enum__WEBPACK_IMPORTED_MODULE_3__["DateUnit"][t['unit']]);
        }
        case 'time': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Time"](_enum__WEBPACK_IMPORTED_MODULE_3__["TimeUnit"][t['unit']], t['bitWidth']);
        }
        case 'timestamp': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Timestamp"](_enum__WEBPACK_IMPORTED_MODULE_3__["TimeUnit"][t['unit']], t['timezone']);
        }
        case 'interval': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Interval"](_enum__WEBPACK_IMPORTED_MODULE_3__["IntervalUnit"][t['unit']]);
        }
        case 'union': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Union"](_enum__WEBPACK_IMPORTED_MODULE_3__["UnionMode"][t['mode']], (t['typeIds'] || []), children || []);
        }
        case 'fixedsizebinary': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["FixedSizeBinary"](t['byteWidth']);
        }
        case 'fixedsizelist': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["FixedSizeList"](t['listSize'], (children || [])[0]);
        }
        case 'map': {
            const t = f['type'];
            return new _type__WEBPACK_IMPORTED_MODULE_1__["Map_"]((children || [])[0], t['keysSorted']);
        }
    }
    throw new Error(`Unrecognized type: "${typeId}"`);
}

//# sourceMappingURL=json.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/metadata/message.mjs":
/*!************************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/metadata/message.mjs ***!
  \************************************************************/
/*! exports provided: Message, RecordBatch, DictionaryBatch, BufferRegion, FieldNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatch", function() { return RecordBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryBatch", function() { return DictionaryBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferRegion", function() { return BufferRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldNode", function() { return FieldNode; });
/* harmony import */ var flatbuffers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatbuffers */ "./node_modules/flatbuffers/js/flatbuffers.mjs");
/* harmony import */ var _fb_Schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fb/Schema */ "./node_modules/apache-arrow/fb/Schema.mjs");
/* harmony import */ var _fb_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fb/Message */ "./node_modules/apache-arrow/fb/Message.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _visitor_typeassembler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../visitor/typeassembler */ "./node_modules/apache-arrow/visitor/typeassembler.mjs");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json */ "./node_modules/apache-arrow/ipc/metadata/json.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.








var Long = flatbuffers__WEBPACK_IMPORTED_MODULE_0__["flatbuffers"].Long;
var Builder = flatbuffers__WEBPACK_IMPORTED_MODULE_0__["flatbuffers"].Builder;
var ByteBuffer = flatbuffers__WEBPACK_IMPORTED_MODULE_0__["flatbuffers"].ByteBuffer;
var Type = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Type;
var _Field = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Field;
var _Schema = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Schema;
var _Buffer = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Buffer;
var _Message = _fb_Message__WEBPACK_IMPORTED_MODULE_2__["org"].apache.arrow.flatbuf.Message;
var _KeyValue = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.KeyValue;
var _FieldNode = _fb_Message__WEBPACK_IMPORTED_MODULE_2__["org"].apache.arrow.flatbuf.FieldNode;
var _Endianness = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Endianness;
var _RecordBatch = _fb_Message__WEBPACK_IMPORTED_MODULE_2__["org"].apache.arrow.flatbuf.RecordBatch;
var _DictionaryBatch = _fb_Message__WEBPACK_IMPORTED_MODULE_2__["org"].apache.arrow.flatbuf.DictionaryBatch;

/**
 * @ignore
 * @private
 **/
class Message {
    constructor(bodyLength, version, headerType, header) {
        this._version = version;
        this._headerType = headerType;
        this.body = new Uint8Array(0);
        header && (this._createHeader = () => header);
        this._bodyLength = typeof bodyLength === 'number' ? bodyLength : bodyLength.low;
    }
    /** @nocollapse */
    static fromJSON(msg, headerType) {
        const message = new Message(0, _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4, headerType);
        message._createHeader = messageHeaderFromJSON(msg, headerType);
        return message;
    }
    /** @nocollapse */
    static decode(buf) {
        buf = new ByteBuffer(Object(_util_buffer__WEBPACK_IMPORTED_MODULE_4__["toUint8Array"])(buf));
        const _message = _Message.getRootAsMessage(buf);
        const bodyLength = _message.bodyLength();
        const version = _message.version();
        const headerType = _message.headerType();
        const message = new Message(bodyLength, version, headerType);
        message._createHeader = decodeMessageHeader(_message, headerType);
        return message;
    }
    /** @nocollapse */
    static encode(message) {
        let b = new Builder(), headerOffset = -1;
        if (message.isSchema()) {
            headerOffset = _schema__WEBPACK_IMPORTED_MODULE_3__["Schema"].encode(b, message.header());
        }
        else if (message.isRecordBatch()) {
            headerOffset = RecordBatch.encode(b, message.header());
        }
        else if (message.isDictionaryBatch()) {
            headerOffset = DictionaryBatch.encode(b, message.header());
        }
        _Message.startMessage(b);
        _Message.addVersion(b, _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4);
        _Message.addHeader(b, headerOffset);
        _Message.addHeaderType(b, message.headerType);
        _Message.addBodyLength(b, new Long(message.bodyLength, 0));
        _Message.finishMessageBuffer(b, _Message.endMessage(b));
        return b.asUint8Array();
    }
    /** @nocollapse */
    static from(header, bodyLength = 0) {
        if (header instanceof _schema__WEBPACK_IMPORTED_MODULE_3__["Schema"]) {
            return new Message(0, _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4, _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].Schema, header);
        }
        if (header instanceof RecordBatch) {
            return new Message(bodyLength, _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4, _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].RecordBatch, header);
        }
        if (header instanceof DictionaryBatch) {
            return new Message(bodyLength, _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4, _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].DictionaryBatch, header);
        }
        throw new Error(`Unrecognized Message header: ${header}`);
    }
    get type() { return this.headerType; }
    get version() { return this._version; }
    get headerType() { return this._headerType; }
    get bodyLength() { return this._bodyLength; }
    header() { return this._createHeader(); }
    isSchema() { return this.headerType === _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].Schema; }
    isRecordBatch() { return this.headerType === _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].RecordBatch; }
    isDictionaryBatch() { return this.headerType === _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].DictionaryBatch; }
}
/**
 * @ignore
 * @private
 **/
class RecordBatch {
    get nodes() { return this._nodes; }
    get length() { return this._length; }
    get buffers() { return this._buffers; }
    constructor(length, nodes, buffers) {
        this._nodes = nodes;
        this._buffers = buffers;
        this._length = typeof length === 'number' ? length : length.low;
    }
}
/**
 * @ignore
 * @private
 **/
class DictionaryBatch {
    get id() { return this._id; }
    get data() { return this._data; }
    get isDelta() { return this._isDelta; }
    get length() { return this.data.length; }
    get nodes() { return this.data.nodes; }
    get buffers() { return this.data.buffers; }
    constructor(data, id, isDelta = false) {
        this._data = data;
        this._isDelta = isDelta;
        this._id = typeof id === 'number' ? id : id.low;
    }
}
/**
 * @ignore
 * @private
 **/
class BufferRegion {
    constructor(offset, length) {
        this.offset = typeof offset === 'number' ? offset : offset.low;
        this.length = typeof length === 'number' ? length : length.low;
    }
}
/**
 * @ignore
 * @private
 **/
class FieldNode {
    constructor(length, nullCount) {
        this.length = typeof length === 'number' ? length : length.low;
        this.nullCount = typeof nullCount === 'number' ? nullCount : nullCount.low;
    }
}
/** @ignore */
function messageHeaderFromJSON(message, type) {
    return (() => {
        switch (type) {
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].Schema: return _schema__WEBPACK_IMPORTED_MODULE_3__["Schema"].fromJSON(message);
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].RecordBatch: return RecordBatch.fromJSON(message);
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].DictionaryBatch: return DictionaryBatch.fromJSON(message);
        }
        throw new Error(`Unrecognized Message type: { name: ${_enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"][type]}, type: ${type} }`);
    });
}
/** @ignore */
function decodeMessageHeader(message, type) {
    return (() => {
        switch (type) {
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].Schema: return _schema__WEBPACK_IMPORTED_MODULE_3__["Schema"].decode(message.header(new _Schema()));
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].RecordBatch: return RecordBatch.decode(message.header(new _RecordBatch()), message.version());
            case _enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"].DictionaryBatch: return DictionaryBatch.decode(message.header(new _DictionaryBatch()), message.version());
        }
        throw new Error(`Unrecognized Message type: { name: ${_enum__WEBPACK_IMPORTED_MODULE_5__["MessageHeader"][type]}, type: ${type} }`);
    });
}
_schema__WEBPACK_IMPORTED_MODULE_3__["Field"]['encode'] = encodeField;
_schema__WEBPACK_IMPORTED_MODULE_3__["Field"]['decode'] = decodeField;
_schema__WEBPACK_IMPORTED_MODULE_3__["Field"]['fromJSON'] = _json__WEBPACK_IMPORTED_MODULE_7__["fieldFromJSON"];
_schema__WEBPACK_IMPORTED_MODULE_3__["Schema"]['encode'] = encodeSchema;
_schema__WEBPACK_IMPORTED_MODULE_3__["Schema"]['decode'] = decodeSchema;
_schema__WEBPACK_IMPORTED_MODULE_3__["Schema"]['fromJSON'] = _json__WEBPACK_IMPORTED_MODULE_7__["schemaFromJSON"];
RecordBatch['encode'] = encodeRecordBatch;
RecordBatch['decode'] = decodeRecordBatch;
RecordBatch['fromJSON'] = _json__WEBPACK_IMPORTED_MODULE_7__["recordBatchFromJSON"];
DictionaryBatch['encode'] = encodeDictionaryBatch;
DictionaryBatch['decode'] = decodeDictionaryBatch;
DictionaryBatch['fromJSON'] = _json__WEBPACK_IMPORTED_MODULE_7__["dictionaryBatchFromJSON"];
FieldNode['encode'] = encodeFieldNode;
FieldNode['decode'] = decodeFieldNode;
BufferRegion['encode'] = encodeBufferRegion;
BufferRegion['decode'] = decodeBufferRegion;
/** @ignore */
function decodeSchema(_schema, dictionaries = new Map()) {
    const fields = decodeSchemaFields(_schema, dictionaries);
    return new _schema__WEBPACK_IMPORTED_MODULE_3__["Schema"](fields, decodeCustomMetadata(_schema), dictionaries);
}
/** @ignore */
function decodeRecordBatch(batch, version = _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4) {
    return new RecordBatch(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version));
}
/** @ignore */
function decodeDictionaryBatch(batch, version = _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4) {
    return new DictionaryBatch(RecordBatch.decode(batch.data(), version), batch.id(), batch.isDelta());
}
/** @ignore */
function decodeBufferRegion(b) {
    return new BufferRegion(b.offset(), b.length());
}
/** @ignore */
function decodeFieldNode(f) {
    return new FieldNode(f.length(), f.nullCount());
}
/** @ignore */
function decodeFieldNodes(batch) {
    const nodes = [];
    for (let f, i = -1, j = -1, n = batch.nodesLength(); ++i < n;) {
        if (f = batch.nodes(i)) {
            nodes[++j] = FieldNode.decode(f);
        }
    }
    return nodes;
}
/** @ignore */
function decodeBuffers(batch, version) {
    const bufferRegions = [];
    for (let b, i = -1, j = -1, n = batch.buffersLength(); ++i < n;) {
        if (b = batch.buffers(i)) {
            // If this Arrow buffer was written before version 4,
            // advance the buffer's bb_pos 8 bytes to skip past
            // the now-removed page_id field
            if (version < _enum__WEBPACK_IMPORTED_MODULE_5__["MetadataVersion"].V4) {
                b.bb_pos += (8 * (i + 1));
            }
            bufferRegions[++j] = BufferRegion.decode(b);
        }
    }
    return bufferRegions;
}
/** @ignore */
function decodeSchemaFields(schema, dictionaries) {
    const fields = [];
    for (let f, i = -1, j = -1, n = schema.fieldsLength(); ++i < n;) {
        if (f = schema.fields(i)) {
            fields[++j] = _schema__WEBPACK_IMPORTED_MODULE_3__["Field"].decode(f, dictionaries);
        }
    }
    return fields;
}
/** @ignore */
function decodeFieldChildren(field, dictionaries) {
    const children = [];
    for (let f, i = -1, j = -1, n = field.childrenLength(); ++i < n;) {
        if (f = field.children(i)) {
            children[++j] = _schema__WEBPACK_IMPORTED_MODULE_3__["Field"].decode(f, dictionaries);
        }
    }
    return children;
}
/** @ignore */
function decodeField(f, dictionaries) {
    let id;
    let field;
    let type;
    let keys;
    let dictType;
    let dictMeta;
    // If no dictionary encoding
    if (!dictionaries || !(dictMeta = f.dictionary())) {
        type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
        field = new _schema__WEBPACK_IMPORTED_MODULE_3__["Field"](f.name(), type, f.nullable(), decodeCustomMetadata(f));
    }
    // tslint:disable
    // If dictionary encoded and the first time we've seen this dictionary id, decode
    // the data type and child fields, then wrap in a Dictionary type and insert the
    // data type into the dictionary types map.
    else if (!dictionaries.has(id = dictMeta.id().low)) {
        // a dictionary index defaults to signed 32 bit int if unspecified
        keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new _type__WEBPACK_IMPORTED_MODULE_8__["Int32"]();
        dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
        dictType = new _type__WEBPACK_IMPORTED_MODULE_8__["Dictionary"](type, keys, id, dictMeta.isOrdered());
        field = new _schema__WEBPACK_IMPORTED_MODULE_3__["Field"](f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
    }
    // If dictionary encoded, and have already seen this dictionary Id in the schema, then reuse the
    // data type and wrap in a new Dictionary type and field.
    else {
        // a dictionary index defaults to signed 32 bit int if unspecified
        keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new _type__WEBPACK_IMPORTED_MODULE_8__["Int32"]();
        dictType = new _type__WEBPACK_IMPORTED_MODULE_8__["Dictionary"](dictionaries.get(id), keys, id, dictMeta.isOrdered());
        field = new _schema__WEBPACK_IMPORTED_MODULE_3__["Field"](f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
    }
    return field || null;
}
/** @ignore */
function decodeCustomMetadata(parent) {
    const data = new Map();
    if (parent) {
        for (let entry, key, i = -1, n = parent.customMetadataLength() | 0; ++i < n;) {
            if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) {
                data.set(key, entry.value());
            }
        }
    }
    return data;
}
/** @ignore */
function decodeIndexType(_type) {
    return new _type__WEBPACK_IMPORTED_MODULE_8__["Int"](_type.isSigned(), _type.bitWidth());
}
/** @ignore */
function decodeFieldType(f, children) {
    const typeId = f.typeType();
    switch (typeId) {
        case Type.NONE: return new _type__WEBPACK_IMPORTED_MODULE_8__["Null"]();
        case Type.Null: return new _type__WEBPACK_IMPORTED_MODULE_8__["Null"]();
        case Type.Binary: return new _type__WEBPACK_IMPORTED_MODULE_8__["Binary"]();
        case Type.Utf8: return new _type__WEBPACK_IMPORTED_MODULE_8__["Utf8"]();
        case Type.Bool: return new _type__WEBPACK_IMPORTED_MODULE_8__["Bool"]();
        case Type.List: return new _type__WEBPACK_IMPORTED_MODULE_8__["List"]((children || [])[0]);
        case Type.Struct_: return new _type__WEBPACK_IMPORTED_MODULE_8__["Struct"](children || []);
    }
    switch (typeId) {
        case Type.Int: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Int());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Int"](t.isSigned(), t.bitWidth());
        }
        case Type.FloatingPoint: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FloatingPoint());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Float"](t.precision());
        }
        case Type.Decimal: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Decimal());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Decimal"](t.scale(), t.precision());
        }
        case Type.Date: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Date());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Date_"](t.unit());
        }
        case Type.Time: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Time());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Time"](t.unit(), t.bitWidth());
        }
        case Type.Timestamp: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Timestamp());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Timestamp"](t.unit(), t.timezone());
        }
        case Type.Interval: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Interval());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Interval"](t.unit());
        }
        case Type.Union: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Union());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Union"](t.mode(), t.typeIdsArray() || [], children || []);
        }
        case Type.FixedSizeBinary: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FixedSizeBinary());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinary"](t.byteWidth());
        }
        case Type.FixedSizeList: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FixedSizeList());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["FixedSizeList"](t.listSize(), (children || [])[0]);
        }
        case Type.Map: {
            const t = f.type(new _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Map());
            return new _type__WEBPACK_IMPORTED_MODULE_8__["Map_"]((children || [])[0], t.keysSorted());
        }
    }
    throw new Error(`Unrecognized type: "${Type[typeId]}" (${typeId})`);
}
/** @ignore */
function encodeSchema(b, schema) {
    const fieldOffsets = schema.fields.map((f) => _schema__WEBPACK_IMPORTED_MODULE_3__["Field"].encode(b, f));
    _Schema.startFieldsVector(b, fieldOffsets.length);
    const fieldsVectorOffset = _Schema.createFieldsVector(b, fieldOffsets);
    const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 :
        _Schema.createCustomMetadataVector(b, [...schema.metadata].map(([k, v]) => {
            const key = b.createString(`${k}`);
            const val = b.createString(`${v}`);
            _KeyValue.startKeyValue(b);
            _KeyValue.addKey(b, key);
            _KeyValue.addValue(b, val);
            return _KeyValue.endKeyValue(b);
        }));
    _Schema.startSchema(b);
    _Schema.addFields(b, fieldsVectorOffset);
    _Schema.addEndianness(b, platformIsLittleEndian ? _Endianness.Little : _Endianness.Big);
    if (metadataOffset !== -1) {
        _Schema.addCustomMetadata(b, metadataOffset);
    }
    return _Schema.endSchema(b);
}
/** @ignore */
function encodeField(b, field) {
    let nameOffset = -1;
    let typeOffset = -1;
    let dictionaryOffset = -1;
    let type = field.type;
    let typeId = field.typeId;
    if (!_type__WEBPACK_IMPORTED_MODULE_8__["DataType"].isDictionary(type)) {
        typeOffset = _visitor_typeassembler__WEBPACK_IMPORTED_MODULE_6__["instance"].visit(type, b);
    }
    else {
        typeId = type.dictionary.typeId;
        dictionaryOffset = _visitor_typeassembler__WEBPACK_IMPORTED_MODULE_6__["instance"].visit(type, b);
        typeOffset = _visitor_typeassembler__WEBPACK_IMPORTED_MODULE_6__["instance"].visit(type.dictionary, b);
    }
    const childOffsets = (type.children || []).map((f) => _schema__WEBPACK_IMPORTED_MODULE_3__["Field"].encode(b, f));
    const childrenVectorOffset = _Field.createChildrenVector(b, childOffsets);
    const metadataOffset = !(field.metadata && field.metadata.size > 0) ? -1 :
        _Field.createCustomMetadataVector(b, [...field.metadata].map(([k, v]) => {
            const key = b.createString(`${k}`);
            const val = b.createString(`${v}`);
            _KeyValue.startKeyValue(b);
            _KeyValue.addKey(b, key);
            _KeyValue.addValue(b, val);
            return _KeyValue.endKeyValue(b);
        }));
    if (field.name) {
        nameOffset = b.createString(field.name);
    }
    _Field.startField(b);
    _Field.addType(b, typeOffset);
    _Field.addTypeType(b, typeId);
    _Field.addChildren(b, childrenVectorOffset);
    _Field.addNullable(b, !!field.nullable);
    if (nameOffset !== -1) {
        _Field.addName(b, nameOffset);
    }
    if (dictionaryOffset !== -1) {
        _Field.addDictionary(b, dictionaryOffset);
    }
    if (metadataOffset !== -1) {
        _Field.addCustomMetadata(b, metadataOffset);
    }
    return _Field.endField(b);
}
/** @ignore */
function encodeRecordBatch(b, recordBatch) {
    const nodes = recordBatch.nodes || [];
    const buffers = recordBatch.buffers || [];
    _RecordBatch.startNodesVector(b, nodes.length);
    nodes.slice().reverse().forEach((n) => FieldNode.encode(b, n));
    const nodesVectorOffset = b.endVector();
    _RecordBatch.startBuffersVector(b, buffers.length);
    buffers.slice().reverse().forEach((b_) => BufferRegion.encode(b, b_));
    const buffersVectorOffset = b.endVector();
    _RecordBatch.startRecordBatch(b);
    _RecordBatch.addLength(b, new Long(recordBatch.length, 0));
    _RecordBatch.addNodes(b, nodesVectorOffset);
    _RecordBatch.addBuffers(b, buffersVectorOffset);
    return _RecordBatch.endRecordBatch(b);
}
/** @ignore */
function encodeDictionaryBatch(b, dictionaryBatch) {
    const dataOffset = RecordBatch.encode(b, dictionaryBatch.data);
    _DictionaryBatch.startDictionaryBatch(b);
    _DictionaryBatch.addId(b, new Long(dictionaryBatch.id, 0));
    _DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
    _DictionaryBatch.addData(b, dataOffset);
    return _DictionaryBatch.endDictionaryBatch(b);
}
/** @ignore */
function encodeFieldNode(b, node) {
    return _FieldNode.createFieldNode(b, new Long(node.length, 0), new Long(node.nullCount, 0));
}
/** @ignore */
function encodeBufferRegion(b, node) {
    return _Buffer.createBuffer(b, new Long(node.offset, 0), new Long(node.length, 0));
}
/** @ignore */
const platformIsLittleEndian = (function () {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
    // Int16Array uses the platform's endianness.
    return new Int16Array(buffer)[0] === 256;
})();

//# sourceMappingURL=message.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/reader.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/reader.mjs ***!
  \**************************************************/
/*! exports provided: RecordBatchReader, RecordBatchStreamReader, AsyncRecordBatchStreamReader, RecordBatchFileReader, AsyncRecordBatchFileReader */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchReader", function() { return RecordBatchReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamReader", function() { return RecordBatchStreamReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchStreamReader", function() { return AsyncRecordBatchStreamReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileReader", function() { return RecordBatchFileReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncRecordBatchFileReader", function() { return AsyncRecordBatchFileReader; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _metadata_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/file */ "./node_modules/apache-arrow/ipc/metadata/file.mjs");
/* harmony import */ var _io_adapters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../io/adapters */ "./node_modules/apache-arrow/io/adapters.mjs");
/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony import */ var _io_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../io/file */ "./node_modules/apache-arrow/io/file.mjs");
/* harmony import */ var _visitor_vectorloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../visitor/vectorloader */ "./node_modules/apache-arrow/visitor/vectorloader.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _io_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../io/interfaces */ "./node_modules/apache-arrow/io/interfaces.mjs");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message */ "./node_modules/apache-arrow/ipc/message.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.











class RecordBatchReader extends _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ReadableInterop"] {
    constructor(impl) {
        super();
        this._impl = impl;
    }
    get closed() { return this._impl.closed; }
    get schema() { return this._impl.schema; }
    get autoDestroy() { return this._impl.autoDestroy; }
    get dictionaries() { return this._impl.dictionaries; }
    get numDictionaries() { return this._impl.numDictionaries; }
    get numRecordBatches() { return this._impl.numRecordBatches; }
    get footer() { return this._impl.isFile() ? this._impl.footer : null; }
    isSync() { return this._impl.isSync(); }
    isAsync() { return this._impl.isAsync(); }
    isFile() { return this._impl.isFile(); }
    isStream() { return this._impl.isStream(); }
    next() {
        return this._impl.next();
    }
    throw(value) {
        return this._impl.throw(value);
    }
    return(value) {
        return this._impl.return(value);
    }
    cancel() {
        return this._impl.cancel();
    }
    reset(schema) {
        this._impl.reset(schema);
        this._DOMStream = undefined;
        this._nodeStream = undefined;
        return this;
    }
    open(options) {
        const opening = this._impl.open(options);
        return Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isPromise"])(opening) ? opening.then(() => this) : this;
    }
    readRecordBatch(index) {
        return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
    }
    [Symbol.iterator]() {
        return this._impl[Symbol.iterator]();
    }
    [Symbol.asyncIterator]() {
        return this._impl[Symbol.asyncIterator]();
    }
    toDOMStream() {
        return _io_adapters__WEBPACK_IMPORTED_MODULE_3__["default"].toDOMStream((this.isSync()
            ? { [Symbol.iterator]: () => this }
            : { [Symbol.asyncIterator]: () => this }));
    }
    toNodeStream() {
        return _io_adapters__WEBPACK_IMPORTED_MODULE_3__["default"].toNodeStream((this.isSync()
            ? { [Symbol.iterator]: () => this }
            : { [Symbol.asyncIterator]: () => this }), { objectMode: true });
    }
    /** @nocollapse */
    // @ts-ignore
    static throughNode(options) {
        throw new Error(`"throughNode" not available in this environment`);
    }
    /** @nocollapse */
    static throughDOM(
    // @ts-ignore
    writableStrategy, 
    // @ts-ignore
    readableStrategy) {
        throw new Error(`"throughDOM" not available in this environment`);
    }
    /** @nocollapse */
    static from(source) {
        if (source instanceof RecordBatchReader) {
            return source;
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isArrowJSON"])(source)) {
            return fromArrowJSON(source);
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isFileHandle"])(source)) {
            return fromFileHandle(source);
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isPromise"])(source)) {
            return (async () => await RecordBatchReader.from(await source))();
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isFetchResponse"])(source) || Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isReadableDOMStream"])(source) || Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isReadableNodeStream"])(source) || Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isAsyncIterable"])(source)) {
            return fromAsyncByteStream(new _io_stream__WEBPACK_IMPORTED_MODULE_4__["AsyncByteStream"](source));
        }
        return fromByteStream(new _io_stream__WEBPACK_IMPORTED_MODULE_4__["ByteStream"](source));
    }
    /** @nocollapse */
    static readAll(source) {
        if (source instanceof RecordBatchReader) {
            return source.isSync() ? readAllSync(source) : readAllAsync(source);
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isArrowJSON"])(source) || ArrayBuffer.isView(source) || Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isIterable"])(source) || Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isIteratorResult"])(source)) {
            return readAllSync(source);
        }
        return readAllAsync(source);
    }
}
//
// Since TS is a structural type system, we define the following subclass stubs
// so that concrete types exist to associate with with the interfaces below.
//
// The implementation for each RecordBatchReader is hidden away in the set of
// `RecordBatchReaderImpl` classes in the second half of this file. This allows
// us to export a single RecordBatchReader class, and swap out the impl based
// on the io primitives or underlying arrow (JSON, file, or stream) at runtime.
//
// Async/await makes our job a bit harder, since it forces everything to be
// either fully sync or fully async. This is why the logic for the reader impls
// has been duplicated into both sync and async variants. Since the RBR
// delegates to its impl, an RBR with an AsyncRecordBatchFileReaderImpl for
// example will return async/await-friendly Promises, but one with a (sync)
// RecordBatchStreamReaderImpl will always return values. Nothing should be
// different about their logic, aside from the async handling. This is also why
// this code looks highly structured, as it should be nearly identical and easy
// to follow.
//
/** @ignore */
class RecordBatchStreamReader extends RecordBatchReader {
    constructor(_impl) {
        super(_impl);
        this._impl = _impl;
    }
    [Symbol.iterator]() { return this._impl[Symbol.iterator](); }
    async *[Symbol.asyncIterator]() { yield* this[Symbol.iterator](); }
}
/** @ignore */
class AsyncRecordBatchStreamReader extends RecordBatchReader {
    constructor(_impl) {
        super(_impl);
        this._impl = _impl;
    }
    [Symbol.iterator]() { throw new Error(`AsyncRecordBatchStreamReader is not Iterable`); }
    [Symbol.asyncIterator]() { return this._impl[Symbol.asyncIterator](); }
}
/** @ignore */
class RecordBatchFileReader extends RecordBatchStreamReader {
    constructor(_impl) {
        super(_impl);
        this._impl = _impl;
    }
}
/** @ignore */
class AsyncRecordBatchFileReader extends AsyncRecordBatchStreamReader {
    constructor(_impl) {
        super(_impl);
        this._impl = _impl;
    }
}
/** @ignore */
class RecordBatchReaderImpl {
    constructor(dictionaries = new Map()) {
        this.closed = false;
        this.autoDestroy = true;
        this._dictionaryIndex = 0;
        this._recordBatchIndex = 0;
        this.dictionaries = dictionaries;
    }
    get numDictionaries() { return this._dictionaryIndex; }
    get numRecordBatches() { return this._recordBatchIndex; }
    isSync() { return false; }
    isAsync() { return false; }
    isFile() { return false; }
    isStream() { return false; }
    reset(schema) {
        this._dictionaryIndex = 0;
        this._recordBatchIndex = 0;
        this.schema = schema;
        this.dictionaries = new Map();
        return this;
    }
    _loadRecordBatch(header, body) {
        return new _recordbatch__WEBPACK_IMPORTED_MODULE_7__["RecordBatch"](this.schema, header.length, this._loadVectors(header, body, this.schema.fields));
    }
    _loadDictionaryBatch(header, body) {
        const { id, isDelta, data } = header;
        const { dictionaries, schema } = this;
        const dictionary = dictionaries.get(id);
        if (isDelta || !dictionary) {
            const type = schema.dictionaries.get(id);
            return (dictionary && isDelta ? dictionary.concat(_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new(this._loadVectors(data, body, [type])[0])) :
                _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new(this._loadVectors(data, body, [type])[0]));
        }
        return dictionary;
    }
    _loadVectors(header, body, types) {
        return new _visitor_vectorloader__WEBPACK_IMPORTED_MODULE_6__["VectorLoader"](body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
    }
}
/** @ignore */
class RecordBatchStreamReaderImpl extends RecordBatchReaderImpl {
    constructor(source, dictionaries) {
        super(dictionaries);
        this._reader = !Object(_util_compat__WEBPACK_IMPORTED_MODULE_10__["isArrowJSON"])(source)
            ? new _message__WEBPACK_IMPORTED_MODULE_9__["MessageReader"](this._handle = source)
            : new _message__WEBPACK_IMPORTED_MODULE_9__["JSONMessageReader"](this._handle = source);
    }
    isSync() { return true; }
    isStream() { return true; }
    [Symbol.iterator]() {
        return this;
    }
    cancel() {
        if (!this.closed && (this.closed = true)) {
            this.reset()._reader.return();
            this._reader = null;
            this.dictionaries = null;
        }
    }
    open(options) {
        if (!this.closed) {
            this.autoDestroy = shouldAutoDestroy(this, options);
            if (!(this.schema || (this.schema = this._reader.readSchema()))) {
                this.cancel();
            }
        }
        return this;
    }
    throw(value) {
        if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return this.reset()._reader.throw(value);
        }
        return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
    }
    return(value) {
        if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return this.reset()._reader.return(value);
        }
        return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
    }
    next() {
        if (this.closed) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
        }
        let message, { _reader: reader } = this;
        while (message = this._readNextMessageAndValidate()) {
            if (message.isSchema()) {
                this.reset(message.header());
            }
            else if (message.isRecordBatch()) {
                this._recordBatchIndex++;
                const header = message.header();
                const buffer = reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return { done: false, value: recordBatch };
            }
            else if (message.isDictionaryBatch()) {
                this._dictionaryIndex++;
                const header = message.header();
                const buffer = reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
            }
        }
        if (this.schema && this._recordBatchIndex === 0) {
            this._recordBatchIndex++;
            return { done: false, value: new _recordbatch__WEBPACK_IMPORTED_MODULE_7__["_InternalEmptyPlaceholderRecordBatch"](this.schema) };
        }
        return this.return();
    }
    _readNextMessageAndValidate(type) {
        return this._reader.readMessage(type);
    }
}
/** @ignore */
class AsyncRecordBatchStreamReaderImpl extends RecordBatchReaderImpl {
    constructor(source, dictionaries) {
        super(dictionaries);
        this._reader = new _message__WEBPACK_IMPORTED_MODULE_9__["AsyncMessageReader"](this._handle = source);
    }
    isAsync() { return true; }
    isStream() { return true; }
    [Symbol.asyncIterator]() {
        return this;
    }
    async cancel() {
        if (!this.closed && (this.closed = true)) {
            await this.reset()._reader.return();
            this._reader = null;
            this.dictionaries = null;
        }
    }
    async open(options) {
        if (!this.closed) {
            this.autoDestroy = shouldAutoDestroy(this, options);
            if (!(this.schema || (this.schema = (await this._reader.readSchema())))) {
                await this.cancel();
            }
        }
        return this;
    }
    async throw(value) {
        if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return await this.reset()._reader.throw(value);
        }
        return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
    }
    async return(value) {
        if (!this.closed && this.autoDestroy && (this.closed = true)) {
            return await this.reset()._reader.return(value);
        }
        return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
    }
    async next() {
        if (this.closed) {
            return _io_interfaces__WEBPACK_IMPORTED_MODULE_8__["ITERATOR_DONE"];
        }
        let message, { _reader: reader } = this;
        while (message = await this._readNextMessageAndValidate()) {
            if (message.isSchema()) {
                await this.reset(message.header());
            }
            else if (message.isRecordBatch()) {
                this._recordBatchIndex++;
                const header = message.header();
                const buffer = await reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return { done: false, value: recordBatch };
            }
            else if (message.isDictionaryBatch()) {
                this._dictionaryIndex++;
                const header = message.header();
                const buffer = await reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
            }
        }
        if (this.schema && this._recordBatchIndex === 0) {
            this._recordBatchIndex++;
            return { done: false, value: new _recordbatch__WEBPACK_IMPORTED_MODULE_7__["_InternalEmptyPlaceholderRecordBatch"](this.schema) };
        }
        return await this.return();
    }
    async _readNextMessageAndValidate(type) {
        return await this._reader.readMessage(type);
    }
}
/** @ignore */
class RecordBatchFileReaderImpl extends RecordBatchStreamReaderImpl {
    constructor(source, dictionaries) {
        super(source instanceof _io_file__WEBPACK_IMPORTED_MODULE_5__["RandomAccessFile"] ? source : new _io_file__WEBPACK_IMPORTED_MODULE_5__["RandomAccessFile"](source), dictionaries);
    }
    get footer() { return this._footer; }
    get numDictionaries() { return this._footer ? this._footer.numDictionaries : 0; }
    get numRecordBatches() { return this._footer ? this._footer.numRecordBatches : 0; }
    isSync() { return true; }
    isFile() { return true; }
    open(options) {
        if (!this.closed && !this._footer) {
            this.schema = (this._footer = this._readFooter()).schema;
            for (const block of this._footer.dictionaryBatches()) {
                block && this._readDictionaryBatch(this._dictionaryIndex++);
            }
        }
        return super.open(options);
    }
    readRecordBatch(index) {
        if (this.closed) {
            return null;
        }
        if (!this._footer) {
            this.open();
        }
        const block = this._footer && this._footer.getRecordBatch(index);
        if (block && this._handle.seek(block.offset)) {
            const message = this._reader.readMessage(_enum__WEBPACK_IMPORTED_MODULE_1__["MessageHeader"].RecordBatch);
            if (message && message.isRecordBatch()) {
                const header = message.header();
                const buffer = this._reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return recordBatch;
            }
        }
        return null;
    }
    _readDictionaryBatch(index) {
        const block = this._footer && this._footer.getDictionaryBatch(index);
        if (block && this._handle.seek(block.offset)) {
            const message = this._reader.readMessage(_enum__WEBPACK_IMPORTED_MODULE_1__["MessageHeader"].DictionaryBatch);
            if (message && message.isDictionaryBatch()) {
                const header = message.header();
                const buffer = this._reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
            }
        }
    }
    _readFooter() {
        const { _handle } = this;
        const offset = _handle.size - _message__WEBPACK_IMPORTED_MODULE_9__["magicAndPadding"];
        const length = _handle.readInt32(offset);
        const buffer = _handle.readAt(offset - length, length);
        return _metadata_file__WEBPACK_IMPORTED_MODULE_2__["Footer"].decode(buffer);
    }
    _readNextMessageAndValidate(type) {
        if (!this._footer) {
            this.open();
        }
        if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
            const block = this._footer && this._footer.getRecordBatch(this._recordBatchIndex);
            if (block && this._handle.seek(block.offset)) {
                return this._reader.readMessage(type);
            }
        }
        return null;
    }
}
/** @ignore */
class AsyncRecordBatchFileReaderImpl extends AsyncRecordBatchStreamReaderImpl {
    constructor(source, ...rest) {
        const byteLength = typeof rest[0] !== 'number' ? rest.shift() : undefined;
        const dictionaries = rest[0] instanceof Map ? rest.shift() : undefined;
        super(source instanceof _io_file__WEBPACK_IMPORTED_MODULE_5__["AsyncRandomAccessFile"] ? source : new _io_file__WEBPACK_IMPORTED_MODULE_5__["AsyncRandomAccessFile"](source, byteLength), dictionaries);
    }
    get footer() { return this._footer; }
    get numDictionaries() { return this._footer ? this._footer.numDictionaries : 0; }
    get numRecordBatches() { return this._footer ? this._footer.numRecordBatches : 0; }
    isFile() { return true; }
    isAsync() { return true; }
    async open(options) {
        if (!this.closed && !this._footer) {
            this.schema = (this._footer = await this._readFooter()).schema;
            for (const block of this._footer.dictionaryBatches()) {
                block && await this._readDictionaryBatch(this._dictionaryIndex++);
            }
        }
        return await super.open(options);
    }
    async readRecordBatch(index) {
        if (this.closed) {
            return null;
        }
        if (!this._footer) {
            await this.open();
        }
        const block = this._footer && this._footer.getRecordBatch(index);
        if (block && (await this._handle.seek(block.offset))) {
            const message = await this._reader.readMessage(_enum__WEBPACK_IMPORTED_MODULE_1__["MessageHeader"].RecordBatch);
            if (message && message.isRecordBatch()) {
                const header = message.header();
                const buffer = await this._reader.readMessageBody(message.bodyLength);
                const recordBatch = this._loadRecordBatch(header, buffer);
                return recordBatch;
            }
        }
        return null;
    }
    async _readDictionaryBatch(index) {
        const block = this._footer && this._footer.getDictionaryBatch(index);
        if (block && (await this._handle.seek(block.offset))) {
            const message = await this._reader.readMessage(_enum__WEBPACK_IMPORTED_MODULE_1__["MessageHeader"].DictionaryBatch);
            if (message && message.isDictionaryBatch()) {
                const header = message.header();
                const buffer = await this._reader.readMessageBody(message.bodyLength);
                const vector = this._loadDictionaryBatch(header, buffer);
                this.dictionaries.set(header.id, vector);
            }
        }
    }
    async _readFooter() {
        const { _handle } = this;
        _handle._pending && await _handle._pending;
        const offset = _handle.size - _message__WEBPACK_IMPORTED_MODULE_9__["magicAndPadding"];
        const length = await _handle.readInt32(offset);
        const buffer = await _handle.readAt(offset - length, length);
        return _metadata_file__WEBPACK_IMPORTED_MODULE_2__["Footer"].decode(buffer);
    }
    async _readNextMessageAndValidate(type) {
        if (!this._footer) {
            await this.open();
        }
        if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
            const block = this._footer.getRecordBatch(this._recordBatchIndex);
            if (block && await this._handle.seek(block.offset)) {
                return await this._reader.readMessage(type);
            }
        }
        return null;
    }
}
/** @ignore */
class RecordBatchJSONReaderImpl extends RecordBatchStreamReaderImpl {
    constructor(source, dictionaries) {
        super(source, dictionaries);
    }
    _loadVectors(header, body, types) {
        return new _visitor_vectorloader__WEBPACK_IMPORTED_MODULE_6__["JSONVectorLoader"](body, header.nodes, header.buffers, this.dictionaries).visitMany(types);
    }
}
//
// Define some helper functions and static implementations down here. There's
// a bit of branching in the static methods that can lead to the same routines
// being executed, so we've broken those out here for readability.
//
/** @ignore */
function shouldAutoDestroy(self, options) {
    return options && (typeof options['autoDestroy'] === 'boolean') ? options['autoDestroy'] : self['autoDestroy'];
}
/** @ignore */
function* readAllSync(source) {
    const reader = RecordBatchReader.from(source);
    try {
        if (!reader.open({ autoDestroy: false }).closed) {
            do {
                yield reader;
            } while (!(reader.reset().open()).closed);
        }
    }
    finally {
        reader.cancel();
    }
}
/** @ignore */
async function* readAllAsync(source) {
    const reader = await RecordBatchReader.from(source);
    try {
        if (!(await reader.open({ autoDestroy: false })).closed) {
            do {
                yield reader;
            } while (!(await reader.reset().open()).closed);
        }
    }
    finally {
        await reader.cancel();
    }
}
/** @ignore */
function fromArrowJSON(source) {
    return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
}
/** @ignore */
function fromByteStream(source) {
    const bytes = source.peek((_message__WEBPACK_IMPORTED_MODULE_9__["magicLength"] + 7) & ~7);
    return bytes && bytes.byteLength >= 4 ? !Object(_message__WEBPACK_IMPORTED_MODULE_9__["checkForMagicArrowString"])(bytes)
        ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source))
        : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read()))
        : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () { }()));
}
/** @ignore */
async function fromAsyncByteStream(source) {
    const bytes = await source.peek((_message__WEBPACK_IMPORTED_MODULE_9__["magicLength"] + 7) & ~7);
    return bytes && bytes.byteLength >= 4 ? !Object(_message__WEBPACK_IMPORTED_MODULE_9__["checkForMagicArrowString"])(bytes)
        ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source))
        : new RecordBatchFileReader(new RecordBatchFileReaderImpl(await source.read()))
        : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(async function* () { }()));
}
/** @ignore */
async function fromFileHandle(source) {
    const { size } = await source.stat();
    const file = new _io_file__WEBPACK_IMPORTED_MODULE_5__["AsyncRandomAccessFile"](source, size);
    if (size >= _message__WEBPACK_IMPORTED_MODULE_9__["magicX2AndPadding"]) {
        if (Object(_message__WEBPACK_IMPORTED_MODULE_9__["checkForMagicArrowString"])(await file.readAt(0, (_message__WEBPACK_IMPORTED_MODULE_9__["magicLength"] + 7) & ~7))) {
            return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
        }
    }
    return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
}

//# sourceMappingURL=reader.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/ipc/writer.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/ipc/writer.mjs ***!
  \**************************************************/
/*! exports provided: RecordBatchWriter, RecordBatchStreamWriter, RecordBatchFileWriter, RecordBatchJSONWriter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchWriter", function() { return RecordBatchWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchStreamWriter", function() { return RecordBatchStreamWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchFileWriter", function() { return RecordBatchFileWriter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatchJSONWriter", function() { return RecordBatchJSONWriter; });
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table */ "./node_modules/apache-arrow/table.mjs");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./node_modules/apache-arrow/ipc/message.mjs");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../column */ "./node_modules/apache-arrow/column.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _metadata_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata/message */ "./node_modules/apache-arrow/ipc/metadata/message.mjs");
/* harmony import */ var _metadata_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata/file */ "./node_modules/apache-arrow/ipc/metadata/file.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _io_stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../io/stream */ "./node_modules/apache-arrow/io/stream.mjs");
/* harmony import */ var _visitor_vectorassembler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../visitor/vectorassembler */ "./node_modules/apache-arrow/visitor/vectorassembler.mjs");
/* harmony import */ var _visitor_jsontypeassembler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visitor/jsontypeassembler */ "./node_modules/apache-arrow/visitor/jsontypeassembler.mjs");
/* harmony import */ var _visitor_jsonvectorassembler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../visitor/jsonvectorassembler */ "./node_modules/apache-arrow/visitor/jsonvectorassembler.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _io_interfaces__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../io/interfaces */ "./node_modules/apache-arrow/io/interfaces.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

















class RecordBatchWriter extends _io_interfaces__WEBPACK_IMPORTED_MODULE_14__["ReadableInterop"] {
    constructor(options) {
        super();
        this._position = 0;
        this._started = false;
        // @ts-ignore
        this._sink = new _io_stream__WEBPACK_IMPORTED_MODULE_8__["AsyncByteQueue"]();
        this._schema = null;
        this._dictionaryBlocks = [];
        this._recordBatchBlocks = [];
        this._dictionaryDeltaOffsets = new Map();
        Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isObject"])(options) || (options = { autoDestroy: true, writeLegacyIpcFormat: false });
        this._autoDestroy = (typeof options.autoDestroy === 'boolean') ? options.autoDestroy : true;
        this._writeLegacyIpcFormat = (typeof options.writeLegacyIpcFormat === 'boolean') ? options.writeLegacyIpcFormat : false;
    }
    /** @nocollapse */
    // @ts-ignore
    static throughNode(options) {
        throw new Error(`"throughNode" not available in this environment`);
    }
    /** @nocollapse */
    static throughDOM(
    // @ts-ignore
    writableStrategy, 
    // @ts-ignore
    readableStrategy) {
        throw new Error(`"throughDOM" not available in this environment`);
    }
    toString(sync = false) {
        return this._sink.toString(sync);
    }
    toUint8Array(sync = false) {
        return this._sink.toUint8Array(sync);
    }
    writeAll(input) {
        if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isPromise"])(input)) {
            return input.then((x) => this.writeAll(x));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isAsyncIterable"])(input)) {
            return writeAllAsync(this, input);
        }
        return writeAll(this, input);
    }
    get closed() { return this._sink.closed; }
    [Symbol.asyncIterator]() { return this._sink[Symbol.asyncIterator](); }
    toDOMStream(options) { return this._sink.toDOMStream(options); }
    toNodeStream(options) { return this._sink.toNodeStream(options); }
    close() {
        return this.reset()._sink.close();
    }
    abort(reason) {
        return this.reset()._sink.abort(reason);
    }
    finish() {
        this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
        return this;
    }
    reset(sink = this._sink, schema = null) {
        if ((sink === this._sink) || (sink instanceof _io_stream__WEBPACK_IMPORTED_MODULE_8__["AsyncByteQueue"])) {
            this._sink = sink;
        }
        else {
            this._sink = new _io_stream__WEBPACK_IMPORTED_MODULE_8__["AsyncByteQueue"]();
            if (sink && Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isWritableDOMStream"])(sink)) {
                this.toDOMStream({ type: 'bytes' }).pipeTo(sink);
            }
            else if (sink && Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isWritableNodeStream"])(sink)) {
                this.toNodeStream({ objectMode: false }).pipe(sink);
            }
        }
        if (this._started && this._schema) {
            this._writeFooter(this._schema);
        }
        this._started = false;
        this._dictionaryBlocks = [];
        this._recordBatchBlocks = [];
        this._dictionaryDeltaOffsets = new Map();
        if (!schema || !(schema.compareTo(this._schema))) {
            if (schema === null) {
                this._position = 0;
                this._schema = null;
            }
            else {
                this._started = true;
                this._schema = schema;
                this._writeSchema(schema);
            }
        }
        return this;
    }
    write(payload) {
        let schema = null;
        if (!this._sink) {
            throw new Error(`RecordBatchWriter is closed`);
        }
        else if (payload === null || payload === undefined) {
            return this.finish() && undefined;
        }
        else if (payload instanceof _table__WEBPACK_IMPORTED_MODULE_0__["Table"] && !(schema = payload.schema)) {
            return this.finish() && undefined;
        }
        else if (payload instanceof _recordbatch__WEBPACK_IMPORTED_MODULE_13__["RecordBatch"] && !(schema = payload.schema)) {
            return this.finish() && undefined;
        }
        if (schema && !schema.compareTo(this._schema)) {
            if (this._started && this._autoDestroy) {
                return this.close();
            }
            this.reset(this._sink, schema);
        }
        if (payload instanceof _recordbatch__WEBPACK_IMPORTED_MODULE_13__["RecordBatch"]) {
            if (!(payload instanceof _recordbatch__WEBPACK_IMPORTED_MODULE_13__["_InternalEmptyPlaceholderRecordBatch"])) {
                this._writeRecordBatch(payload);
            }
        }
        else if (payload instanceof _table__WEBPACK_IMPORTED_MODULE_0__["Table"]) {
            this.writeAll(payload.chunks);
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isIterable"])(payload)) {
            this.writeAll(payload);
        }
    }
    _writeMessage(message, alignment = 8) {
        const a = alignment - 1;
        const buffer = _metadata_message__WEBPACK_IMPORTED_MODULE_5__["Message"].encode(message);
        const flatbufferSize = buffer.byteLength;
        const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
        const alignedSize = (flatbufferSize + prefixSize + a) & ~a;
        const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
        if (message.headerType === _enum__WEBPACK_IMPORTED_MODULE_7__["MessageHeader"].RecordBatch) {
            this._recordBatchBlocks.push(new _metadata_file__WEBPACK_IMPORTED_MODULE_6__["FileBlock"](alignedSize, message.bodyLength, this._position));
        }
        else if (message.headerType === _enum__WEBPACK_IMPORTED_MODULE_7__["MessageHeader"].DictionaryBatch) {
            this._dictionaryBlocks.push(new _metadata_file__WEBPACK_IMPORTED_MODULE_6__["FileBlock"](alignedSize, message.bodyLength, this._position));
        }
        // If not in legacy pre-0.15.0 mode, write the stream continuation indicator
        if (!this._writeLegacyIpcFormat) {
            this._write(Int32Array.of(-1));
        }
        // Write the flatbuffer size prefix including padding
        this._write(Int32Array.of(alignedSize - prefixSize));
        // Write the flatbuffer
        if (flatbufferSize > 0) {
            this._write(buffer);
        }
        // Write any padding
        return this._writePadding(nPaddingBytes);
    }
    _write(chunk) {
        if (this._started) {
            const buffer = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_12__["toUint8Array"])(chunk);
            if (buffer && buffer.byteLength > 0) {
                this._sink.write(buffer);
                this._position += buffer.byteLength;
            }
        }
        return this;
    }
    _writeSchema(schema) {
        return this._writeMessage(_metadata_message__WEBPACK_IMPORTED_MODULE_5__["Message"].from(schema));
    }
    // @ts-ignore
    _writeFooter(schema) {
        // eos bytes
        return this._writeLegacyIpcFormat
            ? this._write(Int32Array.of(0))
            : this._write(Int32Array.of(-1, 0));
    }
    _writeMagic() {
        return this._write(_message__WEBPACK_IMPORTED_MODULE_1__["MAGIC"]);
    }
    _writePadding(nBytes) {
        return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
    }
    _writeRecordBatch(batch) {
        const { byteLength, nodes, bufferRegions, buffers } = _visitor_vectorassembler__WEBPACK_IMPORTED_MODULE_9__["VectorAssembler"].assemble(batch);
        const recordBatch = new _metadata_message__WEBPACK_IMPORTED_MODULE_5__["RecordBatch"](batch.length, nodes, bufferRegions);
        const message = _metadata_message__WEBPACK_IMPORTED_MODULE_5__["Message"].from(recordBatch, byteLength);
        return this
            ._writeDictionaries(batch)
            ._writeMessage(message)
            ._writeBodyBuffers(buffers);
    }
    _writeDictionaryBatch(dictionary, id, isDelta = false) {
        this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
        const { byteLength, nodes, bufferRegions, buffers } = _visitor_vectorassembler__WEBPACK_IMPORTED_MODULE_9__["VectorAssembler"].assemble(dictionary);
        const recordBatch = new _metadata_message__WEBPACK_IMPORTED_MODULE_5__["RecordBatch"](dictionary.length, nodes, bufferRegions);
        const dictionaryBatch = new _metadata_message__WEBPACK_IMPORTED_MODULE_5__["DictionaryBatch"](recordBatch, id, isDelta);
        const message = _metadata_message__WEBPACK_IMPORTED_MODULE_5__["Message"].from(dictionaryBatch, byteLength);
        return this
            ._writeMessage(message)
            ._writeBodyBuffers(buffers);
    }
    _writeBodyBuffers(buffers) {
        let buffer;
        let size, padding;
        for (let i = -1, n = buffers.length; ++i < n;) {
            if ((buffer = buffers[i]) && (size = buffer.byteLength) > 0) {
                this._write(buffer);
                if ((padding = ((size + 7) & ~7) - size) > 0) {
                    this._writePadding(padding);
                }
            }
        }
        return this;
    }
    _writeDictionaries(batch) {
        for (let [id, dictionary] of batch.dictionaries) {
            let offset = this._dictionaryDeltaOffsets.get(id) || 0;
            if (offset === 0 || (dictionary = dictionary.slice(offset)).length > 0) {
                const chunks = 'chunks' in dictionary ? dictionary.chunks : [dictionary];
                for (const chunk of chunks) {
                    this._writeDictionaryBatch(chunk, id, offset > 0);
                    offset += chunk.length;
                }
            }
        }
        return this;
    }
}
/** @ignore */
class RecordBatchStreamWriter extends RecordBatchWriter {
    /** @nocollapse */
    static writeAll(input, options) {
        const writer = new RecordBatchStreamWriter(options);
        if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isPromise"])(input)) {
            return input.then((x) => writer.writeAll(x));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isAsyncIterable"])(input)) {
            return writeAllAsync(writer, input);
        }
        return writeAll(writer, input);
    }
}
/** @ignore */
class RecordBatchFileWriter extends RecordBatchWriter {
    constructor() {
        super();
        this._autoDestroy = true;
    }
    /** @nocollapse */
    static writeAll(input) {
        const writer = new RecordBatchFileWriter();
        if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isPromise"])(input)) {
            return input.then((x) => writer.writeAll(x));
        }
        else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_15__["isAsyncIterable"])(input)) {
            return writeAllAsync(writer, input);
        }
        return writeAll(writer, input);
    }
    // @ts-ignore
    _writeSchema(schema) {
        return this._writeMagic()._writePadding(2);
    }
    _writeFooter(schema) {
        const buffer = _metadata_file__WEBPACK_IMPORTED_MODULE_6__["Footer"].encode(new _metadata_file__WEBPACK_IMPORTED_MODULE_6__["Footer"](schema, _enum__WEBPACK_IMPORTED_MODULE_7__["MetadataVersion"].V4, this._recordBatchBlocks, this._dictionaryBlocks));
        return super
            ._writeFooter(schema) // EOS bytes for sequential readers
            ._write(buffer) // Write the flatbuffer
            ._write(Int32Array.of(buffer.byteLength)) // then the footer size suffix
            ._writeMagic(); // then the magic suffix
    }
}
/** @ignore */
class RecordBatchJSONWriter extends RecordBatchWriter {
    constructor() {
        super();
        this._autoDestroy = true;
        this._recordBatches = [];
        this._dictionaries = [];
    }
    /** @nocollapse */
    static writeAll(input) {
        return new RecordBatchJSONWriter().writeAll(input);
    }
    _writeMessage() { return this; }
    // @ts-ignore
    _writeFooter(schema) { return this; }
    _writeSchema(schema) {
        return this._write(`{\n  "schema": ${JSON.stringify({ fields: schema.fields.map(fieldToJSON) }, null, 2)}`);
    }
    _writeDictionaries(batch) {
        if (batch.dictionaries.size > 0) {
            this._dictionaries.push(batch);
        }
        return this;
    }
    _writeDictionaryBatch(dictionary, id, isDelta = false) {
        this._dictionaryDeltaOffsets.set(id, dictionary.length + (this._dictionaryDeltaOffsets.get(id) || 0));
        this._write(this._dictionaryBlocks.length === 0 ? `    ` : `,\n    `);
        this._write(`${dictionaryBatchToJSON(dictionary, id, isDelta)}`);
        this._dictionaryBlocks.push(new _metadata_file__WEBPACK_IMPORTED_MODULE_6__["FileBlock"](0, 0, 0));
        return this;
    }
    _writeRecordBatch(batch) {
        this._writeDictionaries(batch);
        this._recordBatches.push(batch);
        return this;
    }
    close() {
        if (this._dictionaries.length > 0) {
            this._write(`,\n  "dictionaries": [\n`);
            for (const batch of this._dictionaries) {
                super._writeDictionaries(batch);
            }
            this._write(`\n  ]`);
        }
        if (this._recordBatches.length > 0) {
            for (let i = -1, n = this._recordBatches.length; ++i < n;) {
                this._write(i === 0 ? `,\n  "batches": [\n    ` : `,\n    `);
                this._write(`${recordBatchToJSON(this._recordBatches[i])}`);
                this._recordBatchBlocks.push(new _metadata_file__WEBPACK_IMPORTED_MODULE_6__["FileBlock"](0, 0, 0));
            }
            this._write(`\n  ]`);
        }
        if (this._schema) {
            this._write(`\n}`);
        }
        this._dictionaries = [];
        this._recordBatches = [];
        return super.close();
    }
}
/** @ignore */
function writeAll(writer, input) {
    let chunks = input;
    if (input instanceof _table__WEBPACK_IMPORTED_MODULE_0__["Table"]) {
        chunks = input.chunks;
        writer.reset(undefined, input.schema);
    }
    for (const batch of chunks) {
        writer.write(batch);
    }
    return writer.finish();
}
/** @ignore */
async function writeAllAsync(writer, batches) {
    for await (const batch of batches) {
        writer.write(batch);
    }
    return writer.finish();
}
/** @ignore */
function fieldToJSON({ name, type, nullable }) {
    const assembler = new _visitor_jsontypeassembler__WEBPACK_IMPORTED_MODULE_10__["JSONTypeAssembler"]();
    return {
        'name': name, 'nullable': nullable,
        'type': assembler.visit(type),
        'children': (type.children || []).map(fieldToJSON),
        'dictionary': !_type__WEBPACK_IMPORTED_MODULE_3__["DataType"].isDictionary(type) ? undefined : {
            'id': type.id,
            'isOrdered': type.isOrdered,
            'indexType': assembler.visit(type.indices)
        }
    };
}
/** @ignore */
function dictionaryBatchToJSON(dictionary, id, isDelta = false) {
    const field = new _schema__WEBPACK_IMPORTED_MODULE_4__["Field"](`${id}`, dictionary.type, dictionary.nullCount > 0);
    const columns = _visitor_jsonvectorassembler__WEBPACK_IMPORTED_MODULE_11__["JSONVectorAssembler"].assemble(new _column__WEBPACK_IMPORTED_MODULE_2__["Column"](field, [dictionary]));
    return JSON.stringify({
        'id': id,
        'isDelta': isDelta,
        'data': {
            'count': dictionary.length,
            'columns': columns
        }
    }, null, 2);
}
/** @ignore */
function recordBatchToJSON(records) {
    return JSON.stringify({
        'count': records.length,
        'columns': _visitor_jsonvectorassembler__WEBPACK_IMPORTED_MODULE_11__["JSONVectorAssembler"].assemble(records)
    }, null, 2);
}

//# sourceMappingURL=writer.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/recordbatch.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/recordbatch.mjs ***!
  \***************************************************/
/*! exports provided: RecordBatch, _InternalEmptyPlaceholderRecordBatch */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordBatch", function() { return RecordBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_InternalEmptyPlaceholderRecordBatch", function() { return _InternalEmptyPlaceholderRecordBatch; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./node_modules/apache-arrow/table.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _vector_chunked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vector/chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _util_recordbatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/recordbatch */ "./node_modules/apache-arrow/util/recordbatch.mjs");
/* harmony import */ var _vector_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector/index */ "./node_modules/apache-arrow/vector/index.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.











class RecordBatch extends _vector_index__WEBPACK_IMPORTED_MODULE_10__["StructVector"] {
    constructor(...args) {
        let data;
        let schema = args[0];
        let children;
        if (args[1] instanceof _data__WEBPACK_IMPORTED_MODULE_0__["Data"]) {
            [, data, children] = args;
        }
        else {
            const fields = schema.fields;
            const [, length, childData] = args;
            data = _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Struct(new _type__WEBPACK_IMPORTED_MODULE_8__["Struct"](fields), 0, length, 0, null, childData);
        }
        super(data, children);
        this._schema = schema;
    }
    /** @nocollapse */
    static from(options) {
        if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_5__["isIterable"])(options['values'])) {
            return _table__WEBPACK_IMPORTED_MODULE_1__["Table"].from(options);
        }
        return _table__WEBPACK_IMPORTED_MODULE_1__["Table"].from(options);
    }
    /** @nocollapse */
    static new(...args) {
        const [fs, xs] = Object(_util_args__WEBPACK_IMPORTED_MODULE_7__["selectFieldArgs"])(args);
        const vs = xs.filter((x) => x instanceof _vector__WEBPACK_IMPORTED_MODULE_2__["Vector"]);
        return new RecordBatch(...Object(_util_recordbatch__WEBPACK_IMPORTED_MODULE_9__["ensureSameLengthData"])(new _schema__WEBPACK_IMPORTED_MODULE_4__["Schema"](fs), vs.map((x) => x.data)));
    }
    clone(data, children = this._children) {
        return new RecordBatch(this._schema, data, children);
    }
    concat(...others) {
        const schema = this._schema, chunks = _vector_chunked__WEBPACK_IMPORTED_MODULE_6__["Chunked"].flatten(this, ...others);
        return new _table__WEBPACK_IMPORTED_MODULE_1__["Table"](schema, chunks.map(({ data }) => new RecordBatch(schema, data)));
    }
    get schema() { return this._schema; }
    get numCols() { return this._schema.fields.length; }
    get dictionaries() {
        return this._dictionaries || (this._dictionaries = DictionaryCollector.collect(this));
    }
    select(...columnNames) {
        const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), new Map());
        return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
    }
    selectAt(...columnIndices) {
        const schema = this._schema.selectAt(...columnIndices);
        const childData = columnIndices.map((i) => this.data.childData[i]).filter(Boolean);
        return new RecordBatch(schema, this.length, childData);
    }
}
/**
 * An internal class used by the `RecordBatchReader` and `RecordBatchWriter`
 * implementations to differentiate between a stream with valid zero-length
 * RecordBatches, and a stream with a Schema message, but no RecordBatches.
 * @see https://github.com/apache/arrow/pull/4373
 * @ignore
 * @private
 */
/* tslint:disable:class-name */
class _InternalEmptyPlaceholderRecordBatch extends RecordBatch {
    constructor(schema) {
        super(schema, 0, schema.fields.map((f) => _data__WEBPACK_IMPORTED_MODULE_0__["Data"].new(f.type, 0, 0, 0)));
    }
}
/** @ignore */
class DictionaryCollector extends _visitor__WEBPACK_IMPORTED_MODULE_3__["Visitor"] {
    constructor() {
        super(...arguments);
        this.dictionaries = new Map();
    }
    static collect(batch) {
        return new DictionaryCollector().visit(batch.data, new _type__WEBPACK_IMPORTED_MODULE_8__["Struct"](batch.schema.fields)).dictionaries;
    }
    visit(data, type) {
        if (_type__WEBPACK_IMPORTED_MODULE_8__["DataType"].isDictionary(type)) {
            return this.visitDictionary(data, type);
        }
        else {
            data.childData.forEach((child, i) => this.visit(child, type.children[i].type));
        }
        return this;
    }
    visitDictionary(data, type) {
        const dictionary = data.dictionary;
        if (dictionary && dictionary.length > 0) {
            this.dictionaries.set(type.id, dictionary);
        }
        return this;
    }
}

//# sourceMappingURL=recordbatch.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/schema.mjs":
/*!**********************************************!*\
  !*** ./node_modules/apache-arrow/schema.mjs ***!
  \**********************************************/
/*! exports provided: Schema, Field */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _visitor_typecomparator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor/typecomparator */ "./node_modules/apache-arrow/visitor/typecomparator.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




class Schema {
    constructor(fields = [], metadata, dictionaries) {
        this.fields = (fields || []);
        this.metadata = metadata || new Map();
        if (!dictionaries) {
            dictionaries = generateDictionaryMap(fields);
        }
        this.dictionaries = dictionaries;
    }
    /** @nocollapse */
    static from(...args) {
        return Schema.new(args[0], args[1]);
    }
    /** @nocollapse */
    static new(...args) {
        return new Schema(Object(_util_args__WEBPACK_IMPORTED_MODULE_1__["selectFieldArgs"])(args)[0]);
    }
    get [Symbol.toStringTag]() { return 'Schema'; }
    toString() {
        return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(', ')} }>`;
    }
    compareTo(other) {
        return _visitor_typecomparator__WEBPACK_IMPORTED_MODULE_2__["instance"].compareSchemas(this, other);
    }
    select(...columnNames) {
        const names = columnNames.reduce((xs, x) => (xs[x] = true) && xs, Object.create(null));
        return new Schema(this.fields.filter((f) => names[f.name]), this.metadata);
    }
    selectAt(...columnIndices) {
        return new Schema(columnIndices.map((i) => this.fields[i]).filter(Boolean), this.metadata);
    }
    assign(...args) {
        const other = args[0] instanceof Schema ? args[0]
            : new Schema(Object(_util_args__WEBPACK_IMPORTED_MODULE_1__["selectArgs"])(Field, args));
        const curFields = [...this.fields];
        const metadata = mergeMaps(mergeMaps(new Map(), this.metadata), other.metadata);
        const newFields = other.fields.filter((f2) => {
            const i = curFields.findIndex((f) => f.name === f2.name);
            return ~i ? (curFields[i] = f2.clone({
                metadata: mergeMaps(mergeMaps(new Map(), curFields[i].metadata), f2.metadata)
            })) && false : true;
        });
        const newDictionaries = generateDictionaryMap(newFields, new Map());
        return new Schema([...curFields, ...newFields], metadata, new Map([...this.dictionaries, ...newDictionaries]));
    }
}
class Field {
    constructor(name, type, nullable = false, metadata) {
        this.name = name;
        this.type = type;
        this.nullable = nullable;
        this.metadata = metadata || new Map();
    }
    /** @nocollapse */
    static new(...args) {
        let [name, type, nullable, metadata] = args;
        if (args[0] && typeof args[0] === 'object') {
            ({ name } = args[0]);
            (type === undefined) && (type = args[0].type);
            (nullable === undefined) && (nullable = args[0].nullable);
            (metadata === undefined) && (metadata = args[0].metadata);
        }
        return new Field(`${name}`, type, nullable, metadata);
    }
    get typeId() { return this.type.typeId; }
    get [Symbol.toStringTag]() { return 'Field'; }
    toString() { return `${this.name}: ${this.type}`; }
    compareTo(other) {
        return _visitor_typecomparator__WEBPACK_IMPORTED_MODULE_2__["instance"].compareField(this, other);
    }
    clone(...args) {
        let [name, type, nullable, metadata] = args;
        (!args[0] || typeof args[0] !== 'object')
            ? ([name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata] = args)
            : ({ name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata } = args[0]);
        return Field.new(name, type, nullable, metadata);
    }
}
/** @ignore */
function mergeMaps(m1, m2) {
    return new Map([...(m1 || new Map()), ...(m2 || new Map())]);
}
/** @ignore */
function generateDictionaryMap(fields, dictionaries = new Map()) {
    for (let i = -1, n = fields.length; ++i < n;) {
        const field = fields[i];
        const type = field.type;
        if (_type__WEBPACK_IMPORTED_MODULE_0__["DataType"].isDictionary(type)) {
            if (!dictionaries.has(type.id)) {
                dictionaries.set(type.id, type.dictionary);
            }
            else if (dictionaries.get(type.id) !== type.dictionary) {
                throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
            }
        }
        if (type.children && type.children.length > 0) {
            generateDictionaryMap(type.children, dictionaries);
        }
    }
    return dictionaries;
}
// Add these here so they're picked up by the externs creator
// in the build, and closure-compiler doesn't minify them away
Schema.prototype.fields = null;
Schema.prototype.metadata = null;
Schema.prototype.dictionaries = null;
Field.prototype.type = null;
Field.prototype.name = null;
Field.prototype.nullable = null;
Field.prototype.metadata = null;

//# sourceMappingURL=schema.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/table.mjs":
/*!*********************************************!*\
  !*** ./node_modules/apache-arrow/table.mjs ***!
  \*********************************************/
/*! exports provided: Table */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./node_modules/apache-arrow/column.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _ipc_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ipc/reader */ "./node_modules/apache-arrow/ipc/reader.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _ipc_writer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ipc/writer */ "./node_modules/apache-arrow/ipc/writer.mjs");
/* harmony import */ var _util_recordbatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/recordbatch */ "./node_modules/apache-arrow/util/recordbatch.mjs");
/* harmony import */ var _vector_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vector/index */ "./node_modules/apache-arrow/vector/index.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.










class Table extends _vector_index__WEBPACK_IMPORTED_MODULE_9__["Chunked"] {
    constructor(...args) {
        let schema = null;
        if (args[0] instanceof _schema__WEBPACK_IMPORTED_MODULE_1__["Schema"]) {
            schema = args.shift();
        }
        let chunks = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__["selectArgs"])(_recordbatch__WEBPACK_IMPORTED_MODULE_2__["RecordBatch"], args);
        if (!schema && !(schema = chunks[0] && chunks[0].schema)) {
            throw new TypeError('Table must be initialized with a Schema or at least one RecordBatch');
        }
        chunks[0] || (chunks[0] = new _recordbatch__WEBPACK_IMPORTED_MODULE_2__["_InternalEmptyPlaceholderRecordBatch"](schema));
        super(new _type__WEBPACK_IMPORTED_MODULE_4__["Struct"](schema.fields), chunks);
        this._schema = schema;
        this._chunks = chunks;
    }
    /** @nocollapse */
    static empty(schema = new _schema__WEBPACK_IMPORTED_MODULE_1__["Schema"]([])) { return new Table(schema, []); }
    /** @nocollapse */
    static from(input) {
        if (!input) {
            return Table.empty();
        }
        if (typeof input === 'object') {
            let table = Object(_util_compat__WEBPACK_IMPORTED_MODULE_6__["isIterable"])(input['values']) ? tableFromIterable(input)
                : Object(_util_compat__WEBPACK_IMPORTED_MODULE_6__["isAsyncIterable"])(input['values']) ? tableFromAsyncIterable(input)
                    : null;
            if (table !== null) {
                return table;
            }
        }
        let reader = _ipc_reader__WEBPACK_IMPORTED_MODULE_3__["RecordBatchReader"].from(input);
        if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(reader)) {
            return (async () => await Table.from(await reader))();
        }
        if (reader.isSync() && (reader = reader.open())) {
            return !reader.schema ? Table.empty() : new Table(reader.schema, [...reader]);
        }
        return (async (opening) => {
            const reader = await opening;
            const schema = reader.schema;
            const batches = [];
            if (schema) {
                for await (let batch of reader) {
                    batches.push(batch);
                }
                return new Table(schema, batches);
            }
            return Table.empty();
        })(reader.open());
    }
    /** @nocollapse */
    static async fromAsync(source) {
        return await Table.from(source);
    }
    /** @nocollapse */
    static fromStruct(vector) {
        return Table.new(vector.data.childData, vector.type.children);
    }
    /** @nocollapse */
    static new(...cols) {
        return new Table(...Object(_util_recordbatch__WEBPACK_IMPORTED_MODULE_8__["distributeColumnsIntoRecordBatches"])(Object(_util_args__WEBPACK_IMPORTED_MODULE_5__["selectColumnArgs"])(cols)));
    }
    get schema() { return this._schema; }
    get length() { return this._length; }
    get chunks() { return this._chunks; }
    get numCols() { return this._numChildren; }
    clone(chunks = this._chunks) {
        return new Table(this._schema, chunks);
    }
    getColumn(name) {
        return this.getColumnAt(this.getColumnIndex(name));
    }
    getColumnAt(index) {
        return this.getChildAt(index);
    }
    getColumnIndex(name) {
        return this._schema.fields.findIndex((f) => f.name === name);
    }
    getChildAt(index) {
        if (index < 0 || index >= this.numChildren) {
            return null;
        }
        let field, child;
        const fields = this._schema.fields;
        const columns = this._children || (this._children = []);
        if (child = columns[index]) {
            return child;
        }
        if (field = fields[index]) {
            const chunks = this._chunks
                .map((chunk) => chunk.getChildAt(index))
                .filter((vec) => vec != null);
            if (chunks.length > 0) {
                return (columns[index] = new _column__WEBPACK_IMPORTED_MODULE_0__["Column"](field, chunks));
            }
        }
        return null;
    }
    // @ts-ignore
    serialize(encoding = 'binary', stream = true) {
        const Writer = !stream
            ? _ipc_writer__WEBPACK_IMPORTED_MODULE_7__["RecordBatchFileWriter"]
            : _ipc_writer__WEBPACK_IMPORTED_MODULE_7__["RecordBatchStreamWriter"];
        return Writer.writeAll(this).toUint8Array(true);
    }
    count() {
        return this._length;
    }
    select(...columnNames) {
        const nameToIndex = this._schema.fields.reduce((m, f, i) => m.set(f.name, i), new Map());
        return this.selectAt(...columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
    }
    selectAt(...columnIndices) {
        const schema = this._schema.selectAt(...columnIndices);
        return new Table(schema, this._chunks.map(({ length, data: { childData } }) => {
            return new _recordbatch__WEBPACK_IMPORTED_MODULE_2__["RecordBatch"](schema, length, columnIndices.map((i) => childData[i]).filter(Boolean));
        }));
    }
    assign(other) {
        const fields = this._schema.fields;
        const [indices, oldToNew] = other.schema.fields.reduce((memo, f2, newIdx) => {
            const [indices, oldToNew] = memo;
            const i = fields.findIndex((f) => f.name === f2.name);
            ~i ? (oldToNew[i] = newIdx) : indices.push(newIdx);
            return memo;
        }, [[], []]);
        const schema = this._schema.assign(other.schema);
        const columns = [
            ...fields.map((_f, i, _fs, j = oldToNew[i]) => (j === undefined ? this.getColumnAt(i) : other.getColumnAt(j))),
            ...indices.map((i) => other.getColumnAt(i))
        ].filter(Boolean);
        return new Table(...Object(_util_recordbatch__WEBPACK_IMPORTED_MODULE_8__["distributeVectorsIntoRecordBatches"])(schema, columns));
    }
}
function tableFromIterable(input) {
    const { type } = input;
    if (type instanceof _type__WEBPACK_IMPORTED_MODULE_4__["Struct"]) {
        return Table.fromStruct(_vector_index__WEBPACK_IMPORTED_MODULE_9__["StructVector"].from(input));
    }
    return null;
}
function tableFromAsyncIterable(input) {
    const { type } = input;
    if (type instanceof _type__WEBPACK_IMPORTED_MODULE_4__["Struct"]) {
        return _vector_index__WEBPACK_IMPORTED_MODULE_9__["StructVector"].from(input).then((vector) => Table.fromStruct(vector));
    }
    return null;
}

//# sourceMappingURL=table.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/type.mjs":
/*!********************************************!*\
  !*** ./node_modules/apache-arrow/type.mjs ***!
  \********************************************/
/*! exports provided: DataType, Null, Int, Int8, Int16, Int32, Int64, Uint8, Uint16, Uint32, Uint64, Float, Float16, Float32, Float64, Binary, Utf8, Bool, Decimal, Date_, DateDay, DateMillisecond, Time, TimeSecond, TimeMillisecond, TimeMicrosecond, TimeNanosecond, Timestamp, TimestampSecond, TimestampMillisecond, TimestampMicrosecond, TimestampNanosecond, Interval, IntervalDayTime, IntervalYearMonth, List, Struct, Union, DenseUnion, SparseUnion, FixedSizeBinary, FixedSizeList, Map_, Dictionary, strideForType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataType", function() { return DataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Null", function() { return Null; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int", function() { return Int_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int8", function() { return Int8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int16", function() { return Int16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int32", function() { return Int32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int64", function() { return Int64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8", function() { return Uint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint16", function() { return Uint16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint32", function() { return Uint32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint64", function() { return Uint64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float", function() { return Float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float16", function() { return Float16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float32", function() { return Float32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float64", function() { return Float64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return Binary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf8", function() { return Utf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bool", function() { return Bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal", function() { return Decimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date_", function() { return Date_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDay", function() { return DateDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMillisecond", function() { return DateMillisecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSecond", function() { return TimeSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecond", function() { return TimeMillisecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecond", function() { return TimeMicrosecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecond", function() { return TimeNanosecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return Timestamp_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampSecond", function() { return TimestampSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecond", function() { return TimestampMillisecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecond", function() { return TimestampMicrosecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecond", function() { return TimestampNanosecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTime", function() { return IntervalDayTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonth", function() { return IntervalYearMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Struct", function() { return Struct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Union", function() { return Union_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenseUnion", function() { return DenseUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparseUnion", function() { return SparseUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinary", function() { return FixedSizeBinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return FixedSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map_", function() { return Map_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strideForType", function() { return strideForType; });
/* harmony import */ var _visitor_typecomparator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor/typecomparator */ "./node_modules/apache-arrow/visitor/typecomparator.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./node_modules/apache-arrow/enum.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/**
 * An abstract base class for classes that encapsulate metadata about each of
 * the logical types that Arrow can represent.
 */
class DataType {
    /** @nocollapse */ static isNull(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Null; }
    /** @nocollapse */ static isInt(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Int; }
    /** @nocollapse */ static isFloat(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Float; }
    /** @nocollapse */ static isBinary(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Binary; }
    /** @nocollapse */ static isUtf8(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Utf8; }
    /** @nocollapse */ static isBool(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Bool; }
    /** @nocollapse */ static isDecimal(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Decimal; }
    /** @nocollapse */ static isDate(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Date; }
    /** @nocollapse */ static isTime(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Time; }
    /** @nocollapse */ static isTimestamp(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Timestamp; }
    /** @nocollapse */ static isInterval(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Interval; }
    /** @nocollapse */ static isList(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].List; }
    /** @nocollapse */ static isStruct(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Struct; }
    /** @nocollapse */ static isUnion(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Union; }
    /** @nocollapse */ static isFixedSizeBinary(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeBinary; }
    /** @nocollapse */ static isFixedSizeList(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeList; }
    /** @nocollapse */ static isMap(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Map; }
    /** @nocollapse */ static isDictionary(x) { return x && x.typeId === _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Dictionary; }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].NONE; }
    compareTo(other) {
        return _visitor_typecomparator__WEBPACK_IMPORTED_MODULE_0__["instance"].visit(this, other);
    }
}
DataType[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.ArrayType = Array;
    return proto[Symbol.toStringTag] = 'DataType';
})(DataType.prototype);
/** @ignore */
class Null extends DataType {
    toString() { return `Null`; }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Null; }
}
Null[Symbol.toStringTag] = ((proto) => {
    return proto[Symbol.toStringTag] = 'Null';
})(Null.prototype);
/** @ignore */
class Int_ extends DataType {
    constructor(isSigned, bitWidth) {
        super();
        this.isSigned = isSigned;
        this.bitWidth = bitWidth;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Int; }
    get ArrayType() {
        switch (this.bitWidth) {
            case 8: return this.isSigned ? Int8Array : Uint8Array;
            case 16: return this.isSigned ? Int16Array : Uint16Array;
            case 32: return this.isSigned ? Int32Array : Uint32Array;
            case 64: return this.isSigned ? Int32Array : Uint32Array;
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() { return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`; }
}
Int_[Symbol.toStringTag] = ((proto) => {
    proto.isSigned = null;
    proto.bitWidth = null;
    return proto[Symbol.toStringTag] = 'Int';
})(Int_.prototype);

/** @ignore */
class Int8 extends Int_ {
    constructor() { super(true, 8); }
}
/** @ignore */
class Int16 extends Int_ {
    constructor() { super(true, 16); }
}
/** @ignore */
class Int32 extends Int_ {
    constructor() { super(true, 32); }
}
/** @ignore */
class Int64 extends Int_ {
    constructor() { super(true, 64); }
}
/** @ignore */
class Uint8 extends Int_ {
    constructor() { super(false, 8); }
}
/** @ignore */
class Uint16 extends Int_ {
    constructor() { super(false, 16); }
}
/** @ignore */
class Uint32 extends Int_ {
    constructor() { super(false, 32); }
}
/** @ignore */
class Uint64 extends Int_ {
    constructor() { super(false, 64); }
}
Object.defineProperty(Int8.prototype, 'ArrayType', { value: Int8Array });
Object.defineProperty(Int16.prototype, 'ArrayType', { value: Int16Array });
Object.defineProperty(Int32.prototype, 'ArrayType', { value: Int32Array });
Object.defineProperty(Int64.prototype, 'ArrayType', { value: Int32Array });
Object.defineProperty(Uint8.prototype, 'ArrayType', { value: Uint8Array });
Object.defineProperty(Uint16.prototype, 'ArrayType', { value: Uint16Array });
Object.defineProperty(Uint32.prototype, 'ArrayType', { value: Uint32Array });
Object.defineProperty(Uint64.prototype, 'ArrayType', { value: Uint32Array });
/** @ignore */
class Float extends DataType {
    constructor(precision) {
        super();
        this.precision = precision;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Float; }
    get ArrayType() {
        switch (this.precision) {
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].HALF: return Uint16Array;
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].SINGLE: return Float32Array;
            case _enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].DOUBLE: return Float64Array;
        }
        throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
    }
    toString() { return `Float${(this.precision << 5) || 16}`; }
}
Float[Symbol.toStringTag] = ((proto) => {
    proto.precision = null;
    return proto[Symbol.toStringTag] = 'Float';
})(Float.prototype);
/** @ignore */
class Float16 extends Float {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].HALF); }
}
/** @ignore */
class Float32 extends Float {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].SINGLE); }
}
/** @ignore */
class Float64 extends Float {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["Precision"].DOUBLE); }
}
Object.defineProperty(Float16.prototype, 'ArrayType', { value: Uint16Array });
Object.defineProperty(Float32.prototype, 'ArrayType', { value: Float32Array });
Object.defineProperty(Float64.prototype, 'ArrayType', { value: Float64Array });
/** @ignore */
class Binary extends DataType {
    constructor() {
        super();
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Binary; }
    toString() { return `Binary`; }
}
Binary[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Binary';
})(Binary.prototype);
/** @ignore */
class Utf8 extends DataType {
    constructor() {
        super();
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Utf8; }
    toString() { return `Utf8`; }
}
Utf8[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Utf8';
})(Utf8.prototype);
/** @ignore */
class Bool extends DataType {
    constructor() {
        super();
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Bool; }
    toString() { return `Bool`; }
}
Bool[Symbol.toStringTag] = ((proto) => {
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'Bool';
})(Bool.prototype);
/** @ignore */
class Decimal extends DataType {
    constructor(scale, precision) {
        super();
        this.scale = scale;
        this.precision = precision;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Decimal; }
    toString() { return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`; }
}
Decimal[Symbol.toStringTag] = ((proto) => {
    proto.scale = null;
    proto.precision = null;
    proto.ArrayType = Uint32Array;
    return proto[Symbol.toStringTag] = 'Decimal';
})(Decimal.prototype);
/** @ignore */
class Date_ extends DataType {
    constructor(unit) {
        super();
        this.unit = unit;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Date; }
    toString() { return `Date${(this.unit + 1) * 32}<${_enum__WEBPACK_IMPORTED_MODULE_1__["DateUnit"][this.unit]}>`; }
}
Date_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Date';
})(Date_.prototype);
/** @ignore */
class DateDay extends Date_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["DateUnit"].DAY); }
}
/** @ignore */
class DateMillisecond extends Date_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["DateUnit"].MILLISECOND); }
}
/** @ignore */
class Time_ extends DataType {
    constructor(unit, bitWidth) {
        super();
        this.unit = unit;
        this.bitWidth = bitWidth;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Time; }
    toString() { return `Time${this.bitWidth}<${_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"][this.unit]}>`; }
}
Time_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.bitWidth = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Time';
})(Time_.prototype);

/** @ignore */
class TimeSecond extends Time_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].SECOND, 32); }
}
/** @ignore */
class TimeMillisecond extends Time_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].MILLISECOND, 32); }
}
/** @ignore */
class TimeMicrosecond extends Time_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].MICROSECOND, 64); }
}
/** @ignore */
class TimeNanosecond extends Time_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].NANOSECOND, 64); }
}
/** @ignore */
class Timestamp_ extends DataType {
    constructor(unit, timezone) {
        super();
        this.unit = unit;
        this.timezone = timezone;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Timestamp; }
    toString() { return `Timestamp<${_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"][this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`; }
}
Timestamp_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.timezone = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Timestamp';
})(Timestamp_.prototype);

/** @ignore */
class TimestampSecond extends Timestamp_ {
    constructor(timezone) { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].SECOND, timezone); }
}
/** @ignore */
class TimestampMillisecond extends Timestamp_ {
    constructor(timezone) { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].MILLISECOND, timezone); }
}
/** @ignore */
class TimestampMicrosecond extends Timestamp_ {
    constructor(timezone) { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].MICROSECOND, timezone); }
}
/** @ignore */
class TimestampNanosecond extends Timestamp_ {
    constructor(timezone) { super(_enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].NANOSECOND, timezone); }
}
/** @ignore */
class Interval_ extends DataType {
    constructor(unit) {
        super();
        this.unit = unit;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Interval; }
    toString() { return `Interval<${_enum__WEBPACK_IMPORTED_MODULE_1__["IntervalUnit"][this.unit]}>`; }
}
Interval_[Symbol.toStringTag] = ((proto) => {
    proto.unit = null;
    proto.ArrayType = Int32Array;
    return proto[Symbol.toStringTag] = 'Interval';
})(Interval_.prototype);

/** @ignore */
class IntervalDayTime extends Interval_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["IntervalUnit"].DAY_TIME); }
}
/** @ignore */
class IntervalYearMonth extends Interval_ {
    constructor() { super(_enum__WEBPACK_IMPORTED_MODULE_1__["IntervalUnit"].YEAR_MONTH); }
}
/** @ignore */
class List extends DataType {
    constructor(child) {
        super();
        this.children = [child];
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].List; }
    toString() { return `List<${this.valueType}>`; }
    get valueType() { return this.children[0].type; }
    get valueField() { return this.children[0]; }
    get ArrayType() { return this.valueType.ArrayType; }
}
List[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    return proto[Symbol.toStringTag] = 'List';
})(List.prototype);
/** @ignore */
class Struct extends DataType {
    constructor(children) {
        super();
        this.children = children;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Struct; }
    toString() { return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`; }
}
Struct[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    return proto[Symbol.toStringTag] = 'Struct';
})(Struct.prototype);
/** @ignore */
class Union_ extends DataType {
    constructor(mode, typeIds, children) {
        super();
        this.mode = mode;
        this.children = children;
        this.typeIds = typeIds = Int32Array.from(typeIds);
        this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => {
            return (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex;
        }, Object.create(null));
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Union; }
    toString() {
        return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
    }
}
Union_[Symbol.toStringTag] = ((proto) => {
    proto.mode = null;
    proto.typeIds = null;
    proto.children = null;
    proto.typeIdToChildIndex = null;
    proto.ArrayType = Int8Array;
    return proto[Symbol.toStringTag] = 'Union';
})(Union_.prototype);

/** @ignore */
class DenseUnion extends Union_ {
    constructor(typeIds, children) {
        super(_enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"].Dense, typeIds, children);
    }
}
/** @ignore */
class SparseUnion extends Union_ {
    constructor(typeIds, children) {
        super(_enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"].Sparse, typeIds, children);
    }
}
/** @ignore */
class FixedSizeBinary extends DataType {
    constructor(byteWidth) {
        super();
        this.byteWidth = byteWidth;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeBinary; }
    toString() { return `FixedSizeBinary[${this.byteWidth}]`; }
}
FixedSizeBinary[Symbol.toStringTag] = ((proto) => {
    proto.byteWidth = null;
    proto.ArrayType = Uint8Array;
    return proto[Symbol.toStringTag] = 'FixedSizeBinary';
})(FixedSizeBinary.prototype);
/** @ignore */
class FixedSizeList extends DataType {
    constructor(listSize, child) {
        super();
        this.listSize = listSize;
        this.children = [child];
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeList; }
    get valueType() { return this.children[0].type; }
    get valueField() { return this.children[0]; }
    get ArrayType() { return this.valueType.ArrayType; }
    toString() { return `FixedSizeList[${this.listSize}]<${this.valueType}>`; }
}
FixedSizeList[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.listSize = null;
    return proto[Symbol.toStringTag] = 'FixedSizeList';
})(FixedSizeList.prototype);
/** @ignore */
class Map_ extends DataType {
    constructor(child, keysSorted = false) {
        super();
        this.children = [child];
        this.keysSorted = keysSorted;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Map; }
    get keyType() { return this.children[0].type.children[0].type; }
    get valueType() { return this.children[0].type.children[1].type; }
    toString() { return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`; }
}
Map_[Symbol.toStringTag] = ((proto) => {
    proto.children = null;
    proto.keysSorted = null;
    return proto[Symbol.toStringTag] = 'Map_';
})(Map_.prototype);
/** @ignore */
const getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
/** @ignore */
class Dictionary extends DataType {
    constructor(dictionary, indices, id, isOrdered) {
        super();
        this.indices = indices;
        this.dictionary = dictionary;
        this.isOrdered = isOrdered || false;
        this.id = id == null ? getId() : typeof id === 'number' ? id : id.low;
    }
    get typeId() { return _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Dictionary; }
    get children() { return this.dictionary.children; }
    get valueType() { return this.dictionary; }
    get ArrayType() { return this.dictionary.ArrayType; }
    toString() { return `Dictionary<${this.indices}, ${this.dictionary}>`; }
}
Dictionary[Symbol.toStringTag] = ((proto) => {
    proto.id = null;
    proto.indices = null;
    proto.isOrdered = null;
    proto.dictionary = null;
    return proto[Symbol.toStringTag] = 'Dictionary';
})(Dictionary.prototype);
/** @ignore */
function strideForType(type) {
    let t = type;
    switch (type.typeId) {
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Decimal: return 4;
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Timestamp: return 2;
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Date: return 1 + t.unit;
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Interval: return 1 + t.unit;
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Int: return 1 + +(t.bitWidth > 32);
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].Time: return 1 + +(t.bitWidth > 32);
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeList: return t.listSize;
        case _enum__WEBPACK_IMPORTED_MODULE_1__["Type"].FixedSizeBinary: return t.byteWidth;
        default: return 1;
    }
}

//# sourceMappingURL=type.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/args.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/util/args.mjs ***!
  \*************************************************/
/*! exports provided: selectArgs, selectColumnArgs, selectFieldArgs, selectChunkArgs, selectVectorChildrenArgs, selectColumnChildrenArgs */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectArgs", function() { return selectArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectColumnArgs", function() { return selectColumnArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFieldArgs", function() { return selectFieldArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectChunkArgs", function() { return selectChunkArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVectorChildrenArgs", function() { return selectVectorChildrenArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectColumnChildrenArgs", function() { return selectColumnChildrenArgs; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../column */ "./node_modules/apache-arrow/column.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _vector_chunked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vector/chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.






const isArray = Array.isArray;
/** @ignore */
const selectArgs = (Ctor, vals) => _selectArgs(Ctor, vals, [], 0);
/** @ignore */
const selectColumnArgs = (args) => {
    const [fields, values] = _selectFieldArgs(args, [[], []]);
    return values.map((x, i) => x instanceof _column__WEBPACK_IMPORTED_MODULE_2__["Column"] ? _column__WEBPACK_IMPORTED_MODULE_2__["Column"].new(x.field.clone(fields[i]), x) :
        x instanceof _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"] ? _column__WEBPACK_IMPORTED_MODULE_2__["Column"].new(fields[i], x) :
            _column__WEBPACK_IMPORTED_MODULE_2__["Column"].new(fields[i], []));
};
/** @ignore */
const selectFieldArgs = (args) => _selectFieldArgs(args, [[], []]);
/** @ignore */
const selectChunkArgs = (Ctor, vals) => _selectChunkArgs(Ctor, vals, [], 0);
/** @ignore */
const selectVectorChildrenArgs = (Ctor, vals) => _selectVectorChildrenArgs(Ctor, vals, [], 0);
/** @ignore */
const selectColumnChildrenArgs = (Ctor, vals) => _selectColumnChildrenArgs(Ctor, vals, [], 0);
/** @ignore */
function _selectArgs(Ctor, vals, res, idx) {
    let value, j = idx;
    let i = -1, n = vals.length;
    while (++i < n) {
        if (isArray(value = vals[i])) {
            j = _selectArgs(Ctor, value, res, j).length;
        }
        else if (value instanceof Ctor) {
            res[j++] = value;
        }
    }
    return res;
}
/** @ignore */
function _selectChunkArgs(Ctor, vals, res, idx) {
    let value, j = idx;
    let i = -1, n = vals.length;
    while (++i < n) {
        if (isArray(value = vals[i])) {
            j = _selectChunkArgs(Ctor, value, res, j).length;
        }
        else if (value instanceof _vector_chunked__WEBPACK_IMPORTED_MODULE_5__["Chunked"]) {
            j = _selectChunkArgs(Ctor, value.chunks, res, j).length;
        }
        else if (value instanceof Ctor) {
            res[j++] = value;
        }
    }
    return res;
}
/** @ignore */
function _selectVectorChildrenArgs(Ctor, vals, res, idx) {
    let value, j = idx;
    let i = -1, n = vals.length;
    while (++i < n) {
        if (isArray(value = vals[i])) {
            j = _selectVectorChildrenArgs(Ctor, value, res, j).length;
        }
        else if (value instanceof Ctor) {
            j = _selectArgs(_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"], value.schema.fields.map((_, i) => value.getChildAt(i)), res, j).length;
        }
        else if (value instanceof _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"]) {
            res[j++] = value;
        }
    }
    return res;
}
/** @ignore */
function _selectColumnChildrenArgs(Ctor, vals, res, idx) {
    let value, j = idx;
    let i = -1, n = vals.length;
    while (++i < n) {
        if (isArray(value = vals[i])) {
            j = _selectColumnChildrenArgs(Ctor, value, res, j).length;
        }
        else if (value instanceof Ctor) {
            j = _selectArgs(_column__WEBPACK_IMPORTED_MODULE_2__["Column"], value.schema.fields.map((f, i) => _column__WEBPACK_IMPORTED_MODULE_2__["Column"].new(f, value.getChildAt(i))), res, j).length;
        }
        else if (value instanceof _column__WEBPACK_IMPORTED_MODULE_2__["Column"]) {
            res[j++] = value;
        }
    }
    return res;
}
/** @ignore */
const toKeysAndValues = (xs, [k, v], i) => (xs[0][i] = k, xs[1][i] = v, xs);
/** @ignore */
function _selectFieldArgs(vals, ret) {
    let keys, n;
    switch (n = vals.length) {
        case 0: return ret;
        case 1:
            keys = ret[0];
            if (!(vals[0])) {
                return ret;
            }
            if (isArray(vals[0])) {
                return _selectFieldArgs(vals[0], ret);
            }
            if (!(vals[0] instanceof _data__WEBPACK_IMPORTED_MODULE_0__["Data"] || vals[0] instanceof _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"] || vals[0] instanceof _type__WEBPACK_IMPORTED_MODULE_4__["DataType"])) {
                [keys, vals] = Object.entries(vals[0]).reduce(toKeysAndValues, ret);
            }
            break;
        default:
            !isArray(keys = vals[n - 1])
                ? (vals = isArray(vals[0]) ? vals[0] : vals, keys = [])
                : (vals = isArray(vals[0]) ? vals[0] : vals.slice(0, n - 1));
    }
    let fieldIndex = -1;
    let valueIndex = -1;
    let idx = -1, len = vals.length;
    let field;
    let val;
    let [fields, values] = ret;
    while (++idx < len) {
        val = vals[idx];
        if (val instanceof _column__WEBPACK_IMPORTED_MODULE_2__["Column"] && (values[++valueIndex] = val)) {
            fields[++fieldIndex] = val.field.clone(keys[idx], val.type, true);
        }
        else {
            ({ [idx]: field = idx } = keys);
            if (val instanceof _type__WEBPACK_IMPORTED_MODULE_4__["DataType"] && (values[++valueIndex] = val)) {
                fields[++fieldIndex] = _schema__WEBPACK_IMPORTED_MODULE_1__["Field"].new(field, val, true);
            }
            else if (val && val.type && (values[++valueIndex] = val)) {
                val instanceof _data__WEBPACK_IMPORTED_MODULE_0__["Data"] && (values[valueIndex] = val = _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"].new(val));
                fields[++fieldIndex] = _schema__WEBPACK_IMPORTED_MODULE_1__["Field"].new(field, val.type, true);
            }
        }
    }
    return ret;
}

//# sourceMappingURL=args.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/bit.mjs":
/*!************************************************!*\
  !*** ./node_modules/apache-arrow/util/bit.mjs ***!
  \************************************************/
/*! exports provided: getBool, getBit, setBool, truncateBitmap, packBools, iterateBits, popcnt_bit_range, popcnt_array, popcnt_uint32 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBool", function() { return getBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBit", function() { return getBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBool", function() { return setBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateBitmap", function() { return truncateBitmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packBools", function() { return packBools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateBits", function() { return iterateBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popcnt_bit_range", function() { return popcnt_bit_range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popcnt_array", function() { return popcnt_array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popcnt_uint32", function() { return popcnt_uint32; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/** @ignore */
function getBool(_data, _index, byte, bit) {
    return (byte & 1 << bit) !== 0;
}
/** @ignore */
function getBit(_data, _index, byte, bit) {
    return (byte & 1 << bit) >> bit;
}
/** @ignore */
function setBool(bytes, index, value) {
    return value ?
        !!(bytes[index >> 3] |= (1 << (index % 8))) || true :
        !(bytes[index >> 3] &= ~(1 << (index % 8))) && false;
}
/** @ignore */
function truncateBitmap(offset, length, bitmap) {
    const alignedSize = (bitmap.byteLength + 7) & ~7;
    if (offset > 0 || bitmap.byteLength < alignedSize) {
        const bytes = new Uint8Array(alignedSize);
        // If the offset is a multiple of 8 bits, it's safe to slice the bitmap
        bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) :
            // Otherwise iterate each bit from the offset and return a new one
            packBools(iterateBits(bitmap, offset, length, null, getBool)).subarray(0, alignedSize));
        return bytes;
    }
    return bitmap;
}
/** @ignore */
function packBools(values) {
    let xs = [];
    let i = 0, bit = 0, byte = 0;
    for (const value of values) {
        value && (byte |= 1 << bit);
        if (++bit === 8) {
            xs[i++] = byte;
            byte = bit = 0;
        }
    }
    if (i === 0 || bit > 0) {
        xs[i++] = byte;
    }
    let b = new Uint8Array((xs.length + 7) & ~7);
    b.set(xs);
    return b;
}
/** @ignore */
function* iterateBits(bytes, begin, length, context, get) {
    let bit = begin % 8;
    let byteIndex = begin >> 3;
    let index = 0, remaining = length;
    for (; remaining > 0; bit = 0) {
        let byte = bytes[byteIndex++];
        do {
            yield get(context, index++, byte, bit);
        } while (--remaining > 0 && ++bit < 8);
    }
}
/**
 * Compute the population count (the number of bits set to 1) for a range of bits in a Uint8Array.
 * @param vector The Uint8Array of bits for which to compute the population count.
 * @param lhs The range's left-hand side (or start) bit
 * @param rhs The range's right-hand side (or end) bit
 */
/** @ignore */
function popcnt_bit_range(data, lhs, rhs) {
    if (rhs - lhs <= 0) {
        return 0;
    }
    // If the bit range is less than one byte, sum the 1 bits in the bit range
    if (rhs - lhs < 8) {
        let sum = 0;
        for (const bit of iterateBits(data, lhs, rhs - lhs, data, getBit)) {
            sum += bit;
        }
        return sum;
    }
    // Get the next lowest multiple of 8 from the right hand side
    const rhsInside = rhs >> 3 << 3;
    // Get the next highest multiple of 8 from the left hand side
    const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
    return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    popcnt_bit_range(data, lhs, lhsInside) +
        // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
        popcnt_bit_range(data, rhsInside, rhs) +
        // Get the popcnt of all bits between the left and right hand sides' multiples of 8
        popcnt_array(data, lhsInside >> 3, (rhsInside - lhsInside) >> 3));
}
/** @ignore */
function popcnt_array(arr, byteOffset, byteLength) {
    let cnt = 0, pos = byteOffset | 0;
    const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
    const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
    while (len - pos >= 4) {
        cnt += popcnt_uint32(view.getUint32(pos));
        pos += 4;
    }
    while (len - pos >= 2) {
        cnt += popcnt_uint32(view.getUint16(pos));
        pos += 2;
    }
    while (len - pos >= 1) {
        cnt += popcnt_uint32(view.getUint8(pos));
        pos += 1;
    }
    return cnt;
}
/** @ignore */
function popcnt_uint32(uint32) {
    let i = uint32 | 0;
    i = i - ((i >>> 1) & 0x55555555);
    i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
    return (((i + (i >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
}

//# sourceMappingURL=bit.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/bn.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/util/bn.mjs ***!
  \***********************************************/
/*! exports provided: isArrowBigNumSymbol, bignumToString, bignumToBigInt, BN */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrowBigNumSymbol", function() { return isArrowBigNumSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bignumToString", function() { return bignumToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bignumToBigInt", function() { return bignumToBigInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BN", function() { return BN; });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
const isArrowBigNumSymbol = Symbol.for('isArrowBigNum');
/** @ignore */
function BigNum(x, ...xs) {
    if (xs.length === 0) {
        return Object.setPrototypeOf(Object(_buffer__WEBPACK_IMPORTED_MODULE_0__["toArrayBufferView"])(this['TypedArray'], x), this.constructor.prototype);
    }
    return Object.setPrototypeOf(new this['TypedArray'](x, ...xs), this.constructor.prototype);
}
BigNum.prototype[isArrowBigNumSymbol] = true;
BigNum.prototype.toJSON = function () { return `"${bignumToString(this)}"`; };
BigNum.prototype.valueOf = function () { return bignumToNumber(this); };
BigNum.prototype.toString = function () { return bignumToString(this); };
BigNum.prototype[Symbol.toPrimitive] = function (hint = 'default') {
    switch (hint) {
        case 'number': return bignumToNumber(this);
        case 'string': return bignumToString(this);
        case 'default': return bignumToBigInt(this);
    }
    return bignumToString(this);
};
/** @ignore */
function SignedBigNum(...args) { return BigNum.apply(this, args); }
/** @ignore */
function UnsignedBigNum(...args) { return BigNum.apply(this, args); }
/** @ignore */
function DecimalBigNum(...args) { return BigNum.apply(this, args); }
Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
Object.assign(SignedBigNum.prototype, BigNum.prototype, { 'constructor': SignedBigNum, 'signed': true, 'TypedArray': Int32Array, 'BigIntArray': _compat__WEBPACK_IMPORTED_MODULE_1__["BigInt64Array"] });
Object.assign(UnsignedBigNum.prototype, BigNum.prototype, { 'constructor': UnsignedBigNum, 'signed': false, 'TypedArray': Uint32Array, 'BigIntArray': _compat__WEBPACK_IMPORTED_MODULE_1__["BigUint64Array"] });
Object.assign(DecimalBigNum.prototype, BigNum.prototype, { 'constructor': DecimalBigNum, 'signed': true, 'TypedArray': Uint32Array, 'BigIntArray': _compat__WEBPACK_IMPORTED_MODULE_1__["BigUint64Array"] });
/** @ignore */
function bignumToNumber(bn) {
    let { buffer, byteOffset, length, 'signed': signed } = bn;
    let words = new Int32Array(buffer, byteOffset, length);
    let number = 0, i = 0, n = words.length, hi, lo;
    while (i < n) {
        lo = words[i++];
        hi = words[i++];
        signed || (hi = hi >>> 0);
        number += (lo >>> 0) + (hi * (i ** 32));
    }
    return number;
}
/** @ignore */
let bignumToString;
/** @ignore */
let bignumToBigInt;
if (!_compat__WEBPACK_IMPORTED_MODULE_1__["BigIntAvailable"]) {
    bignumToString = decimalToString;
    bignumToBigInt = bignumToString;
}
else {
    bignumToBigInt = ((a) => a.byteLength === 8 ? new a['BigIntArray'](a.buffer, a.byteOffset, 1)[0] : decimalToString(a));
    bignumToString = ((a) => a.byteLength === 8 ? `${new a['BigIntArray'](a.buffer, a.byteOffset, 1)[0]}` : decimalToString(a));
}
/** @ignore */
function decimalToString(a) {
    let digits = '';
    let base64 = new Uint32Array(2);
    let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
    let checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
    let i = -1, n = base32.length - 1;
    do {
        for (base64[0] = base32[i = 0]; i < n;) {
            base32[i++] = base64[1] = base64[0] / 10;
            base64[0] = ((base64[0] - base64[1] * 10) << 16) + base32[i];
        }
        base32[i] = base64[1] = base64[0] / 10;
        base64[0] = base64[0] - base64[1] * 10;
        digits = `${base64[0]}${digits}`;
    } while (checks[0] || checks[1] || checks[2] || checks[3]);
    return digits ? digits : `0`;
}
/** @ignore */
class BN {
    constructor(num, isSigned) {
        return BN.new(num, isSigned);
    }
    /** @nocollapse */
    static new(num, isSigned) {
        switch (isSigned) {
            case true: return new SignedBigNum(num);
            case false: return new UnsignedBigNum(num);
        }
        switch (num.constructor) {
            case Int8Array:
            case Int16Array:
            case Int32Array:
            case _compat__WEBPACK_IMPORTED_MODULE_1__["BigInt64Array"]:
                return new SignedBigNum(num);
        }
        if (num.byteLength === 16) {
            return new DecimalBigNum(num);
        }
        return new UnsignedBigNum(num);
    }
    /** @nocollapse */
    static signed(num) {
        return new SignedBigNum(num);
    }
    /** @nocollapse */
    static unsigned(num) {
        return new UnsignedBigNum(num);
    }
    /** @nocollapse */
    static decimal(num) {
        return new DecimalBigNum(num);
    }
}

//# sourceMappingURL=bn.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/buffer.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/util/buffer.mjs ***!
  \***************************************************/
/*! exports provided: memcpy, joinUint8Arrays, toArrayBufferView, toInt8Array, toInt16Array, toInt32Array, toBigInt64Array, toUint8Array, toUint16Array, toUint32Array, toBigUint64Array, toFloat32Array, toFloat64Array, toUint8ClampedArray, toArrayBufferViewIterator, toInt8ArrayIterator, toInt16ArrayIterator, toInt32ArrayIterator, toUint8ArrayIterator, toUint16ArrayIterator, toUint32ArrayIterator, toFloat32ArrayIterator, toFloat64ArrayIterator, toUint8ClampedArrayIterator, toArrayBufferViewAsyncIterator, toInt8ArrayAsyncIterator, toInt16ArrayAsyncIterator, toInt32ArrayAsyncIterator, toUint8ArrayAsyncIterator, toUint16ArrayAsyncIterator, toUint32ArrayAsyncIterator, toFloat32ArrayAsyncIterator, toFloat64ArrayAsyncIterator, toUint8ClampedArrayAsyncIterator, rebaseValueOffsets, compareArrayLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memcpy", function() { return memcpy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinUint8Arrays", function() { return joinUint8Arrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayBufferView", function() { return toArrayBufferView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt8Array", function() { return toInt8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt16Array", function() { return toInt16Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt32Array", function() { return toInt32Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBigInt64Array", function() { return toBigInt64Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8Array", function() { return toUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint16Array", function() { return toUint16Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32Array", function() { return toUint32Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBigUint64Array", function() { return toBigUint64Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32Array", function() { return toFloat32Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat64Array", function() { return toFloat64Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8ClampedArray", function() { return toUint8ClampedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayBufferViewIterator", function() { return toArrayBufferViewIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt8ArrayIterator", function() { return toInt8ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt16ArrayIterator", function() { return toInt16ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt32ArrayIterator", function() { return toInt32ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8ArrayIterator", function() { return toUint8ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint16ArrayIterator", function() { return toUint16ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32ArrayIterator", function() { return toUint32ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32ArrayIterator", function() { return toFloat32ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat64ArrayIterator", function() { return toFloat64ArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8ClampedArrayIterator", function() { return toUint8ClampedArrayIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayBufferViewAsyncIterator", function() { return toArrayBufferViewAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt8ArrayAsyncIterator", function() { return toInt8ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt16ArrayAsyncIterator", function() { return toInt16ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt32ArrayAsyncIterator", function() { return toInt32ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8ArrayAsyncIterator", function() { return toUint8ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint16ArrayAsyncIterator", function() { return toUint16ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32ArrayAsyncIterator", function() { return toUint32ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32ArrayAsyncIterator", function() { return toFloat32ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat64ArrayAsyncIterator", function() { return toFloat64ArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint8ClampedArrayAsyncIterator", function() { return toUint8ClampedArrayAsyncIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebaseValueOffsets", function() { return rebaseValueOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArrayLike", function() { return compareArrayLike; });
/* harmony import */ var flatbuffers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatbuffers */ "./node_modules/flatbuffers/js/flatbuffers.mjs");
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


var ByteBuffer = flatbuffers__WEBPACK_IMPORTED_MODULE_0__["flatbuffers"].ByteBuffer;

/** @ignore */
const SharedArrayBuf = (typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : ArrayBuffer);
/** @ignore */
function collapseContiguousByteRanges(chunks) {
    let result = chunks[0] ? [chunks[0]] : [];
    let xOffset, yOffset, xLen, yLen;
    for (let x, y, i = 0, j = 0, n = chunks.length; ++i < n;) {
        x = result[j];
        y = chunks[i];
        // continue if x and y don't share the same underlying ArrayBuffer, or if x isn't before y
        if (!x || !y || x.buffer !== y.buffer || y.byteOffset < x.byteOffset) {
            y && (result[++j] = y);
            continue;
        }
        ({ byteOffset: xOffset, byteLength: xLen } = x);
        ({ byteOffset: yOffset, byteLength: yLen } = y);
        // continue if the byte ranges of x and y aren't contiguous
        if ((xOffset + xLen) < yOffset || (yOffset + yLen) < xOffset) {
            y && (result[++j] = y);
            continue;
        }
        result[j] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
    }
    return result;
}
/** @ignore */
function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
    const targetByteLength = target.byteLength;
    const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
    const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength));
    dst.set(src, targetByteOffset);
    return target;
}
/** @ignore */
function joinUint8Arrays(chunks, size) {
    // collapse chunks that share the same underlying ArrayBuffer and whose byte ranges overlap,
    // to avoid unnecessarily copying the bytes to do this buffer join. This is a common case during
    // streaming, where we may be reading partial byte ranges out of the same underlying ArrayBuffer
    let result = collapseContiguousByteRanges(chunks);
    let byteLength = result.reduce((x, b) => x + b.byteLength, 0);
    let source, sliced, buffer;
    let offset = 0, index = -1, length = Math.min(size || Infinity, byteLength);
    for (let n = result.length; ++index < n;) {
        source = result[index];
        sliced = source.subarray(0, Math.min(source.length, length - offset));
        if (length <= (offset + sliced.length)) {
            if (sliced.length < source.length) {
                result[index] = source.subarray(sliced.length);
            }
            else if (sliced.length === source.length) {
                index++;
            }
            buffer ? memcpy(buffer, sliced, offset) : (buffer = sliced);
            break;
        }
        memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
        offset += sliced.length;
    }
    return [buffer || new Uint8Array(0), result.slice(index), byteLength - (buffer ? buffer.byteLength : 0)];
}
function toArrayBufferView(ArrayBufferViewCtor, input) {
    let value = Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isIteratorResult"])(input) ? input.value : input;
    if (value instanceof ArrayBufferViewCtor) {
        if (ArrayBufferViewCtor === Uint8Array) {
            // Node's `Buffer` class passes the `instanceof Uint8Array` check, but we need
            // a real Uint8Array, since Buffer#slice isn't the same as Uint8Array#slice :/
            return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
        }
        return value;
    }
    if (!value) {
        return new ArrayBufferViewCtor(0);
    }
    if (typeof value === 'string') {
        value = Object(_util_utf8__WEBPACK_IMPORTED_MODULE_1__["encodeUtf8"])(value);
    }
    if (value instanceof ArrayBuffer) {
        return new ArrayBufferViewCtor(value);
    }
    if (value instanceof SharedArrayBuf) {
        return new ArrayBufferViewCtor(value);
    }
    if (value instanceof ByteBuffer) {
        return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
    }
    return !ArrayBuffer.isView(value) ? ArrayBufferViewCtor.from(value) : value.byteLength <= 0 ? new ArrayBufferViewCtor(0)
        : new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
}
/** @ignore */ const toInt8Array = (input) => toArrayBufferView(Int8Array, input);
/** @ignore */ const toInt16Array = (input) => toArrayBufferView(Int16Array, input);
/** @ignore */ const toInt32Array = (input) => toArrayBufferView(Int32Array, input);
/** @ignore */ const toBigInt64Array = (input) => toArrayBufferView(_compat__WEBPACK_IMPORTED_MODULE_2__["BigInt64Array"], input);
/** @ignore */ const toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
/** @ignore */ const toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
/** @ignore */ const toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
/** @ignore */ const toBigUint64Array = (input) => toArrayBufferView(_compat__WEBPACK_IMPORTED_MODULE_2__["BigUint64Array"], input);
/** @ignore */ const toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
/** @ignore */ const toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
/** @ignore */ const toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
/** @ignore */
const pump = (iterator) => { iterator.next(); return iterator; };
/** @ignore */
function* toArrayBufferViewIterator(ArrayCtor, source) {
    const wrap = function* (x) { yield x; };
    const buffers = (typeof source === 'string') ? wrap(source)
        : (ArrayBuffer.isView(source)) ? wrap(source)
            : (source instanceof ArrayBuffer) ? wrap(source)
                : (source instanceof SharedArrayBuf) ? wrap(source)
                    : !Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isIterable"])(source) ? wrap(source) : source;
    yield* pump((function* (it) {
        let r = null;
        do {
            r = it.next(yield toArrayBufferView(ArrayCtor, r));
        } while (!r.done);
    })(buffers[Symbol.iterator]()));
}
/** @ignore */ const toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
/** @ignore */ const toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
/** @ignore */ const toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
/** @ignore */ const toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
/** @ignore */ const toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
/** @ignore */ const toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
/** @ignore */ const toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
/** @ignore */ const toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
/** @ignore */ const toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
/** @ignore */
async function* toArrayBufferViewAsyncIterator(ArrayCtor, source) {
    // if a Promise, unwrap the Promise and iterate the resolved value
    if (Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(source)) {
        return yield* toArrayBufferViewAsyncIterator(ArrayCtor, await source);
    }
    const wrap = async function* (x) { yield await x; };
    const emit = async function* (source) {
        yield* pump((function* (it) {
            let r = null;
            do {
                r = it.next(yield r && r.value);
            } while (!r.done);
        })(source[Symbol.iterator]()));
    };
    const buffers = (typeof source === 'string') ? wrap(source) // if string, wrap in an AsyncIterableIterator
        : (ArrayBuffer.isView(source)) ? wrap(source) // if TypedArray, wrap in an AsyncIterableIterator
            : (source instanceof ArrayBuffer) ? wrap(source) // if ArrayBuffer, wrap in an AsyncIterableIterator
                : (source instanceof SharedArrayBuf) ? wrap(source) // if SharedArrayBuffer, wrap in an AsyncIterableIterator
                    : Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isIterable"])(source) ? emit(source) // If Iterable, wrap in an AsyncIterableIterator and compose the `next` values
                        : !Object(_compat__WEBPACK_IMPORTED_MODULE_2__["isAsyncIterable"])(source) ? wrap(source) // If not an AsyncIterable, treat as a sentinel and wrap in an AsyncIterableIterator
                            : source; // otherwise if AsyncIterable, use it
    yield* pump((async function* (it) {
        let r = null;
        do {
            r = await it.next(yield toArrayBufferView(ArrayCtor, r));
        } while (!r.done);
    })(buffers[Symbol.asyncIterator]()));
}
/** @ignore */ const toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
/** @ignore */ const toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
/** @ignore */ const toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
/** @ignore */ const toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
/** @ignore */ const toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
/** @ignore */ const toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
/** @ignore */ const toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
/** @ignore */ const toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
/** @ignore */ const toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
/** @ignore */
function rebaseValueOffsets(offset, length, valueOffsets) {
    // If we have a non-zero offset, create a new offsets array with the values
    // shifted by the start offset, such that the new start offset is 0
    if (offset !== 0) {
        valueOffsets = valueOffsets.slice(0, length + 1);
        for (let i = -1; ++i <= length;) {
            valueOffsets[i] += offset;
        }
    }
    return valueOffsets;
}
/** @ignore */
function compareArrayLike(a, b) {
    let i = 0, n = a.length;
    if (n !== b.length) {
        return false;
    }
    if (n > 0) {
        do {
            if (a[i] !== b[i]) {
                return false;
            }
        } while (++i < n);
    }
    return true;
}

//# sourceMappingURL=buffer.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/compat.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/util/compat.mjs ***!
  \***************************************************/
/*! exports provided: BigInt, BigIntAvailable, BigInt64Array, BigInt64ArrayAvailable, BigUint64Array, BigUint64ArrayAvailable, isObject, isPromise, isObservable, isIterable, isAsyncIterable, isArrowJSON, isArrayLike, isIteratorResult, isUnderlyingSink, isFileHandle, isFSReadStream, isFetchResponse, isWritableDOMStream, isReadableDOMStream, isWritableNodeStream, isReadableNodeStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInt", function() { return BigIntCtor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigIntAvailable", function() { return BigIntAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInt64Array", function() { return BigInt64ArrayCtor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInt64ArrayAvailable", function() { return BigInt64ArrayAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigUint64Array", function() { return BigUint64ArrayCtor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigUint64ArrayAvailable", function() { return BigUint64ArrayAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncIterable", function() { return isAsyncIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrowJSON", function() { return isArrowJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIteratorResult", function() { return isIteratorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnderlyingSink", function() { return isUnderlyingSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFileHandle", function() { return isFileHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFSReadStream", function() { return isFSReadStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFetchResponse", function() { return isFetchResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWritableDOMStream", function() { return isWritableDOMStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadableDOMStream", function() { return isReadableDOMStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWritableNodeStream", function() { return isWritableNodeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadableNodeStream", function() { return isReadableNodeStream; });
/* harmony import */ var _io_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../io/interfaces */ "./node_modules/apache-arrow/io/interfaces.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
const [BigIntCtor, BigIntAvailable] = (() => {
    const BigIntUnavailableError = () => { throw new Error('BigInt is not available in this environment'); };
    function BigIntUnavailable() { throw BigIntUnavailableError(); }
    BigIntUnavailable.asIntN = () => { throw BigIntUnavailableError(); };
    BigIntUnavailable.asUintN = () => { throw BigIntUnavailableError(); };
    return typeof BigInt !== 'undefined' ? [BigInt, true] : [BigIntUnavailable, false];
})();
/** @ignore */
const [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
    const BigInt64ArrayUnavailableError = () => { throw new Error('BigInt64Array is not available in this environment'); };
    class BigInt64ArrayUnavailable {
        static get BYTES_PER_ELEMENT() { return 8; }
        static of() { throw BigInt64ArrayUnavailableError(); }
        static from() { throw BigInt64ArrayUnavailableError(); }
        constructor() { throw BigInt64ArrayUnavailableError(); }
    }
    return typeof BigInt64Array !== 'undefined' ? [BigInt64Array, true] : [BigInt64ArrayUnavailable, false];
})();
/** @ignore */
const [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
    const BigUint64ArrayUnavailableError = () => { throw new Error('BigUint64Array is not available in this environment'); };
    class BigUint64ArrayUnavailable {
        static get BYTES_PER_ELEMENT() { return 8; }
        static of() { throw BigUint64ArrayUnavailableError(); }
        static from() { throw BigUint64ArrayUnavailableError(); }
        constructor() { throw BigUint64ArrayUnavailableError(); }
    }
    return typeof BigUint64Array !== 'undefined' ? [BigUint64Array, true] : [BigUint64ArrayUnavailable, false];
})();



/** @ignore */ const isNumber = (x) => typeof x === 'number';
/** @ignore */ const isBoolean = (x) => typeof x === 'boolean';
/** @ignore */ const isFunction = (x) => typeof x === 'function';
/** @ignore */
const isObject = (x) => x != null && Object(x) === x;
/** @ignore */
const isPromise = (x) => {
    return isObject(x) && isFunction(x.then);
};
/** @ignore */
const isObservable = (x) => {
    return isObject(x) && isFunction(x.subscribe);
};
/** @ignore */
const isIterable = (x) => {
    return isObject(x) && isFunction(x[Symbol.iterator]);
};
/** @ignore */
const isAsyncIterable = (x) => {
    return isObject(x) && isFunction(x[Symbol.asyncIterator]);
};
/** @ignore */
const isArrowJSON = (x) => {
    return isObject(x) && isObject(x['schema']);
};
/** @ignore */
const isArrayLike = (x) => {
    return isObject(x) && isNumber(x['length']);
};
/** @ignore */
const isIteratorResult = (x) => {
    return isObject(x) && ('done' in x) && ('value' in x);
};
/** @ignore */
const isUnderlyingSink = (x) => {
    return isObject(x) &&
        isFunction(x['abort']) &&
        isFunction(x['close']) &&
        isFunction(x['start']) &&
        isFunction(x['write']);
};
/** @ignore */
const isFileHandle = (x) => {
    return isObject(x) && isFunction(x['stat']) && isNumber(x['fd']);
};
/** @ignore */
const isFSReadStream = (x) => {
    return isReadableNodeStream(x) && isNumber(x['bytesRead']);
};
/** @ignore */
const isFetchResponse = (x) => {
    return isObject(x) && isReadableDOMStream(x['body']);
};
/** @ignore */
const isWritableDOMStream = (x) => {
    return isObject(x) &&
        isFunction(x['abort']) &&
        isFunction(x['getWriter']) &&
        !(x instanceof _io_interfaces__WEBPACK_IMPORTED_MODULE_0__["ReadableInterop"]);
};
/** @ignore */
const isReadableDOMStream = (x) => {
    return isObject(x) &&
        isFunction(x['cancel']) &&
        isFunction(x['getReader']) &&
        !(x instanceof _io_interfaces__WEBPACK_IMPORTED_MODULE_0__["ReadableInterop"]);
};
/** @ignore */
const isWritableNodeStream = (x) => {
    return isObject(x) &&
        isFunction(x['end']) &&
        isFunction(x['write']) &&
        isBoolean(x['writable']) &&
        !(x instanceof _io_interfaces__WEBPACK_IMPORTED_MODULE_0__["ReadableInterop"]);
};
/** @ignore */
const isReadableNodeStream = (x) => {
    return isObject(x) &&
        isFunction(x['read']) &&
        isFunction(x['pipe']) &&
        isBoolean(x['readable']) &&
        !(x instanceof _io_interfaces__WEBPACK_IMPORTED_MODULE_0__["ReadableInterop"]);
};

//# sourceMappingURL=compat.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/fn.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/util/fn.mjs ***!
  \***********************************************/
/*! exports provided: partial0, partial1, partial2 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial0", function() { return partial0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial1", function() { return partial1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial2", function() { return partial2; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/** @ignore */
function partial0(visit) {
    return function () { return visit(this); };
}
/** @ignore */
function partial1(visit) {
    return function (a) { return visit(this, a); };
}
/** @ignore */
function partial2(visit) {
    return function (a, b) { return visit(this, a, b); };
}

//# sourceMappingURL=fn.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/int.mjs":
/*!************************************************!*\
  !*** ./node_modules/apache-arrow/util/int.mjs ***!
  \************************************************/
/*! exports provided: BaseInt64, Uint64, Int64, Int128 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInt64", function() { return BaseInt64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint64", function() { return Uint64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int64", function() { return Int64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int128", function() { return Int128; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/** @ignore */
const carryBit16 = 1 << 16;
/** @ignore */
function intAsHex(value) {
    if (value < 0) {
        value = 0xFFFFFFFF + value + 1;
    }
    return `0x${value.toString(16)}`;
}
/** @ignore */
const kInt32DecimalDigits = 8;
/** @ignore */
const kPowersOfTen = [1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000];
/** @ignore */
class BaseInt64 {
    constructor(buffer) {
        this.buffer = buffer;
    }
    high() { return this.buffer[1]; }
    low() { return this.buffer[0]; }
    _times(other) {
        // Break the left and right numbers into 16 bit chunks
        // so that we can multiply them without overflow.
        const L = new Uint32Array([
            this.buffer[1] >>> 16,
            this.buffer[1] & 0xFFFF,
            this.buffer[0] >>> 16,
            this.buffer[0] & 0xFFFF
        ]);
        const R = new Uint32Array([
            other.buffer[1] >>> 16,
            other.buffer[1] & 0xFFFF,
            other.buffer[0] >>> 16,
            other.buffer[0] & 0xFFFF
        ]);
        let product = L[3] * R[3];
        this.buffer[0] = product & 0xFFFF;
        let sum = product >>> 16;
        product = L[2] * R[3];
        sum += product;
        product = (L[3] * R[2]) >>> 0;
        sum += product;
        this.buffer[0] += sum << 16;
        this.buffer[1] = (sum >>> 0 < product ? carryBit16 : 0);
        this.buffer[1] += sum >>> 16;
        this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
        this.buffer[1] += (L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0]) << 16;
        return this;
    }
    _plus(other) {
        const sum = (this.buffer[0] + other.buffer[0]) >>> 0;
        this.buffer[1] += other.buffer[1];
        if (sum < (this.buffer[0] >>> 0)) {
            ++this.buffer[1];
        }
        this.buffer[0] = sum;
    }
    lessThan(other) {
        return this.buffer[1] < other.buffer[1] ||
            (this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0]);
    }
    equals(other) {
        return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
    }
    greaterThan(other) {
        return other.lessThan(this);
    }
    hex() {
        return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
    }
}
/** @ignore */
class Uint64 extends BaseInt64 {
    times(other) {
        this._times(other);
        return this;
    }
    plus(other) {
        this._plus(other);
        return this;
    }
    /** @nocollapse */
    static from(val, out_buffer = new Uint32Array(2)) {
        return Uint64.fromString(typeof (val) === 'string' ? val : val.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromNumber(num, out_buffer = new Uint32Array(2)) {
        // Always parse numbers as strings - pulling out high and low bits
        // directly seems to lose precision sometimes
        // For example:
        //     > -4613034156400212000 >>> 0
        //     721782784
        // The correct lower 32-bits are 721782752
        return Uint64.fromString(num.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromString(str, out_buffer = new Uint32Array(2)) {
        const length = str.length;
        let out = new Uint64(out_buffer);
        for (let posn = 0; posn < length;) {
            const group = kInt32DecimalDigits < length - posn ?
                kInt32DecimalDigits : length - posn;
            const chunk = new Uint64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
            const multiple = new Uint64(new Uint32Array([kPowersOfTen[group], 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
        }
        return out;
    }
    /** @nocollapse */
    static convertArray(values) {
        const data = new Uint32Array(values.length * 2);
        for (let i = -1, n = values.length; ++i < n;) {
            Uint64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
        }
        return data;
    }
    /** @nocollapse */
    static multiply(left, right) {
        let rtrn = new Uint64(new Uint32Array(left.buffer));
        return rtrn.times(right);
    }
    /** @nocollapse */
    static add(left, right) {
        let rtrn = new Uint64(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    }
}
/** @ignore */
class Int64 extends BaseInt64 {
    negate() {
        this.buffer[0] = ~this.buffer[0] + 1;
        this.buffer[1] = ~this.buffer[1];
        if (this.buffer[0] == 0) {
            ++this.buffer[1];
        }
        return this;
    }
    times(other) {
        this._times(other);
        return this;
    }
    plus(other) {
        this._plus(other);
        return this;
    }
    lessThan(other) {
        // force high bytes to be signed
        const this_high = this.buffer[1] << 0;
        const other_high = other.buffer[1] << 0;
        return this_high < other_high ||
            (this_high === other_high && this.buffer[0] < other.buffer[0]);
    }
    /** @nocollapse */
    static from(val, out_buffer = new Uint32Array(2)) {
        return Int64.fromString(typeof (val) === 'string' ? val : val.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromNumber(num, out_buffer = new Uint32Array(2)) {
        // Always parse numbers as strings - pulling out high and low bits
        // directly seems to lose precision sometimes
        // For example:
        //     > -4613034156400212000 >>> 0
        //     721782784
        // The correct lower 32-bits are 721782752
        return Int64.fromString(num.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromString(str, out_buffer = new Uint32Array(2)) {
        // TODO: Assert that out_buffer is 0 and length = 2
        const negate = str.startsWith('-');
        const length = str.length;
        let out = new Int64(out_buffer);
        for (let posn = negate ? 1 : 0; posn < length;) {
            const group = kInt32DecimalDigits < length - posn ?
                kInt32DecimalDigits : length - posn;
            const chunk = new Int64(new Uint32Array([parseInt(str.substr(posn, group), 10), 0]));
            const multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
        }
        return negate ? out.negate() : out;
    }
    /** @nocollapse */
    static convertArray(values) {
        const data = new Uint32Array(values.length * 2);
        for (let i = -1, n = values.length; ++i < n;) {
            Int64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
        }
        return data;
    }
    /** @nocollapse */
    static multiply(left, right) {
        let rtrn = new Int64(new Uint32Array(left.buffer));
        return rtrn.times(right);
    }
    /** @nocollapse */
    static add(left, right) {
        let rtrn = new Int64(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    }
}
/** @ignore */
class Int128 {
    constructor(buffer) {
        this.buffer = buffer;
        // buffer[3] MSB (high)
        // buffer[2]
        // buffer[1]
        // buffer[0] LSB (low)
    }
    high() {
        return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
    }
    low() {
        return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
    }
    negate() {
        this.buffer[0] = ~this.buffer[0] + 1;
        this.buffer[1] = ~this.buffer[1];
        this.buffer[2] = ~this.buffer[2];
        this.buffer[3] = ~this.buffer[3];
        if (this.buffer[0] == 0) {
            ++this.buffer[1];
        }
        if (this.buffer[1] == 0) {
            ++this.buffer[2];
        }
        if (this.buffer[2] == 0) {
            ++this.buffer[3];
        }
        return this;
    }
    times(other) {
        // Break the left and right numbers into 32 bit chunks
        // so that we can multiply them without overflow.
        const L0 = new Uint64(new Uint32Array([this.buffer[3], 0]));
        const L1 = new Uint64(new Uint32Array([this.buffer[2], 0]));
        const L2 = new Uint64(new Uint32Array([this.buffer[1], 0]));
        const L3 = new Uint64(new Uint32Array([this.buffer[0], 0]));
        const R0 = new Uint64(new Uint32Array([other.buffer[3], 0]));
        const R1 = new Uint64(new Uint32Array([other.buffer[2], 0]));
        const R2 = new Uint64(new Uint32Array([other.buffer[1], 0]));
        const R3 = new Uint64(new Uint32Array([other.buffer[0], 0]));
        let product = Uint64.multiply(L3, R3);
        this.buffer[0] = product.low();
        let sum = new Uint64(new Uint32Array([product.high(), 0]));
        product = Uint64.multiply(L2, R3);
        sum.plus(product);
        product = Uint64.multiply(L3, R2);
        sum.plus(product);
        this.buffer[1] = sum.low();
        this.buffer[3] = (sum.lessThan(product) ? 1 : 0);
        this.buffer[2] = sum.high();
        let high = new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
        high.plus(Uint64.multiply(L1, R3))
            .plus(Uint64.multiply(L2, R2))
            .plus(Uint64.multiply(L3, R1));
        this.buffer[3] += Uint64.multiply(L0, R3)
            .plus(Uint64.multiply(L1, R2))
            .plus(Uint64.multiply(L2, R1))
            .plus(Uint64.multiply(L3, R0)).low();
        return this;
    }
    plus(other) {
        let sums = new Uint32Array(4);
        sums[3] = (this.buffer[3] + other.buffer[3]) >>> 0;
        sums[2] = (this.buffer[2] + other.buffer[2]) >>> 0;
        sums[1] = (this.buffer[1] + other.buffer[1]) >>> 0;
        sums[0] = (this.buffer[0] + other.buffer[0]) >>> 0;
        if (sums[0] < (this.buffer[0] >>> 0)) {
            ++sums[1];
        }
        if (sums[1] < (this.buffer[1] >>> 0)) {
            ++sums[2];
        }
        if (sums[2] < (this.buffer[2] >>> 0)) {
            ++sums[3];
        }
        this.buffer[3] = sums[3];
        this.buffer[2] = sums[2];
        this.buffer[1] = sums[1];
        this.buffer[0] = sums[0];
        return this;
    }
    hex() {
        return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
    }
    /** @nocollapse */
    static multiply(left, right) {
        let rtrn = new Int128(new Uint32Array(left.buffer));
        return rtrn.times(right);
    }
    /** @nocollapse */
    static add(left, right) {
        let rtrn = new Int128(new Uint32Array(left.buffer));
        return rtrn.plus(right);
    }
    /** @nocollapse */
    static from(val, out_buffer = new Uint32Array(4)) {
        return Int128.fromString(typeof (val) === 'string' ? val : val.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromNumber(num, out_buffer = new Uint32Array(4)) {
        // Always parse numbers as strings - pulling out high and low bits
        // directly seems to lose precision sometimes
        // For example:
        //     > -4613034156400212000 >>> 0
        //     721782784
        // The correct lower 32-bits are 721782752
        return Int128.fromString(num.toString(), out_buffer);
    }
    /** @nocollapse */
    static fromString(str, out_buffer = new Uint32Array(4)) {
        // TODO: Assert that out_buffer is 0 and length = 4
        const negate = str.startsWith('-');
        const length = str.length;
        let out = new Int128(out_buffer);
        for (let posn = negate ? 1 : 0; posn < length;) {
            const group = kInt32DecimalDigits < length - posn ?
                kInt32DecimalDigits : length - posn;
            const chunk = new Int128(new Uint32Array([parseInt(str.substr(posn, group), 10), 0, 0, 0]));
            const multiple = new Int128(new Uint32Array([kPowersOfTen[group], 0, 0, 0]));
            out.times(multiple);
            out.plus(chunk);
            posn += group;
        }
        return negate ? out.negate() : out;
    }
    /** @nocollapse */
    static convertArray(values) {
        // TODO: Distinguish between string and number at compile-time
        const data = new Uint32Array(values.length * 4);
        for (let i = -1, n = values.length; ++i < n;) {
            Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 4 * 4 * i, 4));
        }
        return data;
    }
}

//# sourceMappingURL=int.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/math.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/util/math.mjs ***!
  \*************************************************/
/*! exports provided: uint16ToFloat64, float64ToUint16 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint16ToFloat64", function() { return uint16ToFloat64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float64ToUint16", function() { return float64ToUint16; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
const f64 = new Float64Array(1);
const u32 = new Uint32Array(f64.buffer);
/**
 * Convert uint16 (logically a float16) to a JS float64. Inspired by numpy's `npy_half_to_double`:
 * https://github.com/numpy/numpy/blob/5a5987291dc95376bb098be8d8e5391e89e77a2c/numpy/core/src/npymath/halffloat.c#L29
 * @param h {number} the uint16 to convert
 * @private
 * @ignore
 */
function uint16ToFloat64(h) {
    let expo = (h & 0x7C00) >> 10;
    let sigf = (h & 0x03FF) / 1024;
    let sign = (-1) ** ((h & 0x8000) >> 15);
    switch (expo) {
        case 0x1F: return sign * (sigf ? NaN : 1 / 0);
        case 0x00: return sign * (sigf ? 6.103515625e-5 * sigf : 0);
    }
    return sign * (2 ** (expo - 15)) * (1 + sigf);
}
/**
 * Convert a float64 to uint16 (assuming the float64 is logically a float16). Inspired by numpy's `npy_double_to_half`:
 * https://github.com/numpy/numpy/blob/5a5987291dc95376bb098be8d8e5391e89e77a2c/numpy/core/src/npymath/halffloat.c#L43
 * @param d {number} The float64 to convert
 * @private
 * @ignore
 */
function float64ToUint16(d) {
    if (d !== d) {
        return 0x7E00;
    } // NaN
    f64[0] = d;
    // Magic numbers:
    // 0x80000000 = 10000000 00000000 00000000 00000000 -- masks the 32nd bit
    // 0x7ff00000 = 01111111 11110000 00000000 00000000 -- masks the 21st-31st bits
    // 0x000fffff = 00000000 00001111 11111111 11111111 -- masks the 1st-20th bit
    let sign = (u32[1] & 0x80000000) >> 16 & 0xFFFF;
    let expo = (u32[1] & 0x7ff00000), sigf = 0x0000;
    if (expo >= 0x40f00000) {
        //
        // If exponent overflowed, the float16 is either NaN or Infinity.
        // Rules to propagate the sign bit: mantissa > 0 ? NaN : +/-Infinity
        //
        // Magic numbers:
        // 0x40F00000 = 01000000 11110000 00000000 00000000 -- 6-bit exponent overflow
        // 0x7C000000 = 01111100 00000000 00000000 00000000 -- masks the 27th-31st bits
        //
        // returns:
        // qNaN, aka 32256 decimal, 0x7E00 hex, or 01111110 00000000 binary
        // sNaN, aka 32000 decimal, 0x7D00 hex, or 01111101 00000000 binary
        // +inf, aka 31744 decimal, 0x7C00 hex, or 01111100 00000000 binary
        // -inf, aka 64512 decimal, 0xFC00 hex, or 11111100 00000000 binary
        //
        // If mantissa is greater than 23 bits, set to +Infinity like numpy
        if (u32[0] > 0) {
            expo = 0x7C00;
        }
        else {
            expo = (expo & 0x7C000000) >> 16;
            sigf = (u32[1] & 0x000fffff) >> 10;
        }
    }
    else if (expo <= 0x3f000000) {
        //
        // If exponent underflowed, the float is either signed zero or subnormal.
        //
        // Magic numbers:
        // 0x3F000000 = 00111111 00000000 00000000 00000000 -- 6-bit exponent underflow
        //
        sigf = 0x100000 + (u32[1] & 0x000fffff);
        sigf = 0x100000 + (sigf << ((expo >> 20) - 998)) >> 21;
        expo = 0;
    }
    else {
        //
        // No overflow or underflow, rebase the exponent and round the mantissa
        // Magic numbers:
        // 0x200 = 00000010 00000000 -- masks off the 10th bit
        //
        // Ensure the first mantissa bit (the 10th one) is 1 and round
        expo = (expo - 0x3f000000) >> 10;
        sigf = ((u32[1] & 0x000fffff) + 0x200) >> 10;
    }
    return sign | expo | sigf & 0xFFFF;
}

//# sourceMappingURL=math.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/pretty.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/util/pretty.mjs ***!
  \***************************************************/
/*! exports provided: valueToString */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToString", function() { return valueToString; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
/** @ignore */ const undf = void (0);
/** @ignore */
function valueToString(x) {
    if (x === null) {
        return 'null';
    }
    if (x === undf) {
        return 'undefined';
    }
    switch (typeof x) {
        case 'number': return `${x}`;
        case 'bigint': return `${x}`;
        case 'string': return `"${x}"`;
    }
    // If [Symbol.toPrimitive] is implemented (like in BN)
    // use it instead of JSON.stringify(). This ensures we
    // print BigInts, Decimals, and Binary in their native
    // representation
    if (typeof x[Symbol.toPrimitive] === 'function') {
        return x[Symbol.toPrimitive]('string');
    }
    return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x);
}

//# sourceMappingURL=pretty.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/recordbatch.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/util/recordbatch.mjs ***!
  \********************************************************/
/*! exports provided: ensureSameLengthData, distributeColumnsIntoRecordBatches, distributeVectorsIntoRecordBatches */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureSameLengthData", function() { return ensureSameLengthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distributeColumnsIntoRecordBatches", function() { return distributeColumnsIntoRecordBatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distributeVectorsIntoRecordBatches", function() { return distributeVectorsIntoRecordBatches; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _vector_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vector/chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




const noopBuf = new Uint8Array(0);
const nullBufs = (bitmapLength) => [
    noopBuf, noopBuf, new Uint8Array(bitmapLength), noopBuf
];
/** @ignore */
function ensureSameLengthData(schema, chunks, batchLength = chunks.reduce((l, c) => Math.max(l, c.length), 0)) {
    let data;
    let field;
    let i = -1, n = chunks.length;
    const fields = [...schema.fields];
    const batchData = [];
    const bitmapLength = ((batchLength + 63) & ~63) >> 3;
    while (++i < n) {
        if ((data = chunks[i]) && data.length === batchLength) {
            batchData[i] = data;
        }
        else {
            (field = fields[i]).nullable || (fields[i] = fields[i].clone({ nullable: true }));
            batchData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength)
                : _data__WEBPACK_IMPORTED_MODULE_0__["Data"].new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
        }
    }
    return [new _schema__WEBPACK_IMPORTED_MODULE_1__["Schema"](fields), batchLength, batchData];
}
/** @ignore */
function distributeColumnsIntoRecordBatches(columns) {
    return distributeVectorsIntoRecordBatches(new _schema__WEBPACK_IMPORTED_MODULE_1__["Schema"](columns.map(({ field }) => field)), columns);
}
/** @ignore */
function distributeVectorsIntoRecordBatches(schema, vecs) {
    return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v) => v instanceof _vector_chunked__WEBPACK_IMPORTED_MODULE_2__["Chunked"] ? v.chunks.map((c) => c.data) : [v.data]));
}
/** @ignore */
function uniformlyDistributeChunksAcrossRecordBatches(schema, columns) {
    const fields = [...schema.fields];
    const batchArgs = [];
    const memo = { numBatches: columns.reduce((n, c) => Math.max(n, c.length), 0) };
    let numBatches = 0, batchLength = 0;
    let i = -1, numColumns = columns.length;
    let child, childData = [];
    while (memo.numBatches-- > 0) {
        for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns;) {
            childData[i] = child = columns[i].shift();
            batchLength = Math.min(batchLength, child ? child.length : batchLength);
        }
        if (isFinite(batchLength)) {
            childData = distributeChildData(fields, batchLength, childData, columns, memo);
            if (batchLength > 0) {
                batchArgs[numBatches++] = [batchLength, childData.slice()];
            }
        }
    }
    return [
        schema = new _schema__WEBPACK_IMPORTED_MODULE_1__["Schema"](fields, schema.metadata),
        batchArgs.map((xs) => new _recordbatch__WEBPACK_IMPORTED_MODULE_3__["RecordBatch"](schema, ...xs))
    ];
}
/** @ignore */
function distributeChildData(fields, batchLength, childData, columns, memo) {
    let data;
    let field;
    let length = 0, i = -1, n = columns.length;
    const bitmapLength = ((batchLength + 63) & ~63) >> 3;
    while (++i < n) {
        if ((data = childData[i]) && ((length = data.length) >= batchLength)) {
            if (length === batchLength) {
                childData[i] = data;
            }
            else {
                childData[i] = data.slice(0, batchLength);
                data = data.slice(batchLength, length - batchLength);
                memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(data));
            }
        }
        else {
            (field = fields[i]).nullable || (fields[i] = field.clone({ nullable: true }));
            childData[i] = data ? data._changeLengthAndBackfillNullBitmap(batchLength)
                : _data__WEBPACK_IMPORTED_MODULE_0__["Data"].new(field.type, 0, batchLength, batchLength, nullBufs(bitmapLength));
        }
    }
    return childData;
}

//# sourceMappingURL=recordbatch.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/utf8.mjs":
/*!*************************************************!*\
  !*** ./node_modules/apache-arrow/util/utf8.mjs ***!
  \*************************************************/
/*! exports provided: decodeUtf8, encodeUtf8 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeUtf8", function() { return decodeUtf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeUtf8", function() { return encodeUtf8; });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var text_encoding_utf_8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-encoding-utf-8 */ "./node_modules/text-encoding-utf-8/lib/encoding.lib.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore @suppress {missingRequire} */
const _Buffer = typeof Buffer === 'function' ? Buffer : null;
/** @ignore */
const useNativeEncoders = typeof TextDecoder === 'function' && typeof TextEncoder === 'function';
/** @ignore */
const decodeUtf8 = ((TextDecoder) => {
    if (useNativeEncoders || !_Buffer) {
        const decoder = new TextDecoder('utf-8');
        return (buffer) => decoder.decode(buffer);
    }
    return (input) => {
        const { buffer, byteOffset, length } = Object(_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(input);
        return _Buffer.from(buffer, byteOffset, length).toString();
    };
})(typeof TextDecoder !== 'undefined' ? TextDecoder : text_encoding_utf_8__WEBPACK_IMPORTED_MODULE_1__["TextDecoder"]);
/** @ignore */
const encodeUtf8 = ((TextEncoder) => {
    if (useNativeEncoders || !_Buffer) {
        const encoder = new TextEncoder();
        return (value) => encoder.encode(value);
    }
    return (input = '') => Object(_buffer__WEBPACK_IMPORTED_MODULE_0__["toUint8Array"])(_Buffer.from(input, 'utf8'));
})(typeof TextEncoder !== 'undefined' ? TextEncoder : text_encoding_utf_8__WEBPACK_IMPORTED_MODULE_1__["TextEncoder"]);

//# sourceMappingURL=utf8.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/util/vector.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/util/vector.mjs ***!
  \***************************************************/
/*! exports provided: clampIndex, clampRange, createElementComparator */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampIndex", function() { return clampIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampRange", function() { return clampRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementComparator", function() { return createElementComparator; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _vector_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector/row */ "./node_modules/apache-arrow/vector/row.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compat */ "./node_modules/apache-arrow/util/compat.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
function clampIndex(source, index, then) {
    const length = source.length;
    const adjust = index > -1 ? index : (length + (index % length));
    return then ? then(source, adjust) : adjust;
}
/** @ignore */
let tmp;
/** @ignore */
function clampRange(source, begin, end, then) {
    // Adjust args similar to Array.prototype.slice. Normalize begin/end to
    // clamp between 0 and length, and wrap around on negative indices, e.g.
    // slice(-1, 5) or slice(5, -1)
    let { length: len = 0 } = source;
    let lhs = typeof begin !== 'number' ? 0 : begin;
    let rhs = typeof end !== 'number' ? len : end;
    // wrap around on negative start/end positions
    (lhs < 0) && (lhs = ((lhs % len) + len) % len);
    (rhs < 0) && (rhs = ((rhs % len) + len) % len);
    // ensure lhs <= rhs
    (rhs < lhs) && (tmp = lhs, lhs = rhs, rhs = tmp);
    // ensure rhs <= length
    (rhs > len) && (rhs = len);
    return then ? then(source, lhs, rhs) : [lhs, rhs];
}
const big0 = _compat__WEBPACK_IMPORTED_MODULE_3__["BigIntAvailable"] ? Object(_compat__WEBPACK_IMPORTED_MODULE_3__["BigInt"])(0) : 0;
const isNaNFast = (value) => value !== value;
/** @ignore */
function createElementComparator(search) {
    let typeofSearch = typeof search;
    // Compare primitives
    if (typeofSearch !== 'object' || search === null) {
        // Compare NaN
        if (isNaNFast(search)) {
            return isNaNFast;
        }
        return typeofSearch !== 'bigint'
            ? (value) => value === search
            : (value) => (big0 + value) === search;
    }
    // Compare Dates
    if (search instanceof Date) {
        const valueOfSearch = search.valueOf();
        return (value) => value instanceof Date ? (value.valueOf() === valueOfSearch) : false;
    }
    // Compare TypedArrays
    if (ArrayBuffer.isView(search)) {
        return (value) => value ? Object(_util_buffer__WEBPACK_IMPORTED_MODULE_2__["compareArrayLike"])(search, value) : false;
    }
    // Compare Maps and Rows
    if (search instanceof Map) {
        return creatMapComparator(search);
    }
    // Compare Array-likes
    if (Array.isArray(search)) {
        return createArrayLikeComparator(search);
    }
    // Compare Vectors
    if (search instanceof _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]) {
        return createVectorComparator(search);
    }
    // Compare non-empty Objects
    return createObjectComparator(search);
}
/** @ignore */
function createArrayLikeComparator(lhs) {
    const comparators = [];
    for (let i = -1, n = lhs.length; ++i < n;) {
        comparators[i] = createElementComparator(lhs[i]);
    }
    return createSubElementsComparator(comparators);
}
/** @ignore */
function creatMapComparator(lhs) {
    let i = -1;
    const comparators = [];
    lhs.forEach((v) => comparators[++i] = createElementComparator(v));
    return createSubElementsComparator(comparators);
}
/** @ignore */
function createVectorComparator(lhs) {
    const comparators = [];
    for (let i = -1, n = lhs.length; ++i < n;) {
        comparators[i] = createElementComparator(lhs.get(i));
    }
    return createSubElementsComparator(comparators);
}
/** @ignore */
function createObjectComparator(lhs) {
    const keys = Object.keys(lhs);
    // Only compare non-empty Objects
    if (keys.length === 0) {
        return () => false;
    }
    const comparators = [];
    for (let i = -1, n = keys.length; ++i < n;) {
        comparators[i] = createElementComparator(lhs[keys[i]]);
    }
    return createSubElementsComparator(comparators, keys);
}
function createSubElementsComparator(comparators, keys) {
    return (rhs) => {
        if (!rhs || typeof rhs !== 'object') {
            return false;
        }
        switch (rhs.constructor) {
            case Array: return compareArray(comparators, rhs);
            case Map:
            case _vector_row__WEBPACK_IMPORTED_MODULE_1__["MapRow"]:
            case _vector_row__WEBPACK_IMPORTED_MODULE_1__["StructRow"]:
                return compareObject(comparators, rhs, rhs.keys());
            case Object:
            case undefined: // support `Object.create(null)` objects
                return compareObject(comparators, rhs, keys || Object.keys(rhs));
        }
        return rhs instanceof _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] ? compareVector(comparators, rhs) : false;
    };
}
function compareArray(comparators, arr) {
    const n = comparators.length;
    if (arr.length !== n) {
        return false;
    }
    for (let i = -1; ++i < n;) {
        if (!(comparators[i](arr[i]))) {
            return false;
        }
    }
    return true;
}
function compareVector(comparators, vec) {
    const n = comparators.length;
    if (vec.length !== n) {
        return false;
    }
    for (let i = -1; ++i < n;) {
        if (!(comparators[i](vec.get(i)))) {
            return false;
        }
    }
    return true;
}
function compareObject(comparators, obj, keys) {
    const lKeyItr = keys[Symbol.iterator]();
    const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
    const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
    let i = 0;
    let n = comparators.length;
    let rVal = rValItr.next();
    let lKey = lKeyItr.next();
    let rKey = rKeyItr.next();
    for (; i < n && !lKey.done && !rKey.done && !rVal.done; ++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()) {
        if (lKey.value !== rKey.value || !comparators[i](rVal.value)) {
            break;
        }
    }
    if (i === n && lKey.done && rKey.done && rVal.done) {
        return true;
    }
    lKeyItr.return && lKeyItr.return();
    rKeyItr.return && rKeyItr.return();
    rValItr.return && rValItr.return();
    return false;
}

//# sourceMappingURL=vector.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector.mjs":
/*!**********************************************!*\
  !*** ./node_modules/apache-arrow/vector.mjs ***!
  \**********************************************/
/*! exports provided: AbstractVector, Vector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractVector", function() { return AbstractVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return AbstractVector; });
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
class AbstractVector {
}


//# sourceMappingURL=vector.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/base.mjs ***!
  \***************************************************/
/*! exports provided: BaseVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseVector", function() { return BaseVector; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _chunked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/vector */ "./node_modules/apache-arrow/util/vector.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class BaseVector extends _vector__WEBPACK_IMPORTED_MODULE_3__["AbstractVector"] {
    constructor(data, children) {
        super();
        this._children = children;
        this.numChildren = data.childData.length;
        this._bindDataAccessors(this.data = data);
    }
    get type() { return this.data.type; }
    get typeId() { return this.data.typeId; }
    get length() { return this.data.length; }
    get offset() { return this.data.offset; }
    get stride() { return this.data.stride; }
    get nullCount() { return this.data.nullCount; }
    get byteLength() { return this.data.byteLength; }
    get VectorName() { return `${_enum__WEBPACK_IMPORTED_MODULE_0__["Type"][this.typeId]}Vector`; }
    get ArrayType() { return this.type.ArrayType; }
    get values() { return this.data.values; }
    get typeIds() { return this.data.typeIds; }
    get nullBitmap() { return this.data.nullBitmap; }
    get valueOffsets() { return this.data.valueOffsets; }
    get [Symbol.toStringTag]() { return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`; }
    clone(data, children = this._children) {
        return _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"].new(data, children);
    }
    concat(...others) {
        return _chunked__WEBPACK_IMPORTED_MODULE_1__["Chunked"].concat(this, ...others);
    }
    slice(begin, end) {
        // Adjust args similar to Array.prototype.slice. Normalize begin/end to
        // clamp between 0 and length, and wrap around on negative indices, e.g.
        // slice(-1, 5) or slice(5, -1)
        return Object(_util_vector__WEBPACK_IMPORTED_MODULE_2__["clampRange"])(this, begin, end, this._sliceInternal);
    }
    isValid(index) {
        if (this.nullCount > 0) {
            const idx = this.offset + index;
            const val = this.nullBitmap[idx >> 3];
            const mask = (val & (1 << (idx % 8)));
            return mask !== 0;
        }
        return true;
    }
    getChildAt(index) {
        return index < 0 || index >= this.numChildren ? null : ((this._children || (this._children = []))[index] ||
            (this._children[index] = _vector__WEBPACK_IMPORTED_MODULE_3__["Vector"].new(this.data.childData[index])));
    }
    toJSON() { return [...this]; }
    _sliceInternal(self, begin, end) {
        return self.clone(self.data.slice(begin, end - begin), null);
    }
    // @ts-ignore
    _bindDataAccessors(data) {
        // Implementation in src/vectors/index.ts due to circular dependency/packaging shenanigans
    }
}
BaseVector.prototype[Symbol.isConcatSpreadable] = true;

//# sourceMappingURL=base.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/binary.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/vector/binary.mjs ***!
  \*****************************************************/
/*! exports provided: BinaryVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryVector", function() { return BinaryVector; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class BinaryVector extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"] {
    asUtf8() {
        return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new(this.data.clone(new _type__WEBPACK_IMPORTED_MODULE_2__["Utf8"]()));
    }
}

//# sourceMappingURL=binary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/bool.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/bool.mjs ***!
  \***************************************************/
/*! exports provided: BoolVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolVector", function() { return BoolVector; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class BoolVector extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"] {
    /** @nocollapse */
    static from(input) {
        return Object(_index__WEBPACK_IMPORTED_MODULE_2__["vectorFromValuesWithType"])(() => new _type__WEBPACK_IMPORTED_MODULE_0__["Bool"](), input);
    }
}

//# sourceMappingURL=bool.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/chunked.mjs":
/*!******************************************************!*\
  !*** ./node_modules/apache-arrow/vector/chunked.mjs ***!
  \******************************************************/
/*! exports provided: Chunked */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chunked", function() { return Chunked; });
/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/vector */ "./node_modules/apache-arrow/util/vector.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class Chunked extends _vector__WEBPACK_IMPORTED_MODULE_3__["AbstractVector"] {
    constructor(type, chunks = [], offsets = calculateOffsets(chunks)) {
        super();
        this._nullCount = -1;
        this._type = type;
        this._chunks = chunks;
        this._chunkOffsets = offsets;
        this._length = offsets[offsets.length - 1];
        this._numChildren = (this._type.children || []).length;
    }
    /** @nocollapse */
    static flatten(...vectors) {
        return Object(_util_args__WEBPACK_IMPORTED_MODULE_2__["selectChunkArgs"])(_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"], vectors);
    }
    /** @nocollapse */
    static concat(...vectors) {
        const chunks = Chunked.flatten(...vectors);
        return new Chunked(chunks[0].type, chunks);
    }
    get type() { return this._type; }
    get length() { return this._length; }
    get chunks() { return this._chunks; }
    get typeId() { return this._type.typeId; }
    get VectorName() { return `Chunked<${this._type}>`; }
    get data() {
        return this._chunks[0] ? this._chunks[0].data : null;
    }
    get ArrayType() { return this._type.ArrayType; }
    get numChildren() { return this._numChildren; }
    get stride() { return this._chunks[0] ? this._chunks[0].stride : 1; }
    get byteLength() {
        return this._chunks.reduce((byteLength, chunk) => byteLength + chunk.byteLength, 0);
    }
    get nullCount() {
        let nullCount = this._nullCount;
        if (nullCount < 0) {
            this._nullCount = nullCount = this._chunks.reduce((x, { nullCount }) => x + nullCount, 0);
        }
        return nullCount;
    }
    get indices() {
        if (_type__WEBPACK_IMPORTED_MODULE_1__["DataType"].isDictionary(this._type)) {
            if (!this._indices) {
                const chunks = this._chunks;
                this._indices = (chunks.length === 1
                    ? chunks[0].indices
                    : Chunked.concat(...chunks.map((x) => x.indices)));
            }
            return this._indices;
        }
        return null;
    }
    get dictionary() {
        if (_type__WEBPACK_IMPORTED_MODULE_1__["DataType"].isDictionary(this._type)) {
            return this._chunks[this._chunks.length - 1].data.dictionary;
        }
        return null;
    }
    *[Symbol.iterator]() {
        for (const chunk of this._chunks) {
            yield* chunk;
        }
    }
    clone(chunks = this._chunks) {
        return new Chunked(this._type, chunks);
    }
    concat(...others) {
        return this.clone(Chunked.flatten(this, ...others));
    }
    slice(begin, end) {
        return Object(_util_vector__WEBPACK_IMPORTED_MODULE_0__["clampRange"])(this, begin, end, this._sliceInternal);
    }
    getChildAt(index) {
        if (index < 0 || index >= this._numChildren) {
            return null;
        }
        let columns = this._children || (this._children = []);
        let child, field, chunks;
        if (child = columns[index]) {
            return child;
        }
        if (field = (this._type.children || [])[index]) {
            chunks = this._chunks
                .map((vector) => vector.getChildAt(index))
                .filter((vec) => vec != null);
            if (chunks.length > 0) {
                return (columns[index] = new Chunked(field.type, chunks));
            }
        }
        return null;
    }
    search(index, then) {
        let idx = index;
        // binary search to find the child vector and value indices
        let offsets = this._chunkOffsets, rhs = offsets.length - 1;
        // return early if out of bounds, or if there's just one child
        if (idx < 0) {
            return null;
        }
        if (idx >= offsets[rhs]) {
            return null;
        }
        if (rhs <= 1) {
            return then ? then(this, 0, idx) : [0, idx];
        }
        let lhs = 0, pos = 0, mid = 0;
        do {
            if (lhs + 1 === rhs) {
                return then ? then(this, lhs, idx - pos) : [lhs, idx - pos];
            }
            mid = lhs + ((rhs - lhs) / 2) | 0;
            idx >= offsets[mid] ? (lhs = mid) : (rhs = mid);
        } while (idx < offsets[rhs] && idx >= (pos = offsets[lhs]));
        return null;
    }
    isValid(index) {
        return !!this.search(index, this.isValidInternal);
    }
    get(index) {
        return this.search(index, this.getInternal);
    }
    set(index, value) {
        this.search(index, ({ chunks }, i, j) => chunks[i].set(j, value));
    }
    indexOf(element, offset) {
        if (offset && typeof offset === 'number') {
            return this.search(offset, (self, i, j) => this.indexOfInternal(self, i, j, element));
        }
        return this.indexOfInternal(this, 0, Math.max(0, offset || 0), element);
    }
    toArray() {
        const { chunks } = this;
        const n = chunks.length;
        let ArrayType = this._type.ArrayType;
        if (n <= 0) {
            return new ArrayType(0);
        }
        if (n <= 1) {
            return chunks[0].toArray();
        }
        let len = 0, src = new Array(n);
        for (let i = -1; ++i < n;) {
            len += (src[i] = chunks[i].toArray()).length;
        }
        if (ArrayType !== src[0].constructor) {
            ArrayType = src[0].constructor;
        }
        let dst = new ArrayType(len);
        let set = ArrayType === Array ? arraySet : typedSet;
        for (let i = -1, idx = 0; ++i < n;) {
            idx = set(src[i], dst, idx);
        }
        return dst;
    }
    getInternal({ _chunks }, i, j) { return _chunks[i].get(j); }
    isValidInternal({ _chunks }, i, j) { return _chunks[i].isValid(j); }
    indexOfInternal({ _chunks }, chunkIndex, fromIndex, element) {
        let i = chunkIndex - 1, n = _chunks.length;
        let start = fromIndex, offset = 0, found = -1;
        while (++i < n) {
            if (~(found = _chunks[i].indexOf(element, start))) {
                return offset + found;
            }
            start = 0;
            offset += _chunks[i].length;
        }
        return -1;
    }
    _sliceInternal(self, begin, end) {
        const slices = [];
        const { chunks, _chunkOffsets: chunkOffsets } = self;
        for (let i = -1, n = chunks.length; ++i < n;) {
            const chunk = chunks[i];
            const chunkLength = chunk.length;
            const chunkOffset = chunkOffsets[i];
            // If the child is to the right of the slice boundary, we can stop
            if (chunkOffset >= end) {
                break;
            }
            // If the child is to the left of of the slice boundary, exclude
            if (begin >= chunkOffset + chunkLength) {
                continue;
            }
            // If the child is between both left and right boundaries, include w/o slicing
            if (chunkOffset >= begin && (chunkOffset + chunkLength) <= end) {
                slices.push(chunk);
                continue;
            }
            // If the child overlaps one of the slice boundaries, include that slice
            const from = Math.max(0, begin - chunkOffset);
            const to = Math.min(end - chunkOffset, chunkLength);
            slices.push(chunk.slice(from, to));
        }
        return self.clone(slices);
    }
}
/** @ignore */
function calculateOffsets(vectors) {
    let offsets = new Uint32Array((vectors || []).length + 1);
    let offset = offsets[0] = 0, length = offsets.length;
    for (let index = 0; ++index < length;) {
        offsets[index] = (offset += vectors[index - 1].length);
    }
    return offsets;
}
/** @ignore */
const typedSet = (src, dst, offset) => {
    dst.set(src, offset);
    return (offset + src.length);
};
/** @ignore */
const arraySet = (src, dst, offset) => {
    let idx = offset;
    for (let i = -1, n = src.length; ++i < n;) {
        dst[idx++] = src[i];
    }
    return idx;
};

//# sourceMappingURL=chunked.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/date.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/date.mjs ***!
  \***************************************************/
/*! exports provided: DateVector, DateDayVector, DateMillisecondVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateVector", function() { return DateVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDayVector", function() { return DateDayVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondVector", function() { return DateMillisecondVector; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class DateVector extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"] {
    /** @nocollapse */
    static from(...args) {
        if (args.length === 2) {
            return Object(_index__WEBPACK_IMPORTED_MODULE_2__["vectorFromValuesWithType"])(() => args[1] === _enum__WEBPACK_IMPORTED_MODULE_0__["DateUnit"].DAY ? new _type__WEBPACK_IMPORTED_MODULE_3__["DateDay"]() : new _type__WEBPACK_IMPORTED_MODULE_3__["DateMillisecond"](), args[0]);
        }
        return Object(_index__WEBPACK_IMPORTED_MODULE_2__["vectorFromValuesWithType"])(() => new _type__WEBPACK_IMPORTED_MODULE_3__["DateMillisecond"](), args[0]);
    }
}
/** @ignore */
class DateDayVector extends DateVector {
}
/** @ignore */
class DateMillisecondVector extends DateVector {
}

//# sourceMappingURL=date.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/decimal.mjs":
/*!******************************************************!*\
  !*** ./node_modules/apache-arrow/vector/decimal.mjs ***!
  \******************************************************/
/*! exports provided: DecimalVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecimalVector", function() { return DecimalVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class DecimalVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}

//# sourceMappingURL=decimal.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/dictionary.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/vector/dictionary.mjs ***!
  \*********************************************************/
/*! exports provided: DictionaryVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryVector", function() { return DictionaryVector; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */
class DictionaryVector extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseVector"] {
    constructor(data) {
        super(data);
        this.indices = _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(data.clone(this.type.indices));
    }
    /** @nocollapse */
    static from(...args) {
        if (args.length === 3) {
            const [values, indices, keys] = args;
            const type = new _type__WEBPACK_IMPORTED_MODULE_4__["Dictionary"](values.type, indices, null, null);
            return _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(_data__WEBPACK_IMPORTED_MODULE_0__["Data"].Dictionary(type, 0, keys.length, 0, null, keys, values));
        }
        return Object(_index__WEBPACK_IMPORTED_MODULE_3__["vectorFromValuesWithType"])(() => args[0].type, args[0]);
    }
    get dictionary() { return this.data.dictionary; }
    reverseLookup(value) { return this.dictionary.indexOf(value); }
    getKey(idx) { return this.indices.get(idx); }
    getValue(key) { return this.dictionary.get(key); }
    setKey(idx, key) { return this.indices.set(idx, key); }
    setValue(key, value) { return this.dictionary.set(key, value); }
}
DictionaryVector.prototype.indices = null;

//# sourceMappingURL=dictionary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/fixedsizebinary.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/apache-arrow/vector/fixedsizebinary.mjs ***!
  \**************************************************************/
/*! exports provided: FixedSizeBinaryVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryVector", function() { return FixedSizeBinaryVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class FixedSizeBinaryVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}

//# sourceMappingURL=fixedsizebinary.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/fixedsizelist.mjs":
/*!************************************************************!*\
  !*** ./node_modules/apache-arrow/vector/fixedsizelist.mjs ***!
  \************************************************************/
/*! exports provided: FixedSizeListVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListVector", function() { return FixedSizeListVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class FixedSizeListVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}

//# sourceMappingURL=fixedsizelist.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/float.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/vector/float.mjs ***!
  \****************************************************/
/*! exports provided: FloatVector, Float16Vector, Float32Vector, Float64Vector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatVector", function() { return FloatVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float16Vector", function() { return Float16Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float32Vector", function() { return Float32Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Float64Vector", function() { return Float64Vector; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */
class FloatVector extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseVector"] {
    /** @nocollapse */
    static from(input) {
        let ArrowType = vectorTypeToDataType(this);
        if ((input instanceof ArrayBuffer) || ArrayBuffer.isView(input)) {
            let InputType = arrayTypeToDataType(input.constructor) || ArrowType;
            // Special case, infer the Arrow DataType from the input if calling the base
            // FloatVector.from with a TypedArray, e.g. `FloatVector.from(new Float32Array())`
            if (ArrowType === null) {
                ArrowType = InputType;
            }
            // If the DataType inferred from the Vector constructor matches the
            // DataType inferred from the input arguments, return zero-copy view
            if (ArrowType && ArrowType === InputType) {
                let type = new ArrowType();
                let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
                // If the ArrowType is Float16 but the input type isn't a Uint16Array,
                // let the Float16Builder handle casting the input values to Uint16s.
                if (!convertTo16Bit(ArrowType, input.constructor)) {
                    return _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(_data__WEBPACK_IMPORTED_MODULE_0__["Data"].Float(type, 0, length, 0, null, input));
                }
            }
        }
        if (ArrowType) {
            // If the DataType inferred from the Vector constructor is different than
            // the DataType inferred from the input TypedArray, or if input isn't a
            // TypedArray, use the Builders to construct the result Vector
            return Object(_index__WEBPACK_IMPORTED_MODULE_3__["vectorFromValuesWithType"])(() => new ArrowType(), input);
        }
        if ((input instanceof DataView) || (input instanceof ArrayBuffer)) {
            throw new TypeError(`Cannot infer float type from instance of ${input.constructor.name}`);
        }
        throw new TypeError('Unrecognized FloatVector input');
    }
}
/** @ignore */
class Float16Vector extends FloatVector {
    // Since JS doesn't have half floats, `toArray()` returns a zero-copy slice
    // of the underlying Uint16Array data. This behavior ensures we don't incur
    // extra compute or copies if you're calling `toArray()` in order to create
    // a buffer for something like WebGL. Buf if you're using JS and want typed
    // arrays of 4-to-8-byte precision, these methods will enumerate the values
    // and clamp to the desired byte lengths.
    toFloat32Array() { return new Float32Array(this); }
    toFloat64Array() { return new Float64Array(this); }
}
/** @ignore */
class Float32Vector extends FloatVector {
}
/** @ignore */
class Float64Vector extends FloatVector {
}
const convertTo16Bit = (typeCtor, dataCtor) => {
    return (typeCtor === _type__WEBPACK_IMPORTED_MODULE_4__["Float16"]) && (dataCtor !== Uint16Array);
};
/** @ignore */
const arrayTypeToDataType = (ctor) => {
    switch (ctor) {
        case Uint16Array: return _type__WEBPACK_IMPORTED_MODULE_4__["Float16"];
        case Float32Array: return _type__WEBPACK_IMPORTED_MODULE_4__["Float32"];
        case Float64Array: return _type__WEBPACK_IMPORTED_MODULE_4__["Float64"];
        default: return null;
    }
};
/** @ignore */
const vectorTypeToDataType = (ctor) => {
    switch (ctor) {
        case Float16Vector: return _type__WEBPACK_IMPORTED_MODULE_4__["Float16"];
        case Float32Vector: return _type__WEBPACK_IMPORTED_MODULE_4__["Float32"];
        case Float64Vector: return _type__WEBPACK_IMPORTED_MODULE_4__["Float64"];
        default: return null;
    }
};

//# sourceMappingURL=float.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/vector/index.mjs ***!
  \****************************************************/
/*! exports provided: Vector, BaseVector, BinaryVector, BoolVector, Chunked, DateVector, DateDayVector, DateMillisecondVector, DecimalVector, DictionaryVector, FixedSizeBinaryVector, FixedSizeListVector, FloatVector, Float16Vector, Float32Vector, Float64Vector, IntervalVector, IntervalDayTimeVector, IntervalYearMonthVector, IntVector, Int8Vector, Int16Vector, Int32Vector, Int64Vector, Uint8Vector, Uint16Vector, Uint32Vector, Uint64Vector, ListVector, MapVector, NullVector, StructVector, TimestampVector, TimestampSecondVector, TimestampMillisecondVector, TimestampMicrosecondVector, TimestampNanosecondVector, TimeVector, TimeSecondVector, TimeMillisecondVector, TimeMicrosecondVector, TimeNanosecondVector, UnionVector, DenseUnionVector, SparseUnionVector, Utf8Vector, MapRow, StructRow, vectorFromValuesWithType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorFromValuesWithType", function() { return vectorFromValuesWithType; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseVector", function() { return _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binary */ "./node_modules/apache-arrow/vector/binary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryVector", function() { return _binary__WEBPACK_IMPORTED_MODULE_2__["BinaryVector"]; });

/* harmony import */ var _bool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bool */ "./node_modules/apache-arrow/vector/bool.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolVector", function() { return _bool__WEBPACK_IMPORTED_MODULE_3__["BoolVector"]; });

/* harmony import */ var _chunked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunked */ "./node_modules/apache-arrow/vector/chunked.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chunked", function() { return _chunked__WEBPACK_IMPORTED_MODULE_4__["Chunked"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date */ "./node_modules/apache-arrow/vector/date.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateVector", function() { return _date__WEBPACK_IMPORTED_MODULE_5__["DateVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateDayVector", function() { return _date__WEBPACK_IMPORTED_MODULE_5__["DateDayVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateMillisecondVector", function() { return _date__WEBPACK_IMPORTED_MODULE_5__["DateMillisecondVector"]; });

/* harmony import */ var _decimal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decimal */ "./node_modules/apache-arrow/vector/decimal.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalVector", function() { return _decimal__WEBPACK_IMPORTED_MODULE_6__["DecimalVector"]; });

/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dictionary */ "./node_modules/apache-arrow/vector/dictionary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DictionaryVector", function() { return _dictionary__WEBPACK_IMPORTED_MODULE_7__["DictionaryVector"]; });

/* harmony import */ var _fixedsizebinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fixedsizebinary */ "./node_modules/apache-arrow/vector/fixedsizebinary.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeBinaryVector", function() { return _fixedsizebinary__WEBPACK_IMPORTED_MODULE_8__["FixedSizeBinaryVector"]; });

/* harmony import */ var _fixedsizelist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fixedsizelist */ "./node_modules/apache-arrow/vector/fixedsizelist.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FixedSizeListVector", function() { return _fixedsizelist__WEBPACK_IMPORTED_MODULE_9__["FixedSizeListVector"]; });

/* harmony import */ var _float__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./float */ "./node_modules/apache-arrow/vector/float.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatVector", function() { return _float__WEBPACK_IMPORTED_MODULE_10__["FloatVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float16Vector", function() { return _float__WEBPACK_IMPORTED_MODULE_10__["Float16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float32Vector", function() { return _float__WEBPACK_IMPORTED_MODULE_10__["Float32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Float64Vector", function() { return _float__WEBPACK_IMPORTED_MODULE_10__["Float64Vector"]; });

/* harmony import */ var _interval__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interval */ "./node_modules/apache-arrow/vector/interval.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalVector", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeVector", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalDayTimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthVector", function() { return _interval__WEBPACK_IMPORTED_MODULE_11__["IntervalYearMonthVector"]; });

/* harmony import */ var _int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./int */ "./node_modules/apache-arrow/vector/int.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntVector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["IntVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int8Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Int8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int16Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Int16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int32Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Int32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Int64Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Int64Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint8Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Uint8Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint16Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Uint16Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint32Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Uint32Vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uint64Vector", function() { return _int__WEBPACK_IMPORTED_MODULE_12__["Uint64Vector"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list */ "./node_modules/apache-arrow/vector/list.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListVector", function() { return _list__WEBPACK_IMPORTED_MODULE_13__["ListVector"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map */ "./node_modules/apache-arrow/vector/map.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapVector", function() { return _map__WEBPACK_IMPORTED_MODULE_14__["MapVector"]; });

/* harmony import */ var _null__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./null */ "./node_modules/apache-arrow/vector/null.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullVector", function() { return _null__WEBPACK_IMPORTED_MODULE_15__["NullVector"]; });

/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./struct */ "./node_modules/apache-arrow/vector/struct.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructVector", function() { return _struct__WEBPACK_IMPORTED_MODULE_16__["StructVector"]; });

/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timestamp */ "./node_modules/apache-arrow/vector/timestamp.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampVector", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_17__["TimestampVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondVector", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_17__["TimestampSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondVector", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_17__["TimestampMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondVector", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_17__["TimestampMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondVector", function() { return _timestamp__WEBPACK_IMPORTED_MODULE_17__["TimestampNanosecondVector"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./time */ "./node_modules/apache-arrow/vector/time.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeVector", function() { return _time__WEBPACK_IMPORTED_MODULE_18__["TimeVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSecondVector", function() { return _time__WEBPACK_IMPORTED_MODULE_18__["TimeSecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondVector", function() { return _time__WEBPACK_IMPORTED_MODULE_18__["TimeMillisecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondVector", function() { return _time__WEBPACK_IMPORTED_MODULE_18__["TimeMicrosecondVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondVector", function() { return _time__WEBPACK_IMPORTED_MODULE_18__["TimeNanosecondVector"]; });

/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./union */ "./node_modules/apache-arrow/vector/union.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnionVector", function() { return _union__WEBPACK_IMPORTED_MODULE_19__["UnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DenseUnionVector", function() { return _union__WEBPACK_IMPORTED_MODULE_19__["DenseUnionVector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SparseUnionVector", function() { return _union__WEBPACK_IMPORTED_MODULE_19__["SparseUnionVector"]; });

/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utf8 */ "./node_modules/apache-arrow/vector/utf8.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utf8Vector", function() { return _utf8__WEBPACK_IMPORTED_MODULE_20__["Utf8Vector"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./row */ "./node_modules/apache-arrow/vector/row.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapRow", function() { return _row__WEBPACK_IMPORTED_MODULE_21__["MapRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructRow", function() { return _row__WEBPACK_IMPORTED_MODULE_21__["StructRow"]; });

/* harmony import */ var _util_fn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../util/fn */ "./node_modules/apache-arrow/util/fn.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../builder */ "./node_modules/apache-arrow/builder.mjs");
/* harmony import */ var _visitor_get__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../visitor/get */ "./node_modules/apache-arrow/visitor/get.mjs");
/* harmony import */ var _visitor_set__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../visitor/set */ "./node_modules/apache-arrow/visitor/set.mjs");
/* harmony import */ var _visitor_indexof__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../visitor/indexof */ "./node_modules/apache-arrow/visitor/indexof.mjs");
/* harmony import */ var _visitor_toarray__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../visitor/toarray */ "./node_modules/apache-arrow/visitor/toarray.mjs");
/* harmony import */ var _visitor_iterator__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../visitor/iterator */ "./node_modules/apache-arrow/visitor/iterator.mjs");
/* harmony import */ var _visitor_bytewidth__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../visitor/bytewidth */ "./node_modules/apache-arrow/visitor/bytewidth.mjs");
/* harmony import */ var _visitor_vectorctor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../visitor/vectorctor */ "./node_modules/apache-arrow/visitor/vectorctor.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





































/** @nocollapse */
_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new = newVector;
/** @nocollapse */
_vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].from = vectorFrom;
/** @ignore */
function newVector(data, ...args) {
    return new (_visitor_vectorctor__WEBPACK_IMPORTED_MODULE_33__["instance"].getVisitFn(data)())(data, ...args);
}
/** @ignore */
function vectorFromValuesWithType(newDataType, input) {
    if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_25__["isIterable"])(input)) {
        return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].from({ 'nullValues': [null, undefined], type: newDataType(), 'values': input });
    }
    else if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_25__["isAsyncIterable"])(input)) {
        return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].from({ 'nullValues': [null, undefined], type: newDataType(), 'values': input });
    }
    const { 'values': values = [], 'type': type = newDataType(), 'nullValues': nullValues = [null, undefined], } = { ...input };
    return Object(_util_compat__WEBPACK_IMPORTED_MODULE_25__["isIterable"])(values)
        ? _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].from({ nullValues, ...input, type })
        : _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].from({ nullValues, ...input, type });
}
function vectorFrom(input) {
    const { 'values': values = [], ...options } = { 'nullValues': [null, undefined], ...input };
    if (Object(_util_compat__WEBPACK_IMPORTED_MODULE_25__["isIterable"])(values)) {
        const chunks = [..._builder__WEBPACK_IMPORTED_MODULE_26__["Builder"].throughIterable(options)(values)];
        return chunks.length === 1 ? chunks[0] : _chunked__WEBPACK_IMPORTED_MODULE_4__["Chunked"].concat(chunks);
    }
    return (async (chunks) => {
        const transform = _builder__WEBPACK_IMPORTED_MODULE_26__["Builder"].throughAsyncIterable(options);
        for await (const chunk of transform(values)) {
            chunks.push(chunk);
        }
        return chunks.length === 1 ? chunks[0] : _chunked__WEBPACK_IMPORTED_MODULE_4__["Chunked"].concat(chunks);
    })([]);
}
//
// We provide the following method implementations for code navigability purposes only.
// They're overridden at runtime below with the specific Visitor implementation for each type,
// short-circuiting the usual Visitor traversal and reducing intermediate lookups and calls.
// This comment is here to remind you to not set breakpoints in these function bodies, or to inform
// you why the breakpoints you have already set are not being triggered. Have a great day!
//
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype.get = function baseVectorGet(index) {
    return _visitor_get__WEBPACK_IMPORTED_MODULE_27__["instance"].visit(this, index);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype.set = function baseVectorSet(index, value) {
    return _visitor_set__WEBPACK_IMPORTED_MODULE_28__["instance"].visit(this, index, value);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype.indexOf = function baseVectorIndexOf(value, fromIndex) {
    return _visitor_indexof__WEBPACK_IMPORTED_MODULE_29__["instance"].visit(this, value, fromIndex);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype.toArray = function baseVectorToArray() {
    return _visitor_toarray__WEBPACK_IMPORTED_MODULE_30__["instance"].visit(this);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype.getByteWidth = function baseVectorGetByteWidth() {
    return _visitor_bytewidth__WEBPACK_IMPORTED_MODULE_32__["instance"].visit(this.type);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype[Symbol.iterator] = function baseVectorSymbolIterator() {
    return _visitor_iterator__WEBPACK_IMPORTED_MODULE_31__["instance"].visit(this);
};
_base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"].prototype._bindDataAccessors = bindBaseVectorDataAccessors;
// Perf: bind and assign the operator Visitor methods to each of the Vector subclasses for each Type
Object.keys(_enum__WEBPACK_IMPORTED_MODULE_23__["Type"])
    .map((T) => _enum__WEBPACK_IMPORTED_MODULE_23__["Type"][T])
    .filter((T) => typeof T === 'number')
    .filter((typeId) => typeId !== _enum__WEBPACK_IMPORTED_MODULE_23__["Type"].NONE)
    .forEach((typeId) => {
    const VectorCtor = _visitor_vectorctor__WEBPACK_IMPORTED_MODULE_33__["instance"].visit(typeId);
    VectorCtor.prototype['get'] = _util_fn__WEBPACK_IMPORTED_MODULE_22__["partial1"](_visitor_get__WEBPACK_IMPORTED_MODULE_27__["instance"].getVisitFn(typeId));
    VectorCtor.prototype['set'] = _util_fn__WEBPACK_IMPORTED_MODULE_22__["partial2"](_visitor_set__WEBPACK_IMPORTED_MODULE_28__["instance"].getVisitFn(typeId));
    VectorCtor.prototype['indexOf'] = _util_fn__WEBPACK_IMPORTED_MODULE_22__["partial2"](_visitor_indexof__WEBPACK_IMPORTED_MODULE_29__["instance"].getVisitFn(typeId));
    VectorCtor.prototype['toArray'] = _util_fn__WEBPACK_IMPORTED_MODULE_22__["partial0"](_visitor_toarray__WEBPACK_IMPORTED_MODULE_30__["instance"].getVisitFn(typeId));
    VectorCtor.prototype['getByteWidth'] = partialType0(_visitor_bytewidth__WEBPACK_IMPORTED_MODULE_32__["instance"].getVisitFn(typeId));
    VectorCtor.prototype[Symbol.iterator] = _util_fn__WEBPACK_IMPORTED_MODULE_22__["partial0"](_visitor_iterator__WEBPACK_IMPORTED_MODULE_31__["instance"].getVisitFn(typeId));
});
/** @ignore */
function partialType0(visit) {
    return function () { return visit(this.type); };
}
/** @ignore */
function wrapNullableGet(fn) {
    return function (i) { return this.isValid(i) ? fn.call(this, i) : null; };
}
/** @ignore */
function wrapNullableSet(fn) {
    return function (i, a) {
        if (Object(_util_bit__WEBPACK_IMPORTED_MODULE_24__["setBool"])(this.nullBitmap, this.offset + i, !(a === null || a === undefined))) {
            fn.call(this, i, a);
        }
    };
}
/** @ignore */
function bindBaseVectorDataAccessors() {
    const nullBitmap = this.nullBitmap;
    if (nullBitmap && nullBitmap.byteLength > 0) {
        this.get = wrapNullableGet(this.get);
        this.set = wrapNullableSet(this.set);
    }
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/int.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/vector/int.mjs ***!
  \**************************************************/
/*! exports provided: IntVector, Int8Vector, Int16Vector, Int32Vector, Int64Vector, Uint8Vector, Uint16Vector, Uint32Vector, Uint64Vector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntVector", function() { return IntVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int8Vector", function() { return Int8Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int16Vector", function() { return Int16Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int32Vector", function() { return Int32Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int64Vector", function() { return Int64Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint8Vector", function() { return Uint8Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint16Vector", function() { return Uint16Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint32Vector", function() { return Uint32Vector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uint64Vector", function() { return Uint64Vector; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
/* harmony import */ var _util_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/compat */ "./node_modules/apache-arrow/util/compat.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.







/** @ignore */
class IntVector extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseVector"] {
    /** @nocollapse */
    static from(...args) {
        let [input, is64bit = false] = args;
        let ArrowType = vectorTypeToDataType(this, is64bit);
        if ((input instanceof ArrayBuffer) || ArrayBuffer.isView(input)) {
            let InputType = arrayTypeToDataType(input.constructor, is64bit) || ArrowType;
            // Special case, infer the Arrow DataType from the input if calling the base
            // IntVector.from with a TypedArray, e.g. `IntVector.from(new Int32Array())`
            if (ArrowType === null) {
                ArrowType = InputType;
            }
            // If the DataType inferred from the Vector constructor matches the
            // DataType inferred from the input arguments, return zero-copy view
            if (ArrowType && ArrowType === InputType) {
                let type = new ArrowType();
                let length = input.byteLength / type.ArrayType.BYTES_PER_ELEMENT;
                // If the ArrowType is 64bit but the input type is 32bit pairs, update the logical length
                if (convert32To64Bit(ArrowType, input.constructor)) {
                    length *= 0.5;
                }
                return _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(_data__WEBPACK_IMPORTED_MODULE_0__["Data"].Int(type, 0, length, 0, null, input));
            }
        }
        if (ArrowType) {
            // If the DataType inferred from the Vector constructor is different than
            // the DataType inferred from the input TypedArray, or if input isn't a
            // TypedArray, use the Builders to construct the result Vector
            return Object(_index__WEBPACK_IMPORTED_MODULE_3__["vectorFromValuesWithType"])(() => new ArrowType(), input);
        }
        if ((input instanceof DataView) || (input instanceof ArrayBuffer)) {
            throw new TypeError(`Cannot infer integer type from instance of ${input.constructor.name}`);
        }
        throw new TypeError('Unrecognized IntVector input');
    }
}
/** @ignore */
class Int8Vector extends IntVector {
}
/** @ignore */
class Int16Vector extends IntVector {
}
/** @ignore */
class Int32Vector extends IntVector {
}
/** @ignore */
class Int64Vector extends IntVector {
    toBigInt64Array() {
        return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_5__["toBigInt64Array"])(this.values);
    }
    get values64() {
        return this._values64 || (this._values64 = this.toBigInt64Array());
    }
}
/** @ignore */
class Uint8Vector extends IntVector {
}
/** @ignore */
class Uint16Vector extends IntVector {
}
/** @ignore */
class Uint32Vector extends IntVector {
}
/** @ignore */
class Uint64Vector extends IntVector {
    toBigUint64Array() {
        return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_5__["toBigUint64Array"])(this.values);
    }
    get values64() {
        return this._values64 || (this._values64 = this.toBigUint64Array());
    }
}
const convert32To64Bit = (typeCtor, dataCtor) => {
    return (typeCtor === _type__WEBPACK_IMPORTED_MODULE_6__["Int64"] || typeCtor === _type__WEBPACK_IMPORTED_MODULE_6__["Uint64"]) &&
        (dataCtor === Int32Array || dataCtor === Uint32Array);
};
/** @ignore */
const arrayTypeToDataType = (ctor, is64bit) => {
    switch (ctor) {
        case Int8Array: return _type__WEBPACK_IMPORTED_MODULE_6__["Int8"];
        case Int16Array: return _type__WEBPACK_IMPORTED_MODULE_6__["Int16"];
        case Int32Array: return is64bit ? _type__WEBPACK_IMPORTED_MODULE_6__["Int64"] : _type__WEBPACK_IMPORTED_MODULE_6__["Int32"];
        case _util_compat__WEBPACK_IMPORTED_MODULE_4__["BigInt64Array"]: return _type__WEBPACK_IMPORTED_MODULE_6__["Int64"];
        case Uint8Array: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint8"];
        case Uint16Array: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint16"];
        case Uint32Array: return is64bit ? _type__WEBPACK_IMPORTED_MODULE_6__["Uint64"] : _type__WEBPACK_IMPORTED_MODULE_6__["Uint32"];
        case _util_compat__WEBPACK_IMPORTED_MODULE_4__["BigUint64Array"]: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint64"];
        default: return null;
    }
};
/** @ignore */
const vectorTypeToDataType = (ctor, is64bit) => {
    switch (ctor) {
        case Int8Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Int8"];
        case Int16Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Int16"];
        case Int32Vector: return is64bit ? _type__WEBPACK_IMPORTED_MODULE_6__["Int64"] : _type__WEBPACK_IMPORTED_MODULE_6__["Int32"];
        case Int64Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Int64"];
        case Uint8Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint8"];
        case Uint16Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint16"];
        case Uint32Vector: return is64bit ? _type__WEBPACK_IMPORTED_MODULE_6__["Uint64"] : _type__WEBPACK_IMPORTED_MODULE_6__["Uint32"];
        case Uint64Vector: return _type__WEBPACK_IMPORTED_MODULE_6__["Uint64"];
        default: return null;
    }
};

//# sourceMappingURL=int.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/interval.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/apache-arrow/vector/interval.mjs ***!
  \*******************************************************/
/*! exports provided: IntervalVector, IntervalDayTimeVector, IntervalYearMonthVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalVector", function() { return IntervalVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalDayTimeVector", function() { return IntervalDayTimeVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalYearMonthVector", function() { return IntervalYearMonthVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class IntervalVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}
/** @ignore */
class IntervalDayTimeVector extends IntervalVector {
}
/** @ignore */
class IntervalYearMonthVector extends IntervalVector {
}

//# sourceMappingURL=interval.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/list.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/list.mjs ***!
  \***************************************************/
/*! exports provided: ListVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVector", function() { return ListVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class ListVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}

//# sourceMappingURL=list.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/map.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/vector/map.mjs ***!
  \**************************************************/
/*! exports provided: MapVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapVector", function() { return MapVector; });
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./node_modules/apache-arrow/vector/row.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class MapVector extends _base__WEBPACK_IMPORTED_MODULE_2__["BaseVector"] {
    asList() {
        const child = this.type.children[0];
        return _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"].new(this.data.clone(new _type__WEBPACK_IMPORTED_MODULE_3__["List"](child)));
    }
    bind(index) {
        const child = this.getChildAt(0);
        const { [index]: begin, [index + 1]: end } = this.valueOffsets;
        return new _row__WEBPACK_IMPORTED_MODULE_0__["MapRow"](child.slice(begin, end));
    }
}

//# sourceMappingURL=map.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/null.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/null.mjs ***!
  \***************************************************/
/*! exports provided: NullVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullVector", function() { return NullVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class NullVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}

//# sourceMappingURL=null.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/row.mjs":
/*!**************************************************!*\
  !*** ./node_modules/apache-arrow/vector/row.mjs ***!
  \**************************************************/
/*! exports provided: MapRow, StructRow */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRow", function() { return MapRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructRow", function() { return StructRow; });
/* harmony import */ var _util_pretty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pretty */ "./node_modules/apache-arrow/util/pretty.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */ const kParent = Symbol.for('parent');
/** @ignore */ const kRowIndex = Symbol.for('rowIndex');
/** @ignore */ const kKeyToIdx = Symbol.for('keyToIdx');
/** @ignore */ const kIdxToVal = Symbol.for('idxToVal');
/** @ignore */ const kCustomInspect = Symbol.for('nodejs.util.inspect.custom');
class Row {
    constructor(parent, numKeys) {
        this[kParent] = parent;
        this.size = numKeys;
    }
    entries() { return this[Symbol.iterator](); }
    has(key) { return this.get(key) !== undefined; }
    get(key) {
        let val = undefined;
        if (key !== null && key !== undefined) {
            const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
            let idx = ktoi.get(key);
            if (idx !== undefined) {
                const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
                ((val = itov[idx]) !== undefined) || (itov[idx] = val = this.getValue(idx));
            }
            else if ((idx = this.getIndex(key)) > -1) {
                ktoi.set(key, idx);
                const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
                ((val = itov[idx]) !== undefined) || (itov[idx] = val = this.getValue(idx));
            }
        }
        return val;
    }
    set(key, val) {
        if (key !== null && key !== undefined) {
            const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
            let idx = ktoi.get(key);
            if (idx === undefined) {
                ktoi.set(key, idx = this.getIndex(key));
            }
            if (idx > -1) {
                const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
                itov[idx] = this.setValue(idx, val);
            }
        }
        return this;
    }
    clear() { throw new Error(`Clearing ${this[Symbol.toStringTag]} not supported.`); }
    delete(_) { throw new Error(`Deleting ${this[Symbol.toStringTag]} values not supported.`); }
    *[Symbol.iterator]() {
        const ki = this.keys();
        const vi = this.values();
        const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
        const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
        for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
            k = kr.value;
            v = vr.value;
            itov[i] = v;
            ktoi.has(k) || ktoi.set(k, i);
            yield [k, v];
        }
    }
    forEach(callbackfn, thisArg) {
        const ki = this.keys();
        const vi = this.values();
        const callback = thisArg === undefined ? callbackfn :
            (v, k, m) => callbackfn.call(thisArg, v, k, m);
        const ktoi = this[kKeyToIdx] || (this[kKeyToIdx] = new Map());
        const itov = this[kIdxToVal] || (this[kIdxToVal] = new Array(this.size));
        for (let k, v, i = 0, kr, vr; !((kr = ki.next()).done || (vr = vi.next()).done); ++i) {
            k = kr.value;
            v = vr.value;
            itov[i] = v;
            ktoi.has(k) || ktoi.set(k, i);
            callback(v, k, this);
        }
    }
    toArray() { return [...this.values()]; }
    toJSON() {
        const obj = {};
        this.forEach((val, key) => obj[key] = val);
        return obj;
    }
    inspect() { return this.toString(); }
    [kCustomInspect]() { return this.toString(); }
    toString() {
        const str = [];
        this.forEach((val, key) => {
            key = Object(_util_pretty__WEBPACK_IMPORTED_MODULE_0__["valueToString"])(key);
            val = Object(_util_pretty__WEBPACK_IMPORTED_MODULE_0__["valueToString"])(val);
            str.push(`${key}: ${val}`);
        });
        return `{ ${str.join(', ')} }`;
    }
}
Row[Symbol.toStringTag] = ((proto) => {
    Object.defineProperties(proto, {
        'size': { writable: true, enumerable: false, configurable: false, value: 0 },
        [kParent]: { writable: true, enumerable: false, configurable: false, value: null },
        [kRowIndex]: { writable: true, enumerable: false, configurable: false, value: -1 },
    });
    return proto[Symbol.toStringTag] = 'Row';
})(Row.prototype);
class MapRow extends Row {
    constructor(slice) {
        super(slice, slice.length);
        return createRowProxy(this);
    }
    keys() {
        return this[kParent].getChildAt(0)[Symbol.iterator]();
    }
    values() {
        return this[kParent].getChildAt(1)[Symbol.iterator]();
    }
    getKey(idx) {
        return this[kParent].getChildAt(0).get(idx);
    }
    getIndex(key) {
        return this[kParent].getChildAt(0).indexOf(key);
    }
    getValue(index) {
        return this[kParent].getChildAt(1).get(index);
    }
    setValue(index, value) {
        this[kParent].getChildAt(1).set(index, value);
    }
}
class StructRow extends Row {
    constructor(parent) {
        super(parent, parent.type.children.length);
        return defineRowProxyProperties(this);
    }
    *keys() {
        for (const field of this[kParent].type.children) {
            yield field.name;
        }
    }
    *values() {
        for (const field of this[kParent].type.children) {
            yield this[field.name];
        }
    }
    getKey(idx) {
        return this[kParent].type.children[idx].name;
    }
    getIndex(key) {
        return this[kParent].type.children.findIndex((f) => f.name === key);
    }
    getValue(index) {
        return this[kParent].getChildAt(index).get(this[kRowIndex]);
    }
    setValue(index, value) {
        return this[kParent].getChildAt(index).set(this[kRowIndex], value);
    }
}
Object.setPrototypeOf(Row.prototype, Map.prototype);
/** @ignore */
const defineRowProxyProperties = (() => {
    const desc = { enumerable: true, configurable: false, get: null, set: null };
    return (row) => {
        let idx = -1, ktoi = row[kKeyToIdx] || (row[kKeyToIdx] = new Map());
        const getter = (key) => function () { return this.get(key); };
        const setter = (key) => function (val) { return this.set(key, val); };
        for (const key of row.keys()) {
            ktoi.set(key, ++idx);
            desc.get = getter(key);
            desc.set = setter(key);
            row.hasOwnProperty(key) || (desc.enumerable = true, Object.defineProperty(row, key, desc));
            row.hasOwnProperty(idx) || (desc.enumerable = false, Object.defineProperty(row, idx, desc));
        }
        desc.get = desc.set = null;
        return row;
    };
})();
/** @ignore */
const createRowProxy = (() => {
    if (typeof Proxy === 'undefined') {
        return defineRowProxyProperties;
    }
    const has = Row.prototype.has;
    const get = Row.prototype.get;
    const set = Row.prototype.set;
    const getKey = Row.prototype.getKey;
    const RowProxyHandler = {
        isExtensible() { return false; },
        deleteProperty() { return false; },
        preventExtensions() { return true; },
        ownKeys(row) { return [...row.keys()].map((x) => `${x}`); },
        has(row, key) {
            switch (key) {
                case 'getKey':
                case 'getIndex':
                case 'getValue':
                case 'setValue':
                case 'toArray':
                case 'toJSON':
                case 'inspect':
                case 'constructor':
                case 'isPrototypeOf':
                case 'propertyIsEnumerable':
                case 'toString':
                case 'toLocaleString':
                case 'valueOf':
                case 'size':
                case 'has':
                case 'get':
                case 'set':
                case 'clear':
                case 'delete':
                case 'keys':
                case 'values':
                case 'entries':
                case 'forEach':
                case '__proto__':
                case '__defineGetter__':
                case '__defineSetter__':
                case 'hasOwnProperty':
                case '__lookupGetter__':
                case '__lookupSetter__':
                case Symbol.iterator:
                case Symbol.toStringTag:
                case kParent:
                case kRowIndex:
                case kIdxToVal:
                case kKeyToIdx:
                case kCustomInspect:
                    return true;
            }
            if (typeof key === 'number' && !row.has(key)) {
                key = row.getKey(key);
            }
            return row.has(key);
        },
        get(row, key, receiver) {
            switch (key) {
                case 'getKey':
                case 'getIndex':
                case 'getValue':
                case 'setValue':
                case 'toArray':
                case 'toJSON':
                case 'inspect':
                case 'constructor':
                case 'isPrototypeOf':
                case 'propertyIsEnumerable':
                case 'toString':
                case 'toLocaleString':
                case 'valueOf':
                case 'size':
                case 'has':
                case 'get':
                case 'set':
                case 'clear':
                case 'delete':
                case 'keys':
                case 'values':
                case 'entries':
                case 'forEach':
                case '__proto__':
                case '__defineGetter__':
                case '__defineSetter__':
                case 'hasOwnProperty':
                case '__lookupGetter__':
                case '__lookupSetter__':
                case Symbol.iterator:
                case Symbol.toStringTag:
                case kParent:
                case kRowIndex:
                case kIdxToVal:
                case kKeyToIdx:
                case kCustomInspect:
                    return Reflect.get(row, key, receiver);
            }
            if (typeof key === 'number' && !has.call(receiver, key)) {
                key = getKey.call(receiver, key);
            }
            return get.call(receiver, key);
        },
        set(row, key, val, receiver) {
            switch (key) {
                case kParent:
                case kRowIndex:
                case kIdxToVal:
                case kKeyToIdx:
                    return Reflect.set(row, key, val, receiver);
                case 'getKey':
                case 'getIndex':
                case 'getValue':
                case 'setValue':
                case 'toArray':
                case 'toJSON':
                case 'inspect':
                case 'constructor':
                case 'isPrototypeOf':
                case 'propertyIsEnumerable':
                case 'toString':
                case 'toLocaleString':
                case 'valueOf':
                case 'size':
                case 'has':
                case 'get':
                case 'set':
                case 'clear':
                case 'delete':
                case 'keys':
                case 'values':
                case 'entries':
                case 'forEach':
                case '__proto__':
                case '__defineGetter__':
                case '__defineSetter__':
                case 'hasOwnProperty':
                case '__lookupGetter__':
                case '__lookupSetter__':
                case Symbol.iterator:
                case Symbol.toStringTag:
                    return false;
            }
            if (typeof key === 'number' && !has.call(receiver, key)) {
                key = getKey.call(receiver, key);
            }
            return has.call(receiver, key) ? !!set.call(receiver, key, val) : false;
        },
    };
    return (row) => new Proxy(row, RowProxyHandler);
})();

//# sourceMappingURL=row.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/struct.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/apache-arrow/vector/struct.mjs ***!
  \*****************************************************/
/*! exports provided: StructVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructVector", function() { return StructVector; });
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "./node_modules/apache-arrow/vector/row.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */ const kRowIndex = Symbol.for('rowIndex');
/** @ignore */
class StructVector extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"] {
    bind(index) {
        const proto = this._row || (this._row = new _row__WEBPACK_IMPORTED_MODULE_0__["StructRow"](this));
        const bound = Object.create(proto);
        bound[kRowIndex] = index;
        return bound;
    }
}

//# sourceMappingURL=struct.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/time.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/time.mjs ***!
  \***************************************************/
/*! exports provided: TimeVector, TimeSecondVector, TimeMillisecondVector, TimeMicrosecondVector, TimeNanosecondVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeVector", function() { return TimeVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSecondVector", function() { return TimeSecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMillisecondVector", function() { return TimeMillisecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeMicrosecondVector", function() { return TimeMicrosecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeNanosecondVector", function() { return TimeNanosecondVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class TimeVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}
/** @ignore */
class TimeSecondVector extends TimeVector {
}
/** @ignore */
class TimeMillisecondVector extends TimeVector {
}
/** @ignore */
class TimeMicrosecondVector extends TimeVector {
}
/** @ignore */
class TimeNanosecondVector extends TimeVector {
}

//# sourceMappingURL=time.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/timestamp.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/vector/timestamp.mjs ***!
  \********************************************************/
/*! exports provided: TimestampVector, TimestampSecondVector, TimestampMillisecondVector, TimestampMicrosecondVector, TimestampNanosecondVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampVector", function() { return TimestampVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampSecondVector", function() { return TimestampSecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMillisecondVector", function() { return TimestampMillisecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampMicrosecondVector", function() { return TimestampMicrosecondVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampNanosecondVector", function() { return TimestampNanosecondVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class TimestampVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
}
/** @ignore */
class TimestampSecondVector extends TimestampVector {
}
/** @ignore */
class TimestampMillisecondVector extends TimestampVector {
}
/** @ignore */
class TimestampMicrosecondVector extends TimestampVector {
}
/** @ignore */
class TimestampNanosecondVector extends TimestampVector {
}

//# sourceMappingURL=timestamp.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/union.mjs":
/*!****************************************************!*\
  !*** ./node_modules/apache-arrow/vector/union.mjs ***!
  \****************************************************/
/*! exports provided: UnionVector, DenseUnionVector, SparseUnionVector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionVector", function() { return UnionVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenseUnionVector", function() { return DenseUnionVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparseUnionVector", function() { return SparseUnionVector; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class UnionVector extends _base__WEBPACK_IMPORTED_MODULE_0__["BaseVector"] {
    get typeIdToChildIndex() { return this.data.type.typeIdToChildIndex; }
}
/** @ignore */
class DenseUnionVector extends UnionVector {
    get valueOffsets() { return this.data.valueOffsets; }
}
/** @ignore */
class SparseUnionVector extends UnionVector {
}

//# sourceMappingURL=union.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/vector/utf8.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/vector/utf8.mjs ***!
  \***************************************************/
/*! exports provided: Utf8Vector */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf8Vector", function() { return Utf8Vector; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/apache-arrow/vector/base.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./node_modules/apache-arrow/vector/index.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class Utf8Vector extends _base__WEBPACK_IMPORTED_MODULE_1__["BaseVector"] {
    /** @nocollapse */
    static from(input) {
        return Object(_index__WEBPACK_IMPORTED_MODULE_3__["vectorFromValuesWithType"])(() => new _type__WEBPACK_IMPORTED_MODULE_2__["Utf8"](), input);
    }
    asBinary() {
        return _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"].new(this.data.clone(new _type__WEBPACK_IMPORTED_MODULE_2__["Binary"]()));
    }
}

//# sourceMappingURL=utf8.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor.mjs":
/*!***********************************************!*\
  !*** ./node_modules/apache-arrow/visitor.mjs ***!
  \***********************************************/
/*! exports provided: Visitor */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return Visitor; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




class Visitor {
    visitMany(nodes, ...args) {
        return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
    }
    visit(...args) {
        return this.getVisitFn(args[0], false).apply(this, args);
    }
    getVisitFn(node, throwIfNotFound = true) {
        return getVisitFn(this, node, throwIfNotFound);
    }
    visitNull(_node, ..._args) { return null; }
    visitBool(_node, ..._args) { return null; }
    visitInt(_node, ..._args) { return null; }
    visitFloat(_node, ..._args) { return null; }
    visitUtf8(_node, ..._args) { return null; }
    visitBinary(_node, ..._args) { return null; }
    visitFixedSizeBinary(_node, ..._args) { return null; }
    visitDate(_node, ..._args) { return null; }
    visitTimestamp(_node, ..._args) { return null; }
    visitTime(_node, ..._args) { return null; }
    visitDecimal(_node, ..._args) { return null; }
    visitList(_node, ..._args) { return null; }
    visitStruct(_node, ..._args) { return null; }
    visitUnion(_node, ..._args) { return null; }
    visitDictionary(_node, ..._args) { return null; }
    visitInterval(_node, ..._args) { return null; }
    visitFixedSizeList(_node, ..._args) { return null; }
    visitMap(_node, ..._args) { return null; }
}
/** @ignore */
function getVisitFn(visitor, node, throwIfNotFound = true) {
    let fn = null;
    let dtype = _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].NONE;
    // tslint:disable
    if (node instanceof _data__WEBPACK_IMPORTED_MODULE_0__["Data"]) {
        dtype = inferDType(node.type);
    }
    else if (node instanceof _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]) {
        dtype = inferDType(node.type);
    }
    else if (node instanceof _type__WEBPACK_IMPORTED_MODULE_3__["DataType"]) {
        dtype = inferDType(node);
    }
    else if (typeof (dtype = node) !== 'number') {
        dtype = _enum__WEBPACK_IMPORTED_MODULE_2__["Type"][node];
    }
    switch (dtype) {
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Null:
            fn = visitor.visitNull;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Bool:
            fn = visitor.visitBool;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int:
            fn = visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int8:
            fn = visitor.visitInt8 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int16:
            fn = visitor.visitInt16 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int32:
            fn = visitor.visitInt32 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int64:
            fn = visitor.visitInt64 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint8:
            fn = visitor.visitUint8 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint16:
            fn = visitor.visitUint16 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint32:
            fn = visitor.visitUint32 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint64:
            fn = visitor.visitUint64 || visitor.visitInt;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float:
            fn = visitor.visitFloat;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float16:
            fn = visitor.visitFloat16 || visitor.visitFloat;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float32:
            fn = visitor.visitFloat32 || visitor.visitFloat;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float64:
            fn = visitor.visitFloat64 || visitor.visitFloat;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Utf8:
            fn = visitor.visitUtf8;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Binary:
            fn = visitor.visitBinary;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeBinary:
            fn = visitor.visitFixedSizeBinary;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Date:
            fn = visitor.visitDate;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DateDay:
            fn = visitor.visitDateDay || visitor.visitDate;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DateMillisecond:
            fn = visitor.visitDateMillisecond || visitor.visitDate;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Timestamp:
            fn = visitor.visitTimestamp;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampSecond:
            fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampMillisecond:
            fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampMicrosecond:
            fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampNanosecond:
            fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Time:
            fn = visitor.visitTime;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeSecond:
            fn = visitor.visitTimeSecond || visitor.visitTime;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeMillisecond:
            fn = visitor.visitTimeMillisecond || visitor.visitTime;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeMicrosecond:
            fn = visitor.visitTimeMicrosecond || visitor.visitTime;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeNanosecond:
            fn = visitor.visitTimeNanosecond || visitor.visitTime;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Decimal:
            fn = visitor.visitDecimal;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].List:
            fn = visitor.visitList;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Struct:
            fn = visitor.visitStruct;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Union:
            fn = visitor.visitUnion;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DenseUnion:
            fn = visitor.visitDenseUnion || visitor.visitUnion;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].SparseUnion:
            fn = visitor.visitSparseUnion || visitor.visitUnion;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Dictionary:
            fn = visitor.visitDictionary;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Interval:
            fn = visitor.visitInterval;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].IntervalDayTime:
            fn = visitor.visitIntervalDayTime || visitor.visitInterval;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].IntervalYearMonth:
            fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeList:
            fn = visitor.visitFixedSizeList;
            break;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Map:
            fn = visitor.visitMap;
            break;
    }
    if (typeof fn === 'function')
        return fn;
    if (!throwIfNotFound)
        return () => null;
    throw new Error(`Unrecognized type '${_enum__WEBPACK_IMPORTED_MODULE_2__["Type"][dtype]}'`);
}
/** @ignore */
function inferDType(type) {
    switch (type.typeId) {
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Null: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Null;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int:
            const { bitWidth, isSigned } = type;
            switch (bitWidth) {
                case 8: return isSigned ? _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int8 : _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint8;
                case 16: return isSigned ? _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int16 : _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint16;
                case 32: return isSigned ? _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int32 : _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint32;
                case 64: return isSigned ? _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int64 : _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Uint64;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Int;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float:
            switch (type.precision) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["Precision"].HALF: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float16;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["Precision"].SINGLE: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float32;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["Precision"].DOUBLE: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float64;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Float;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Binary: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Binary;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Utf8: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Utf8;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Bool: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Bool;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Decimal: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Decimal;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Time:
            switch (type.unit) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].SECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeSecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].MILLISECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeMillisecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].MICROSECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeMicrosecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].NANOSECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimeNanosecond;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Time;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Timestamp:
            switch (type.unit) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].SECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampSecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].MILLISECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampMillisecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].MICROSECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampMicrosecond;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["TimeUnit"].NANOSECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].TimestampNanosecond;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Timestamp;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Date:
            switch (type.unit) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["DateUnit"].DAY: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DateDay;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["DateUnit"].MILLISECOND: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DateMillisecond;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Date;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Interval:
            switch (type.unit) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["IntervalUnit"].DAY_TIME: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].IntervalDayTime;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["IntervalUnit"].YEAR_MONTH: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].IntervalYearMonth;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Interval;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Map: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Map;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].List: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].List;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Struct: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Struct;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Union:
            switch (type.mode) {
                case _enum__WEBPACK_IMPORTED_MODULE_2__["UnionMode"].Dense: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].DenseUnion;
                case _enum__WEBPACK_IMPORTED_MODULE_2__["UnionMode"].Sparse: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].SparseUnion;
            }
            return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Union;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeBinary: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeBinary;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeList: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].FixedSizeList;
        case _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Dictionary: return _enum__WEBPACK_IMPORTED_MODULE_2__["Type"].Dictionary;
    }
    throw new Error(`Unrecognized type '${_enum__WEBPACK_IMPORTED_MODULE_2__["Type"][type.typeId]}'`);
}
// Add these here so they're picked up by the externs creator
// in the build, and closure-compiler doesn't minify them away
Visitor.prototype.visitInt8 = null;
Visitor.prototype.visitInt16 = null;
Visitor.prototype.visitInt32 = null;
Visitor.prototype.visitInt64 = null;
Visitor.prototype.visitUint8 = null;
Visitor.prototype.visitUint16 = null;
Visitor.prototype.visitUint32 = null;
Visitor.prototype.visitUint64 = null;
Visitor.prototype.visitFloat16 = null;
Visitor.prototype.visitFloat32 = null;
Visitor.prototype.visitFloat64 = null;
Visitor.prototype.visitDateDay = null;
Visitor.prototype.visitDateMillisecond = null;
Visitor.prototype.visitTimestampSecond = null;
Visitor.prototype.visitTimestampMillisecond = null;
Visitor.prototype.visitTimestampMicrosecond = null;
Visitor.prototype.visitTimestampNanosecond = null;
Visitor.prototype.visitTimeSecond = null;
Visitor.prototype.visitTimeMillisecond = null;
Visitor.prototype.visitTimeMicrosecond = null;
Visitor.prototype.visitTimeNanosecond = null;
Visitor.prototype.visitDenseUnion = null;
Visitor.prototype.visitSparseUnion = null;
Visitor.prototype.visitIntervalDayTime = null;
Visitor.prototype.visitIntervalYearMonth = null;

//# sourceMappingURL=visitor.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/builderctor.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/builderctor.mjs ***!
  \***********************************************************/
/*! exports provided: GetBuilderCtor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBuilderCtor", function() { return GetBuilderCtor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _builder_binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builder/binary */ "./node_modules/apache-arrow/builder/binary.mjs");
/* harmony import */ var _builder_bool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder/bool */ "./node_modules/apache-arrow/builder/bool.mjs");
/* harmony import */ var _builder_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builder/date */ "./node_modules/apache-arrow/builder/date.mjs");
/* harmony import */ var _builder_decimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../builder/decimal */ "./node_modules/apache-arrow/builder/decimal.mjs");
/* harmony import */ var _builder_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../builder/dictionary */ "./node_modules/apache-arrow/builder/dictionary.mjs");
/* harmony import */ var _builder_fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../builder/fixedsizebinary */ "./node_modules/apache-arrow/builder/fixedsizebinary.mjs");
/* harmony import */ var _builder_fixedsizelist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../builder/fixedsizelist */ "./node_modules/apache-arrow/builder/fixedsizelist.mjs");
/* harmony import */ var _builder_float__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../builder/float */ "./node_modules/apache-arrow/builder/float.mjs");
/* harmony import */ var _builder_interval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../builder/interval */ "./node_modules/apache-arrow/builder/interval.mjs");
/* harmony import */ var _builder_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../builder/int */ "./node_modules/apache-arrow/builder/int.mjs");
/* harmony import */ var _builder_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../builder/list */ "./node_modules/apache-arrow/builder/list.mjs");
/* harmony import */ var _builder_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../builder/map */ "./node_modules/apache-arrow/builder/map.mjs");
/* harmony import */ var _builder_null__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../builder/null */ "./node_modules/apache-arrow/builder/null.mjs");
/* harmony import */ var _builder_struct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../builder/struct */ "./node_modules/apache-arrow/builder/struct.mjs");
/* harmony import */ var _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../builder/timestamp */ "./node_modules/apache-arrow/builder/timestamp.mjs");
/* harmony import */ var _builder_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../builder/time */ "./node_modules/apache-arrow/builder/time.mjs");
/* harmony import */ var _builder_union__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../builder/union */ "./node_modules/apache-arrow/builder/union.mjs");
/* harmony import */ var _builder_utf8__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../builder/utf8 */ "./node_modules/apache-arrow/builder/utf8.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



















/** @ignore */
class GetBuilderCtor extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    visitNull() { return _builder_null__WEBPACK_IMPORTED_MODULE_13__["NullBuilder"]; }
    visitBool() { return _builder_bool__WEBPACK_IMPORTED_MODULE_2__["BoolBuilder"]; }
    visitInt() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["IntBuilder"]; }
    visitInt8() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Int8Builder"]; }
    visitInt16() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Int16Builder"]; }
    visitInt32() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Int32Builder"]; }
    visitInt64() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Int64Builder"]; }
    visitUint8() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Uint8Builder"]; }
    visitUint16() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Uint16Builder"]; }
    visitUint32() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Uint32Builder"]; }
    visitUint64() { return _builder_int__WEBPACK_IMPORTED_MODULE_10__["Uint64Builder"]; }
    visitFloat() { return _builder_float__WEBPACK_IMPORTED_MODULE_8__["FloatBuilder"]; }
    visitFloat16() { return _builder_float__WEBPACK_IMPORTED_MODULE_8__["Float16Builder"]; }
    visitFloat32() { return _builder_float__WEBPACK_IMPORTED_MODULE_8__["Float32Builder"]; }
    visitFloat64() { return _builder_float__WEBPACK_IMPORTED_MODULE_8__["Float64Builder"]; }
    visitUtf8() { return _builder_utf8__WEBPACK_IMPORTED_MODULE_18__["Utf8Builder"]; }
    visitBinary() { return _builder_binary__WEBPACK_IMPORTED_MODULE_1__["BinaryBuilder"]; }
    visitFixedSizeBinary() { return _builder_fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__["FixedSizeBinaryBuilder"]; }
    visitDate() { return _builder_date__WEBPACK_IMPORTED_MODULE_3__["DateBuilder"]; }
    visitDateDay() { return _builder_date__WEBPACK_IMPORTED_MODULE_3__["DateDayBuilder"]; }
    visitDateMillisecond() { return _builder_date__WEBPACK_IMPORTED_MODULE_3__["DateMillisecondBuilder"]; }
    visitTimestamp() { return _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampBuilder"]; }
    visitTimestampSecond() { return _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampSecondBuilder"]; }
    visitTimestampMillisecond() { return _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampMillisecondBuilder"]; }
    visitTimestampMicrosecond() { return _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampMicrosecondBuilder"]; }
    visitTimestampNanosecond() { return _builder_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampNanosecondBuilder"]; }
    visitTime() { return _builder_time__WEBPACK_IMPORTED_MODULE_16__["TimeBuilder"]; }
    visitTimeSecond() { return _builder_time__WEBPACK_IMPORTED_MODULE_16__["TimeSecondBuilder"]; }
    visitTimeMillisecond() { return _builder_time__WEBPACK_IMPORTED_MODULE_16__["TimeMillisecondBuilder"]; }
    visitTimeMicrosecond() { return _builder_time__WEBPACK_IMPORTED_MODULE_16__["TimeMicrosecondBuilder"]; }
    visitTimeNanosecond() { return _builder_time__WEBPACK_IMPORTED_MODULE_16__["TimeNanosecondBuilder"]; }
    visitDecimal() { return _builder_decimal__WEBPACK_IMPORTED_MODULE_4__["DecimalBuilder"]; }
    visitList() { return _builder_list__WEBPACK_IMPORTED_MODULE_11__["ListBuilder"]; }
    visitStruct() { return _builder_struct__WEBPACK_IMPORTED_MODULE_14__["StructBuilder"]; }
    visitUnion() { return _builder_union__WEBPACK_IMPORTED_MODULE_17__["UnionBuilder"]; }
    visitDenseUnion() { return _builder_union__WEBPACK_IMPORTED_MODULE_17__["DenseUnionBuilder"]; }
    visitSparseUnion() { return _builder_union__WEBPACK_IMPORTED_MODULE_17__["SparseUnionBuilder"]; }
    visitDictionary() { return _builder_dictionary__WEBPACK_IMPORTED_MODULE_5__["DictionaryBuilder"]; }
    visitInterval() { return _builder_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalBuilder"]; }
    visitIntervalDayTime() { return _builder_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalDayTimeBuilder"]; }
    visitIntervalYearMonth() { return _builder_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalYearMonthBuilder"]; }
    visitFixedSizeList() { return _builder_fixedsizelist__WEBPACK_IMPORTED_MODULE_7__["FixedSizeListBuilder"]; }
    visitMap() { return _builder_map__WEBPACK_IMPORTED_MODULE_12__["MapBuilder"]; }
}
/** @ignore */
const instance = new GetBuilderCtor();

//# sourceMappingURL=builderctor.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/bytewidth.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/bytewidth.mjs ***!
  \*********************************************************/
/*! exports provided: ByteWidthVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteWidthVisitor", function() { return ByteWidthVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* istanbul ignore file */


/** @ignore */ const sum = (x, y) => x + y;
/** @ignore */ const variableWidthColumnErrorMessage = (type) => `Cannot compute the byte width of variable-width column ${type}`;
/** @ignore */
class ByteWidthVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    visitNull(____) { return 0; }
    visitInt(type) { return type.bitWidth / 8; }
    visitFloat(type) { return type.ArrayType.BYTES_PER_ELEMENT; }
    visitBinary(type) { throw new Error(variableWidthColumnErrorMessage(type)); }
    visitUtf8(type) { throw new Error(variableWidthColumnErrorMessage(type)); }
    visitBool(____) { return 1 / 8; }
    visitDecimal(____) { return 16; }
    visitDate(type) { return (type.unit + 1) * 4; }
    visitTime(type) { return type.bitWidth / 8; }
    visitTimestamp(type) { return type.unit === _enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"].SECOND ? 4 : 8; }
    visitInterval(type) { return (type.unit + 1) * 4; }
    visitList(type) { throw new Error(variableWidthColumnErrorMessage(type)); }
    visitStruct(type) { return this.visitFields(type.children).reduce(sum, 0); }
    visitUnion(type) { return this.visitFields(type.children).reduce(sum, 0); }
    visitFixedSizeBinary(type) { return type.byteWidth; }
    visitFixedSizeList(type) { return type.listSize * this.visitFields(type.children).reduce(sum, 0); }
    visitMap(type) { return this.visitFields(type.children).reduce(sum, 0); }
    visitDictionary(type) { return this.visit(type.indices); }
    visitFields(fields) { return (fields || []).map((field) => this.visit(field.type)); }
    visitSchema(schema) { return this.visitFields(schema.fields).reduce(sum, 0); }
}
/** @ignore */
const instance = new ByteWidthVisitor();

//# sourceMappingURL=bytewidth.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/get.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/get.mjs ***!
  \***************************************************/
/*! exports provided: GetVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVisitor", function() { return GetVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _util_bn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/bn */ "./node_modules/apache-arrow/util/bn.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/math */ "./node_modules/apache-arrow/util/math.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.





/** @ignore */
class GetVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"] {
}
/** @ignore */ const epochDaysToMs = (data, index) => 86400000 * data[index];
/** @ignore */ const epochMillisecondsLongToMs = (data, index) => 4294967296 * (data[index + 1]) + (data[index] >>> 0);
/** @ignore */ const epochMicrosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1000) + ((data[index] >>> 0) / 1000);
/** @ignore */ const epochNanosecondsLongToMs = (data, index) => 4294967296 * (data[index + 1] / 1000000) + ((data[index] >>> 0) / 1000000);
/** @ignore */ const epochMillisecondsToDate = (epochMs) => new Date(epochMs);
/** @ignore */ const epochDaysToDate = (data, index) => epochMillisecondsToDate(epochDaysToMs(data, index));
/** @ignore */ const epochMillisecondsLongToDate = (data, index) => epochMillisecondsToDate(epochMillisecondsLongToMs(data, index));
/** @ignore */
const getNull = (_vector, _index) => null;
/** @ignore */
const getVariableWidthBytes = (values, valueOffsets, index) => {
    const { [index]: x, [index + 1]: y } = valueOffsets;
    return x != null && y != null ? values.subarray(x, y) : null;
};
/** @ignore */
const getBool = ({ offset, values }, index) => {
    const idx = offset + index;
    const byte = values[idx >> 3];
    return (byte & 1 << (idx % 8)) !== 0;
};
/** @ignore */
const getDateDay = ({ values }, index) => epochDaysToDate(values, index);
/** @ignore */
const getDateMillisecond = ({ values }, index) => epochMillisecondsLongToDate(values, index * 2);
/** @ignore */
const getNumeric = ({ stride, values }, index) => values[stride * index];
/** @ignore */
const getFloat16 = ({ stride, values }, index) => Object(_util_math__WEBPACK_IMPORTED_MODULE_3__["uint16ToFloat64"])(values[stride * index]);
/** @ignore */
const getBigInts = ({ stride, values, type }, index) => _util_bn__WEBPACK_IMPORTED_MODULE_0__["BN"].new(values.subarray(stride * index, stride * (index + 1)), type.isSigned);
/** @ignore */
const getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
/** @ignore */
const getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
/** @ignore */
const getUtf8 = ({ values, valueOffsets }, index) => {
    const bytes = getVariableWidthBytes(values, valueOffsets, index);
    return bytes !== null ? Object(_util_utf8__WEBPACK_IMPORTED_MODULE_2__["decodeUtf8"])(bytes) : null;
};
/* istanbul ignore next */
/** @ignore */
const getInt = (vector, index) => (vector.type.bitWidth < 64
    ? getNumeric(vector, index)
    : getBigInts(vector, index));
/* istanbul ignore next */
/** @ignore */
const getFloat = (vector, index) => (vector.type.precision !== _enum__WEBPACK_IMPORTED_MODULE_4__["Precision"].HALF
    ? getNumeric(vector, index)
    : getFloat16(vector, index));
/* istanbul ignore next */
/** @ignore */
const getDate = (vector, index) => (vector.type.unit === _enum__WEBPACK_IMPORTED_MODULE_4__["DateUnit"].DAY
    ? getDateDay(vector, index)
    : getDateMillisecond(vector, index));
/** @ignore */
const getTimestampSecond = ({ values }, index) => 1000 * epochMillisecondsLongToMs(values, index * 2);
/** @ignore */
const getTimestampMillisecond = ({ values }, index) => epochMillisecondsLongToMs(values, index * 2);
/** @ignore */
const getTimestampMicrosecond = ({ values }, index) => epochMicrosecondsLongToMs(values, index * 2);
/** @ignore */
const getTimestampNanosecond = ({ values }, index) => epochNanosecondsLongToMs(values, index * 2);
/* istanbul ignore next */
/** @ignore */
const getTimestamp = (vector, index) => {
    switch (vector.type.unit) {
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].SECOND: return getTimestampSecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].MILLISECOND: return getTimestampMillisecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].MICROSECOND: return getTimestampMicrosecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].NANOSECOND: return getTimestampNanosecond(vector, index);
    }
};
/** @ignore */
const getTimeSecond = ({ values, stride }, index) => values[stride * index];
/** @ignore */
const getTimeMillisecond = ({ values, stride }, index) => values[stride * index];
/** @ignore */
const getTimeMicrosecond = ({ values }, index) => _util_bn__WEBPACK_IMPORTED_MODULE_0__["BN"].signed(values.subarray(2 * index, 2 * (index + 1)));
/** @ignore */
const getTimeNanosecond = ({ values }, index) => _util_bn__WEBPACK_IMPORTED_MODULE_0__["BN"].signed(values.subarray(2 * index, 2 * (index + 1)));
/* istanbul ignore next */
/** @ignore */
const getTime = (vector, index) => {
    switch (vector.type.unit) {
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].SECOND: return getTimeSecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].MILLISECOND: return getTimeMillisecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].MICROSECOND: return getTimeMicrosecond(vector, index);
        case _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].NANOSECOND: return getTimeNanosecond(vector, index);
    }
};
/** @ignore */
const getDecimal = ({ values }, index) => _util_bn__WEBPACK_IMPORTED_MODULE_0__["BN"].decimal(values.subarray(4 * index, 4 * (index + 1)));
/** @ignore */
const getList = (vector, index) => {
    const child = vector.getChildAt(0), { valueOffsets, stride } = vector;
    return child.slice(valueOffsets[index * stride], valueOffsets[(index * stride) + 1]);
};
/** @ignore */
const getMap = (vector, index) => {
    return vector.bind(index);
};
/** @ignore */
const getStruct = (vector, index) => {
    return vector.bind(index);
};
/* istanbul ignore next */
/** @ignore */
const getUnion = (vector, index) => {
    return vector.type.mode === _enum__WEBPACK_IMPORTED_MODULE_4__["UnionMode"].Dense ?
        getDenseUnion(vector, index) :
        getSparseUnion(vector, index);
};
/** @ignore */
const getDenseUnion = (vector, index) => {
    const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
    const child = vector.getChildAt(childIndex);
    return child ? child.get(vector.valueOffsets[index]) : null;
};
/** @ignore */
const getSparseUnion = (vector, index) => {
    const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
    const child = vector.getChildAt(childIndex);
    return child ? child.get(index) : null;
};
/** @ignore */
const getDictionary = (vector, index) => {
    return vector.getValue(vector.getKey(index));
};
/* istanbul ignore next */
/** @ignore */
const getInterval = (vector, index) => (vector.type.unit === _enum__WEBPACK_IMPORTED_MODULE_4__["IntervalUnit"].DAY_TIME)
    ? getIntervalDayTime(vector, index)
    : getIntervalYearMonth(vector, index);
/** @ignore */
const getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
/** @ignore */
const getIntervalYearMonth = ({ values }, index) => {
    const interval = values[index];
    const int32s = new Int32Array(2);
    int32s[0] = interval / 12 | 0; /* years */
    int32s[1] = interval % 12 | 0; /* months */
    return int32s;
};
/** @ignore */
const getFixedSizeList = (vector, index) => {
    const child = vector.getChildAt(0), { stride } = vector;
    return child.slice(index * stride, (index + 1) * stride);
};
GetVisitor.prototype.visitNull = getNull;
GetVisitor.prototype.visitBool = getBool;
GetVisitor.prototype.visitInt = getInt;
GetVisitor.prototype.visitInt8 = getNumeric;
GetVisitor.prototype.visitInt16 = getNumeric;
GetVisitor.prototype.visitInt32 = getNumeric;
GetVisitor.prototype.visitInt64 = getBigInts;
GetVisitor.prototype.visitUint8 = getNumeric;
GetVisitor.prototype.visitUint16 = getNumeric;
GetVisitor.prototype.visitUint32 = getNumeric;
GetVisitor.prototype.visitUint64 = getBigInts;
GetVisitor.prototype.visitFloat = getFloat;
GetVisitor.prototype.visitFloat16 = getFloat16;
GetVisitor.prototype.visitFloat32 = getNumeric;
GetVisitor.prototype.visitFloat64 = getNumeric;
GetVisitor.prototype.visitUtf8 = getUtf8;
GetVisitor.prototype.visitBinary = getBinary;
GetVisitor.prototype.visitFixedSizeBinary = getFixedSizeBinary;
GetVisitor.prototype.visitDate = getDate;
GetVisitor.prototype.visitDateDay = getDateDay;
GetVisitor.prototype.visitDateMillisecond = getDateMillisecond;
GetVisitor.prototype.visitTimestamp = getTimestamp;
GetVisitor.prototype.visitTimestampSecond = getTimestampSecond;
GetVisitor.prototype.visitTimestampMillisecond = getTimestampMillisecond;
GetVisitor.prototype.visitTimestampMicrosecond = getTimestampMicrosecond;
GetVisitor.prototype.visitTimestampNanosecond = getTimestampNanosecond;
GetVisitor.prototype.visitTime = getTime;
GetVisitor.prototype.visitTimeSecond = getTimeSecond;
GetVisitor.prototype.visitTimeMillisecond = getTimeMillisecond;
GetVisitor.prototype.visitTimeMicrosecond = getTimeMicrosecond;
GetVisitor.prototype.visitTimeNanosecond = getTimeNanosecond;
GetVisitor.prototype.visitDecimal = getDecimal;
GetVisitor.prototype.visitList = getList;
GetVisitor.prototype.visitStruct = getStruct;
GetVisitor.prototype.visitUnion = getUnion;
GetVisitor.prototype.visitDenseUnion = getDenseUnion;
GetVisitor.prototype.visitSparseUnion = getSparseUnion;
GetVisitor.prototype.visitDictionary = getDictionary;
GetVisitor.prototype.visitInterval = getInterval;
GetVisitor.prototype.visitIntervalDayTime = getIntervalDayTime;
GetVisitor.prototype.visitIntervalYearMonth = getIntervalYearMonth;
GetVisitor.prototype.visitFixedSizeList = getFixedSizeList;
GetVisitor.prototype.visitMap = getMap;
/** @ignore */
const instance = new GetVisitor();

//# sourceMappingURL=get.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/indexof.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/indexof.mjs ***!
  \*******************************************************/
/*! exports provided: IndexOfVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexOfVisitor", function() { return IndexOfVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/vector */ "./node_modules/apache-arrow/util/vector.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class IndexOfVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
}
/** @ignore */
function nullIndexOf(vector, searchElement) {
    // if you're looking for nulls and the vector isn't empty, we've got 'em!
    return searchElement === null && vector.length > 0 ? 0 : -1;
}
/** @ignore */
function indexOfNull(vector, fromIndex) {
    const { nullBitmap } = vector;
    if (!nullBitmap || vector.nullCount <= 0) {
        return -1;
    }
    let i = 0;
    for (const isValid of Object(_util_bit__WEBPACK_IMPORTED_MODULE_1__["iterateBits"])(nullBitmap, vector.data.offset + (fromIndex || 0), vector.length, nullBitmap, _util_bit__WEBPACK_IMPORTED_MODULE_1__["getBool"])) {
        if (!isValid) {
            return i;
        }
        ++i;
    }
    return -1;
}
/** @ignore */
function indexOfValue(vector, searchElement, fromIndex) {
    if (searchElement === undefined) {
        return -1;
    }
    if (searchElement === null) {
        return indexOfNull(vector, fromIndex);
    }
    const compare = Object(_util_vector__WEBPACK_IMPORTED_MODULE_2__["createElementComparator"])(searchElement);
    for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n;) {
        if (compare(vector.get(i))) {
            return i;
        }
    }
    return -1;
}
/** @ignore */
function indexOfUnion(vector, searchElement, fromIndex) {
    // Unions are special -- they do have a nullBitmap, but so can their children.
    // If the searchElement is null, we don't know whether it came from the Union's
    // bitmap or one of its childrens'. So we don't interrogate the Union's bitmap,
    // since that will report the wrong index if a child has a null before the Union.
    const compare = Object(_util_vector__WEBPACK_IMPORTED_MODULE_2__["createElementComparator"])(searchElement);
    for (let i = (fromIndex || 0) - 1, n = vector.length; ++i < n;) {
        if (compare(vector.get(i))) {
            return i;
        }
    }
    return -1;
}
IndexOfVisitor.prototype.visitNull = nullIndexOf;
IndexOfVisitor.prototype.visitBool = indexOfValue;
IndexOfVisitor.prototype.visitInt = indexOfValue;
IndexOfVisitor.prototype.visitInt8 = indexOfValue;
IndexOfVisitor.prototype.visitInt16 = indexOfValue;
IndexOfVisitor.prototype.visitInt32 = indexOfValue;
IndexOfVisitor.prototype.visitInt64 = indexOfValue;
IndexOfVisitor.prototype.visitUint8 = indexOfValue;
IndexOfVisitor.prototype.visitUint16 = indexOfValue;
IndexOfVisitor.prototype.visitUint32 = indexOfValue;
IndexOfVisitor.prototype.visitUint64 = indexOfValue;
IndexOfVisitor.prototype.visitFloat = indexOfValue;
IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
IndexOfVisitor.prototype.visitBinary = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
IndexOfVisitor.prototype.visitDate = indexOfValue;
IndexOfVisitor.prototype.visitDateDay = indexOfValue;
IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitTime = indexOfValue;
IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
IndexOfVisitor.prototype.visitDecimal = indexOfValue;
IndexOfVisitor.prototype.visitList = indexOfValue;
IndexOfVisitor.prototype.visitStruct = indexOfValue;
IndexOfVisitor.prototype.visitUnion = indexOfValue;
IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
IndexOfVisitor.prototype.visitDictionary = indexOfValue;
IndexOfVisitor.prototype.visitInterval = indexOfValue;
IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
IndexOfVisitor.prototype.visitMap = indexOfValue;
/** @ignore */
const instance = new IndexOfVisitor();

//# sourceMappingURL=indexof.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/iterator.mjs":
/*!********************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/iterator.mjs ***!
  \********************************************************/
/*! exports provided: IteratorVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorVisitor", function() { return IteratorVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get */ "./node_modules/apache-arrow/visitor/get.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.




/** @ignore */
class IteratorVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"] {
}
/** @ignore */
function nullableIterator(vector) {
    const getFn = _get__WEBPACK_IMPORTED_MODULE_3__["instance"].getVisitFn(vector);
    return Object(_util_bit__WEBPACK_IMPORTED_MODULE_2__["iterateBits"])(vector.nullBitmap, vector.offset, vector.length, vector, (vec, idx, nullByte, nullBit) => ((nullByte & 1 << nullBit) !== 0) ? getFn(vec, idx) : null);
}
/** @ignore */
function vectorIterator(vector) {
    // If nullable, iterate manually
    if (vector.nullCount > 0) {
        return nullableIterator(vector);
    }
    const { type, typeId, length } = vector;
    // Fast case, defer to native iterators if possible
    if (vector.stride === 1 && ((typeId === _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Timestamp) ||
        (typeId === _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Int && type.bitWidth !== 64) ||
        (typeId === _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Time && type.bitWidth !== 64) ||
        (typeId === _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Float && type.precision > 0 /* Precision.HALF */))) {
        return vector.values.subarray(0, length)[Symbol.iterator]();
    }
    // Otherwise, iterate manually
    return (function* (getFn) {
        for (let index = -1; ++index < length;) {
            yield getFn(vector, index);
        }
    })(_get__WEBPACK_IMPORTED_MODULE_3__["instance"].getVisitFn(vector));
}
IteratorVisitor.prototype.visitNull = vectorIterator;
IteratorVisitor.prototype.visitBool = vectorIterator;
IteratorVisitor.prototype.visitInt = vectorIterator;
IteratorVisitor.prototype.visitInt8 = vectorIterator;
IteratorVisitor.prototype.visitInt16 = vectorIterator;
IteratorVisitor.prototype.visitInt32 = vectorIterator;
IteratorVisitor.prototype.visitInt64 = vectorIterator;
IteratorVisitor.prototype.visitUint8 = vectorIterator;
IteratorVisitor.prototype.visitUint16 = vectorIterator;
IteratorVisitor.prototype.visitUint32 = vectorIterator;
IteratorVisitor.prototype.visitUint64 = vectorIterator;
IteratorVisitor.prototype.visitFloat = vectorIterator;
IteratorVisitor.prototype.visitFloat16 = vectorIterator;
IteratorVisitor.prototype.visitFloat32 = vectorIterator;
IteratorVisitor.prototype.visitFloat64 = vectorIterator;
IteratorVisitor.prototype.visitUtf8 = vectorIterator;
IteratorVisitor.prototype.visitBinary = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
IteratorVisitor.prototype.visitDate = vectorIterator;
IteratorVisitor.prototype.visitDateDay = vectorIterator;
IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestamp = vectorIterator;
IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
IteratorVisitor.prototype.visitTime = vectorIterator;
IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
IteratorVisitor.prototype.visitDecimal = vectorIterator;
IteratorVisitor.prototype.visitList = vectorIterator;
IteratorVisitor.prototype.visitStruct = vectorIterator;
IteratorVisitor.prototype.visitUnion = vectorIterator;
IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
IteratorVisitor.prototype.visitDictionary = vectorIterator;
IteratorVisitor.prototype.visitInterval = vectorIterator;
IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
IteratorVisitor.prototype.visitMap = vectorIterator;
/** @ignore */
const instance = new IteratorVisitor();

//# sourceMappingURL=iterator.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/jsontypeassembler.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/jsontypeassembler.mjs ***!
  \*****************************************************************/
/*! exports provided: JSONTypeAssembler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONTypeAssembler", function() { return JSONTypeAssembler; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.


/** @ignore */
class JSONTypeAssembler extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    visit(node) {
        return node == null ? undefined : super.visit(node);
    }
    visitNull({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitInt({ typeId, bitWidth, isSigned }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'bitWidth': bitWidth, 'isSigned': isSigned };
    }
    visitFloat({ typeId, precision }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'precision': _enum__WEBPACK_IMPORTED_MODULE_1__["Precision"][precision] };
    }
    visitBinary({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitBool({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitUtf8({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitDecimal({ typeId, scale, precision }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'scale': scale, 'precision': precision };
    }
    visitDate({ typeId, unit }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'unit': _enum__WEBPACK_IMPORTED_MODULE_1__["DateUnit"][unit] };
    }
    visitTime({ typeId, unit, bitWidth }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'unit': _enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"][unit], bitWidth };
    }
    visitTimestamp({ typeId, timezone, unit }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'unit': _enum__WEBPACK_IMPORTED_MODULE_1__["TimeUnit"][unit], timezone };
    }
    visitInterval({ typeId, unit }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'unit': _enum__WEBPACK_IMPORTED_MODULE_1__["IntervalUnit"][unit] };
    }
    visitList({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitStruct({ typeId }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase() };
    }
    visitUnion({ typeId, mode, typeIds }) {
        return {
            'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(),
            'mode': _enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"][mode],
            'typeIds': [...typeIds]
        };
    }
    visitDictionary(node) {
        return this.visit(node.dictionary);
    }
    visitFixedSizeBinary({ typeId, byteWidth }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'byteWidth': byteWidth };
    }
    visitFixedSizeList({ typeId, listSize }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'listSize': listSize };
    }
    visitMap({ typeId, keysSorted }) {
        return { 'name': _enum__WEBPACK_IMPORTED_MODULE_1__["ArrowType"][typeId].toLowerCase(), 'keysSorted': keysSorted };
    }
}

//# sourceMappingURL=jsontypeassembler.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/jsonvectorassembler.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/jsonvectorassembler.mjs ***!
  \*******************************************************************/
/*! exports provided: JSONVectorAssembler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONVectorAssembler", function() { return JSONVectorAssembler; });
/* harmony import */ var _util_bn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/bn */ "./node_modules/apache-arrow/util/bn.mjs");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../column */ "./node_modules/apache-arrow/column.mjs");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.










/** @ignore */
class JSONVectorAssembler extends _visitor__WEBPACK_IMPORTED_MODULE_3__["Visitor"] {
    /** @nocollapse */
    static assemble(...args) {
        return new JSONVectorAssembler().visitMany(Object(_util_args__WEBPACK_IMPORTED_MODULE_7__["selectColumnChildrenArgs"])(_recordbatch__WEBPACK_IMPORTED_MODULE_5__["RecordBatch"], args));
    }
    visit(column) {
        const { data, name, length } = column;
        const { offset, nullCount, nullBitmap } = data;
        const type = _type__WEBPACK_IMPORTED_MODULE_8__["DataType"].isDictionary(column.type) ? column.type.indices : column.type;
        const buffers = Object.assign([], data.buffers, { [_enum__WEBPACK_IMPORTED_MODULE_4__["BufferType"].VALIDITY]: undefined });
        return {
            'name': name,
            'count': length,
            'VALIDITY': _type__WEBPACK_IMPORTED_MODULE_8__["DataType"].isNull(type) ? undefined
                : nullCount <= 0 ? Array.from({ length }, () => 1)
                    : [...Object(_util_bit__WEBPACK_IMPORTED_MODULE_6__["iterateBits"])(nullBitmap, offset, length, null, _util_bit__WEBPACK_IMPORTED_MODULE_6__["getBit"])],
            ...super.visit(_vector__WEBPACK_IMPORTED_MODULE_2__["Vector"].new(data.clone(type, offset, length, 0, buffers)))
        };
    }
    visitNull() { return {}; }
    visitBool({ values, offset, length }) {
        return { 'DATA': [...Object(_util_bit__WEBPACK_IMPORTED_MODULE_6__["iterateBits"])(values, offset, length, null, _util_bit__WEBPACK_IMPORTED_MODULE_6__["getBool"])] };
    }
    visitInt(vector) {
        return {
            'DATA': vector.type.bitWidth < 64
                ? [...vector.values]
                : [...bigNumsToStrings(vector.values, 2)]
        };
    }
    visitFloat(vector) {
        return { 'DATA': [...vector.values] };
    }
    visitUtf8(vector) {
        return { 'DATA': [...vector], 'OFFSET': [...vector.valueOffsets] };
    }
    visitBinary(vector) {
        return { 'DATA': [...binaryToString(vector)], OFFSET: [...vector.valueOffsets] };
    }
    visitFixedSizeBinary(vector) {
        return { 'DATA': [...binaryToString(vector)] };
    }
    visitDate(vector) {
        return {
            'DATA': vector.type.unit === _enum__WEBPACK_IMPORTED_MODULE_4__["DateUnit"].DAY
                ? [...vector.values]
                : [...bigNumsToStrings(vector.values, 2)]
        };
    }
    visitTimestamp(vector) {
        return { 'DATA': [...bigNumsToStrings(vector.values, 2)] };
    }
    visitTime(vector) {
        return {
            'DATA': vector.type.unit < _enum__WEBPACK_IMPORTED_MODULE_4__["TimeUnit"].MICROSECOND
                ? [...vector.values]
                : [...bigNumsToStrings(vector.values, 2)]
        };
    }
    visitDecimal(vector) {
        return { 'DATA': [...bigNumsToStrings(vector.values, 4)] };
    }
    visitList(vector) {
        return {
            'OFFSET': [...vector.valueOffsets],
            'children': vector.type.children.map((f, i) => this.visit(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](f, [vector.getChildAt(i)])))
        };
    }
    visitStruct(vector) {
        return {
            'children': vector.type.children.map((f, i) => this.visit(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](f, [vector.getChildAt(i)])))
        };
    }
    visitUnion(vector) {
        return {
            'TYPE': [...vector.typeIds],
            'OFFSET': vector.type.mode === _enum__WEBPACK_IMPORTED_MODULE_4__["UnionMode"].Dense ? [...vector.valueOffsets] : undefined,
            'children': vector.type.children.map((f, i) => this.visit(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](f, [vector.getChildAt(i)])))
        };
    }
    visitInterval(vector) {
        return { 'DATA': [...vector.values] };
    }
    visitFixedSizeList(vector) {
        return {
            'children': vector.type.children.map((f, i) => this.visit(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](f, [vector.getChildAt(i)])))
        };
    }
    visitMap(vector) {
        return {
            'OFFSET': [...vector.valueOffsets],
            'children': vector.type.children.map((f, i) => this.visit(new _column__WEBPACK_IMPORTED_MODULE_1__["Column"](f, [vector.getChildAt(i)])))
        };
    }
}
/** @ignore */
function* binaryToString(vector) {
    for (const octets of vector) {
        yield octets.reduce((str, byte) => {
            return `${str}${('0' + (byte & 0xFF).toString(16)).slice(-2)}`;
        }, '').toUpperCase();
    }
}
/** @ignore */
function* bigNumsToStrings(values, stride) {
    for (let i = -1, n = values.length / stride; ++i < n;) {
        yield `${_util_bn__WEBPACK_IMPORTED_MODULE_0__["BN"].new(values.subarray((i + 0) * stride, (i + 1) * stride), false)}`;
    }
}

//# sourceMappingURL=jsonvectorassembler.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/set.mjs":
/*!***************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/set.mjs ***!
  \***************************************************/
/*! exports provided: SetVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetVisitor", function() { return SetVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector */ "./node_modules/apache-arrow/vector.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _util_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/math */ "./node_modules/apache-arrow/util/math.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.






/** @ignore */
class SetVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"] {
}
/** @ignore */
const setEpochMsToDays = (data, index, epochMs) => { data[index] = (epochMs / 86400000) | 0; };
/** @ignore */
const setEpochMsToMillisecondsLong = (data, index, epochMs) => {
    data[index] = (epochMs % 4294967296) | 0;
    data[index + 1] = (epochMs / 4294967296) | 0;
};
/** @ignore */
const setEpochMsToMicrosecondsLong = (data, index, epochMs) => {
    data[index] = ((epochMs * 1000) % 4294967296) | 0;
    data[index + 1] = ((epochMs * 1000) / 4294967296) | 0;
};
/** @ignore */
const setEpochMsToNanosecondsLong = (data, index, epochMs) => {
    data[index] = ((epochMs * 1000000) % 4294967296) | 0;
    data[index + 1] = ((epochMs * 1000000) / 4294967296) | 0;
};
/** @ignore */
const setVariableWidthBytes = (values, valueOffsets, index, value) => {
    const { [index]: x, [index + 1]: y } = valueOffsets;
    if (x != null && y != null) {
        values.set(value.subarray(0, y - x), x);
    }
};
/** @ignore */
const setBool = ({ offset, values }, index, val) => {
    const idx = offset + index;
    val ? (values[idx >> 3] |= (1 << (idx % 8))) // true
        : (values[idx >> 3] &= ~(1 << (idx % 8))); // false
};
/** @ignore */
const setDateDay = ({ values }, index, value) => { setEpochMsToDays(values, index, value.valueOf()); };
/** @ignore */
const setDateMillisecond = ({ values }, index, value) => { setEpochMsToMillisecondsLong(values, index * 2, value.valueOf()); };
/** @ignore */
const setNumeric = ({ stride, values }, index, value) => { values[stride * index] = value; };
/** @ignore */
const setFloat16 = ({ stride, values }, index, value) => { values[stride * index] = Object(_util_math__WEBPACK_IMPORTED_MODULE_3__["float64ToUint16"])(value); };
/** @ignore */
const setNumericX2 = (vector, index, value) => {
    switch (typeof value) {
        case 'bigint':
            vector.values64[index] = value;
            break;
        case 'number':
            vector.values[index * vector.stride] = value;
            break;
        default:
            const val = value;
            const { stride, ArrayType } = vector;
            const long = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_4__["toArrayBufferView"])(ArrayType, val);
            vector.values.set(long.subarray(0, stride), stride * index);
    }
};
/** @ignore */
const setFixedSizeBinary = ({ stride, values }, index, value) => { values.set(value.subarray(0, stride), stride * index); };
/** @ignore */
const setBinary = ({ values, valueOffsets }, index, value) => setVariableWidthBytes(values, valueOffsets, index, value);
/** @ignore */
const setUtf8 = ({ values, valueOffsets }, index, value) => {
    setVariableWidthBytes(values, valueOffsets, index, Object(_util_utf8__WEBPACK_IMPORTED_MODULE_2__["encodeUtf8"])(value));
};
/* istanbul ignore next */
/** @ignore */
const setInt = (vector, index, value) => {
    vector.type.bitWidth < 64
        ? setNumeric(vector, index, value)
        : setNumericX2(vector, index, value);
};
/* istanbul ignore next */
/** @ignore */
const setFloat = (vector, index, value) => {
    vector.type.precision !== _enum__WEBPACK_IMPORTED_MODULE_5__["Precision"].HALF
        ? setNumeric(vector, index, value)
        : setFloat16(vector, index, value);
};
/* istanbul ignore next */
const setDate = (vector, index, value) => {
    vector.type.unit === _enum__WEBPACK_IMPORTED_MODULE_5__["DateUnit"].DAY
        ? setDateDay(vector, index, value)
        : setDateMillisecond(vector, index, value);
};
/** @ignore */
const setTimestampSecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value / 1000);
/** @ignore */
const setTimestampMillisecond = ({ values }, index, value) => setEpochMsToMillisecondsLong(values, index * 2, value);
/** @ignore */
const setTimestampMicrosecond = ({ values }, index, value) => setEpochMsToMicrosecondsLong(values, index * 2, value);
/** @ignore */
const setTimestampNanosecond = ({ values }, index, value) => setEpochMsToNanosecondsLong(values, index * 2, value);
/* istanbul ignore next */
/** @ignore */
const setTimestamp = (vector, index, value) => {
    switch (vector.type.unit) {
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].SECOND: return setTimestampSecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].MILLISECOND: return setTimestampMillisecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].MICROSECOND: return setTimestampMicrosecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].NANOSECOND: return setTimestampNanosecond(vector, index, value);
    }
};
/** @ignore */
const setTimeSecond = ({ values, stride }, index, value) => { values[stride * index] = value; };
/** @ignore */
const setTimeMillisecond = ({ values, stride }, index, value) => { values[stride * index] = value; };
/** @ignore */
const setTimeMicrosecond = ({ values }, index, value) => { values.set(value.subarray(0, 2), 2 * index); };
/** @ignore */
const setTimeNanosecond = ({ values }, index, value) => { values.set(value.subarray(0, 2), 2 * index); };
/* istanbul ignore next */
/** @ignore */
const setTime = (vector, index, value) => {
    switch (vector.type.unit) {
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].SECOND: return setTimeSecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].MILLISECOND: return setTimeMillisecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].MICROSECOND: return setTimeMicrosecond(vector, index, value);
        case _enum__WEBPACK_IMPORTED_MODULE_5__["TimeUnit"].NANOSECOND: return setTimeNanosecond(vector, index, value);
    }
};
/** @ignore */
const setDecimal = ({ values }, index, value) => { values.set(value.subarray(0, 4), 4 * index); };
/** @ignore */
const setList = (vector, index, value) => {
    const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
    for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end;) {
        values.set(itr++, value.get(++idx));
    }
};
/** @ignore */
const setMap = (vector, index, value) => {
    const values = vector.getChildAt(0), valueOffsets = vector.valueOffsets;
    const entries = value instanceof Map ? [...value] : Object.entries(value);
    for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end;) {
        values.set(itr++, entries[++idx]);
    }
};
/** @ignore */ const _setStructArrayValue = (o, v) => (c, _, i) => c && c.set(o, v[i]);
/** @ignore */ const _setStructVectorValue = (o, v) => (c, _, i) => c && c.set(o, v.get(i));
/** @ignore */ const _setStructMapValue = (o, v) => (c, f, _) => c && c.set(o, v.get(f.name));
/** @ignore */ const _setStructObjectValue = (o, v) => (c, f, _) => c && c.set(o, v[f.name]);
/** @ignore */
const setStruct = (vector, index, value) => {
    const setValue = value instanceof Map ? _setStructMapValue(index, value) :
        value instanceof _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"] ? _setStructVectorValue(index, value) :
            Array.isArray(value) ? _setStructArrayValue(index, value) :
                _setStructObjectValue(index, value);
    vector.type.children.forEach((f, i) => setValue(vector.getChildAt(i), f, i));
};
/* istanbul ignore next */
/** @ignore */
const setUnion = (vector, index, value) => {
    vector.type.mode === _enum__WEBPACK_IMPORTED_MODULE_5__["UnionMode"].Dense ?
        setDenseUnion(vector, index, value) :
        setSparseUnion(vector, index, value);
};
/** @ignore */
const setDenseUnion = (vector, index, value) => {
    const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
    const child = vector.getChildAt(childIndex);
    child && child.set(vector.valueOffsets[index], value);
};
/** @ignore */
const setSparseUnion = (vector, index, value) => {
    const childIndex = vector.typeIdToChildIndex[vector.typeIds[index]];
    const child = vector.getChildAt(childIndex);
    child && child.set(index, value);
};
/** @ignore */
const setDictionary = (vector, index, value) => {
    const key = vector.getKey(index);
    if (key !== null) {
        vector.setValue(key, value);
    }
};
/* istanbul ignore next */
/** @ignore */
const setIntervalValue = (vector, index, value) => {
    (vector.type.unit === _enum__WEBPACK_IMPORTED_MODULE_5__["IntervalUnit"].DAY_TIME)
        ? setIntervalDayTime(vector, index, value)
        : setIntervalYearMonth(vector, index, value);
};
/** @ignore */
const setIntervalDayTime = ({ values }, index, value) => { values.set(value.subarray(0, 2), 2 * index); };
/** @ignore */
const setIntervalYearMonth = ({ values }, index, value) => { values[index] = (value[0] * 12) + (value[1] % 12); };
/** @ignore */
const setFixedSizeList = (vector, index, value) => {
    const child = vector.getChildAt(0), { stride } = vector;
    for (let idx = -1, offset = index * stride; ++idx < stride;) {
        child.set(offset + idx, value.get(idx));
    }
};
SetVisitor.prototype.visitBool = setBool;
SetVisitor.prototype.visitInt = setInt;
SetVisitor.prototype.visitInt8 = setNumeric;
SetVisitor.prototype.visitInt16 = setNumeric;
SetVisitor.prototype.visitInt32 = setNumeric;
SetVisitor.prototype.visitInt64 = setNumericX2;
SetVisitor.prototype.visitUint8 = setNumeric;
SetVisitor.prototype.visitUint16 = setNumeric;
SetVisitor.prototype.visitUint32 = setNumeric;
SetVisitor.prototype.visitUint64 = setNumericX2;
SetVisitor.prototype.visitFloat = setFloat;
SetVisitor.prototype.visitFloat16 = setFloat16;
SetVisitor.prototype.visitFloat32 = setNumeric;
SetVisitor.prototype.visitFloat64 = setNumeric;
SetVisitor.prototype.visitUtf8 = setUtf8;
SetVisitor.prototype.visitBinary = setBinary;
SetVisitor.prototype.visitFixedSizeBinary = setFixedSizeBinary;
SetVisitor.prototype.visitDate = setDate;
SetVisitor.prototype.visitDateDay = setDateDay;
SetVisitor.prototype.visitDateMillisecond = setDateMillisecond;
SetVisitor.prototype.visitTimestamp = setTimestamp;
SetVisitor.prototype.visitTimestampSecond = setTimestampSecond;
SetVisitor.prototype.visitTimestampMillisecond = setTimestampMillisecond;
SetVisitor.prototype.visitTimestampMicrosecond = setTimestampMicrosecond;
SetVisitor.prototype.visitTimestampNanosecond = setTimestampNanosecond;
SetVisitor.prototype.visitTime = setTime;
SetVisitor.prototype.visitTimeSecond = setTimeSecond;
SetVisitor.prototype.visitTimeMillisecond = setTimeMillisecond;
SetVisitor.prototype.visitTimeMicrosecond = setTimeMicrosecond;
SetVisitor.prototype.visitTimeNanosecond = setTimeNanosecond;
SetVisitor.prototype.visitDecimal = setDecimal;
SetVisitor.prototype.visitList = setList;
SetVisitor.prototype.visitStruct = setStruct;
SetVisitor.prototype.visitUnion = setUnion;
SetVisitor.prototype.visitDenseUnion = setDenseUnion;
SetVisitor.prototype.visitSparseUnion = setSparseUnion;
SetVisitor.prototype.visitDictionary = setDictionary;
SetVisitor.prototype.visitInterval = setIntervalValue;
SetVisitor.prototype.visitIntervalDayTime = setIntervalDayTime;
SetVisitor.prototype.visitIntervalYearMonth = setIntervalYearMonth;
SetVisitor.prototype.visitFixedSizeList = setFixedSizeList;
SetVisitor.prototype.visitMap = setMap;
/** @ignore */
const instance = new SetVisitor();

//# sourceMappingURL=set.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/toarray.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/toarray.mjs ***!
  \*******************************************************/
/*! exports provided: ToArrayVisitor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToArrayVisitor", function() { return ToArrayVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterator */ "./node_modules/apache-arrow/visitor/iterator.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



/** @ignore */
class ToArrayVisitor extends _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"] {
}
/** @ignore */
function arrayOfVector(vector) {
    const { type, length, stride } = vector;
    // Fast case, return subarray if possible
    switch (type.typeId) {
        case _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Int:
        case _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Float:
        case _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Decimal:
        case _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Time:
        case _enum__WEBPACK_IMPORTED_MODULE_0__["Type"].Timestamp:
            return vector.values.subarray(0, length * stride);
    }
    // Otherwise if not primitive, slow copy
    return [..._iterator__WEBPACK_IMPORTED_MODULE_2__["instance"].visit(vector)];
}
ToArrayVisitor.prototype.visitNull = arrayOfVector;
ToArrayVisitor.prototype.visitBool = arrayOfVector;
ToArrayVisitor.prototype.visitInt = arrayOfVector;
ToArrayVisitor.prototype.visitInt8 = arrayOfVector;
ToArrayVisitor.prototype.visitInt16 = arrayOfVector;
ToArrayVisitor.prototype.visitInt32 = arrayOfVector;
ToArrayVisitor.prototype.visitInt64 = arrayOfVector;
ToArrayVisitor.prototype.visitUint8 = arrayOfVector;
ToArrayVisitor.prototype.visitUint16 = arrayOfVector;
ToArrayVisitor.prototype.visitUint32 = arrayOfVector;
ToArrayVisitor.prototype.visitUint64 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat = arrayOfVector;
ToArrayVisitor.prototype.visitFloat16 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat32 = arrayOfVector;
ToArrayVisitor.prototype.visitFloat64 = arrayOfVector;
ToArrayVisitor.prototype.visitUtf8 = arrayOfVector;
ToArrayVisitor.prototype.visitBinary = arrayOfVector;
ToArrayVisitor.prototype.visitFixedSizeBinary = arrayOfVector;
ToArrayVisitor.prototype.visitDate = arrayOfVector;
ToArrayVisitor.prototype.visitDateDay = arrayOfVector;
ToArrayVisitor.prototype.visitDateMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestamp = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampSecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampMicrosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimestampNanosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTime = arrayOfVector;
ToArrayVisitor.prototype.visitTimeSecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeMillisecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeMicrosecond = arrayOfVector;
ToArrayVisitor.prototype.visitTimeNanosecond = arrayOfVector;
ToArrayVisitor.prototype.visitDecimal = arrayOfVector;
ToArrayVisitor.prototype.visitList = arrayOfVector;
ToArrayVisitor.prototype.visitStruct = arrayOfVector;
ToArrayVisitor.prototype.visitUnion = arrayOfVector;
ToArrayVisitor.prototype.visitDenseUnion = arrayOfVector;
ToArrayVisitor.prototype.visitSparseUnion = arrayOfVector;
ToArrayVisitor.prototype.visitDictionary = arrayOfVector;
ToArrayVisitor.prototype.visitInterval = arrayOfVector;
ToArrayVisitor.prototype.visitIntervalDayTime = arrayOfVector;
ToArrayVisitor.prototype.visitIntervalYearMonth = arrayOfVector;
ToArrayVisitor.prototype.visitFixedSizeList = arrayOfVector;
ToArrayVisitor.prototype.visitMap = arrayOfVector;
/** @ignore */
const instance = new ToArrayVisitor();

//# sourceMappingURL=toarray.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/typeassembler.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/typeassembler.mjs ***!
  \*************************************************************/
/*! exports provided: TypeAssembler, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAssembler", function() { return TypeAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var flatbuffers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatbuffers */ "./node_modules/flatbuffers/js/flatbuffers.mjs");
/* harmony import */ var _fb_Schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb/Schema */ "./node_modules/apache-arrow/fb/Schema.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

var Long = flatbuffers__WEBPACK_IMPORTED_MODULE_0__["flatbuffers"].Long;


var Null = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Null;
var Int = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Int;
var FloatingPoint = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FloatingPoint;
var Binary = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Binary;
var Bool = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Bool;
var Utf8 = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Utf8;
var Decimal = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Decimal;
var Date = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Date;
var Time = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Time;
var Timestamp = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Timestamp;
var Interval = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Interval;
var List = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.List;
var Struct = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Struct_;
var Union = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Union;
var DictionaryEncoding = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.DictionaryEncoding;
var FixedSizeBinary = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FixedSizeBinary;
var FixedSizeList = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.FixedSizeList;
var Map_ = _fb_Schema__WEBPACK_IMPORTED_MODULE_1__["org"].apache.arrow.flatbuf.Map;
/** @ignore */
class TypeAssembler extends _visitor__WEBPACK_IMPORTED_MODULE_2__["Visitor"] {
    visit(node, builder) {
        return (node == null || builder == null) ? undefined : super.visit(node, builder);
    }
    visitNull(_node, b) {
        Null.startNull(b);
        return Null.endNull(b);
    }
    visitInt(node, b) {
        Int.startInt(b);
        Int.addBitWidth(b, node.bitWidth);
        Int.addIsSigned(b, node.isSigned);
        return Int.endInt(b);
    }
    visitFloat(node, b) {
        FloatingPoint.startFloatingPoint(b);
        FloatingPoint.addPrecision(b, node.precision);
        return FloatingPoint.endFloatingPoint(b);
    }
    visitBinary(_node, b) {
        Binary.startBinary(b);
        return Binary.endBinary(b);
    }
    visitBool(_node, b) {
        Bool.startBool(b);
        return Bool.endBool(b);
    }
    visitUtf8(_node, b) {
        Utf8.startUtf8(b);
        return Utf8.endUtf8(b);
    }
    visitDecimal(node, b) {
        Decimal.startDecimal(b);
        Decimal.addScale(b, node.scale);
        Decimal.addPrecision(b, node.precision);
        return Decimal.endDecimal(b);
    }
    visitDate(node, b) {
        Date.startDate(b);
        Date.addUnit(b, node.unit);
        return Date.endDate(b);
    }
    visitTime(node, b) {
        Time.startTime(b);
        Time.addUnit(b, node.unit);
        Time.addBitWidth(b, node.bitWidth);
        return Time.endTime(b);
    }
    visitTimestamp(node, b) {
        const timezone = (node.timezone && b.createString(node.timezone)) || undefined;
        Timestamp.startTimestamp(b);
        Timestamp.addUnit(b, node.unit);
        if (timezone !== undefined) {
            Timestamp.addTimezone(b, timezone);
        }
        return Timestamp.endTimestamp(b);
    }
    visitInterval(node, b) {
        Interval.startInterval(b);
        Interval.addUnit(b, node.unit);
        return Interval.endInterval(b);
    }
    visitList(_node, b) {
        List.startList(b);
        return List.endList(b);
    }
    visitStruct(_node, b) {
        Struct.startStruct_(b);
        return Struct.endStruct_(b);
    }
    visitUnion(node, b) {
        Union.startTypeIdsVector(b, node.typeIds.length);
        const typeIds = Union.createTypeIdsVector(b, node.typeIds);
        Union.startUnion(b);
        Union.addMode(b, node.mode);
        Union.addTypeIds(b, typeIds);
        return Union.endUnion(b);
    }
    visitDictionary(node, b) {
        const indexType = this.visit(node.indices, b);
        DictionaryEncoding.startDictionaryEncoding(b);
        DictionaryEncoding.addId(b, new Long(node.id, 0));
        DictionaryEncoding.addIsOrdered(b, node.isOrdered);
        if (indexType !== undefined) {
            DictionaryEncoding.addIndexType(b, indexType);
        }
        return DictionaryEncoding.endDictionaryEncoding(b);
    }
    visitFixedSizeBinary(node, b) {
        FixedSizeBinary.startFixedSizeBinary(b);
        FixedSizeBinary.addByteWidth(b, node.byteWidth);
        return FixedSizeBinary.endFixedSizeBinary(b);
    }
    visitFixedSizeList(node, b) {
        FixedSizeList.startFixedSizeList(b);
        FixedSizeList.addListSize(b, node.listSize);
        return FixedSizeList.endFixedSizeList(b);
    }
    visitMap(node, b) {
        Map_.startMap(b);
        Map_.addKeysSorted(b, node.keysSorted);
        return Map_.endMap(b);
    }
}
/** @ignore */
const instance = new TypeAssembler();

//# sourceMappingURL=typeassembler.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/typecomparator.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/typecomparator.mjs ***!
  \**************************************************************/
/*! exports provided: TypeComparator, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComparator", function() { return TypeComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/** @ignore */
class TypeComparator extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    compareSchemas(schema, other) {
        return (schema === other) || (other instanceof schema.constructor &&
            instance.compareFields(schema.fields, other.fields));
    }
    compareFields(fields, others) {
        return (fields === others) || (Array.isArray(fields) &&
            Array.isArray(others) &&
            fields.length === others.length &&
            fields.every((f, i) => instance.compareField(f, others[i])));
    }
    compareField(field, other) {
        return (field === other) || (other instanceof field.constructor &&
            field.name === other.name &&
            field.nullable === other.nullable &&
            instance.visit(field.type, other.type));
    }
}
function compareConstructor(type, other) {
    return other instanceof type.constructor;
}
function compareAny(type, other) {
    return (type === other) || compareConstructor(type, other);
}
function compareInt(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.bitWidth === other.bitWidth &&
        type.isSigned === other.isSigned);
}
function compareFloat(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.precision === other.precision);
}
function compareFixedSizeBinary(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.byteWidth === other.byteWidth);
}
function compareDate(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.unit === other.unit);
}
function compareTimestamp(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.unit === other.unit &&
        type.timezone === other.timezone);
}
function compareTime(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.unit === other.unit &&
        type.bitWidth === other.bitWidth);
}
function compareList(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.children.length === other.children.length &&
        instance.compareFields(type.children, other.children));
}
function compareStruct(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.children.length === other.children.length &&
        instance.compareFields(type.children, other.children));
}
function compareUnion(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.mode === other.mode &&
        type.typeIds.every((x, i) => x === other.typeIds[i]) &&
        instance.compareFields(type.children, other.children));
}
function compareDictionary(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.id === other.id &&
        type.isOrdered === other.isOrdered &&
        instance.visit(type.indices, other.indices) &&
        instance.visit(type.dictionary, other.dictionary));
}
function compareInterval(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.unit === other.unit);
}
function compareFixedSizeList(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.listSize === other.listSize &&
        type.children.length === other.children.length &&
        instance.compareFields(type.children, other.children));
}
function compareMap(type, other) {
    return (type === other) || (compareConstructor(type, other) &&
        type.keysSorted === other.keysSorted &&
        type.children.length === other.children.length &&
        instance.compareFields(type.children, other.children));
}
TypeComparator.prototype.visitNull = compareAny;
TypeComparator.prototype.visitBool = compareAny;
TypeComparator.prototype.visitInt = compareInt;
TypeComparator.prototype.visitInt8 = compareInt;
TypeComparator.prototype.visitInt16 = compareInt;
TypeComparator.prototype.visitInt32 = compareInt;
TypeComparator.prototype.visitInt64 = compareInt;
TypeComparator.prototype.visitUint8 = compareInt;
TypeComparator.prototype.visitUint16 = compareInt;
TypeComparator.prototype.visitUint32 = compareInt;
TypeComparator.prototype.visitUint64 = compareInt;
TypeComparator.prototype.visitFloat = compareFloat;
TypeComparator.prototype.visitFloat16 = compareFloat;
TypeComparator.prototype.visitFloat32 = compareFloat;
TypeComparator.prototype.visitFloat64 = compareFloat;
TypeComparator.prototype.visitUtf8 = compareAny;
TypeComparator.prototype.visitBinary = compareAny;
TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
TypeComparator.prototype.visitDate = compareDate;
TypeComparator.prototype.visitDateDay = compareDate;
TypeComparator.prototype.visitDateMillisecond = compareDate;
TypeComparator.prototype.visitTimestamp = compareTimestamp;
TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
TypeComparator.prototype.visitTime = compareTime;
TypeComparator.prototype.visitTimeSecond = compareTime;
TypeComparator.prototype.visitTimeMillisecond = compareTime;
TypeComparator.prototype.visitTimeMicrosecond = compareTime;
TypeComparator.prototype.visitTimeNanosecond = compareTime;
TypeComparator.prototype.visitDecimal = compareAny;
TypeComparator.prototype.visitList = compareList;
TypeComparator.prototype.visitStruct = compareStruct;
TypeComparator.prototype.visitUnion = compareUnion;
TypeComparator.prototype.visitDenseUnion = compareUnion;
TypeComparator.prototype.visitSparseUnion = compareUnion;
TypeComparator.prototype.visitDictionary = compareDictionary;
TypeComparator.prototype.visitInterval = compareInterval;
TypeComparator.prototype.visitIntervalDayTime = compareInterval;
TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
TypeComparator.prototype.visitMap = compareMap;
/** @ignore */
const instance = new TypeComparator();

//# sourceMappingURL=typecomparator.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/vectorassembler.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/vectorassembler.mjs ***!
  \***************************************************************/
/*! exports provided: VectorAssembler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorAssembler", function() { return VectorAssembler; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _recordbatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recordbatch */ "./node_modules/apache-arrow/recordbatch.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/args */ "./node_modules/apache-arrow/util/args.mjs");
/* harmony import */ var _ipc_metadata_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ipc/metadata/message */ "./node_modules/apache-arrow/ipc/metadata/message.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.








/** @ignore */
class VectorAssembler extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    constructor() {
        super();
        this._byteLength = 0;
        this._nodes = [];
        this._buffers = [];
        this._bufferRegions = [];
    }
    /** @nocollapse */
    static assemble(...args) {
        const assembler = new VectorAssembler();
        const vectorChildren = Object(_util_args__WEBPACK_IMPORTED_MODULE_5__["selectVectorChildrenArgs"])(_recordbatch__WEBPACK_IMPORTED_MODULE_2__["RecordBatch"], args);
        const [assembleResult = assembler] = assembler.visitMany(vectorChildren);
        return assembleResult;
    }
    visit(vector) {
        if (!_type__WEBPACK_IMPORTED_MODULE_7__["DataType"].isDictionary(vector.type)) {
            const { data, length, nullCount } = vector;
            if (length > 2147483647) {
                /* istanbul ignore next */
                throw new RangeError('Cannot write arrays larger than 2^31 - 1 in length');
            }
            if (!_type__WEBPACK_IMPORTED_MODULE_7__["DataType"].isNull(vector.type)) {
                addBuffer.call(this, nullCount <= 0
                    ? new Uint8Array(0) // placeholder validity buffer
                    : Object(_util_bit__WEBPACK_IMPORTED_MODULE_4__["truncateBitmap"])(data.offset, length, data.nullBitmap));
            }
            this.nodes.push(new _ipc_metadata_message__WEBPACK_IMPORTED_MODULE_6__["FieldNode"](length, nullCount));
        }
        return super.visit(vector);
    }
    visitNull(_nullV) {
        return this;
    }
    visitDictionary(vector) {
        // Assemble the indices here, Dictionary assembled separately.
        return this.visit(vector.indices);
    }
    get nodes() { return this._nodes; }
    get buffers() { return this._buffers; }
    get byteLength() { return this._byteLength; }
    get bufferRegions() { return this._bufferRegions; }
}
/** @ignore */
function addBuffer(values) {
    const byteLength = (values.byteLength + 7) & ~7; // Round up to a multiple of 8
    this.buffers.push(values);
    this.bufferRegions.push(new _ipc_metadata_message__WEBPACK_IMPORTED_MODULE_6__["BufferRegion"](this._byteLength, byteLength));
    this._byteLength += byteLength;
    return this;
}
/** @ignore */
function assembleUnion(vector) {
    const { type, length, typeIds, valueOffsets } = vector;
    // All Union Vectors have a typeIds buffer
    addBuffer.call(this, typeIds);
    // If this is a Sparse Union, treat it like all other Nested types
    if (type.mode === _enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"].Sparse) {
        return assembleNestedVector.call(this, vector);
    }
    else if (type.mode === _enum__WEBPACK_IMPORTED_MODULE_1__["UnionMode"].Dense) {
        // If this is a Dense Union, add the valueOffsets buffer and potentially slice the children
        if (vector.offset <= 0) {
            // If the Vector hasn't been sliced, write the existing valueOffsets
            addBuffer.call(this, valueOffsets);
            // We can treat this like all other Nested types
            return assembleNestedVector.call(this, vector);
        }
        else {
            // A sliced Dense Union is an unpleasant case. Because the offsets are different for
            // each child vector, we need to "rebase" the valueOffsets for each child
            // Union typeIds are not necessary 0-indexed
            const maxChildTypeId = typeIds.reduce((x, y) => Math.max(x, y), typeIds[0]);
            const childLengths = new Int32Array(maxChildTypeId + 1);
            // Set all to -1 to indicate that we haven't observed a first occurrence of a particular child yet
            const childOffsets = new Int32Array(maxChildTypeId + 1).fill(-1);
            const shiftedOffsets = new Int32Array(length);
            // If we have a non-zero offset, then the value offsets do not start at
            // zero. We must a) create a new offsets array with shifted offsets and
            // b) slice the values array accordingly
            const unshiftedOffsets = Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["rebaseValueOffsets"])(-valueOffsets[0], length, valueOffsets);
            for (let typeId, shift, index = -1; ++index < length;) {
                if ((shift = childOffsets[typeId = typeIds[index]]) === -1) {
                    shift = childOffsets[typeId] = unshiftedOffsets[typeId];
                }
                shiftedOffsets[index] = unshiftedOffsets[index] - shift;
                ++childLengths[typeId];
            }
            addBuffer.call(this, shiftedOffsets);
            // Slice and visit children accordingly
            for (let child, childIndex = -1, numChildren = type.children.length; ++childIndex < numChildren;) {
                if (child = vector.getChildAt(childIndex)) {
                    const typeId = type.typeIds[childIndex];
                    const childLength = Math.min(length, childLengths[typeId]);
                    this.visit(child.slice(childOffsets[typeId], childLength));
                }
            }
        }
    }
    return this;
}
/** @ignore */
function assembleBoolVector(vector) {
    // Bool vector is a special case of FlatVector, as its data buffer needs to stay packed
    let values;
    if (vector.nullCount >= vector.length) {
        // If all values are null, just insert a placeholder empty data buffer (fastest path)
        return addBuffer.call(this, new Uint8Array(0));
    }
    else if ((values = vector.values) instanceof Uint8Array) {
        // If values is already a Uint8Array, slice the bitmap (fast path)
        return addBuffer.call(this, Object(_util_bit__WEBPACK_IMPORTED_MODULE_4__["truncateBitmap"])(vector.offset, vector.length, values));
    }
    // Otherwise if the underlying data *isn't* a Uint8Array, enumerate the
    // values as bools and re-pack them into a Uint8Array. This code isn't
    // reachable unless you're trying to manipulate the Data internals,
    // we we're only doing this for safety.
    /* istanbul ignore next */
    return addBuffer.call(this, Object(_util_bit__WEBPACK_IMPORTED_MODULE_4__["packBools"])(vector));
}
/** @ignore */
function assembleFlatVector(vector) {
    return addBuffer.call(this, vector.values.subarray(0, vector.length * vector.stride));
}
/** @ignore */
function assembleFlatListVector(vector) {
    const { length, values, valueOffsets } = vector;
    const firstOffset = valueOffsets[0];
    const lastOffset = valueOffsets[length];
    const byteLength = Math.min(lastOffset - firstOffset, values.byteLength - firstOffset);
    // Push in the order FlatList types read their buffers
    addBuffer.call(this, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["rebaseValueOffsets"])(-valueOffsets[0], length, valueOffsets)); // valueOffsets buffer first
    addBuffer.call(this, values.subarray(firstOffset, firstOffset + byteLength)); // sliced values buffer second
    return this;
}
/** @ignore */
function assembleListVector(vector) {
    const { length, valueOffsets } = vector;
    // If we have valueOffsets (MapVector, ListVector), push that buffer first
    if (valueOffsets) {
        addBuffer.call(this, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_3__["rebaseValueOffsets"])(valueOffsets[0], length, valueOffsets));
    }
    // Then insert the List's values child
    return this.visit(vector.getChildAt(0));
}
/** @ignore */
function assembleNestedVector(vector) {
    return this.visitMany(vector.type.children.map((_, i) => vector.getChildAt(i)).filter(Boolean))[0];
}
VectorAssembler.prototype.visitBool = assembleBoolVector;
VectorAssembler.prototype.visitInt = assembleFlatVector;
VectorAssembler.prototype.visitFloat = assembleFlatVector;
VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
VectorAssembler.prototype.visitBinary = assembleFlatListVector;
VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
VectorAssembler.prototype.visitDate = assembleFlatVector;
VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
VectorAssembler.prototype.visitTime = assembleFlatVector;
VectorAssembler.prototype.visitDecimal = assembleFlatVector;
VectorAssembler.prototype.visitList = assembleListVector;
VectorAssembler.prototype.visitStruct = assembleNestedVector;
VectorAssembler.prototype.visitUnion = assembleUnion;
VectorAssembler.prototype.visitInterval = assembleFlatVector;
VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
VectorAssembler.prototype.visitMap = assembleListVector;

//# sourceMappingURL=vectorassembler.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/vectorctor.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/vectorctor.mjs ***!
  \**********************************************************/
/*! exports provided: GetVectorConstructor, instance */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVectorConstructor", function() { return GetVectorConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _vector_binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector/binary */ "./node_modules/apache-arrow/vector/binary.mjs");
/* harmony import */ var _vector_bool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vector/bool */ "./node_modules/apache-arrow/vector/bool.mjs");
/* harmony import */ var _vector_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vector/date */ "./node_modules/apache-arrow/vector/date.mjs");
/* harmony import */ var _vector_decimal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vector/decimal */ "./node_modules/apache-arrow/vector/decimal.mjs");
/* harmony import */ var _vector_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vector/dictionary */ "./node_modules/apache-arrow/vector/dictionary.mjs");
/* harmony import */ var _vector_fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vector/fixedsizebinary */ "./node_modules/apache-arrow/vector/fixedsizebinary.mjs");
/* harmony import */ var _vector_fixedsizelist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vector/fixedsizelist */ "./node_modules/apache-arrow/vector/fixedsizelist.mjs");
/* harmony import */ var _vector_float__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vector/float */ "./node_modules/apache-arrow/vector/float.mjs");
/* harmony import */ var _vector_interval__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vector/interval */ "./node_modules/apache-arrow/vector/interval.mjs");
/* harmony import */ var _vector_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vector/int */ "./node_modules/apache-arrow/vector/int.mjs");
/* harmony import */ var _vector_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vector/list */ "./node_modules/apache-arrow/vector/list.mjs");
/* harmony import */ var _vector_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../vector/map */ "./node_modules/apache-arrow/vector/map.mjs");
/* harmony import */ var _vector_null__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vector/null */ "./node_modules/apache-arrow/vector/null.mjs");
/* harmony import */ var _vector_struct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vector/struct */ "./node_modules/apache-arrow/vector/struct.mjs");
/* harmony import */ var _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vector/timestamp */ "./node_modules/apache-arrow/vector/timestamp.mjs");
/* harmony import */ var _vector_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../vector/time */ "./node_modules/apache-arrow/vector/time.mjs");
/* harmony import */ var _vector_union__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vector/union */ "./node_modules/apache-arrow/vector/union.mjs");
/* harmony import */ var _vector_utf8__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vector/utf8 */ "./node_modules/apache-arrow/vector/utf8.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.



















/** @ignore */
class GetVectorConstructor extends _visitor__WEBPACK_IMPORTED_MODULE_0__["Visitor"] {
    visitNull() { return _vector_null__WEBPACK_IMPORTED_MODULE_13__["NullVector"]; }
    visitBool() { return _vector_bool__WEBPACK_IMPORTED_MODULE_2__["BoolVector"]; }
    visitInt() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["IntVector"]; }
    visitInt8() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Int8Vector"]; }
    visitInt16() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Int16Vector"]; }
    visitInt32() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Int32Vector"]; }
    visitInt64() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Int64Vector"]; }
    visitUint8() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Uint8Vector"]; }
    visitUint16() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Uint16Vector"]; }
    visitUint32() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Uint32Vector"]; }
    visitUint64() { return _vector_int__WEBPACK_IMPORTED_MODULE_10__["Uint64Vector"]; }
    visitFloat() { return _vector_float__WEBPACK_IMPORTED_MODULE_8__["FloatVector"]; }
    visitFloat16() { return _vector_float__WEBPACK_IMPORTED_MODULE_8__["Float16Vector"]; }
    visitFloat32() { return _vector_float__WEBPACK_IMPORTED_MODULE_8__["Float32Vector"]; }
    visitFloat64() { return _vector_float__WEBPACK_IMPORTED_MODULE_8__["Float64Vector"]; }
    visitUtf8() { return _vector_utf8__WEBPACK_IMPORTED_MODULE_18__["Utf8Vector"]; }
    visitBinary() { return _vector_binary__WEBPACK_IMPORTED_MODULE_1__["BinaryVector"]; }
    visitFixedSizeBinary() { return _vector_fixedsizebinary__WEBPACK_IMPORTED_MODULE_6__["FixedSizeBinaryVector"]; }
    visitDate() { return _vector_date__WEBPACK_IMPORTED_MODULE_3__["DateVector"]; }
    visitDateDay() { return _vector_date__WEBPACK_IMPORTED_MODULE_3__["DateDayVector"]; }
    visitDateMillisecond() { return _vector_date__WEBPACK_IMPORTED_MODULE_3__["DateMillisecondVector"]; }
    visitTimestamp() { return _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampVector"]; }
    visitTimestampSecond() { return _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampSecondVector"]; }
    visitTimestampMillisecond() { return _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampMillisecondVector"]; }
    visitTimestampMicrosecond() { return _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampMicrosecondVector"]; }
    visitTimestampNanosecond() { return _vector_timestamp__WEBPACK_IMPORTED_MODULE_15__["TimestampNanosecondVector"]; }
    visitTime() { return _vector_time__WEBPACK_IMPORTED_MODULE_16__["TimeVector"]; }
    visitTimeSecond() { return _vector_time__WEBPACK_IMPORTED_MODULE_16__["TimeSecondVector"]; }
    visitTimeMillisecond() { return _vector_time__WEBPACK_IMPORTED_MODULE_16__["TimeMillisecondVector"]; }
    visitTimeMicrosecond() { return _vector_time__WEBPACK_IMPORTED_MODULE_16__["TimeMicrosecondVector"]; }
    visitTimeNanosecond() { return _vector_time__WEBPACK_IMPORTED_MODULE_16__["TimeNanosecondVector"]; }
    visitDecimal() { return _vector_decimal__WEBPACK_IMPORTED_MODULE_4__["DecimalVector"]; }
    visitList() { return _vector_list__WEBPACK_IMPORTED_MODULE_11__["ListVector"]; }
    visitStruct() { return _vector_struct__WEBPACK_IMPORTED_MODULE_14__["StructVector"]; }
    visitUnion() { return _vector_union__WEBPACK_IMPORTED_MODULE_17__["UnionVector"]; }
    visitDenseUnion() { return _vector_union__WEBPACK_IMPORTED_MODULE_17__["DenseUnionVector"]; }
    visitSparseUnion() { return _vector_union__WEBPACK_IMPORTED_MODULE_17__["SparseUnionVector"]; }
    visitDictionary() { return _vector_dictionary__WEBPACK_IMPORTED_MODULE_5__["DictionaryVector"]; }
    visitInterval() { return _vector_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalVector"]; }
    visitIntervalDayTime() { return _vector_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalDayTimeVector"]; }
    visitIntervalYearMonth() { return _vector_interval__WEBPACK_IMPORTED_MODULE_9__["IntervalYearMonthVector"]; }
    visitFixedSizeList() { return _vector_fixedsizelist__WEBPACK_IMPORTED_MODULE_7__["FixedSizeListVector"]; }
    visitMap() { return _vector_map__WEBPACK_IMPORTED_MODULE_12__["MapVector"]; }
}
/** @ignore */
const instance = new GetVectorConstructor();

//# sourceMappingURL=vectorctor.mjs.map


/***/ }),

/***/ "./node_modules/apache-arrow/visitor/vectorloader.mjs":
/*!************************************************************!*\
  !*** ./node_modules/apache-arrow/visitor/vectorloader.mjs ***!
  \************************************************************/
/*! exports provided: VectorLoader, JSONVectorLoader */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorLoader", function() { return VectorLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONVectorLoader", function() { return JSONVectorLoader; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./node_modules/apache-arrow/data.mjs");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schema */ "./node_modules/apache-arrow/schema.mjs");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type */ "./node_modules/apache-arrow/type.mjs");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visitor */ "./node_modules/apache-arrow/visitor.mjs");
/* harmony import */ var _util_bit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/bit */ "./node_modules/apache-arrow/util/bit.mjs");
/* harmony import */ var _util_utf8__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/utf8 */ "./node_modules/apache-arrow/util/utf8.mjs");
/* harmony import */ var _util_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/int */ "./node_modules/apache-arrow/util/int.mjs");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum */ "./node_modules/apache-arrow/enum.mjs");
/* harmony import */ var _util_buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/buffer */ "./node_modules/apache-arrow/util/buffer.mjs");
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.









/** @ignore */
class VectorLoader extends _visitor__WEBPACK_IMPORTED_MODULE_3__["Visitor"] {
    constructor(bytes, nodes, buffers, dictionaries) {
        super();
        this.nodesIndex = -1;
        this.buffersIndex = -1;
        this.bytes = bytes;
        this.nodes = nodes;
        this.buffers = buffers;
        this.dictionaries = dictionaries;
    }
    visit(node) {
        return super.visit(node instanceof _schema__WEBPACK_IMPORTED_MODULE_1__["Field"] ? node.type : node);
    }
    visitNull(type, { length, } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Null(type, 0, length); }
    visitBool(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Bool(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitInt(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Int(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitFloat(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Float(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitUtf8(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Utf8(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type)); }
    visitBinary(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Binary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.readData(type)); }
    visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].FixedSizeBinary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitDate(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Date(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Timestamp(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitTime(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Time(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitDecimal(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Decimal(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitList(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].List(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0])); }
    visitStruct(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Struct(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visitMany(type.children)); }
    visitUnion(type) { return type.mode === _enum__WEBPACK_IMPORTED_MODULE_7__["UnionMode"].Sparse ? this.visitSparseUnion(type) : this.visitDenseUnion(type); }
    visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.readOffsets(type), this.visitMany(type.children)); }
    visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Union(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readTypeIds(type), this.visitMany(type.children)); }
    visitDictionary(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Dictionary(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type.indices), this.readDictionary(type)); }
    visitInterval(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Interval(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readData(type)); }
    visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].FixedSizeList(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.visit(type.children[0])); }
    visitMap(type, { length, nullCount } = this.nextFieldNode()) { return _data__WEBPACK_IMPORTED_MODULE_0__["Data"].Map(type, 0, length, nullCount, this.readNullBitmap(type, nullCount), this.readOffsets(type), this.visit(type.children[0])); }
    nextFieldNode() { return this.nodes[++this.nodesIndex]; }
    nextBufferRange() { return this.buffers[++this.buffersIndex]; }
    readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
        return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
    }
    readOffsets(type, buffer) { return this.readData(type, buffer); }
    readTypeIds(type, buffer) { return this.readData(type, buffer); }
    readData(_type, { length, offset } = this.nextBufferRange()) {
        return this.bytes.subarray(offset, offset + length);
    }
    readDictionary(type) {
        return this.dictionaries.get(type.id);
    }
}
/** @ignore */
class JSONVectorLoader extends VectorLoader {
    constructor(sources, nodes, buffers, dictionaries) {
        super(new Uint8Array(0), nodes, buffers, dictionaries);
        this.sources = sources;
    }
    readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
        return nullCount <= 0 ? new Uint8Array(0) : Object(_util_bit__WEBPACK_IMPORTED_MODULE_4__["packBools"])(this.sources[offset]);
    }
    readOffsets(_type, { offset } = this.nextBufferRange()) {
        return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Int32Array, this.sources[offset]));
    }
    readTypeIds(type, { offset } = this.nextBufferRange()) {
        return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(type.ArrayType, this.sources[offset]));
    }
    readData(type, { offset } = this.nextBufferRange()) {
        const { sources } = this;
        if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isTimestamp(type)) {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, _util_int__WEBPACK_IMPORTED_MODULE_6__["Int64"].convertArray(sources[offset]));
        }
        else if ((_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isInt(type) || _type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isTime(type)) && type.bitWidth === 64) {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, _util_int__WEBPACK_IMPORTED_MODULE_6__["Int64"].convertArray(sources[offset]));
        }
        else if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isDate(type) && type.unit === _enum__WEBPACK_IMPORTED_MODULE_7__["DateUnit"].MILLISECOND) {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, _util_int__WEBPACK_IMPORTED_MODULE_6__["Int64"].convertArray(sources[offset]));
        }
        else if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isDecimal(type)) {
            return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, _util_int__WEBPACK_IMPORTED_MODULE_6__["Int128"].convertArray(sources[offset]));
        }
        else if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isBinary(type) || _type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isFixedSizeBinary(type)) {
            return binaryDataFromJSON(sources[offset]);
        }
        else if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isBool(type)) {
            return Object(_util_bit__WEBPACK_IMPORTED_MODULE_4__["packBools"])(sources[offset]);
        }
        else if (_type__WEBPACK_IMPORTED_MODULE_2__["DataType"].isUtf8(type)) {
            return Object(_util_utf8__WEBPACK_IMPORTED_MODULE_5__["encodeUtf8"])(sources[offset].join(''));
        }
        return Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(Uint8Array, Object(_util_buffer__WEBPACK_IMPORTED_MODULE_8__["toArrayBufferView"])(type.ArrayType, sources[offset].map((x) => +x)));
    }
}
/** @ignore */
function binaryDataFromJSON(values) {
    // "DATA": ["49BC7D5B6C47D2","3F5FB6D9322026"]
    // There are definitely more efficient ways to do this... but it gets the
    // job done.
    const joined = values.join('');
    const data = new Uint8Array(joined.length / 2);
    for (let i = 0; i < joined.length; i += 2) {
        data[i >> 1] = parseInt(joined.substr(i, 2), 16);
    }
    return data;
}

//# sourceMappingURL=vectorloader.mjs.map


/***/ }),

/***/ "./node_modules/flatbuffers/js/flatbuffers.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/flatbuffers/js/flatbuffers.mjs ***!
  \*****************************************************/
/*! exports provided: flatbuffers */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatbuffers", function() { return flatbuffers; });
/// @file
/// @addtogroup flatbuffers_javascript_api
/// @{
/// @cond FLATBUFFERS_INTERNAL

/**
 * @fileoverview
 *
 * Need to suppress 'global this' error so the Node.js export line doesn't cause
 * closure compile to error out.
 * @suppress {globalThis}
 */

/**
 * @const
 * @namespace
 */
var flatbuffers = {};

/**
 * @typedef {number}
 */
flatbuffers.Offset;

/**
 * @typedef {{
 *   bb: flatbuffers.ByteBuffer,
 *   bb_pos: number
 * }}
 */
flatbuffers.Table;

/**
 * @type {number}
 * @const
 */
flatbuffers.SIZEOF_SHORT = 2;

/**
 * @type {number}
 * @const
 */
flatbuffers.SIZEOF_INT = 4;

/**
 * @type {number}
 * @const
 */
flatbuffers.FILE_IDENTIFIER_LENGTH = 4;

/**
 * @enum {number}
 */
flatbuffers.Encoding = {
  UTF8_BYTES: 1,
  UTF16_STRING: 2
};

/**
 * @type {Int32Array}
 * @const
 */
flatbuffers.int32 = new Int32Array(2);

/**
 * @type {Float32Array}
 * @const
 */
flatbuffers.float32 = new Float32Array(flatbuffers.int32.buffer);

/**
 * @type {Float64Array}
 * @const
 */
flatbuffers.float64 = new Float64Array(flatbuffers.int32.buffer);

/**
 * @type {boolean}
 * @const
 */
flatbuffers.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;

////////////////////////////////////////////////////////////////////////////////

/**
 * @constructor
 * @param {number} low
 * @param {number} high
 */
flatbuffers.Long = function(low, high) {
  /**
   * @type {number}
   * @const
   */
  this.low = low | 0;

  /**
   * @type {number}
   * @const
   */
  this.high = high | 0;
};

/**
 * @param {number} low
 * @param {number} high
 * @returns {flatbuffers.Long}
 */
flatbuffers.Long.create = function(low, high) {
  // Special-case zero to avoid GC overhead for default values
  return low == 0 && high == 0 ? flatbuffers.Long.ZERO : new flatbuffers.Long(low, high);
};

/**
 * @returns {number}
 */
flatbuffers.Long.prototype.toFloat64 = function() {
  return (this.low >>> 0) + this.high * 0x100000000;
};

/**
 * @param {flatbuffers.Long} other
 * @returns {boolean}
 */
flatbuffers.Long.prototype.equals = function(other) {
  return this.low == other.low && this.high == other.high;
};

/**
 * @type {flatbuffers.Long}
 * @const
 */
flatbuffers.Long.ZERO = new flatbuffers.Long(0, 0);

/// @endcond
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a FlatBufferBuilder.
 *
 * @constructor
 * @param {number=} opt_initial_size
 */
flatbuffers.Builder = function(opt_initial_size) {
  if (!opt_initial_size) {
    var initial_size = 1024;
  } else {
    var initial_size = opt_initial_size;
  }

  /**
   * @type {flatbuffers.ByteBuffer}
   * @private
   */
  this.bb = flatbuffers.ByteBuffer.allocate(initial_size);

  /**
   * Remaining space in the ByteBuffer.
   *
   * @type {number}
   * @private
   */
  this.space = initial_size;

  /**
   * Minimum alignment encountered so far.
   *
   * @type {number}
   * @private
   */
  this.minalign = 1;

  /**
   * The vtable for the current table.
   *
   * @type {Array.<number>}
   * @private
   */
  this.vtable = null;

  /**
   * The amount of fields we're actually using.
   *
   * @type {number}
   * @private
   */
  this.vtable_in_use = 0;

  /**
   * Whether we are currently serializing a table.
   *
   * @type {boolean}
   * @private
   */
  this.isNested = false;

  /**
   * Starting offset of the current struct/table.
   *
   * @type {number}
   * @private
   */
  this.object_start = 0;

  /**
   * List of offsets of all vtables.
   *
   * @type {Array.<number>}
   * @private
   */
  this.vtables = [];

  /**
   * For the current vector being built.
   *
   * @type {number}
   * @private
   */
  this.vector_num_elems = 0;

  /**
   * False omits default values from the serialized data
   *
   * @type {boolean}
   * @private
   */
  this.force_defaults = false;
};

flatbuffers.Builder.prototype.clear = function() {
  this.bb.clear();
  this.space = this.bb.capacity();
  this.minalign = 1;
  this.vtable = null;
  this.vtable_in_use = 0;
  this.isNested = false;
  this.object_start = 0;
  this.vtables = [];
  this.vector_num_elems = 0;
  this.force_defaults = false;
};

/**
 * In order to save space, fields that are set to their default value
 * don't get serialized into the buffer. Forcing defaults provides a
 * way to manually disable this optimization.
 *
 * @param {boolean} forceDefaults true always serializes default values
 */
flatbuffers.Builder.prototype.forceDefaults = function(forceDefaults) {
  this.force_defaults = forceDefaults;
};

/**
 * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
 * called finish(). The actual data starts at the ByteBuffer's current position,
 * not necessarily at 0.
 *
 * @returns {flatbuffers.ByteBuffer}
 */
flatbuffers.Builder.prototype.dataBuffer = function() {
  return this.bb;
};

/**
 * Get the bytes representing the FlatBuffer. Only call this after you've
 * called finish().
 *
 * @returns {Uint8Array}
 */
flatbuffers.Builder.prototype.asUint8Array = function() {
  return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
};

/// @cond FLATBUFFERS_INTERNAL
/**
 * Prepare to write an element of `size` after `additional_bytes` have been
 * written, e.g. if you write a string, you need to align such the int length
 * field is aligned to 4 bytes, and the string data follows it directly. If all
 * you need to do is alignment, `additional_bytes` will be 0.
 *
 * @param {number} size This is the of the new element to write
 * @param {number} additional_bytes The padding size
 */
flatbuffers.Builder.prototype.prep = function(size, additional_bytes) {
  // Track the biggest thing we've ever aligned to.
  if (size > this.minalign) {
    this.minalign = size;
  }

  // Find the amount of alignment needed such that `size` is properly
  // aligned after `additional_bytes`
  var align_size = ((~(this.bb.capacity() - this.space + additional_bytes)) + 1) & (size - 1);

  // Reallocate the buffer if needed.
  while (this.space < align_size + size + additional_bytes) {
    var old_buf_size = this.bb.capacity();
    this.bb = flatbuffers.Builder.growByteBuffer(this.bb);
    this.space += this.bb.capacity() - old_buf_size;
  }

  this.pad(align_size);
};

/**
 * @param {number} byte_size
 */
flatbuffers.Builder.prototype.pad = function(byte_size) {
  for (var i = 0; i < byte_size; i++) {
    this.bb.writeInt8(--this.space, 0);
  }
};

/**
 * @param {number} value
 */
flatbuffers.Builder.prototype.writeInt8 = function(value) {
  this.bb.writeInt8(this.space -= 1, value);
};

/**
 * @param {number} value
 */
flatbuffers.Builder.prototype.writeInt16 = function(value) {
  this.bb.writeInt16(this.space -= 2, value);
};

/**
 * @param {number} value
 */
flatbuffers.Builder.prototype.writeInt32 = function(value) {
  this.bb.writeInt32(this.space -= 4, value);
};

/**
 * @param {flatbuffers.Long} value
 */
flatbuffers.Builder.prototype.writeInt64 = function(value) {
  this.bb.writeInt64(this.space -= 8, value);
};

/**
 * @param {number} value
 */
flatbuffers.Builder.prototype.writeFloat32 = function(value) {
  this.bb.writeFloat32(this.space -= 4, value);
};

/**
 * @param {number} value
 */
flatbuffers.Builder.prototype.writeFloat64 = function(value) {
  this.bb.writeFloat64(this.space -= 8, value);
};
/// @endcond

/**
 * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {number} value The `int8` to add the the buffer.
 */
flatbuffers.Builder.prototype.addInt8 = function(value) {
  this.prep(1, 0);
  this.writeInt8(value);
};

/**
 * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {number} value The `int16` to add the the buffer.
 */
flatbuffers.Builder.prototype.addInt16 = function(value) {
  this.prep(2, 0);
  this.writeInt16(value);
};

/**
 * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {number} value The `int32` to add the the buffer.
 */
flatbuffers.Builder.prototype.addInt32 = function(value) {
  this.prep(4, 0);
  this.writeInt32(value);
};

/**
 * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {flatbuffers.Long} value The `int64` to add the the buffer.
 */
flatbuffers.Builder.prototype.addInt64 = function(value) {
  this.prep(8, 0);
  this.writeInt64(value);
};

/**
 * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {number} value The `float32` to add the the buffer.
 */
flatbuffers.Builder.prototype.addFloat32 = function(value) {
  this.prep(4, 0);
  this.writeFloat32(value);
};

/**
 * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
 * @param {number} value The `float64` to add the the buffer.
 */
flatbuffers.Builder.prototype.addFloat64 = function(value) {
  this.prep(8, 0);
  this.writeFloat64(value);
};

/// @cond FLATBUFFERS_INTERNAL
/**
 * @param {number} voffset
 * @param {number} value
 * @param {number} defaultValue
 */
flatbuffers.Builder.prototype.addFieldInt8 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt8(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {number} value
 * @param {number} defaultValue
 */
flatbuffers.Builder.prototype.addFieldInt16 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt16(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {number} value
 * @param {number} defaultValue
 */
flatbuffers.Builder.prototype.addFieldInt32 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addInt32(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {flatbuffers.Long} value
 * @param {flatbuffers.Long} defaultValue
 */
flatbuffers.Builder.prototype.addFieldInt64 = function(voffset, value, defaultValue) {
  if (this.force_defaults || !value.equals(defaultValue)) {
    this.addInt64(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {number} value
 * @param {number} defaultValue
 */
flatbuffers.Builder.prototype.addFieldFloat32 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addFloat32(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {number} value
 * @param {number} defaultValue
 */
flatbuffers.Builder.prototype.addFieldFloat64 = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addFloat64(value);
    this.slot(voffset);
  }
};

/**
 * @param {number} voffset
 * @param {flatbuffers.Offset} value
 * @param {flatbuffers.Offset} defaultValue
 */
flatbuffers.Builder.prototype.addFieldOffset = function(voffset, value, defaultValue) {
  if (this.force_defaults || value != defaultValue) {
    this.addOffset(value);
    this.slot(voffset);
  }
};

/**
 * Structs are stored inline, so nothing additional is being added. `d` is always 0.
 *
 * @param {number} voffset
 * @param {flatbuffers.Offset} value
 * @param {flatbuffers.Offset} defaultValue
 */
flatbuffers.Builder.prototype.addFieldStruct = function(voffset, value, defaultValue) {
  if (value != defaultValue) {
    this.nested(value);
    this.slot(voffset);
  }
};

/**
 * Structures are always stored inline, they need to be created right
 * where they're used.  You'll get this assertion failure if you
 * created it elsewhere.
 *
 * @param {flatbuffers.Offset} obj The offset of the created object
 */
flatbuffers.Builder.prototype.nested = function(obj) {
  if (obj != this.offset()) {
    throw new Error('FlatBuffers: struct must be serialized inline.');
  }
};

/**
 * Should not be creating any other object, string or vector
 * while an object is being constructed
 */
flatbuffers.Builder.prototype.notNested = function() {
  if (this.isNested) {
    throw new Error('FlatBuffers: object serialization must not be nested.');
  }
};

/**
 * Set the current vtable at `voffset` to the current location in the buffer.
 *
 * @param {number} voffset
 */
flatbuffers.Builder.prototype.slot = function(voffset) {
  this.vtable[voffset] = this.offset();
};

/**
 * @returns {flatbuffers.Offset} Offset relative to the end of the buffer.
 */
flatbuffers.Builder.prototype.offset = function() {
  return this.bb.capacity() - this.space;
};

/**
 * Doubles the size of the backing ByteBuffer and copies the old data towards
 * the end of the new buffer (since we build the buffer backwards).
 *
 * @param {flatbuffers.ByteBuffer} bb The current buffer with the existing data
 * @returns {flatbuffers.ByteBuffer} A new byte buffer with the old data copied
 * to it. The data is located at the end of the buffer.
 *
 * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
 * it a uint8Array we need to suppress the type check:
 * @suppress {checkTypes}
 */
flatbuffers.Builder.growByteBuffer = function(bb) {
  var old_buf_size = bb.capacity();

  // Ensure we don't grow beyond what fits in an int.
  if (old_buf_size & 0xC0000000) {
    throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
  }

  var new_buf_size = old_buf_size << 1;
  var nbb = flatbuffers.ByteBuffer.allocate(new_buf_size);
  nbb.setPosition(new_buf_size - old_buf_size);
  nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
  return nbb;
};
/// @endcond

/**
 * Adds on offset, relative to where it will be written.
 *
 * @param {flatbuffers.Offset} offset The offset to add.
 */
flatbuffers.Builder.prototype.addOffset = function(offset) {
  this.prep(flatbuffers.SIZEOF_INT, 0); // Ensure alignment is already done.
  this.writeInt32(this.offset() - offset + flatbuffers.SIZEOF_INT);
};

/// @cond FLATBUFFERS_INTERNAL
/**
 * Start encoding a new object in the buffer.  Users will not usually need to
 * call this directly. The FlatBuffers compiler will generate helper methods
 * that call this method internally.
 *
 * @param {number} numfields
 */
flatbuffers.Builder.prototype.startObject = function(numfields) {
  this.notNested();
  if (this.vtable == null) {
    this.vtable = [];
  }
  this.vtable_in_use = numfields;
  for (var i = 0; i < numfields; i++) {
    this.vtable[i] = 0; // This will push additional elements as needed
  }
  this.isNested = true;
  this.object_start = this.offset();
};

/**
 * Finish off writing the object that is under construction.
 *
 * @returns {flatbuffers.Offset} The offset to the object inside `dataBuffer`
 */
flatbuffers.Builder.prototype.endObject = function() {
  if (this.vtable == null || !this.isNested) {
    throw new Error('FlatBuffers: endObject called without startObject');
  }

  this.addInt32(0);
  var vtableloc = this.offset();

  // Trim trailing zeroes.
  var i = this.vtable_in_use - 1;
  for (; i >= 0 && this.vtable[i] == 0; i--) {}
  var trimmed_size = i + 1;

  // Write out the current vtable.
  for (; i >= 0; i--) {
    // Offset relative to the start of the table.
    this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
  }

  var standard_fields = 2; // The fields below:
  this.addInt16(vtableloc - this.object_start);
  var len = (trimmed_size + standard_fields) * flatbuffers.SIZEOF_SHORT;
  this.addInt16(len);

  // Search for an existing vtable that matches the current one.
  var existing_vtable = 0;
  var vt1 = this.space;
outer_loop:
  for (i = 0; i < this.vtables.length; i++) {
    var vt2 = this.bb.capacity() - this.vtables[i];
    if (len == this.bb.readInt16(vt2)) {
      for (var j = flatbuffers.SIZEOF_SHORT; j < len; j += flatbuffers.SIZEOF_SHORT) {
        if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) {
          continue outer_loop;
        }
      }
      existing_vtable = this.vtables[i];
      break;
    }
  }

  if (existing_vtable) {
    // Found a match:
    // Remove the current vtable.
    this.space = this.bb.capacity() - vtableloc;

    // Point table to existing vtable.
    this.bb.writeInt32(this.space, existing_vtable - vtableloc);
  } else {
    // No match:
    // Add the location of the current vtable to the list of vtables.
    this.vtables.push(this.offset());

    // Point table to current vtable.
    this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
  }

  this.isNested = false;
  return vtableloc;
};
/// @endcond

/**
 * Finalize a buffer, poiting to the given `root_table`.
 *
 * @param {flatbuffers.Offset} root_table
 * @param {string=} opt_file_identifier
 */
flatbuffers.Builder.prototype.finish = function(root_table, opt_file_identifier) {
  if (opt_file_identifier) {
    var file_identifier = opt_file_identifier;
    this.prep(this.minalign, flatbuffers.SIZEOF_INT +
      flatbuffers.FILE_IDENTIFIER_LENGTH);
    if (file_identifier.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
      throw new Error('FlatBuffers: file identifier must be length ' +
        flatbuffers.FILE_IDENTIFIER_LENGTH);
    }
    for (var i = flatbuffers.FILE_IDENTIFIER_LENGTH - 1; i >= 0; i--) {
      this.writeInt8(file_identifier.charCodeAt(i));
    }
  }
  this.prep(this.minalign, flatbuffers.SIZEOF_INT);
  this.addOffset(root_table);
  this.bb.setPosition(this.space);
};

/// @cond FLATBUFFERS_INTERNAL
/**
 * This checks a required field has been set in a given table that has
 * just been constructed.
 *
 * @param {flatbuffers.Offset} table
 * @param {number} field
 */
flatbuffers.Builder.prototype.requiredField = function(table, field) {
  var table_start = this.bb.capacity() - table;
  var vtable_start = table_start - this.bb.readInt32(table_start);
  var ok = this.bb.readInt16(vtable_start + field) != 0;

  // If this fails, the caller will show what field needs to be set.
  if (!ok) {
    throw new Error('FlatBuffers: field ' + field + ' must be set');
  }
};

/**
 * Start a new array/vector of objects.  Users usually will not call
 * this directly. The FlatBuffers compiler will create a start/end
 * method for vector types in generated code.
 *
 * @param {number} elem_size The size of each element in the array
 * @param {number} num_elems The number of elements in the array
 * @param {number} alignment The alignment of the array
 */
flatbuffers.Builder.prototype.startVector = function(elem_size, num_elems, alignment) {
  this.notNested();
  this.vector_num_elems = num_elems;
  this.prep(flatbuffers.SIZEOF_INT, elem_size * num_elems);
  this.prep(alignment, elem_size * num_elems); // Just in case alignment > int.
};

/**
 * Finish off the creation of an array and all its elements. The array must be
 * created with `startVector`.
 *
 * @returns {flatbuffers.Offset} The offset at which the newly created array
 * starts.
 */
flatbuffers.Builder.prototype.endVector = function() {
  this.writeInt32(this.vector_num_elems);
  return this.offset();
};
/// @endcond

/**
 * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
 * instead of a string, it is assumed to contain valid UTF-8 encoded data.
 *
 * @param {string|Uint8Array} s The string to encode
 * @return {flatbuffers.Offset} The offset in the buffer where the encoded string starts
 */
flatbuffers.Builder.prototype.createString = function(s) {
  if (s instanceof Uint8Array) {
    var utf8 = s;
  } else {
    var utf8 = [];
    var i = 0;

    while (i < s.length) {
      var codePoint;

      // Decode UTF-16
      var a = s.charCodeAt(i++);
      if (a < 0xD800 || a >= 0xDC00) {
        codePoint = a;
      } else {
        var b = s.charCodeAt(i++);
        codePoint = (a << 10) + b + (0x10000 - (0xD800 << 10) - 0xDC00);
      }

      // Encode UTF-8
      if (codePoint < 0x80) {
        utf8.push(codePoint);
      } else {
        if (codePoint < 0x800) {
          utf8.push(((codePoint >> 6) & 0x1F) | 0xC0);
        } else {
          if (codePoint < 0x10000) {
            utf8.push(((codePoint >> 12) & 0x0F) | 0xE0);
          } else {
            utf8.push(
              ((codePoint >> 18) & 0x07) | 0xF0,
              ((codePoint >> 12) & 0x3F) | 0x80);
          }
          utf8.push(((codePoint >> 6) & 0x3F) | 0x80);
        }
        utf8.push((codePoint & 0x3F) | 0x80);
      }
    }
  }

  this.addInt8(0);
  this.startVector(1, utf8.length, 1);
  this.bb.setPosition(this.space -= utf8.length);
  for (var i = 0, offset = this.space, bytes = this.bb.bytes(); i < utf8.length; i++) {
    bytes[offset++] = utf8[i];
  }
  return this.endVector();
};

/**
 * A helper function to avoid generated code depending on this file directly.
 *
 * @param {number} low
 * @param {number} high
 * @returns {flatbuffers.Long}
 */
flatbuffers.Builder.prototype.createLong = function(low, high) {
  return flatbuffers.Long.create(low, high);
};
////////////////////////////////////////////////////////////////////////////////
/// @cond FLATBUFFERS_INTERNAL
/**
 * Create a new ByteBuffer with a given array of bytes (`Uint8Array`).
 *
 * @constructor
 * @param {Uint8Array} bytes
 */
flatbuffers.ByteBuffer = function(bytes) {
  /**
   * @type {Uint8Array}
   * @private
   */
  this.bytes_ = bytes;

  /**
   * @type {number}
   * @private
   */
  this.position_ = 0;
};

/**
 * Create and allocate a new ByteBuffer with a given size.
 *
 * @param {number} byte_size
 * @returns {flatbuffers.ByteBuffer}
 */
flatbuffers.ByteBuffer.allocate = function(byte_size) {
  return new flatbuffers.ByteBuffer(new Uint8Array(byte_size));
};

flatbuffers.ByteBuffer.prototype.clear = function() {
  this.position_ = 0;
};

/**
 * Get the underlying `Uint8Array`.
 *
 * @returns {Uint8Array}
 */
flatbuffers.ByteBuffer.prototype.bytes = function() {
  return this.bytes_;
};

/**
 * Get the buffer's position.
 *
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.position = function() {
  return this.position_;
};

/**
 * Set the buffer's position.
 *
 * @param {number} position
 */
flatbuffers.ByteBuffer.prototype.setPosition = function(position) {
  this.position_ = position;
};

/**
 * Get the buffer's capacity.
 *
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.capacity = function() {
  return this.bytes_.length;
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readInt8 = function(offset) {
  return this.readUint8(offset) << 24 >> 24;
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readUint8 = function(offset) {
  return this.bytes_[offset];
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readInt16 = function(offset) {
  return this.readUint16(offset) << 16 >> 16;
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readUint16 = function(offset) {
  return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readInt32 = function(offset) {
  return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readUint32 = function(offset) {
  return this.readInt32(offset) >>> 0;
};

/**
 * @param {number} offset
 * @returns {flatbuffers.Long}
 */
flatbuffers.ByteBuffer.prototype.readInt64 = function(offset) {
  return new flatbuffers.Long(this.readInt32(offset), this.readInt32(offset + 4));
};

/**
 * @param {number} offset
 * @returns {flatbuffers.Long}
 */
flatbuffers.ByteBuffer.prototype.readUint64 = function(offset) {
  return new flatbuffers.Long(this.readUint32(offset), this.readUint32(offset + 4));
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readFloat32 = function(offset) {
  flatbuffers.int32[0] = this.readInt32(offset);
  return flatbuffers.float32[0];
};

/**
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.readFloat64 = function(offset) {
  flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1] = this.readInt32(offset);
  flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
  return flatbuffers.float64[0];
};

/**
 * @param {number} offset
 * @param {number|boolean} value
 */
flatbuffers.ByteBuffer.prototype.writeInt8 = function(offset, value) {
  this.bytes_[offset] = /** @type {number} */(value);
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeUint8 = function(offset, value) {
  this.bytes_[offset] = value;
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeInt16 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeUint16 = function(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeInt32 = function(offset, value) {
  this.bytes_[offset] = value;
  this.bytes_[offset + 1] = value >> 8;
  this.bytes_[offset + 2] = value >> 16;
  this.bytes_[offset + 3] = value >> 24;
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeUint32 = function(offset, value) {
    this.bytes_[offset] = value;
    this.bytes_[offset + 1] = value >> 8;
    this.bytes_[offset + 2] = value >> 16;
    this.bytes_[offset + 3] = value >> 24;
};

/**
 * @param {number} offset
 * @param {flatbuffers.Long} value
 */
flatbuffers.ByteBuffer.prototype.writeInt64 = function(offset, value) {
  this.writeInt32(offset, value.low);
  this.writeInt32(offset + 4, value.high);
};

/**
 * @param {number} offset
 * @param {flatbuffers.Long} value
 */
flatbuffers.ByteBuffer.prototype.writeUint64 = function(offset, value) {
    this.writeUint32(offset, value.low);
    this.writeUint32(offset + 4, value.high);
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeFloat32 = function(offset, value) {
  flatbuffers.float32[0] = value;
  this.writeInt32(offset, flatbuffers.int32[0]);
};

/**
 * @param {number} offset
 * @param {number} value
 */
flatbuffers.ByteBuffer.prototype.writeFloat64 = function(offset, value) {
  flatbuffers.float64[0] = value;
  this.writeInt32(offset, flatbuffers.int32[flatbuffers.isLittleEndian ? 0 : 1]);
  this.writeInt32(offset + 4, flatbuffers.int32[flatbuffers.isLittleEndian ? 1 : 0]);
};

/**
 * Return the file identifier.   Behavior is undefined for FlatBuffers whose
 * schema does not include a file_identifier (likely points at padding or the
 * start of a the root vtable).
 * @returns {string}
 */
flatbuffers.ByteBuffer.prototype.getBufferIdentifier = function() {
  if (this.bytes_.length < this.position_ + flatbuffers.SIZEOF_INT +
      flatbuffers.FILE_IDENTIFIER_LENGTH) {
    throw new Error(
        'FlatBuffers: ByteBuffer is too short to contain an identifier.');
  }
  var result = "";
  for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
    result += String.fromCharCode(
        this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i));
  }
  return result;
};

/**
 * Look up a field in the vtable, return an offset into the object, or 0 if the
 * field is not present.
 *
 * @param {number} bb_pos
 * @param {number} vtable_offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.__offset = function(bb_pos, vtable_offset) {
  var vtable = bb_pos - this.readInt32(bb_pos);
  return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
};

/**
 * Initialize any Table-derived type to point to the union at the given offset.
 *
 * @param {flatbuffers.Table} t
 * @param {number} offset
 * @returns {flatbuffers.Table}
 */
flatbuffers.ByteBuffer.prototype.__union = function(t, offset) {
  t.bb_pos = offset + this.readInt32(offset);
  t.bb = this;
  return t;
};

/**
 * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
 * This allocates a new string and converts to wide chars upon each access.
 *
 * To avoid the conversion to UTF-16, pass flatbuffers.Encoding.UTF8_BYTES as
 * the "optionalEncoding" argument. This is useful for avoiding conversion to
 * and from UTF-16 when the data will just be packaged back up in another
 * FlatBuffer later on.
 *
 * @param {number} offset
 * @param {flatbuffers.Encoding=} opt_encoding Defaults to UTF16_STRING
 * @returns {string|Uint8Array}
 */
flatbuffers.ByteBuffer.prototype.__string = function(offset, opt_encoding) {
  offset += this.readInt32(offset);

  var length = this.readInt32(offset);
  var result = '';
  var i = 0;

  offset += flatbuffers.SIZEOF_INT;

  if (opt_encoding === flatbuffers.Encoding.UTF8_BYTES) {
    return this.bytes_.subarray(offset, offset + length);
  }

  while (i < length) {
    var codePoint;

    // Decode UTF-8
    var a = this.readUint8(offset + i++);
    if (a < 0xC0) {
      codePoint = a;
    } else {
      var b = this.readUint8(offset + i++);
      if (a < 0xE0) {
        codePoint =
          ((a & 0x1F) << 6) |
          (b & 0x3F);
      } else {
        var c = this.readUint8(offset + i++);
        if (a < 0xF0) {
          codePoint =
            ((a & 0x0F) << 12) |
            ((b & 0x3F) << 6) |
            (c & 0x3F);
        } else {
          var d = this.readUint8(offset + i++);
          codePoint =
            ((a & 0x07) << 18) |
            ((b & 0x3F) << 12) |
            ((c & 0x3F) << 6) |
            (d & 0x3F);
        }
      }
    }

    // Encode UTF-16
    if (codePoint < 0x10000) {
      result += String.fromCharCode(codePoint);
    } else {
      codePoint -= 0x10000;
      result += String.fromCharCode(
        (codePoint >> 10) + 0xD800,
        (codePoint & ((1 << 10) - 1)) + 0xDC00);
    }
  }

  return result;
};

/**
 * Retrieve the relative offset stored at "offset"
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.__indirect = function(offset) {
  return offset + this.readInt32(offset);
};

/**
 * Get the start of data of a vector whose offset is stored at "offset" in this object.
 *
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.__vector = function(offset) {
  return offset + this.readInt32(offset) + flatbuffers.SIZEOF_INT; // data starts after the length
};

/**
 * Get the length of a vector whose offset is stored at "offset" in this object.
 *
 * @param {number} offset
 * @returns {number}
 */
flatbuffers.ByteBuffer.prototype.__vector_len = function(offset) {
  return this.readInt32(offset + this.readInt32(offset));
};

/**
 * @param {string} ident
 * @returns {boolean}
 */
flatbuffers.ByteBuffer.prototype.__has_identifier = function(ident) {
  if (ident.length != flatbuffers.FILE_IDENTIFIER_LENGTH) {
    throw new Error('FlatBuffers: file identifier must be length ' +
                    flatbuffers.FILE_IDENTIFIER_LENGTH);
  }
  for (var i = 0; i < flatbuffers.FILE_IDENTIFIER_LENGTH; i++) {
    if (ident.charCodeAt(i) != this.readInt8(this.position_ + flatbuffers.SIZEOF_INT + i)) {
      return false;
    }
  }
  return true;
};

/**
 * A helper function to avoid generated code depending on this file directly.
 *
 * @param {number} low
 * @param {number} high
 * @returns {flatbuffers.Long}
 */
flatbuffers.ByteBuffer.prototype.createLong = function(low, high) {
  return flatbuffers.Long.create(low, high);
};

// Exports for Node.js and RequireJS


/// @endcond
/// @}


/***/ }),

/***/ "./node_modules/text-encoding-utf-8/lib/encoding.lib.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/text-encoding-utf-8/lib/encoding.lib.mjs ***!
  \***************************************************************/
/*! exports provided: TextEncoder, TextDecoder */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoder", function() { return TextEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDecoder", function() { return TextDecoder; });


// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.

//
// Utilities
//

/**
 * @param {number} a The number to test.
 * @param {number} min The minimum value in the range, inclusive.
 * @param {number} max The maximum value in the range, inclusive.
 * @return {boolean} True if a >= min and a <= max.
 */
function inRange(a, min, max) {
  return min <= a && a <= max;
}

/**
 * @param {*} o
 * @return {Object}
 */
function ToDictionary(o) {
  if (o === undefined) return {};
  if (o === Object(o)) return o;
  throw TypeError('Could not convert argument to dictionary');
}

/**
 * @param {string} string Input string of UTF-16 code units.
 * @return {!Array.<number>} Code points.
 */
function stringToCodePoints(string) {
  // https://heycam.github.io/webidl/#dfn-obtain-unicode

  // 1. Let S be the DOMString value.
  var s = String(string);

  // 2. Let n be the length of S.
  var n = s.length;

  // 3. Initialize i to 0.
  var i = 0;

  // 4. Initialize U to be an empty sequence of Unicode characters.
  var u = [];

  // 5. While i < n:
  while (i < n) {

    // 1. Let c be the code unit in S at index i.
    var c = s.charCodeAt(i);

    // 2. Depending on the value of c:

    // c < 0xD800 or c > 0xDFFF
    if (c < 0xD800 || c > 0xDFFF) {
      // Append to U the Unicode character with code point c.
      u.push(c);
    }

    // 0xDC00 ≤ c ≤ 0xDFFF
    else if (0xDC00 <= c && c <= 0xDFFF) {
      // Append to U a U+FFFD REPLACEMENT CHARACTER.
      u.push(0xFFFD);
    }

    // 0xD800 ≤ c ≤ 0xDBFF
    else if (0xD800 <= c && c <= 0xDBFF) {
      // 1. If i = n−1, then append to U a U+FFFD REPLACEMENT
      // CHARACTER.
      if (i === n - 1) {
        u.push(0xFFFD);
      }
      // 2. Otherwise, i < n−1:
      else {
        // 1. Let d be the code unit in S at index i+1.
        var d = string.charCodeAt(i + 1);

        // 2. If 0xDC00 ≤ d ≤ 0xDFFF, then:
        if (0xDC00 <= d && d <= 0xDFFF) {
          // 1. Let a be c & 0x3FF.
          var a = c & 0x3FF;

          // 2. Let b be d & 0x3FF.
          var b = d & 0x3FF;

          // 3. Append to U the Unicode character with code point
          // 2^16+2^10*a+b.
          u.push(0x10000 + (a << 10) + b);

          // 4. Set i to i+1.
          i += 1;
        }

        // 3. Otherwise, d < 0xDC00 or d > 0xDFFF. Append to U a
        // U+FFFD REPLACEMENT CHARACTER.
        else  {
          u.push(0xFFFD);
        }
      }
    }

    // 3. Set i to i+1.
    i += 1;
  }

  // 6. Return U.
  return u;
}

/**
 * @param {!Array.<number>} code_points Array of code points.
 * @return {string} string String of UTF-16 code units.
 */
function codePointsToString(code_points) {
  var s = '';
  for (var i = 0; i < code_points.length; ++i) {
    var cp = code_points[i];
    if (cp <= 0xFFFF) {
      s += String.fromCharCode(cp);
    } else {
      cp -= 0x10000;
      s += String.fromCharCode((cp >> 10) + 0xD800,
                               (cp & 0x3FF) + 0xDC00);
    }
  }
  return s;
}


//
// Implementation of Encoding specification
// https://encoding.spec.whatwg.org/
//

//
// 3. Terminology
//

/**
 * End-of-stream is a special token that signifies no more tokens
 * are in the stream.
 * @const
 */ var end_of_stream = -1;

/**
 * A stream represents an ordered sequence of tokens.
 *
 * @constructor
 * @param {!(Array.<number>|Uint8Array)} tokens Array of tokens that provide the
 * stream.
 */
function Stream(tokens) {
  /** @type {!Array.<number>} */
  this.tokens = [].slice.call(tokens);
}

Stream.prototype = {
  /**
   * @return {boolean} True if end-of-stream has been hit.
   */
  endOfStream: function() {
    return !this.tokens.length;
  },

  /**
   * When a token is read from a stream, the first token in the
   * stream must be returned and subsequently removed, and
   * end-of-stream must be returned otherwise.
   *
   * @return {number} Get the next token from the stream, or
   * end_of_stream.
   */
   read: function() {
    if (!this.tokens.length)
      return end_of_stream;
     return this.tokens.shift();
   },

  /**
   * When one or more tokens are prepended to a stream, those tokens
   * must be inserted, in given order, before the first token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The token(s) to prepend to the stream.
   */
  prepend: function(token) {
    if (Array.isArray(token)) {
      var tokens = /**@type {!Array.<number>}*/(token);
      while (tokens.length)
        this.tokens.unshift(tokens.pop());
    } else {
      this.tokens.unshift(token);
    }
  },

  /**
   * When one or more tokens are pushed to a stream, those tokens
   * must be inserted, in given order, after the last token in the
   * stream.
   *
   * @param {(number|!Array.<number>)} token The tokens(s) to prepend to the stream.
   */
  push: function(token) {
    if (Array.isArray(token)) {
      var tokens = /**@type {!Array.<number>}*/(token);
      while (tokens.length)
        this.tokens.push(tokens.shift());
    } else {
      this.tokens.push(token);
    }
  }
};

//
// 4. Encodings
//

// 4.1 Encoders and decoders

/** @const */
var finished = -1;

/**
 * @param {boolean} fatal If true, decoding errors raise an exception.
 * @param {number=} opt_code_point Override the standard fallback code point.
 * @return {number} The code point to insert on a decoding error.
 */
function decoderError(fatal, opt_code_point) {
  if (fatal)
    throw TypeError('Decoder error');
  return opt_code_point || 0xFFFD;
}

/** @interface */
function Decoder() {}
Decoder.prototype = {
  /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point, or |finished|.
   */
  handler: function(stream, bite) {}
};

/** @interface */
function Encoder() {}
Encoder.prototype = {
  /**
   * @param {Stream} stream The stream of code points being encoded.
   * @param {number} code_point Next code point read from the stream.
   * @return {(number|!Array.<number>)} Byte(s) to emit, or |finished|.
   */
  handler: function(stream, code_point) {}
};

//
// 7. API
//

/** @const */ var DEFAULT_ENCODING = 'utf-8';

// 7.1 Interface TextDecoder

/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */
function TextDecoder(encoding, options) {
  if (!(this instanceof TextDecoder)) {
    return new TextDecoder(encoding, options);
  }
  encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
  if (encoding !== DEFAULT_ENCODING) {
    throw new Error('Encoding not supported. Only utf-8 is supported');
  }
  options = ToDictionary(options);

  /** @private @type {boolean} */
  this._streaming = false;
  /** @private @type {boolean} */
  this._BOMseen = false;
  /** @private @type {?Decoder} */
  this._decoder = null;
  /** @private @type {boolean} */
  this._fatal = Boolean(options['fatal']);
  /** @private @type {boolean} */
  this._ignoreBOM = Boolean(options['ignoreBOM']);

  Object.defineProperty(this, 'encoding', {value: 'utf-8'});
  Object.defineProperty(this, 'fatal', {value: this._fatal});
  Object.defineProperty(this, 'ignoreBOM', {value: this._ignoreBOM});
}

TextDecoder.prototype = {
  /**
   * @param {ArrayBufferView=} input The buffer of bytes to decode.
   * @param {Object=} options
   * @return {string} The decoded string.
   */
  decode: function decode(input, options) {
    var bytes;
    if (typeof input === 'object' && input instanceof ArrayBuffer) {
      bytes = new Uint8Array(input);
    } else if (typeof input === 'object' && 'buffer' in input &&
               input.buffer instanceof ArrayBuffer) {
      bytes = new Uint8Array(input.buffer,
                             input.byteOffset,
                             input.byteLength);
    } else {
      bytes = new Uint8Array(0);
    }

    options = ToDictionary(options);

    if (!this._streaming) {
      this._decoder = new UTF8Decoder({fatal: this._fatal});
      this._BOMseen = false;
    }
    this._streaming = Boolean(options['stream']);

    var input_stream = new Stream(bytes);

    var code_points = [];

    /** @type {?(number|!Array.<number>)} */
    var result;

    while (!input_stream.endOfStream()) {
      result = this._decoder.handler(input_stream, input_stream.read());
      if (result === finished)
        break;
      if (result === null)
        continue;
      if (Array.isArray(result))
        code_points.push.apply(code_points, /**@type {!Array.<number>}*/(result));
      else
        code_points.push(result);
    }
    if (!this._streaming) {
      do {
        result = this._decoder.handler(input_stream, input_stream.read());
        if (result === finished)
          break;
        if (result === null)
          continue;
        if (Array.isArray(result))
          code_points.push.apply(code_points, /**@type {!Array.<number>}*/(result));
        else
          code_points.push(result);
      } while (!input_stream.endOfStream());
      this._decoder = null;
    }

    if (code_points.length) {
      // If encoding is one of utf-8, utf-16be, and utf-16le, and
      // ignore BOM flag and BOM seen flag are unset, run these
      // subsubsteps:
      if (['utf-8'].indexOf(this.encoding) !== -1 &&
          !this._ignoreBOM && !this._BOMseen) {
        // If token is U+FEFF, set BOM seen flag.
        if (code_points[0] === 0xFEFF) {
          this._BOMseen = true;
          code_points.shift();
        } else {
          // Otherwise, if token is not end-of-stream, set BOM seen
          // flag and append token to output.
          this._BOMseen = true;
        }
      }
    }

    return codePointsToString(code_points);
  }
};

// 7.2 Interface TextEncoder

/**
 * @constructor
 * @param {string=} encoding The label of the encoding;
 *     defaults to 'utf-8'.
 * @param {Object=} options
 */
function TextEncoder(encoding, options) {
  if (!(this instanceof TextEncoder))
    return new TextEncoder(encoding, options);
  encoding = encoding !== undefined ? String(encoding).toLowerCase() : DEFAULT_ENCODING;
  if (encoding !== DEFAULT_ENCODING) {
    throw new Error('Encoding not supported. Only utf-8 is supported');
  }
  options = ToDictionary(options);

  /** @private @type {boolean} */
  this._streaming = false;
  /** @private @type {?Encoder} */
  this._encoder = null;
  /** @private @type {{fatal: boolean}} */
  this._options = {fatal: Boolean(options['fatal'])};

  Object.defineProperty(this, 'encoding', {value: 'utf-8'});
}

TextEncoder.prototype = {
  /**
   * @param {string=} opt_string The string to encode.
   * @param {Object=} options
   * @return {Uint8Array} Encoded bytes, as a Uint8Array.
   */
  encode: function encode(opt_string, options) {
    opt_string = opt_string ? String(opt_string) : '';
    options = ToDictionary(options);

    // NOTE: This option is nonstandard. None of the encodings
    // permitted for encoding (i.e. UTF-8, UTF-16) are stateful,
    // so streaming is not necessary.
    if (!this._streaming)
      this._encoder = new UTF8Encoder(this._options);
    this._streaming = Boolean(options['stream']);

    var bytes = [];
    var input_stream = new Stream(stringToCodePoints(opt_string));
    /** @type {?(number|!Array.<number>)} */
    var result;
    while (!input_stream.endOfStream()) {
      result = this._encoder.handler(input_stream, input_stream.read());
      if (result === finished)
        break;
      if (Array.isArray(result))
        bytes.push.apply(bytes, /**@type {!Array.<number>}*/(result));
      else
        bytes.push(result);
    }
    if (!this._streaming) {
      while (true) {
        result = this._encoder.handler(input_stream, input_stream.read());
        if (result === finished)
          break;
        if (Array.isArray(result))
          bytes.push.apply(bytes, /**@type {!Array.<number>}*/(result));
        else
          bytes.push(result);
      }
      this._encoder = null;
    }
    return new Uint8Array(bytes);
  }
};

//
// 8. The encoding
//

// 8.1 utf-8

/**
 * @constructor
 * @implements {Decoder}
 * @param {{fatal: boolean}} options
 */
function UTF8Decoder(options) {
  var fatal = options.fatal;

  // utf-8's decoder's has an associated utf-8 code point, utf-8
  // bytes seen, and utf-8 bytes needed (all initially 0), a utf-8
  // lower boundary (initially 0x80), and a utf-8 upper boundary
  // (initially 0xBF).
  var /** @type {number} */ utf8_code_point = 0,
      /** @type {number} */ utf8_bytes_seen = 0,
      /** @type {number} */ utf8_bytes_needed = 0,
      /** @type {number} */ utf8_lower_boundary = 0x80,
      /** @type {number} */ utf8_upper_boundary = 0xBF;

  /**
   * @param {Stream} stream The stream of bytes being decoded.
   * @param {number} bite The next byte read from the stream.
   * @return {?(number|!Array.<number>)} The next code point(s)
   *     decoded, or null if not enough data exists in the input
   *     stream to decode a complete code point.
   */
  this.handler = function(stream, bite) {
    // 1. If byte is end-of-stream and utf-8 bytes needed is not 0,
    // set utf-8 bytes needed to 0 and return error.
    if (bite === end_of_stream && utf8_bytes_needed !== 0) {
      utf8_bytes_needed = 0;
      return decoderError(fatal);
    }

    // 2. If byte is end-of-stream, return finished.
    if (bite === end_of_stream)
      return finished;

    // 3. If utf-8 bytes needed is 0, based on byte:
    if (utf8_bytes_needed === 0) {

      // 0x00 to 0x7F
      if (inRange(bite, 0x00, 0x7F)) {
        // Return a code point whose value is byte.
        return bite;
      }

      // 0xC2 to 0xDF
      if (inRange(bite, 0xC2, 0xDF)) {
        // Set utf-8 bytes needed to 1 and utf-8 code point to byte
        // − 0xC0.
        utf8_bytes_needed = 1;
        utf8_code_point = bite - 0xC0;
      }

      // 0xE0 to 0xEF
      else if (inRange(bite, 0xE0, 0xEF)) {
        // 1. If byte is 0xE0, set utf-8 lower boundary to 0xA0.
        if (bite === 0xE0)
          utf8_lower_boundary = 0xA0;
        // 2. If byte is 0xED, set utf-8 upper boundary to 0x9F.
        if (bite === 0xED)
          utf8_upper_boundary = 0x9F;
        // 3. Set utf-8 bytes needed to 2 and utf-8 code point to
        // byte − 0xE0.
        utf8_bytes_needed = 2;
        utf8_code_point = bite - 0xE0;
      }

      // 0xF0 to 0xF4
      else if (inRange(bite, 0xF0, 0xF4)) {
        // 1. If byte is 0xF0, set utf-8 lower boundary to 0x90.
        if (bite === 0xF0)
          utf8_lower_boundary = 0x90;
        // 2. If byte is 0xF4, set utf-8 upper boundary to 0x8F.
        if (bite === 0xF4)
          utf8_upper_boundary = 0x8F;
        // 3. Set utf-8 bytes needed to 3 and utf-8 code point to
        // byte − 0xF0.
        utf8_bytes_needed = 3;
        utf8_code_point = bite - 0xF0;
      }

      // Otherwise
      else {
        // Return error.
        return decoderError(fatal);
      }

      // Then (byte is in the range 0xC2 to 0xF4) set utf-8 code
      // point to utf-8 code point << (6 × utf-8 bytes needed) and
      // return continue.
      utf8_code_point = utf8_code_point << (6 * utf8_bytes_needed);
      return null;
    }

    // 4. If byte is not in the range utf-8 lower boundary to utf-8
    // upper boundary, run these substeps:
    if (!inRange(bite, utf8_lower_boundary, utf8_upper_boundary)) {

      // 1. Set utf-8 code point, utf-8 bytes needed, and utf-8
      // bytes seen to 0, set utf-8 lower boundary to 0x80, and set
      // utf-8 upper boundary to 0xBF.
      utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;
      utf8_lower_boundary = 0x80;
      utf8_upper_boundary = 0xBF;

      // 2. Prepend byte to stream.
      stream.prepend(bite);

      // 3. Return error.
      return decoderError(fatal);
    }

    // 5. Set utf-8 lower boundary to 0x80 and utf-8 upper boundary
    // to 0xBF.
    utf8_lower_boundary = 0x80;
    utf8_upper_boundary = 0xBF;

    // 6. Increase utf-8 bytes seen by one and set utf-8 code point
    // to utf-8 code point + (byte − 0x80) << (6 × (utf-8 bytes
    // needed − utf-8 bytes seen)).
    utf8_bytes_seen += 1;
    utf8_code_point += (bite - 0x80) << (6 * (utf8_bytes_needed - utf8_bytes_seen));

    // 7. If utf-8 bytes seen is not equal to utf-8 bytes needed,
    // continue.
    if (utf8_bytes_seen !== utf8_bytes_needed)
      return null;

    // 8. Let code point be utf-8 code point.
    var code_point = utf8_code_point;

    // 9. Set utf-8 code point, utf-8 bytes needed, and utf-8 bytes
    // seen to 0.
    utf8_code_point = utf8_bytes_needed = utf8_bytes_seen = 0;

    // 10. Return a code point whose value is code point.
    return code_point;
  };
}

/**
 * @constructor
 * @implements {Encoder}
 * @param {{fatal: boolean}} options
 */
function UTF8Encoder(options) {
  var fatal = options.fatal;
  /**
   * @param {Stream} stream Input stream.
   * @param {number} code_point Next code point read from the stream.
   * @return {(number|!Array.<number>)} Byte(s) to emit.
   */
  this.handler = function(stream, code_point) {
    // 1. If code point is end-of-stream, return finished.
    if (code_point === end_of_stream)
      return finished;

    // 2. If code point is in the range U+0000 to U+007F, return a
    // byte whose value is code point.
    if (inRange(code_point, 0x0000, 0x007f))
      return code_point;

    // 3. Set count and offset based on the range code point is in:
    var count, offset;
    // U+0080 to U+07FF:    1 and 0xC0
    if (inRange(code_point, 0x0080, 0x07FF)) {
      count = 1;
      offset = 0xC0;
    }
    // U+0800 to U+FFFF:    2 and 0xE0
    else if (inRange(code_point, 0x0800, 0xFFFF)) {
      count = 2;
      offset = 0xE0;
    }
    // U+10000 to U+10FFFF: 3 and 0xF0
    else if (inRange(code_point, 0x10000, 0x10FFFF)) {
      count = 3;
      offset = 0xF0;
    }

    // 4.Let bytes be a byte sequence whose first byte is (code
    // point >> (6 × count)) + offset.
    var bytes = [(code_point >> (6 * count)) + offset];

    // 5. Run these substeps while count is greater than 0:
    while (count > 0) {

      // 1. Set temp to code point >> (6 × (count − 1)).
      var temp = code_point >> (6 * (count - 1));

      // 2. Append to bytes 0x80 | (temp & 0x3F).
      bytes.push(0x80 | (temp & 0x3F));

      // 3. Decrease count by one.
      count -= 1;
    }

    // 6. Return bytes bytes, in order.
    return bytes;
  };
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map