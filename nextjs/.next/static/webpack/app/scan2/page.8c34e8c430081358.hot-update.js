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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst BarcodeScanner = (param)=>{\n    let { onDetected } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initQuagga = async ()=>{\n            try {\n                var _videoRef_current;\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                if (videoRef.current) {\n                    videoRef.current.srcObject = stream;\n                }\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                    inputStream: {\n                        name: \"Live\",\n                        type: \"LiveStream\",\n                        target: (_videoRef_current = videoRef.current) === null || _videoRef_current === void 0 ? void 0 : _videoRef_current.srcObject\n                    },\n                    decoder: {\n                        readers: [\n                            \"ean_reader\"\n                        ]\n                    }\n                }, (err)=>{\n                    if (err) {\n                        console.error(\"Error initializing Quagga:\", err);\n                        return;\n                    }\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    // Listen to barcode detection\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                        onDetected(data.codeResult.code);\n                    });\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        initQuagga();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        };\n    }, [\n        onDetected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        ref: videoRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, undefined);\n};\n_s(BarcodeScanner, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = BarcodeScanner;\nconst App = ()=>{\n    _s1();\n    const [scannedCode, setScannedCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleBarcodeDetected = (code)=>{\n        if (code) {\n            setScannedCode(code);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Barcode Scanner\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            scannedCode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Scanned code: \",\n                    scannedCode\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BarcodeScanner, {\n                onDetected: handleBarcodeDetected\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(App, \"R6x0XRLqmQmEY0jYK+NMWFC2mGA=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"BarcodeScanner\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssaUJBQW1FO1FBQUMsRUFDeEVDLFVBQVUsRUFDWDs7SUFDRyxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBMEI7SUFFbkRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYTtZQUNqQixJQUFJO29CQWFZRDtnQkFaZCxNQUFNRSxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO29CQUN2REMsT0FBTztnQkFDVDtnQkFDQSxJQUFJTixTQUFTTyxPQUFPLEVBQUU7b0JBQ3BCUCxTQUFTTyxPQUFPLENBQUNDLFNBQVMsR0FBR047Z0JBQy9CO2dCQUVBTCw4REFBVyxDQUNUO29CQUNFYSxhQUFhO3dCQUNYQyxNQUFNO3dCQUNOQyxNQUFNO3dCQUNOQyxNQUFNLEdBQUViLG9CQUFBQSxTQUFTTyxPQUFPLGNBQWhCUCx3Q0FBQUEsa0JBQWtCUSxTQUFTO29CQUNyQztvQkFDQU0sU0FBUzt3QkFDUEMsU0FBUzs0QkFBQzt5QkFBYTtvQkFDekI7Z0JBQ0YsR0FDQSxDQUFDQztvQkFDQyxJQUFJQSxLQUFLO3dCQUNQQyxRQUFRQyxLQUFLLENBQUMsOEJBQThCRjt3QkFDNUM7b0JBQ0Y7b0JBQ0FuQiwrREFBWTtvQkFFWiw4QkFBOEI7b0JBQzlCQSxvRUFBaUIsQ0FBQyxDQUFDdUI7d0JBQ2pCckIsV0FBV3FCLEtBQUtDLFVBQVUsQ0FBQ0MsSUFBSTtvQkFDakM7Z0JBQ0Y7WUFFSixFQUFFLE9BQU9KLE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1lBQzNDO1FBQ0Y7UUFFQWpCO1FBRUEsT0FBTztZQUNMSiw4REFBVztRQUNiO0lBQ0YsR0FBRztRQUFDRTtLQUFXO0lBRWYscUJBQU8sOERBQUNPO1FBQU1rQixLQUFLeEI7Ozs7OztBQUNyQjtHQXBETUY7S0FBQUE7QUFzRE4sTUFBTTJCLE1BQWdCOztJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRy9CLCtDQUFRQSxDQUFnQjtJQUU5RCxNQUFNZ0Msd0JBQXdCLENBQUNOO1FBQzdCLElBQUlBLE1BQU07WUFDUkssZUFBZUw7UUFDakI7SUFDRjtJQUdBLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEosNEJBQ0MsOERBQUNLOztvQkFBRTtvQkFBZUw7Ozs7OzswQ0FFbEIsOERBQUM1QjtnQkFBZUMsWUFBWTZCOzs7Ozs7Ozs7Ozs7QUFJcEM7SUFwQk1IO01BQUFBO0FBc0JOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5jb25zdCBCYXJjb2RlU2Nhbm5lcjogUmVhY3QuRkM8eyBvbkRldGVjdGVkOiAoY29kZTogc3RyaW5nKSA9PiB2b2lkIH0+ID0gKHtcclxuICBvbkRldGVjdGVkLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0UXVhZ2dhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFF1YWdnYS5pbml0KFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiTGl2ZVwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiTGl2ZVN0cmVhbVwiLFxyXG4gICAgICAgICAgICAgIHRhcmdldDogdmlkZW9SZWYuY3VycmVudD8uc3JjT2JqZWN0IGFzIEVsZW1lbnQgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlY29kZXI6IHtcclxuICAgICAgICAgICAgICByZWFkZXJzOiBbXCJlYW5fcmVhZGVyXCJdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbml0aWFsaXppbmcgUXVhZ2dhOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBRdWFnZ2Euc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpc3RlbiB0byBiYXJjb2RlIGRldGVjdGlvblxyXG4gICAgICAgICAgICBRdWFnZ2Eub25EZXRlY3RlZCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIG9uRGV0ZWN0ZWQoZGF0YS5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdFF1YWdnYSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIFF1YWdnYS5zdG9wKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtvbkRldGVjdGVkXSk7XHJcblxyXG4gIHJldHVybiA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gLz47XHJcbn07XHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzY2FubmVkQ29kZSwgc2V0U2Nhbm5lZENvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhcmNvZGVEZXRlY3RlZCA9IChjb2RlOiBzdHJpbmcgfCBudWxsKSA9PiB7XHJcbiAgICBpZiAoY29kZSkge1xyXG4gICAgICBzZXRTY2FubmVkQ29kZShjb2RlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkJhcmNvZGUgU2Nhbm5lcjwvaDE+XHJcbiAgICAgIHtzY2FubmVkQ29kZSA/IChcclxuICAgICAgICA8cD5TY2FubmVkIGNvZGU6IHtzY2FubmVkQ29kZX08L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJhcmNvZGVTY2FubmVyIG9uRGV0ZWN0ZWQ9e2hhbmRsZUJhcmNvZGVEZXRlY3RlZH0gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUXVhZ2dhIiwiQmFyY29kZVNjYW5uZXIiLCJvbkRldGVjdGVkIiwidmlkZW9SZWYiLCJpbml0UXVhZ2dhIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJjdXJyZW50Iiwic3JjT2JqZWN0IiwiaW5pdCIsImlucHV0U3RyZWFtIiwibmFtZSIsInR5cGUiLCJ0YXJnZXQiLCJkZWNvZGVyIiwicmVhZGVycyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXJ0IiwiZGF0YSIsImNvZGVSZXN1bHQiLCJjb2RlIiwic3RvcCIsInJlZiIsIkFwcCIsInNjYW5uZWRDb2RlIiwic2V0U2Nhbm5lZENvZGUiLCJoYW5kbGVCYXJjb2RlRGV0ZWN0ZWQiLCJkaXYiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});