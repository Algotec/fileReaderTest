# fileReaderTest
Tests heavy load on file reader. crashes chrome, works in IE and firefox

Works by loading the same large image to a new filereader every 20 ms. Uses .readAsArrayBuffer function.

documented with chromioum with issue [11458](https://bugs.chromium.org/p/chromium/issues/detail?id=114548)
