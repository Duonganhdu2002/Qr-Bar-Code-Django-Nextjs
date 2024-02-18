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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst BarcodeScanPage = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initQuagga = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                // Tạo và cấu hình phần tử <video>\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    // Tạo canvas để vẽ hình ảnh từ video\n                    const canvasElement = document.createElement(\"canvas\");\n                    const canvasContext = canvasElement.getContext(\"2d\");\n                    // Kiểm tra xem có thể lấy context 2D từ canvas hay không\n                    if (!canvasContext) {\n                        console.error(\"Could not get 2D context\");\n                        return;\n                    }\n                    // Cấu hình kích thước canvas dựa trên kích thước video\n                    canvasElement.width = videoElement.videoWidth;\n                    canvasElement.height = videoElement.videoHeight;\n                    // Hàm tick để thực hiện quá trình nhận diện QR code và hiển thị\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().init({\n                        inputStream: {\n                            name: \"Live\",\n                            type: \"LiveStream\",\n                            target: videoRef.current\n                        },\n                        decoder: {\n                            readers: [\n                                \"ean_reader\"\n                            ]\n                        }\n                    }, (err)=>{\n                        if (err) {\n                            console.error(err);\n                            return;\n                        }\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().start();\n                    });\n                    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().onDetected((data)=>{\n                        console.log(\"Barcode detected:\", data.codeResult.code);\n                    });\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        initQuagga();\n        return ()=>{\n            const videoElement = videoRef.current;\n            if (videoElement) {}\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-[80%] mx-auto flex mb-36 mt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" w-1/2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                ref: videoRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BarcodeScanPage, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = BarcodeScanPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarcodeScanPage);\nvar _c;\n$RefreshReg$(_c, \"BarcodeScanPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFFeEMsTUFBTUssa0JBQTRCOztJQUNoQyxNQUFNQyxXQUFXSiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFTO0lBRWpERixnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO29CQUN2REMsT0FBTztnQkFDVDtnQkFFQSxrQ0FBa0M7Z0JBQ2xDLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQzlDLHFDQUFxQztvQkFDckMsTUFBTUMsZ0JBQWdCUCxTQUFTQyxhQUFhLENBQUM7b0JBQzdDLE1BQU1PLGdCQUFnQkQsY0FBY0UsVUFBVSxDQUFDO29CQUUvQyx5REFBeUQ7b0JBQ3pELElBQUksQ0FBQ0QsZUFBZTt3QkFDbEJFLFFBQVFDLEtBQUssQ0FBQzt3QkFDZDtvQkFDRjtvQkFFQSx1REFBdUQ7b0JBQ3ZESixjQUFjSyxLQUFLLEdBQUdiLGFBQWFjLFVBQVU7b0JBQzdDTixjQUFjTyxNQUFNLEdBQUdmLGFBQWFnQixXQUFXO29CQUUvQyxnRUFBZ0U7b0JBQ2hFM0IsOERBQVcsQ0FDVDt3QkFDRTZCLGFBQWE7NEJBQ1hDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLFFBQVE5QixTQUFTYyxPQUFPO3dCQUMxQjt3QkFDQWlCLFNBQVM7NEJBQ1BDLFNBQVM7Z0NBQUM7NkJBQWE7d0JBQ3pCO29CQUNGLEdBQ0EsQ0FBQ0M7d0JBQ0MsSUFBSUEsS0FBSzs0QkFDUGIsUUFBUUMsS0FBSyxDQUFDWTs0QkFDZDt3QkFDRjt3QkFDQW5DLCtEQUFZO29CQUNkO29CQUdGQSxvRUFBaUIsQ0FBQyxDQUFDc0M7d0JBQ2pCaEIsUUFBUWlCLEdBQUcsQ0FBQyxxQkFBcUJELEtBQUtFLFVBQVUsQ0FBQ0MsSUFBSTtvQkFDdkQ7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9sQixPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsMkJBQTJCQTtZQUMzQztRQUNGO1FBRUFsQjtRQUVBLE9BQU87WUFDTCxNQUFNTSxlQUFlVCxTQUFTYyxPQUFPO1lBRXJDLElBQUlMLGNBQWMsQ0FFbEI7UUFFRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDK0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ2pDO2dCQUFNa0MsS0FBSzFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCO0dBcEZNRDtLQUFBQTtBQXNGTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NjYW4yL3BhZ2UudHN4PzQzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBRdWFnZ2EgZnJvbSBcIkBlcmljYmxhZGUvcXVhZ2dhMlwiO1xyXG5cclxuY29uc3QgQmFyY29kZVNjYW5QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbdXNlckNvZGUsIHNldFVzZXJDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0UXVhZ2dhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBU4bqhbyB2w6AgY+G6pXUgaMOsbmggcGjhuqduIHThu60gPHZpZGVvPlxyXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcclxuICAgICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnJlcGxhY2VXaXRoKHZpZGVvRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgIC8vIFThuqFvIGNhbnZhcyDEkeG7gyB24bq9IGjDrG5oIOG6o25oIHThu6sgdmlkZW9cclxuICAgICAgICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICAgIC8vIEtp4buDbSB0cmEgeGVtIGPDsyB0aOG7gyBs4bqleSBjb250ZXh0IDJEIHThu6sgY2FudmFzIGhheSBraMO0bmdcclxuICAgICAgICAgIGlmICghY2FudmFzQ29udGV4dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCAyRCBjb250ZXh0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQ+G6pXUgaMOsbmgga8OtY2ggdGjGsOG7m2MgY2FudmFzIGThu7FhIHRyw6puIGvDrWNoIHRoxrDhu5tjIHZpZGVvXHJcbiAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XHJcbiAgICAgICAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcclxuXHJcbiAgICAgICAgICAvLyBIw6BtIHRpY2sgxJHhu4MgdGjhu7FjIGhp4buHbiBxdcOhIHRyw6xuaCBuaOG6rW4gZGnhu4duIFFSIGNvZGUgdsOgIGhp4buDbiB0aOG7i1xyXG4gICAgICAgICAgUXVhZ2dhLmluaXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJMaXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkxpdmVTdHJlYW1cIixcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdmlkZW9SZWYuY3VycmVudCEsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXJzOiBbXCJlYW5fcmVhZGVyXCJdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFF1YWdnYS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIFF1YWdnYS5vbkRldGVjdGVkKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmFyY29kZSBkZXRlY3RlZDpcIiwgZGF0YS5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjYW1lcmE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbml0UXVhZ2dhKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gdmlkZW9SZWYuY3VycmVudDtcclxuXHJcbiAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1bODAlXSBteC1hdXRvIGZsZXggbWItMzYgbXQtMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy0xLzJcIj5cclxuICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyY29kZVNjYW5QYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlF1YWdnYSIsIkJhcmNvZGVTY2FuUGFnZSIsInZpZGVvUmVmIiwidXNlckNvZGUiLCJzZXRVc2VyQ29kZSIsImluaXRRdWFnZ2EiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyY09iamVjdCIsInBsYXkiLCJjdXJyZW50IiwicmVwbGFjZVdpdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlbWVudCIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImVycm9yIiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJpbml0IiwiaW5wdXRTdHJlYW0iLCJuYW1lIiwidHlwZSIsInRhcmdldCIsImRlY29kZXIiLCJyZWFkZXJzIiwiZXJyIiwic3RhcnQiLCJvbkRldGVjdGVkIiwiZGF0YSIsImxvZyIsImNvZGVSZXN1bHQiLCJjb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});