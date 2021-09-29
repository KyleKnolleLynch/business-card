"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CreateProfile.tsx":
/*!**************************************!*\
  !*** ./components/CreateProfile.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProfile; }
/* harmony export */ });
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\components\\CreateProfile.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function CreateProfile() {
  _s();

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var onSubmitForm = /*#__PURE__*/function () {
    var _ref = (0,C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values) {
      var config, res;
      return C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                url: "/api/createprofile",
                data: values,
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(config);

            case 3:
              res = _context.sent;
              console.log(res);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
      className: "text-2xl font-semibold text-gray-900",
      children: "Create your profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmitForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "name",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your name"
      }, register('name', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "submit",
        className: "bg-indigo-700 text-white rounded-md py-2 px-4 mt-4 hover:bg-indigo-500",
        children: "Create Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(CreateProfile, "zkd3JmxRK/AmyiWtSfciHeYO5Zk=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];
});

_c = CreateProfile;

var _c;

$RefreshReg$(_c, "CreateProfile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdiYTY3MjAzNDYwMjkzZTM0ODAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxhQUFULEdBQXlCO0FBQUE7O0FBQ3RDLGlCQUFtQ0Qsd0RBQU8sRUFBMUM7QUFBQSxNQUFRRSxRQUFSLFlBQVFBLFFBQVI7QUFBQSxNQUFrQkMsWUFBbEIsWUFBa0JBLFlBQWxCOztBQUVBLE1BQU1DLFlBQVk7QUFBQSx1VEFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsY0FBQUEsTUFEYSxHQUNnQjtBQUNqQ0MsZ0JBQUFBLEdBQUcsRUFBRSxvQkFENEI7QUFFakNDLGdCQUFBQSxJQUFJLEVBQUVILE1BRjJCO0FBR2pDSSxnQkFBQUEsTUFBTSxFQUFFLE1BSHlCO0FBSWpDQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFKd0IsZUFEaEI7QUFBQTtBQUFBLHFCQVVEWCw0Q0FBSyxDQUFDTyxNQUFELENBVko7O0FBQUE7QUFVYkssY0FBQUEsR0FWYTtBQVluQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBWm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpQLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBZUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUVELFlBQVksQ0FBQ0MsWUFBRCxDQUE1QjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFTLEVBQUMsNERBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQsU0FLTUYsUUFBUSxDQUFDLE1BQUQsRUFBUztBQUFFWSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFULENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFDRSxpQkFBUyxFQUFDLHVEQURaO0FBRUUsbUJBQVcsRUFBQyx3QkFGZDtBQUdFLFlBQUksRUFBRTtBQUhSLFNBSU1aLFFBQVEsQ0FBQyxLQUFELEVBQVE7QUFBRVksUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBUixDQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGlCQUFTLEVBQUMsNERBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQsU0FLTVosUUFBUSxDQUFDLE9BQUQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFxQkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxTQUZQO0FBR0UsaUJBQVMsRUFBQyw0REFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZCxTQUtNQSxRQUFRLENBQUMsU0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkYsZUE0QkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxXQUZQO0FBR0UsaUJBQVMsRUFBQyw0REFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZCxTQUtNQSxRQUFRLENBQUMsV0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkYsZUFtQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsaUJBQVMsRUFBQyw0REFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZCxTQUtNQSxRQUFRLENBQUMsVUFBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsZUEwQ0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUMsd0VBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQ7O0dBdkV1QkQ7VUFDYUQ7OztLQURiQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NyZWF0ZVByb2ZpbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2ZpbGUoKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgIHVybDogXCIvYXBpL2NyZWF0ZXByb2ZpbGVcIixcclxuICAgICAgZGF0YTogdmFsdWVzLFxyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+Q3JlYXRlIHlvdXIgcHJvZmlsZTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXRGb3JtKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBsaXR0bGUgYml0IGFib3V0IHlvdVwiXHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdHdpdHRlciBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndHdpdHRlcicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc3RhZ3JhbSBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignaW5zdGFncmFtJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYWNlYm9vayBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZmFjZWJvb2snKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgQ3JlYXRlIFByb2ZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUZvcm0iLCJDcmVhdGVQcm9maWxlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdEZvcm0iLCJ2YWx1ZXMiLCJjb25maWciLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=