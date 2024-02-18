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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    const canvasElement = document.createElement(\"canvas\");\n                    const canvasContext = canvasElement.getContext(\"2d\");\n                    if (!canvasContext) {\n                        console.error(\"Could not get 2D context\");\n                        return;\n                    }\n                    canvasElement.width = videoElement.videoWidth;\n                    canvasElement.height = videoElement.videoHeight;\n                    const tick = ()=>{\n                        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);\n                        const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);\n                        // Sử dụng Quagga để quét mã vạch\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().decodeSingle({\n                            src: imageData,\n                            numOfWorkers: 0,\n                            inputStream: {\n                                size: canvasElement.width,\n                                singleChannel: false\n                            },\n                            decoder: {\n                                readers: [\n                                    \"ean_reader\"\n                                ]\n                            }\n                        }, (result)=>{\n                            if (result && result.codeResult) {\n                                setUserCode(result.codeResult.code);\n                            }\n                            // Gọi lại hàm tick để tiếp tục quét\n                            requestAnimationFrame(tick);\n                        });\n                    };\n                    tick();\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n            const videoElement = videoRef.current;\n            if (videoElement) {\n                const stream = videoElement.srcObject;\n                const tracks = (stream === null || stream === void 0 ? void 0 : stream.getTracks()) || [];\n                tracks.forEach((track)=>track.stop());\n            }\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFJL0I7QUFFNUIsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQzlDLE1BQU1DLGdCQUFnQlAsU0FBU0MsYUFBYSxDQUFDO29CQUM3QyxNQUFNTyxnQkFBZ0JELGNBQWNFLFVBQVUsQ0FBQztvQkFFL0MsSUFBSSxDQUFDRCxlQUFlO3dCQUNsQkUsUUFBUUMsS0FBSyxDQUFDO3dCQUNkO29CQUNGO29CQUVBSixjQUFjSyxLQUFLLEdBQUdiLGFBQWFjLFVBQVU7b0JBQzdDTixjQUFjTyxNQUFNLEdBQUdmLGFBQWFnQixXQUFXO29CQUUvQyxNQUFNQyxPQUFPO3dCQUNYUixjQUFjUyxTQUFTLENBQ3JCbEIsY0FDQSxHQUNBLEdBQ0FRLGNBQWNLLEtBQUssRUFDbkJMLGNBQWNPLE1BQU07d0JBR3RCLE1BQU1JLFlBQVlWLGNBQWNXLFlBQVksQ0FDMUMsR0FDQSxHQUNBWixjQUFjSyxLQUFLLEVBQ25CTCxjQUFjTyxNQUFNO3dCQUd0QixpQ0FBaUM7d0JBQ2pDMUIsc0VBQW1CLENBQ2pCOzRCQUNFaUMsS0FBS0g7NEJBQ0xJLGNBQWM7NEJBQ2RDLGFBQWE7Z0NBQ1hDLE1BQU1qQixjQUFjSyxLQUFLO2dDQUN6QmEsZUFBZTs0QkFDakI7NEJBQ0FDLFNBQVM7Z0NBQ1BDLFNBQVM7b0NBQUM7aUNBQWE7NEJBQ3pCO3dCQUNGLEdBQ0EsQ0FBQ0M7NEJBQ0MsSUFBSUEsVUFBVUEsT0FBT0MsVUFBVSxFQUFFO2dDQUMvQnJDLFlBQVlvQyxPQUFPQyxVQUFVLENBQUNDLElBQUk7NEJBQ3BDOzRCQUVBLG9DQUFvQzs0QkFDcENDLHNCQUFzQmY7d0JBQ3hCO29CQUVKO29CQUVBQTtnQkFDRjtZQUNGLEVBQUUsT0FBT0wsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDRjtRQUVBbEI7UUFFQSxPQUFPO1lBQ0xMLDhEQUFXO1lBQ1gsTUFBTVcsZUFBZVQsU0FBU2MsT0FBTztZQUVyQyxJQUFJTCxjQUFjO2dCQUNoQixNQUFNTCxTQUFTSyxhQUFhRyxTQUFTO2dCQUNyQyxNQUFNK0IsU0FBU3ZDLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUXdDLFNBQVMsT0FBTSxFQUFFO2dCQUN4Q0QsT0FBT0UsT0FBTyxDQUFDLENBQUNDLFFBQVVBLE1BQU1KLElBQUk7WUFDdEM7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1LLGNBQWM7UUFDbEJDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM1QztvQkFBTTZDLEtBQUtyRDs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNtRDtnQkFBSUMsV0FBVTswQkFDWm5ELDBCQUNDLDhEQUFDa0Q7O3NDQUNDLDhEQUFDRzs0QkFBRUYsV0FBVTtzQ0FBcUM7Ozs7OztzQ0FDbEQsOERBQUNFOzRCQUFFRixXQUFVO3NDQUNWbkQ7Ozs7OztzQ0FFSCw4REFBQ2tEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FDQ0MsU0FBU1Q7Z0NBQ1RLLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQXpITXJEO0tBQUFBO0FBMkhOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3g/NDM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFF1YWdnYSwge1xyXG4gIFF1YWdnYUpTQ29uZmlnT2JqZWN0LFxyXG4gIFF1YWdnYUpTUmVzdWx0T2JqZWN0LFxyXG59IGZyb20gXCJAZXJpY2JsYWRlL3F1YWdnYTJcIjtcclxuXHJcbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFt1c2VyQ29kZSwgc2V0VXNlckNvZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0YXJ0Q2FtZXJhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgIHZpZGVvOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XHJcbiAgICAgICAgdmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xyXG5cclxuICAgICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5yZXBsYWNlV2l0aCh2aWRlb0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICAgIGNvbnN0IGNhbnZhc0NvbnRleHQgPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWNhbnZhc0NvbnRleHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBnZXQgMkQgY29udGV4dFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcclxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgIHZpZGVvRWxlbWVudCxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgY2FudmFzRWxlbWVudC53aWR0aCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YSA9IGNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU+G7rSBk4bulbmcgUXVhZ2dhIMSR4buDIHF1w6l0IG3DoyB24bqhY2hcclxuICAgICAgICAgICAgUXVhZ2dhLmRlY29kZVNpbmdsZShcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGltYWdlRGF0YSxcclxuICAgICAgICAgICAgICAgIG51bU9mV29ya2VyczogMCwgLy8gU+G7kSBsxrDhu6NuZyB3b3JrZXIgc+G7rSBk4bulbmcgKDAgxJHhu4Mgc+G7rSBk4bulbmcgd29ya2VyIG3hurdjIMSR4buLbmgpXHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICAgICAgICAgICAgICBzaXplOiBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICBzaW5nbGVDaGFubmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWNvZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRlcnM6IFtcImVhbl9yZWFkZXJcIl0sIC8vIExv4bqhaSBtw6MgduG6oWNoIGLhuqFuIG114buRbiBxdcOpdCAo4bufIMSRw6J5IGzDoCBFQU4pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKHJlc3VsdDogUXVhZ2dhSlNSZXN1bHRPYmplY3QgfCBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJDb2RlKHJlc3VsdC5jb2RlUmVzdWx0LmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBH4buNaSBs4bqhaSBow6BtIHRpY2sgxJHhu4MgdGnhur9wIHThu6VjIHF1w6l0XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICB0aWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBjYW1lcmE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGFydENhbWVyYSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIFF1YWdnYS5zdG9wKCk7XHJcbiAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IHZpZGVvUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICBpZiAodmlkZW9FbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdmlkZW9FbGVtZW50LnNyY09iamVjdCBhcyBNZWRpYVN0cmVhbSB8IG51bGw7XHJcbiAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtPy5nZXRUcmFja3MoKSB8fCBbXTtcclxuICAgICAgICB0cmFja3MuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4MCVdIG14LWF1dG8gZmxleCBtYi0zNiBtdC0xNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XHJcbiAgICAgICAgPHZpZGVvIHJlZj17dmlkZW9SZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XHJcbiAgICAgICAge3VzZXJDb2RlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC0zeGxcIj5SZXN1bHQ8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG10LTIwIGJnLWdyYXktMTAwIHJvdW5kZWQtbWQgdy1maXQgcHgtNiBteC1hdXRvIHB5LTIgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyQ29kZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktMjBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNldH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbWQgcHktMiBweC0xMiBib3JkZXItWzFweF0gbXQtMjQgYm9yZGVyLXNsYXRlLTQwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUXVhZ2dhIiwiUGFnZSIsInZpZGVvUmVmIiwidXNlckNvZGUiLCJzZXRVc2VyQ29kZSIsInN0YXJ0Q2FtZXJhIiwic3RyZWFtIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidmlkZW8iLCJ2aWRlb0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmNPYmplY3QiLCJwbGF5IiwiY3VycmVudCIsInJlcGxhY2VXaXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsZW1lbnQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJlcnJvciIsIndpZHRoIiwidmlkZW9XaWR0aCIsImhlaWdodCIsInZpZGVvSGVpZ2h0IiwidGljayIsImRyYXdJbWFnZSIsImltYWdlRGF0YSIsImdldEltYWdlRGF0YSIsImRlY29kZVNpbmdsZSIsInNyYyIsIm51bU9mV29ya2VycyIsImlucHV0U3RyZWFtIiwic2l6ZSIsInNpbmdsZUNoYW5uZWwiLCJkZWNvZGVyIiwicmVhZGVycyIsInJlc3VsdCIsImNvZGVSZXN1bHQiLCJjb2RlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsImhhbmRsZVJlc2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});