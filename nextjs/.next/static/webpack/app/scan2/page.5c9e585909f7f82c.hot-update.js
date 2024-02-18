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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                        inputStream: {\n                            name: \"Live\",\n                            type: \"LiveStream\",\n                            target: videoElement\n                        },\n                        numOfWorkers: 1,\n                        locate: true,\n                        frequency: 10,\n                        decoder: {\n                            readers: [\n                                \"code_128_reader\"\n                            ]\n                        }\n                    }, (err)=>{\n                        if (err) {\n                            console.error(\"Error initializing Quagga:\", err);\n                            return;\n                        }\n                        console.log(\"Quagga initialized successfully\");\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    });\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                        console.log(\"Barcode detected:\", data);\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n                        stream.getTracks().forEach((track)=>track.stop());\n                        var _data_codeResult_code;\n                        setUserCode((_data_codeResult_code = data.codeResult.code) !== null && _data_codeResult_code !== void 0 ? _data_codeResult_code : \"\");\n                    });\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n            const videoElement = videoRef.current;\n            if (videoElement) {\n                const stream = videoElement.srcObject;\n                const tracks = (stream === null || stream === void 0 ? void 0 : stream.getTracks()) || [];\n                tracks.forEach((track)=>track.stop());\n            }\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBRzlDbEIsOERBQVcsQ0FDVDt3QkFDRW9CLGFBQWE7NEJBQ1hDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLFFBQVFaO3dCQUNWO3dCQUNBYSxjQUFjO3dCQUNkQyxRQUFRO3dCQUNSQyxXQUFXO3dCQUNYQyxTQUFTOzRCQUNQQyxTQUFTO2dDQUFDOzZCQUFrQjt3QkFDOUI7b0JBQ0YsR0FDQSxDQUFDQzt3QkFDQyxJQUFJQSxLQUFLOzRCQUNQQyxRQUFRQyxLQUFLLENBQUMsOEJBQThCRjs0QkFDNUM7d0JBQ0Y7d0JBRUFDLFFBQVFFLEdBQUcsQ0FBQzt3QkFFWmhDLCtEQUFZO29CQUNkO29CQUdGQSxvRUFBaUIsQ0FBQyxDQUFDbUM7d0JBQ2pCTCxRQUFRRSxHQUFHLENBQUMscUJBQXFCRzt3QkFDakNuQyw4REFBVzt3QkFDWE0sT0FBTytCLFNBQVMsR0FBR0MsT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1ILElBQUk7NEJBQ3BDRDt3QkFBWi9CLFlBQVkrQixDQUFBQSx3QkFBQUEsS0FBS0ssVUFBVSxDQUFDQyxJQUFJLGNBQXBCTixtQ0FBQUEsd0JBQXdCO29CQUN0QztnQkFDRjtZQUNGLEVBQUUsT0FBT0osT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBMUI7UUFFQSxPQUFPO1lBQ0xMLDhEQUFXO1lBQ1gsTUFBTVcsZUFBZVQsU0FBU2MsT0FBTztZQUVyQyxJQUFJTCxjQUFjO2dCQUNoQixNQUFNTCxTQUFTSyxhQUFhRyxTQUFTO2dCQUNyQyxNQUFNNEIsU0FBU3BDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUStCLFNBQVMsT0FBTSxFQUFFO2dCQUN4Q0ssT0FBT0osT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1ILElBQUk7WUFDdEM7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1PLGNBQWM7UUFDbEJDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN0QztvQkFBTXVDLEtBQUsvQzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUM2QztnQkFBSUMsV0FBVTswQkFDWjdDLDBCQUNDLDhEQUFDNEM7O3NDQUNDLDhEQUFDRzs0QkFBRUYsV0FBVTtzQ0FBcUM7Ozs7OztzQ0FDbEQsOERBQUNFOzRCQUFFRixXQUFVO3NDQUNWN0M7Ozs7OztzQ0FFSCw4REFBQzRDOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FDQ0MsU0FBU1Q7Z0NBQ1RLLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQXZHTS9DO0tBQUFBO0FBeUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbdXNlckNvZGUsIHNldFVzZXJDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydENhbWVyYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucmVwbGFjZVdpdGgodmlkZW9FbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBRdWFnZ2EuaW5pdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlucHV0U3RyZWFtOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpdmVcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiTGl2ZVN0cmVhbVwiLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB2aWRlb0VsZW1lbnQsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBudW1PZldvcmtlcnM6IDEsXHJcbiAgICAgICAgICAgICAgbG9jYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZyZXF1ZW5jeTogMTAsXHJcbiAgICAgICAgICAgICAgZGVjb2Rlcjoge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyczogW1wiY29kZV8xMjhfcmVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW5pdGlhbGl6aW5nIFF1YWdnYTpcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVhZ2dhIGluaXRpYWxpemVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgUXVhZ2dhLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgUXVhZ2dhLm9uRGV0ZWN0ZWQoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCYXJjb2RlIGRldGVjdGVkOlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgUXVhZ2dhLnN0b3AoKTtcclxuICAgICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xyXG4gICAgICAgICAgICBzZXRVc2VyQ29kZShkYXRhLmNvZGVSZXN1bHQuY29kZSA/PyBcIlwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRDYW1lcmEoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSB2aWRlb1JlZi5jdXJyZW50O1xyXG5cclxuICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvRWxlbWVudC5zcmNPYmplY3QgYXMgTWVkaWFTdHJlYW0gfCBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbT8uZ2V0VHJhY2tzKCkgfHwgW107XHJcbiAgICAgICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODAlXSBteC1hdXRvIGZsZXggbWItMzYgbXQtMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxyXG4gICAgICAgIDx2aWRlbyByZWY9e3ZpZGVvUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxyXG4gICAgICAgIHt1c2VyQ29kZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHRleHQtM3hsXCI+UmVzdWx0PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtdC0yMCBiZy1ncmF5LTEwMCByb3VuZGVkLW1kIHctZml0IHB4LTYgbXgtYXV0byBweS0yIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICB7dXNlckNvZGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTIwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIHB5LTIgcHgtMTIgYm9yZGVyLVsxcHhdIG10LTI0IGJvcmRlci1zbGF0ZS00MDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlF1YWdnYSIsIlBhZ2UiLCJ2aWRlb1JlZiIsInVzZXJDb2RlIiwic2V0VXNlckNvZGUiLCJzdGFydENhbWVyYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwidmlkZW9FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjT2JqZWN0IiwicGxheSIsImN1cnJlbnQiLCJyZXBsYWNlV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiaW5wdXRTdHJlYW0iLCJuYW1lIiwidHlwZSIsInRhcmdldCIsIm51bU9mV29ya2VycyIsImxvY2F0ZSIsImZyZXF1ZW5jeSIsImRlY29kZXIiLCJyZWFkZXJzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwic3RhcnQiLCJvbkRldGVjdGVkIiwiZGF0YSIsInN0b3AiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJjb2RlUmVzdWx0IiwiY29kZSIsInRyYWNrcyIsImhhbmRsZVJlc2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});