"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/scan2/page",{

/***/ "(app-pages-browser)/./src/app/scan2/page.tsx":
/*!********************************!*\
  !*** ./src/app/scan2/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst BarcodeScanner = (param)=>{\n    let { onDetected } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initQuagga = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                if (videoRef.current) {\n                    videoRef.current.srcObject = stream;\n                }\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                    inputStream: {\n                        name: \"Live\",\n                        type: \"LiveStream\",\n                        target: videoRef.current\n                    },\n                    decoder: {\n                        readers: [\n                            \"ean_reader\"\n                        ]\n                    }\n                }, (err)=>{\n                    if (err) {\n                        console.error(\"Error initializing Quagga:\", err);\n                        return;\n                    }\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    // Listen to barcode detection\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                        onDetected(data.codeResult.code);\n                    });\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        initQuagga();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        };\n    }, [\n        onDetected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        ref: videoRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, undefined);\n};\n_s(BarcodeScanner, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = BarcodeScanner;\nconst App = ()=>{\n    _s1();\n    const [scannedCode, setScannedCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleBarcodeDetected = (code)=>{\n        if (code) {\n            setScannedCode(code);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Barcode Scanner\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            scannedCode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Scanned code: \",\n                    scannedCode\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BarcodeScanner, {\n                onDetected: handleBarcodeDetected\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(App, \"R6x0XRLqmQmEY0jYK+NMWFC2mGA=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"BarcodeScanner\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssaUJBQW1FO1FBQUMsRUFDeEVDLFVBQVUsRUFDWDs7SUFDQyxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBbUI7SUFFMUNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUNBLElBQUlOLFNBQVNPLE9BQU8sRUFBRTtvQkFDcEJQLFNBQVNPLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHTjtnQkFDL0I7Z0JBRUFMLDhEQUFXLENBQ1Q7b0JBQ0VhLGFBQWE7d0JBQ1hDLE1BQU07d0JBQ05DLE1BQU07d0JBQ05DLFFBQVFiLFNBQVNPLE9BQU87b0JBQzFCO29CQUNBTyxTQUFTO3dCQUNQQyxTQUFTOzRCQUFDO3lCQUFhO29CQUN6QjtnQkFDRixHQUNBLENBQUNDO29CQUNDLElBQUlBLEtBQUs7d0JBQ1BDLFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJGO3dCQUM1QztvQkFDRjtvQkFDQW5CLCtEQUFZO29CQUVaLDhCQUE4QjtvQkFDOUJBLG9FQUFpQixDQUFDLENBQUN1Qjt3QkFDakJyQixXQUFXcUIsS0FBS0MsVUFBVSxDQUFDQyxJQUFJO29CQUNqQztnQkFDRjtZQUVKLEVBQUUsT0FBT0osT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBakI7UUFFQSxPQUFPO1lBQ0xKLDhEQUFXO1FBQ2I7SUFDRixHQUFHO1FBQUNFO0tBQVc7SUFFZixxQkFBTyw4REFBQ087UUFBTWtCLEtBQUt4Qjs7Ozs7O0FBQ3JCO0dBcERNRjtLQUFBQTtBQXNETixNQUFNMkIsTUFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHL0IsK0NBQVFBLENBQWdCO0lBRTlELE1BQU1nQyx3QkFBd0IsQ0FBQ047UUFDN0IsSUFBSUEsTUFBTTtZQUNSSyxlQUFlTDtRQUNqQjtJQUNGO0lBR0EscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISiw0QkFDQyw4REFBQ0s7O29CQUFFO29CQUFlTDs7Ozs7OzBDQUVsQiw4REFBQzVCO2dCQUFlQyxZQUFZNkI7Ozs7Ozs7Ozs7OztBQUlwQztJQXBCTUg7TUFBQUE7QUFzQk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zY2FuMi9wYWdlLnRzeD80MzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUXVhZ2dhIGZyb20gXCJAZXJpY2JsYWRlL3F1YWdnYTJcIjtcclxuXHJcbmNvbnN0IEJhcmNvZGVTY2FubmVyOiBSZWFjdC5GQzx7IG9uRGV0ZWN0ZWQ6IChjb2RlOiBzdHJpbmcpID0+IHZvaWQgfT4gPSAoe1xyXG4gIG9uRGV0ZWN0ZWQsXHJcbn0pID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGluaXRRdWFnZ2EgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUXVhZ2dhLmluaXQoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlucHV0U3RyZWFtOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJMaXZlXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJMaXZlU3RyZWFtXCIsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiB2aWRlb1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgcmVhZGVyczogW1wiZWFuX3JlYWRlclwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIFF1YWdnYTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gYmFyY29kZSBkZXRlY3Rpb25cclxuICAgICAgICAgICAgUXVhZ2dhLm9uRGV0ZWN0ZWQoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBvbkRldGVjdGVkKGRhdGEuY29kZVJlc3VsdC5jb2RlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIGNhbWVyYTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRRdWFnZ2EoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgfTtcclxuICB9LCBbb25EZXRlY3RlZF0pO1xyXG5cclxuICByZXR1cm4gPHZpZGVvIHJlZj17dmlkZW9SZWZ9IC8+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbc2Nhbm5lZENvZGUsIHNldFNjYW5uZWRDb2RlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYXJjb2RlRGV0ZWN0ZWQgPSAoY29kZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xyXG4gICAgaWYgKGNvZGUpIHtcclxuICAgICAgc2V0U2Nhbm5lZENvZGUoY29kZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5CYXJjb2RlIFNjYW5uZXI8L2gxPlxyXG4gICAgICB7c2Nhbm5lZENvZGUgPyAoXHJcbiAgICAgICAgPHA+U2Nhbm5lZCBjb2RlOiB7c2Nhbm5lZENvZGV9PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCYXJjb2RlU2Nhbm5lciBvbkRldGVjdGVkPXtoYW5kbGVCYXJjb2RlRGV0ZWN0ZWR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlF1YWdnYSIsIkJhcmNvZGVTY2FubmVyIiwib25EZXRlY3RlZCIsInZpZGVvUmVmIiwiaW5pdFF1YWdnYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiY3VycmVudCIsInNyY09iamVjdCIsImluaXQiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJ0eXBlIiwidGFyZ2V0IiwiZGVjb2RlciIsInJlYWRlcnMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydCIsImRhdGEiLCJjb2RlUmVzdWx0IiwiY29kZSIsInN0b3AiLCJyZWYiLCJBcHAiLCJzY2FubmVkQ29kZSIsInNldFNjYW5uZWRDb2RlIiwiaGFuZGxlQmFyY29kZURldGVjdGVkIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});