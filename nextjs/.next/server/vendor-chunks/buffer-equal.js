"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/buffer-equal";
exports.ids = ["vendor-chunks/buffer-equal"];
exports.modules = {

/***/ "(ssr)/./node_modules/buffer-equal/index.js":
/*!********************************************!*\
  !*** ./node_modules/buffer-equal/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Buffer = (__webpack_require__(/*! buffer */ \"buffer\").Buffer); // for use with browserify\nmodule.exports = function(a, b) {\n    if (!Buffer.isBuffer(a)) return undefined;\n    if (!Buffer.isBuffer(b)) return undefined;\n    if (typeof a.equals === \"function\") return a.equals(b);\n    if (a.length !== b.length) return false;\n    for(var i = 0; i < a.length; i++){\n        if (a[i] !== b[i]) return false;\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWVxdWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxTQUFTQyxvREFBd0IsRUFBRSwwQkFBMEI7QUFFakVDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDLEVBQUVDLENBQUM7SUFDM0IsSUFBSSxDQUFDTCxPQUFPTSxRQUFRLENBQUNGLElBQUksT0FBT0c7SUFDaEMsSUFBSSxDQUFDUCxPQUFPTSxRQUFRLENBQUNELElBQUksT0FBT0U7SUFDaEMsSUFBSSxPQUFPSCxFQUFFSSxNQUFNLEtBQUssWUFBWSxPQUFPSixFQUFFSSxNQUFNLENBQUNIO0lBQ3BELElBQUlELEVBQUVLLE1BQU0sS0FBS0osRUFBRUksTUFBTSxFQUFFLE9BQU87SUFFbEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlOLEVBQUVLLE1BQU0sRUFBRUMsSUFBSztRQUMvQixJQUFJTixDQUFDLENBQUNNLEVBQUUsS0FBS0wsQ0FBQyxDQUFDSyxFQUFFLEVBQUUsT0FBTztJQUM5QjtJQUVBLE9BQU87QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL3FyLWNvZGUvLi9ub2RlX21vZHVsZXMvYnVmZmVyLWVxdWFsL2luZGV4LmpzPzA1ZDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjsgLy8gZm9yIHVzZSB3aXRoIGJyb3dzZXJpZnlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgYS5lcXVhbHMgPT09ICdmdW5jdGlvbicpIHJldHVybiBhLmVxdWFscyhiKTtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xufTtcbiJdLCJuYW1lcyI6WyJCdWZmZXIiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImEiLCJiIiwiaXNCdWZmZXIiLCJ1bmRlZmluZWQiLCJlcXVhbHMiLCJsZW5ndGgiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/buffer-equal/index.js\n");

/***/ })

};
;