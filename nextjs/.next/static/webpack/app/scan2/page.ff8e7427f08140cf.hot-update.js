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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    // Tạo canvas để vẽ hình ảnh từ video\n                    const canvasElement = document.createElement(\"canvas\");\n                    const canvasContext = canvasElement.getContext(\"2d\");\n                    // Kiểm tra xem có thể lấy context 2D từ canvas hay không\n                    if (!canvasContext) {\n                        console.error(\"Could not get 2D context\");\n                        return;\n                    }\n                    // Cấu hình kích thước canvas dựa trên kích thước video\n                    canvasElement.width = videoElement.videoWidth;\n                    canvasElement.height = videoElement.videoHeight;\n                    const tick = ()=>{\n                        // Vẽ hình ảnh từ video lên canvas\n                        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);\n                        // Lấy dữ liệu hình ảnh từ canvas\n                        const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);\n                        // Nhận diện bar code từ dữ liệu hình ảnh\n                        const code = _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default()(imageData.data, imageData.width, imageData.height);\n                        // Nếu có QR code được nhận diện, dừng stream và hiển thị kết quả\n                        if (code) {\n                            stream.getTracks().forEach((track)=>track.stop());\n                            setUserCode(code.data);\n                        }\n                        // Thực hiện đệ quy để tiếp tục quá trình nhận diện\n                        requestAnimationFrame(tick);\n                    };\n                    // Bắt đầu quá trình nhận diện\n                    tick();\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n            const videoElement = videoRef.current;\n            if (videoElement) {\n                const stream = videoElement.srcObject;\n                const tracks = (stream === null || stream === void 0 ? void 0 : stream.getTracks()) || [];\n                tracks.forEach((track)=>track.stop());\n            }\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQzlDLHFDQUFxQztvQkFDckMsTUFBTUMsZ0JBQWdCUCxTQUFTQyxhQUFhLENBQUM7b0JBQzdDLE1BQU1PLGdCQUFnQkQsY0FBY0UsVUFBVSxDQUFDO29CQUUvQyx5REFBeUQ7b0JBQ3pELElBQUksQ0FBQ0QsZUFBZTt3QkFDbEJFLFFBQVFDLEtBQUssQ0FBQzt3QkFDZDtvQkFDRjtvQkFFQSx1REFBdUQ7b0JBQ3ZESixjQUFjSyxLQUFLLEdBQUdiLGFBQWFjLFVBQVU7b0JBQzdDTixjQUFjTyxNQUFNLEdBQUdmLGFBQWFnQixXQUFXO29CQUUvQyxNQUFNQyxPQUFPO3dCQUNYLGtDQUFrQzt3QkFDbENSLGNBQWNTLFNBQVMsQ0FDckJsQixjQUNBLEdBQ0EsR0FDQVEsY0FBY0ssS0FBSyxFQUNuQkwsY0FBY08sTUFBTTt3QkFHdEIsaUNBQWlDO3dCQUNqQyxNQUFNSSxZQUFZVixjQUFjVyxZQUFZLENBQzFDLEdBQ0EsR0FDQVosY0FBY0ssS0FBSyxFQUNuQkwsY0FBY08sTUFBTTt3QkFHdEIseUNBQXlDO3dCQUN6QyxNQUFNTSxPQUFPaEMseURBQU1BLENBQ2pCOEIsVUFBVUcsSUFBSSxFQUNkSCxVQUFVTixLQUFLLEVBQ2ZNLFVBQVVKLE1BQU07d0JBR2xCLGlFQUFpRTt3QkFDakUsSUFBSU0sTUFBTTs0QkFDUjFCLE9BQU80QixTQUFTLEdBQUdDLE9BQU8sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJOzRCQUNoRGpDLFlBQVk0QixLQUFLQyxJQUFJO3dCQUN2Qjt3QkFFQSxtREFBbUQ7d0JBQ25ESyxzQkFBc0JWO29CQUN4QjtvQkFFQSw4QkFBOEI7b0JBQzlCQTtnQkFDRjtZQUNGLEVBQUUsT0FBT0wsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBbEI7UUFFQSxPQUFPO1lBQ0xMLDhEQUFXO1lBQ1gsTUFBTVcsZUFBZVQsU0FBU2MsT0FBTztZQUVyQyxJQUFJTCxjQUFjO2dCQUNoQixNQUFNTCxTQUFTSyxhQUFhRyxTQUFTO2dCQUNyQyxNQUFNeUIsU0FBU2pDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUTRCLFNBQVMsT0FBTSxFQUFFO2dCQUN4Q0ssT0FBT0osT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUk7WUFDdEM7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGNBQWM7UUFDbEJDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNuQztvQkFBTW9DLEtBQUs1Qzs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUMwQztnQkFBSUMsV0FBVTswQkFDWjFDLDBCQUNDLDhEQUFDeUM7O3NDQUNDLDhEQUFDRzs0QkFBRUYsV0FBVTtzQ0FBcUM7Ozs7OztzQ0FDbEQsOERBQUNFOzRCQUFFRixXQUFVO3NDQUNWMUM7Ozs7OztzQ0FFSCw4REFBQ3lDOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FDQ0MsU0FBU1Q7Z0NBQ1RLLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQXhITTVDO0tBQUFBO0FBMEhOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbdXNlckNvZGUsIHNldFVzZXJDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydENhbWVyYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucmVwbGFjZVdpdGgodmlkZW9FbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gVOG6oW8gY2FudmFzIMSR4buDIHbhur0gaMOsbmgg4bqjbmggdOG7qyB2aWRlb1xyXG4gICAgICAgICAgY29uc3QgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgICAgLy8gS2nhu4NtIHRyYSB4ZW0gY8OzIHRo4buDIGzhuqV5IGNvbnRleHQgMkQgdOG7qyBjYW52YXMgaGF5IGtow7RuZ1xyXG4gICAgICAgICAgaWYgKCFjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBD4bqldSBow6xuaCBrw61jaCB0aMaw4bubYyBjYW52YXMgZOG7sWEgdHLDqm4ga8OtY2ggdGjGsOG7m2MgdmlkZW9cclxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcclxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFbhur0gaMOsbmgg4bqjbmggdOG7qyB2aWRlbyBsw6puIGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52YXNDb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQud2lkdGgsXHJcbiAgICAgICAgICAgICAgY2FudmFzRWxlbWVudC5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEzhuqV5IGThu68gbGnhu4d1IGjDrG5oIOG6o25oIHThu6sgY2FudmFzXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBOaOG6rW4gZGnhu4duIGJhciBjb2RlIHThu6sgZOG7ryBsaeG7h3UgaMOsbmgg4bqjbmhcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9IFF1YWdnYShcclxuICAgICAgICAgICAgICBpbWFnZURhdGEuZGF0YSxcclxuICAgICAgICAgICAgICBpbWFnZURhdGEud2lkdGgsXHJcbiAgICAgICAgICAgICAgaW1hZ2VEYXRhLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gTuG6v3UgY8OzIFFSIGNvZGUgxJHGsOG7o2Mgbmjhuq1uIGRp4buHbiwgZOG7q25nIHN0cmVhbSB2w6AgaGnhu4NuIHRo4buLIGvhur90IHF14bqjXHJcbiAgICAgICAgICAgIGlmIChjb2RlKSB7XHJcbiAgICAgICAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xyXG4gICAgICAgICAgICAgIHNldFVzZXJDb2RlKGNvZGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRo4buxYyBoaeG7h24gxJHhu4cgcXV5IMSR4buDIHRp4bq/cCB04bulYyBxdcOhIHRyw6xuaCBuaOG6rW4gZGnhu4duXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgLy8gQuG6r3QgxJHhuqd1IHF1w6EgdHLDrG5oIG5o4bqtbiBkaeG7h25cclxuICAgICAgICAgIHRpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIGNhbWVyYTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXJ0Q2FtZXJhKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUXVhZ2dhLnN0b3AoKTtcclxuICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gdmlkZW9SZWYuY3VycmVudDtcclxuXHJcbiAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0IGFzIE1lZGlhU3RyZWFtIHwgbnVsbDtcclxuICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0/LmdldFRyYWNrcygpIHx8IFtdO1xyXG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKCh0cmFjaykgPT4gdHJhY2suc3RvcCgpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gbXgtYXV0byBmbGV4IG1iLTM2IG10LTE2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICB7dXNlckNvZGUgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bFwiPlJlc3VsdDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbXQtMjAgYmctZ3JheS0xMDAgcm91bmRlZC1tZCB3LWZpdCBweC02IG14LWF1dG8gcHktMiBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge3VzZXJDb2RlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS0yMFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBweS0yIHB4LTEyIGJvcmRlci1bMXB4XSBtdC0yNCBib3JkZXItc2xhdGUtNDAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJRdWFnZ2EiLCJQYWdlIiwidmlkZW9SZWYiLCJ1c2VyQ29kZSIsInNldFVzZXJDb2RlIiwic3RhcnRDYW1lcmEiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyY09iamVjdCIsInBsYXkiLCJjdXJyZW50IiwicmVwbGFjZVdpdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlbWVudCIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImVycm9yIiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ0aWNrIiwiZHJhd0ltYWdlIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiY29kZSIsImRhdGEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHJhY2tzIiwiaGFuZGxlUmVzZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});