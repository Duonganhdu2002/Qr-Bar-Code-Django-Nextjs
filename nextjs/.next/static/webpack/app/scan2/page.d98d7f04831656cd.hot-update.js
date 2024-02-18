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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ericblade/quagga2 */ \"(app-pages-browser)/./node_modules/@ericblade/quagga2/dist/quagga.min.js\");\n/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const startCamera = async ()=>{\n            try {\n                const stream = await navigator.mediaDevices.getUserMedia({\n                    video: true\n                });\n                const videoElement = document.createElement(\"video\");\n                videoElement.srcObject = stream;\n                videoElement.play();\n                if (videoRef.current) {\n                    videoRef.current.replaceWith(videoElement);\n                }\n                videoElement.addEventListener(\"loadedmetadata\", ()=>{\n                    const canvasElement = document.createElement(\"canvas\");\n                    const canvasContext = canvasElement.getContext(\"2d\");\n                    if (!canvasContext) {\n                        console.error(\"Could not get 2D context\");\n                        return;\n                    }\n                    canvasElement.width = videoElement.videoWidth;\n                    canvasElement.height = videoElement.videoHeight;\n                    const tick = ()=>{\n                        canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);\n                        const imageData = canvasContext.getImageData(0, 0, canvasElement.width, canvasElement.height);\n                        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().decodeSingle({\n                            src: {\n                                data: new Uint8Array(imageData.data.buffer),\n                                width: imageData.width,\n                                height: imageData.height\n                            },\n                            numOfWorkers: 0,\n                            inputStream: {\n                                size: 800\n                            },\n                            decoder: {\n                                readers: [\n                                    \"ean_reader\"\n                                ]\n                            }\n                        }, (result)=>{\n                            if (result && result.codeResult) {\n                                stream.getTracks().forEach((track)=>track.stop());\n                                setUserCode(result.codeResult.code);\n                            } else {\n                                requestAnimationFrame(tick);\n                            }\n                        });\n                        requestAnimationFrame(tick);\n                    };\n                    tick();\n                });\n            } catch (error) {\n                console.error(\"Error accessing camera:\", error);\n            }\n        };\n        startCamera();\n        return ()=>{\n            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_2___default().stop();\n            const videoElement = videoRef.current;\n            if (videoElement) {\n                const stream = videoElement.srcObject;\n                const tracks = (stream === null || stream === void 0 ? void 0 : stream.getTracks()) || [];\n                tracks.forEach((track)=>track.stop());\n            }\n        };\n    }, []);\n    const handleReset = ()=>{\n        window.location.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[80%] mx-auto flex mb-36 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    ref: videoRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2\",\n                children: userCode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-semibold text-3xl\",\n                            children: \"Result\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-2xl mt-20 bg-gray-100 rounded-md w-fit px-6 mx-auto py-2 font-semibold\",\n                            children: userCode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleReset,\n                                className: \"text-md py-2 px-12 border-[1px] mt-24 border-slate-400 rounded-md\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Duong\\\\Documents\\\\Qr-code-1\\\\nextjs\\\\src\\\\app\\\\scan2\\\\page.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4McBknLaRejctzrE4poeBguDGfo=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2NhbjIvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFMkQ7QUFJL0I7QUFFNUIsTUFBTUssT0FBaUI7O0lBQ3JCLE1BQU1DLFdBQVdKLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLFNBQVMsTUFBTUMsVUFBVUMsWUFBWSxDQUFDQyxZQUFZLENBQUM7b0JBQ3ZEQyxPQUFPO2dCQUNUO2dCQUVBLE1BQU1DLGVBQWVDLFNBQVNDLGFBQWEsQ0FBQztnQkFDNUNGLGFBQWFHLFNBQVMsR0FBR1I7Z0JBQ3pCSyxhQUFhSSxJQUFJO2dCQUVqQixJQUFJYixTQUFTYyxPQUFPLEVBQUU7b0JBQ3BCZCxTQUFTYyxPQUFPLENBQUNDLFdBQVcsQ0FBQ047Z0JBQy9CO2dCQUVBQSxhQUFhTyxnQkFBZ0IsQ0FBQyxrQkFBa0I7b0JBQzlDLE1BQU1DLGdCQUFnQlAsU0FBU0MsYUFBYSxDQUFDO29CQUM3QyxNQUFNTyxnQkFBZ0JELGNBQWNFLFVBQVUsQ0FBQztvQkFFL0MsSUFBSSxDQUFDRCxlQUFlO3dCQUNsQkUsUUFBUUMsS0FBSyxDQUFDO3dCQUNkO29CQUNGO29CQUVBSixjQUFjSyxLQUFLLEdBQUdiLGFBQWFjLFVBQVU7b0JBQzdDTixjQUFjTyxNQUFNLEdBQUdmLGFBQWFnQixXQUFXO29CQUUvQyxNQUFNQyxPQUFPO3dCQUNYUixjQUFjUyxTQUFTLENBQ3JCbEIsY0FDQSxHQUNBLEdBQ0FRLGNBQWNLLEtBQUssRUFDbkJMLGNBQWNPLE1BQU07d0JBR3RCLE1BQU1JLFlBQVlWLGNBQWNXLFlBQVksQ0FDMUMsR0FDQSxHQUNBWixjQUFjSyxLQUFLLEVBQ25CTCxjQUFjTyxNQUFNO3dCQUd0QjFCLHNFQUFtQixDQUM3Qjs0QkFDRWlDLEtBQUs7Z0NBQ0hDLE1BQU0sSUFBSUMsV0FBV0wsVUFBVUksSUFBSSxDQUFDRSxNQUFNO2dDQUMxQ1osT0FBT00sVUFBVU4sS0FBSztnQ0FDdEJFLFFBQVFJLFVBQVVKLE1BQU07NEJBQzFCOzRCQUNBVyxjQUFjOzRCQUNkQyxhQUFhO2dDQUNYQyxNQUFNOzRCQUNSOzRCQUNBQyxTQUFTO2dDQUNQQyxTQUFTO29DQUFDO2lDQUFhOzRCQUN6Qjt3QkFDRixHQUNBLENBQUNDOzRCQUNDLElBQUlBLFVBQVVBLE9BQU9DLFVBQVUsRUFBRTtnQ0FDL0JyQyxPQUFPc0MsU0FBUyxHQUFHQyxPQUFPLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsSUFBSTtnQ0FDaEQzQyxZQUFZc0MsT0FBT0MsVUFBVSxDQUFDSyxJQUFJOzRCQUNwQyxPQUFPO2dDQUNMQyxzQkFBc0JyQjs0QkFDeEI7d0JBQ0Y7d0JBSVVxQixzQkFBc0JyQjtvQkFDeEI7b0JBRUFBO2dCQUNGO1lBQ0YsRUFBRSxPQUFPTCxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsMkJBQTJCQTtZQUMzQztRQUNGO1FBRUFsQjtRQUVBLE9BQU87WUFDTEwsOERBQVc7WUFDWCxNQUFNVyxlQUFlVCxTQUFTYyxPQUFPO1lBRXJDLElBQUlMLGNBQWM7Z0JBQ2hCLE1BQU1MLFNBQVNLLGFBQWFHLFNBQVM7Z0JBQ3JDLE1BQU1vQyxTQUFTNUMsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRc0MsU0FBUyxPQUFNLEVBQUU7Z0JBQ3hDTSxPQUFPTCxPQUFPLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsSUFBSTtZQUN0QztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUksY0FBYztRQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzlDO29CQUFNK0MsS0FBS3ZEOzs7Ozs7Ozs7OzswQkFFZCw4REFBQ3FEO2dCQUFJQyxXQUFVOzBCQUNackQsMEJBQ0MsOERBQUNvRDs7c0NBQ0MsOERBQUNHOzRCQUFFRixXQUFVO3NDQUFxQzs7Ozs7O3NDQUNsRCw4REFBQ0U7NEJBQUVGLFdBQVU7c0NBQ1ZyRDs7Ozs7O3NDQUVILDhEQUFDb0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNHO2dDQUNDQyxTQUFTVDtnQ0FDVEssV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBOUhNdkQ7S0FBQUE7QUFnSU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zY2FuMi9wYWdlLnRzeD80MzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUXVhZ2dhLCB7XHJcbiAgUXVhZ2dhSlNDb25maWdPYmplY3QsXHJcbiAgUXVhZ2dhSlNSZXN1bHRPYmplY3QsXHJcbn0gZnJvbSBcIkBlcmljYmxhZGUvcXVhZ2dhMlwiO1xyXG5cclxuY29uc3QgUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXJDb2RlLCBzZXRVc2VyQ29kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnRDYW1lcmEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgdmlkZW86IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcclxuICAgICAgICB2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4gICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XHJcblxyXG4gICAgICAgIGlmICh2aWRlb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnJlcGxhY2VXaXRoKHZpZGVvRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICAgIGlmICghY2FudmFzQ29udGV4dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCAyRCBjb250ZXh0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY2FudmFzRWxlbWVudC53aWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xyXG4gICAgICAgICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XHJcblxyXG4gICAgICAgICAgY29uc3QgdGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgdmlkZW9FbGVtZW50LFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LndpZHRoLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjYW52YXNDb250ZXh0LmdldEltYWdlRGF0YShcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgY2FudmFzRWxlbWVudC53aWR0aCxcclxuICAgICAgICAgICAgICBjYW52YXNFbGVtZW50LmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgUXVhZ2dhLmRlY29kZVNpbmdsZShcclxuICB7XHJcbiAgICBzcmM6IHtcclxuICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoaW1hZ2VEYXRhLmRhdGEuYnVmZmVyKSxcclxuICAgICAgd2lkdGg6IGltYWdlRGF0YS53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBpbWFnZURhdGEuaGVpZ2h0LFxyXG4gICAgfSBhcyBRdWFnZ2EuSW1hZ2VTZXR0aW5ncywgLy8gU3BlY2lmeSB0aGUgdHlwZSBmb3Igc3JjIHByb3BlcnR5XHJcbiAgICBudW1PZldvcmtlcnM6IDAsXHJcbiAgICBpbnB1dFN0cmVhbToge1xyXG4gICAgICBzaXplOiA4MDAsXHJcbiAgICB9LFxyXG4gICAgZGVjb2Rlcjoge1xyXG4gICAgICByZWFkZXJzOiBbXCJlYW5fcmVhZGVyXCJdLFxyXG4gICAgfSxcclxuICB9IGFzIFF1YWdnYUpTQ29uZmlnT2JqZWN0LFxyXG4gIChyZXN1bHQ6IFF1YWdnYUpTUmVzdWx0T2JqZWN0KSA9PiB7XHJcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5jb2RlUmVzdWx0KSB7XHJcbiAgICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0cmFjaykgPT4gdHJhY2suc3RvcCgpKTtcclxuICAgICAgc2V0VXNlckNvZGUocmVzdWx0LmNvZGVSZXN1bHQuY29kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgdGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhcnRDYW1lcmEoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBRdWFnZ2Euc3RvcCgpO1xyXG4gICAgICBjb25zdCB2aWRlb0VsZW1lbnQgPSB2aWRlb1JlZi5jdXJyZW50O1xyXG5cclxuICAgICAgaWYgKHZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHZpZGVvRWxlbWVudC5zcmNPYmplY3QgYXMgTWVkaWFTdHJlYW0gfCBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IHN0cmVhbT8uZ2V0VHJhY2tzKCkgfHwgW107XHJcbiAgICAgICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODAlXSBteC1hdXRvIGZsZXggbWItMzYgbXQtMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxyXG4gICAgICAgIDx2aWRlbyByZWY9e3ZpZGVvUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMlwiPlxyXG4gICAgICAgIHt1c2VyQ29kZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIHRleHQtM3hsXCI+UmVzdWx0PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBtdC0yMCBiZy1ncmF5LTEwMCByb3VuZGVkLW1kIHctZml0IHB4LTYgbXgtYXV0byBweS0yIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICB7dXNlckNvZGV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LTIwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW1kIHB5LTIgcHgtMTIgYm9yZGVyLVsxcHhdIG10LTI0IGJvcmRlci1zbGF0ZS00MDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlF1YWdnYSIsIlBhZ2UiLCJ2aWRlb1JlZiIsInVzZXJDb2RlIiwic2V0VXNlckNvZGUiLCJzdGFydENhbWVyYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwidmlkZW9FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjT2JqZWN0IiwicGxheSIsImN1cnJlbnQiLCJyZXBsYWNlV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbGVtZW50IiwiY2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsInRpY2siLCJkcmF3SW1hZ2UiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJkZWNvZGVTaW5nbGUiLCJzcmMiLCJkYXRhIiwiVWludDhBcnJheSIsImJ1ZmZlciIsIm51bU9mV29ya2VycyIsImlucHV0U3RyZWFtIiwic2l6ZSIsImRlY29kZXIiLCJyZWFkZXJzIiwicmVzdWx0IiwiY29kZVJlc3VsdCIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJjb2RlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHJhY2tzIiwiaGFuZGxlUmVzZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/scan2/page.tsx\n"));

/***/ })

});