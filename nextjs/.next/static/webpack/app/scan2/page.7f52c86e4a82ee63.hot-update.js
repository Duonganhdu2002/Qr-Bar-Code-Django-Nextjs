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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst BarcodeScanner = (param)=>{\n    let { onDetected } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initQuagga = async ()=>{\n            try {\n                var _videoRef_current;\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                if (videoRef.current) {\n                    videoRef.current.srcObject = stream;\n                }\n                _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                    inputStream: {\n                        name: \"Live\",\n                        type: \"LiveStream\",\n                        target: (_videoRef_current = videoRef.current) === null || _videoRef_current === void 0 ? void 0 : _videoRef_current.srcObject\n                    },\n                    decoder: {\n                        readers: [\n                            \"ean_reader\"\n                        ]\n                    }\n                }, (err)=>{\n                    if (err) {\n                        console.error(\"Error initializing Quagga:\", err);\n                        return;\n                    }\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    // Listen to barcode detection\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                        var _data_codeResult;\n                        const code = (_data_codeResult = data.codeResult) === null || _data_codeResult === void 0 ? void 0 : _data_codeResult.code;\n                        if (code) {\n                            onDetected(code);\n                        }\n                    });\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        initQuagga();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n        };\n    }, [\n        onDetected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        ref: videoRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 60,\n        columnNumber: 10\n    }, undefined);\n};\n_s(BarcodeScanner, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = BarcodeScanner;\nconst App = ()=>{\n    _s1();\n    const [scannedCode, setScannedCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleBarcodeDetected = (code)=>{\n        if (code) {\n            setScannedCode(code);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Barcode Scanner\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            scannedCode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Scanned code: \",\n                    scannedCode\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BarcodeScanner, {\n                onDetected: handleBarcodeDetected\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(App, \"R6x0XRLqmQmEY0jYK+NMWFC2mGA=\");\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"BarcodeScanner\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssaUJBQW1FO1FBQUMsRUFDeEVDLFVBQVUsRUFDWDs7SUFDQyxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBMEI7SUFFakRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYTtZQUNqQixJQUFJO29CQWFZRDtnQkFaZCxNQUFNRSxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO29CQUN2REMsT0FBTztnQkFDVDtnQkFDQSxJQUFJTixTQUFTTyxPQUFPLEVBQUU7b0JBQ3BCUCxTQUFTTyxPQUFPLENBQUNDLFNBQVMsR0FBR047Z0JBQy9CO2dCQUVBTCw4REFBVyxDQUNUO29CQUNFYSxhQUFhO3dCQUNYQyxNQUFNO3dCQUNOQyxNQUFNO3dCQUNOQyxNQUFNLEdBQUViLG9CQUFBQSxTQUFTTyxPQUFPLGNBQWhCUCx3Q0FBQUEsa0JBQWtCUSxTQUFTO29CQUNyQztvQkFDQU0sU0FBUzt3QkFDUEMsU0FBUzs0QkFBQzt5QkFBYTtvQkFDekI7Z0JBQ0YsR0FDQSxDQUFDQztvQkFDQyxJQUFJQSxLQUFLO3dCQUNQQyxRQUFRQyxLQUFLLENBQUMsOEJBQThCRjt3QkFDNUM7b0JBQ0Y7b0JBQ0FuQiwrREFBWTtvQkFFWiw4QkFBOEI7b0JBQzlCQSxvRUFBaUIsQ0FBQyxDQUFDdUI7NEJBQ0pBO3dCQUFiLE1BQU1DLFFBQU9ELG1CQUFBQSxLQUFLRSxVQUFVLGNBQWZGLHVDQUFBQSxpQkFBaUJDLElBQUk7d0JBQ2xDLElBQUlBLE1BQU07NEJBQ1J0QixXQUFXc0I7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7WUFFSixFQUFFLE9BQU9ILE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1lBQzNDO1FBQ0Y7UUFFQWpCO1FBRUEsT0FBTztZQUNMSiw4REFBVztRQUNiO0lBQ0YsR0FBRztRQUFDRTtLQUFXO0lBRWYscUJBQU8sOERBQUNPO1FBQU1rQixLQUFLeEI7Ozs7OztBQUNyQjtHQXZETUY7S0FBQUE7QUF5RE4sTUFBTTJCLE1BQWdCOztJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBRy9CLCtDQUFRQSxDQUFnQjtJQUU5RCxNQUFNZ0Msd0JBQXdCLENBQUNQO1FBQzdCLElBQUlBLE1BQU07WUFDUk0sZUFBZU47UUFDakI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSEosNEJBQ0MsOERBQUNLOztvQkFBRTtvQkFBZUw7Ozs7OzswQ0FFbEIsOERBQUM1QjtnQkFBZUMsWUFBWTZCOzs7Ozs7Ozs7Ozs7QUFJcEM7SUFuQk1IO01BQUFBO0FBcUJOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5jb25zdCBCYXJjb2RlU2Nhbm5lcjogUmVhY3QuRkM8eyBvbkRldGVjdGVkOiAoY29kZTogc3RyaW5nKSA9PiB2b2lkIH0+ID0gKHtcclxuICBvbkRldGVjdGVkLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdFF1YWdnYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBRdWFnZ2EuaW5pdChcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW5wdXRTdHJlYW06IHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIkxpdmVcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcIkxpdmVTdHJlYW1cIixcclxuICAgICAgICAgICAgICB0YXJnZXQ6IHZpZGVvUmVmLmN1cnJlbnQ/LnNyY09iamVjdCBhcyBFbGVtZW50IHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgcmVhZGVyczogW1wiZWFuX3JlYWRlclwiXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIFF1YWdnYTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gYmFyY29kZSBkZXRlY3Rpb25cclxuICAgICAgICAgICAgUXVhZ2dhLm9uRGV0ZWN0ZWQoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjb2RlID0gZGF0YS5jb2RlUmVzdWx0Py5jb2RlO1xyXG4gICAgICAgICAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkRldGVjdGVkKGNvZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIGNhbWVyYTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGluaXRRdWFnZ2EoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgfTtcclxuICB9LCBbb25EZXRlY3RlZF0pO1xyXG5cclxuICByZXR1cm4gPHZpZGVvIHJlZj17dmlkZW9SZWZ9IC8+O1xyXG59O1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbc2Nhbm5lZENvZGUsIHNldFNjYW5uZWRDb2RlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCYXJjb2RlRGV0ZWN0ZWQgPSAoY29kZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xyXG4gICAgaWYgKGNvZGUpIHtcclxuICAgICAgc2V0U2Nhbm5lZENvZGUoY29kZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5CYXJjb2RlIFNjYW5uZXI8L2gxPlxyXG4gICAgICB7c2Nhbm5lZENvZGUgPyAoXHJcbiAgICAgICAgPHA+U2Nhbm5lZCBjb2RlOiB7c2Nhbm5lZENvZGV9PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCYXJjb2RlU2Nhbm5lciBvbkRldGVjdGVkPXtoYW5kbGVCYXJjb2RlRGV0ZWN0ZWR9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlF1YWdnYSIsIkJhcmNvZGVTY2FubmVyIiwib25EZXRlY3RlZCIsInZpZGVvUmVmIiwiaW5pdFF1YWdnYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiY3VycmVudCIsInNyY09iamVjdCIsImluaXQiLCJpbnB1dFN0cmVhbSIsIm5hbWUiLCJ0eXBlIiwidGFyZ2V0IiwiZGVjb2RlciIsInJlYWRlcnMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydCIsImRhdGEiLCJjb2RlIiwiY29kZVJlc3VsdCIsInN0b3AiLCJyZWYiLCJBcHAiLCJzY2FubmVkQ29kZSIsInNldFNjYW5uZWRDb2RlIiwiaGFuZGxlQmFyY29kZURldGVjdGVkIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});