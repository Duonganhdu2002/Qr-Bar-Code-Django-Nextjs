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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    const canvasElement = document.createElement(\"canvas\");\n                    const canvasContext = canvasElement.getContext(\"2d\");\n                    if (!canvasContext) {\n                        console.error(\"Could not get 2D context\");\n                        return;\n                    }\n                    canvasElement.width = videoElement.videoWidth;\n                    canvasElement.height = videoElement.videoHeight;\n                    const tick = ()=>{\n                        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);\n                        const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);\n                        // Sử dụng Quagga để quét mã vạch\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().decodeSingle({\n                            src: dataUrl,\n                            numOfWorkers: 0,\n                            inputStream: {\n                                size: canvasElement.width,\n                                singleChannel: false\n                            },\n                            decoder: {\n                                readers: [\n                                    \"ean_reader\"\n                                ]\n                            }\n                        }, (result)=>{\n                            if (result && result.codeResult) {\n                                setUserCode(result.codeResult.code);\n                            }\n                            // Gọi lại hàm tick để tiếp tục quét\n                            requestAnimationFrame(tick);\n                        });\n                    };\n                    tick();\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n            const videoElement = videoRef.current;\n            if (videoElement) {\n                const stream = videoElement.srcObject;\n                const tracks = (stream === null || stream === void 0 ? void 0 : stream.getTracks()) || [];\n                tracks.forEach((track)=>track.stop());\n            }\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFJL0I7QUFFNUIsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQzlDLE1BQU1DLGdCQUFnQlAsU0FBU0MsYUFBYSxDQUFDO29CQUM3QyxNQUFNTyxnQkFBZ0JELGNBQWNFLFVBQVUsQ0FBQztvQkFFL0MsSUFBSSxDQUFDRCxlQUFlO3dCQUNsQkUsUUFBUUMsS0FBSyxDQUFDO3dCQUNkO29CQUNGO29CQUVBSixjQUFjSyxLQUFLLEdBQUdiLGFBQWFjLFVBQVU7b0JBQzdDTixjQUFjTyxNQUFNLEdBQUdmLGFBQWFnQixXQUFXO29CQUUvQyxNQUFNQyxPQUFPO3dCQUNYUixjQUFjUyxTQUFTLENBQ3JCbEIsY0FDQSxHQUNBLEdBQ0FRLGNBQWNLLEtBQUssRUFDbkJMLGNBQWNPLE1BQU07d0JBR3RCLE1BQU1JLFlBQVlWLGNBQWNXLFlBQVksQ0FDMUMsR0FDQSxHQUNBWixjQUFjSyxLQUFLLEVBQ25CTCxjQUFjTyxNQUFNO3dCQUd0QixpQ0FBaUM7d0JBQ2pDMUIsc0VBQW1CLENBQ2pCOzRCQUNFaUMsS0FBS0M7NEJBQ0xDLGNBQWM7NEJBQ2RDLGFBQWE7Z0NBQ1hDLE1BQU1sQixjQUFjSyxLQUFLO2dDQUN6QmMsZUFBZTs0QkFDakI7NEJBQ0FDLFNBQVM7Z0NBQ1BDLFNBQVM7b0NBQUM7aUNBQWE7NEJBQ3pCO3dCQUNGLEdBQ0EsQ0FBQ0M7NEJBQ0MsSUFBSUEsVUFBVUEsT0FBT0MsVUFBVSxFQUFFO2dDQUMvQnRDLFlBQVlxQyxPQUFPQyxVQUFVLENBQUNDLElBQUk7NEJBQ3BDOzRCQUVBLG9DQUFvQzs0QkFDcENDLHNCQUFzQmhCO3dCQUN4QjtvQkFFSjtvQkFFQUE7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9MLE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1lBQzNDO1FBQ0Y7UUFFQWxCO1FBRUEsT0FBTztZQUNMTCw4REFBVztZQUNYLE1BQU1XLGVBQWVULFNBQVNjLE9BQU87WUFFckMsSUFBSUwsY0FBYztnQkFDaEIsTUFBTUwsU0FBU0ssYUFBYUcsU0FBUztnQkFDckMsTUFBTWdDLFNBQVN4QyxDQUFBQSxtQkFBQUEsNkJBQUFBLE9BQVF5QyxTQUFTLE9BQU0sRUFBRTtnQkFDeENELE9BQU9FLE9BQU8sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSixJQUFJO1lBQ3RDO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxjQUFjO1FBQ2xCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDN0M7b0JBQU04QyxLQUFLdEQ7Ozs7Ozs7Ozs7OzBCQUVkLDhEQUFDb0Q7Z0JBQUlDLFdBQVU7MEJBQ1pwRCwwQkFDQyw4REFBQ21EOztzQ0FDQyw4REFBQ0c7NEJBQUVGLFdBQVU7c0NBQXFDOzs7Ozs7c0NBQ2xELDhEQUFDRTs0QkFBRUYsV0FBVTtzQ0FDVnBEOzs7Ozs7c0NBRUgsOERBQUNtRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQ0NDLFNBQVNUO2dDQUNUSyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0F6SE10RDtLQUFBQTtBQTJITiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NjYW4yL3BhZ2UudHN4PzQzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBRdWFnZ2EsIHtcclxuICBRdWFnZ2FKU0NvbmZpZ09iamVjdCxcclxuICBRdWFnZ2FKU1Jlc3VsdE9iamVjdCxcclxufSBmcm9tIFwiQGVyaWNibGFkZS9xdWFnZ2EyXCI7XHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcclxuICBjb25zdCBbdXNlckNvZGUsIHNldFVzZXJDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydENhbWVyYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XHJcbiAgICAgICAgICB2aWRlbzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucmVwbGFjZVdpdGgodmlkZW9FbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgICAgaWYgKCFjYW52YXNDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XHJcbiAgICAgICAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcclxuXHJcbiAgICAgICAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYW52YXNDb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQud2lkdGgsXHJcbiAgICAgICAgICAgICAgY2FudmFzRWxlbWVudC5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBT4butIGThu6VuZyBRdWFnZ2EgxJHhu4MgcXXDqXQgbcOjIHbhuqFjaFxyXG4gICAgICAgICAgICBRdWFnZ2EuZGVjb2RlU2luZ2xlKFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogZGF0YVVybCxcclxuICAgICAgICAgICAgICAgIG51bU9mV29ya2VyczogMCwgLy8gU+G7kSBsxrDhu6NuZyB3b3JrZXIgc+G7rSBk4bulbmcgKDAgxJHhu4Mgc+G7rSBk4bulbmcgd29ya2VyIG3hurdjIMSR4buLbmgpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICAgICAgICAgICAgICBzaXplOiBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRlcnM6IFtcImVhbl9yZWFkZXJcIl0sIC8vIExv4bqhaSBtw6MgduG6oWNoIGLhuqFuIG114buRbiBxdcOpdCAo4bufIMSRw6J5IGzDoCBFQU4pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKHJlc3VsdDogUXVhZ2dhSlNSZXN1bHRPYmplY3QgfCBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJDb2RlKHJlc3VsdC5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEfhu41pIGzhuqFpIGjDoG0gdGljayDEkeG7gyB0aeG6v3AgdOG7pWMgcXXDqXRcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHRpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIGNhbWVyYTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXJ0Q2FtZXJhKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgUXVhZ2dhLnN0b3AoKTtcclxuICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gdmlkZW9SZWYuY3VycmVudDtcclxuXHJcbiAgICAgIGlmICh2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzdHJlYW0gPSB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0IGFzIE1lZGlhU3RyZWFtIHwgbnVsbDtcclxuICAgICAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0/LmdldFRyYWNrcygpIHx8IFtdO1xyXG4gICAgICAgIHRyYWNrcy5mb3JFYWNoKCh0cmFjaykgPT4gdHJhY2suc3RvcCgpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gbXgtYXV0byBmbGV4IG1iLTM2IG10LTE2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cclxuICAgICAgICB7dXNlckNvZGUgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bFwiPlJlc3VsdDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbXQtMjAgYmctZ3JheS0xMDAgcm91bmRlZC1tZCB3LWZpdCBweC02IG14LWF1dG8gcHktMiBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAge3VzZXJDb2RlfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS0yMFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBweS0yIHB4LTEyIGJvcmRlci1bMXB4XSBtdC0yNCBib3JkZXItc2xhdGUtNDAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJRdWFnZ2EiLCJQYWdlIiwidmlkZW9SZWYiLCJ1c2VyQ29kZSIsInNldFVzZXJDb2RlIiwic3RhcnRDYW1lcmEiLCJzdHJlYW0iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ2aWRlbyIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyY09iamVjdCIsInBsYXkiLCJjdXJyZW50IiwicmVwbGFjZVdpdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWxlbWVudCIsImNhbnZhc0NvbnRleHQiLCJnZXRDb250ZXh0IiwiY29uc29sZSIsImVycm9yIiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ0aWNrIiwiZHJhd0ltYWdlIiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZGVjb2RlU2luZ2xlIiwic3JjIiwiZGF0YVVybCIsIm51bU9mV29ya2VycyIsImlucHV0U3RyZWFtIiwic2l6ZSIsInNpbmdsZUNoYW5uZWwiLCJkZWNvZGVyIiwicmVhZGVycyIsInJlc3VsdCIsImNvZGVSZXN1bHQiLCJjb2RlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImhhbmRsZVJlc2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});