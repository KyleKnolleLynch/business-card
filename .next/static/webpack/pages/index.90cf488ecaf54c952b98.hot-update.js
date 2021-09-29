"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/EditProfile.tsx":
/*!************************************!*\
  !*** ./components/EditProfile.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EditProfile; }
/* harmony export */ });
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\components\\EditProfile.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function EditProfile(_ref) {
  _s();

  var profile = _ref.profile;

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    defaultValues: profile
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var onSubmitForm = /*#__PURE__*/function () {
    var _ref2 = (0,C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(values) {
      var config, res;
      return C_myProjects_nextjs_businesscard_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                url: '/api/editprofile',
                data: values,
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()(config);

            case 3:
              res = _context.sent;

              if (res.status === 200) {
                router.reload();
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      className: "text-2xl font-semibold text-gray-900",
      children: "Edit your profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmitForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "name",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your name"
      }, register('name', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        type: "submit",
        className: "bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-indigo-500",
        children: "Edit Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(EditProfile, "EnVodYHC9fYDC2pqIu90bFphK/s=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = EditProfile;

var _c;

$RefreshReg$(_c, "EditProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTBjZjQ4OGVjYWY1NGM5NTJiOTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0csV0FBVCxPQUFrQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFDL0MsaUJBQW1DSCx3REFBTyxDQUFDO0FBQUVJLElBQUFBLGFBQWEsRUFBRUQ7QUFBakIsR0FBRCxDQUExQztBQUFBLE1BQVFFLFFBQVIsWUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixZQUFrQkEsWUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFFQSxNQUFNTyxZQUFZO0FBQUEsd1RBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGNBQUFBLE1BRGEsR0FDZ0I7QUFDakNDLGdCQUFBQSxHQUFHLEVBQUUsa0JBRDRCO0FBRWpDQyxnQkFBQUEsSUFBSSxFQUFFSCxNQUYyQjtBQUdqQ0ksZ0JBQUFBLE1BQU0sRUFBRSxNQUh5QjtBQUlqQ0MsZ0JBQUFBLE9BQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSndCLGVBRGhCO0FBQUE7QUFBQSxxQkFVRGYsNENBQUssQ0FBQ1csTUFBRCxDQVZKOztBQUFBO0FBVWJLLGNBQUFBLEdBVmE7O0FBWW5CLGtCQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QlQsZ0JBQUFBLE1BQU0sQ0FBQ1UsTUFBUDtBQUNEOztBQWRrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWlCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRUYsWUFBWSxDQUFDRSxZQUFELENBQTVCO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsaUJBQVMsRUFBQyw0REFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZCxTQUtNSCxRQUFRLENBQUMsTUFBRCxFQUFTO0FBQUVhLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQVQsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUNFLGlCQUFTLEVBQUMsdURBRFo7QUFFRSxtQkFBVyxFQUFDLHdCQUZkO0FBR0UsWUFBSSxFQUFFO0FBSFIsU0FJTWIsUUFBUSxDQUFDLEtBQUQsRUFBUTtBQUFFYSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFSLENBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBY0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsaUJBQVMsRUFBQyw0REFIWjtBQUlFLG1CQUFXLEVBQUM7QUFKZCxTQUtNYixRQUFRLENBQUMsT0FBRCxDQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQXFCRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxpQkFBUyxFQUFDLDREQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkLFNBS01BLFFBQVEsQ0FBQyxTQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRixlQTRCRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFdBRlA7QUFHRSxpQkFBUyxFQUFDLDREQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkLFNBS01BLFFBQVEsQ0FBQyxXQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRixlQW1DRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxpQkFBUyxFQUFDLDREQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkLFNBS01BLFFBQVEsQ0FBQyxVQUFELENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DRixlQTBDRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyx3RUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDs7R0ExRXVCSDtVQUNhRixzREFDcEJDOzs7S0FGT0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9maWxlKHsgcHJvZmlsZSB9KSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHsgZGVmYXVsdFZhbHVlczogcHJvZmlsZSB9KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2VkaXRwcm9maWxlJyxcclxuICAgICAgZGF0YTogdmFsdWVzLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkVkaXQgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdEZvcm0pfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBIGxpdHRsZSBiaXQgYWJvdXQgeW91XCJcclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2JpbycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwaG9uZSBudW1iZXJcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdwaG9uZScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0d2l0dGVyIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCd0d2l0dGVyJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaW5zdGFncmFtIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdpbnN0YWdyYW0nKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZhY2Vib29rIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdmYWNlYm9vaycpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweS0yIHB4LTQgbXQtNCBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUZvcm0iLCJ1c2VSb3V0ZXIiLCJFZGl0UHJvZmlsZSIsInByb2ZpbGUiLCJkZWZhdWx0VmFsdWVzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyb3V0ZXIiLCJvblN1Ym1pdEZvcm0iLCJ2YWx1ZXMiLCJjb25maWciLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsInJlcyIsInN0YXR1cyIsInJlbG9hZCIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==