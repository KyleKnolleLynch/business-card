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
      children: "Create your profile"
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
        className: "bg-indigo-700 text-white rounded-md py-2 px-4 mt-4 hover:bg-indigo-500",
        children: "Create Profile"
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


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_CreateProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateProfile */ "./components/CreateProfile.tsx");
/* harmony import */ var _components_DisplayProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DisplayProfile */ "./components/DisplayProfile.tsx");
/* harmony import */ var _components_EditProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EditProfile */ "./components/EditProfile.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\pages\\index.tsx",
    _s = $RefreshSig$();









var __N_SSP = true;
function Home(_ref) {
  _s();

  var session = _ref.session,
      profile = _ref.profile;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      editing = _useState[0],
      setEditing = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Business Card Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: ["Not signed in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)();
          },
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: ["Signed in as ", session.user.email, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signOut)();
          },
          children: "Sign out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), !profile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_CreateProfile__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 26
        }, this), profile && !editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_DisplayProfile__WEBPACK_IMPORTED_MODULE_4__.default, {
          profile: profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 37
        }, this), profile && editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_5__.default, {
          profile: profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 36
        }, this)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(Home, "8NtxifNHNH77GP4fOyN5Q3EVoDA=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODZhMjA2MGIwYWE3ZDZmMDM0YTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0csV0FBVCxPQUFrQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFDL0MsaUJBQW1DSCx3REFBTyxDQUFDO0FBQUVJLElBQUFBLGFBQWEsRUFBRUQ7QUFBakIsR0FBRCxDQUExQztBQUFBLE1BQVFFLFFBQVIsWUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixZQUFrQkEsWUFBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUF4Qjs7QUFFQSxNQUFNTyxZQUFZO0FBQUEsd1RBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGNBQUFBLE1BRGEsR0FDZ0I7QUFDakNDLGdCQUFBQSxHQUFHLEVBQUUsa0JBRDRCO0FBRWpDQyxnQkFBQUEsSUFBSSxFQUFFSCxNQUYyQjtBQUdqQ0ksZ0JBQUFBLE1BQU0sRUFBRSxNQUh5QjtBQUlqQ0MsZ0JBQUFBLE9BQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSndCLGVBRGhCO0FBQUE7QUFBQSxxQkFVRGYsNENBQUssQ0FBQ1csTUFBRCxDQVZKOztBQUFBO0FBVWJLLGNBQUFBLEdBVmE7O0FBWW5CLGtCQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QlQsZ0JBQUFBLE1BQU0sQ0FBQ1UsTUFBUDtBQUNEOztBQWRrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWlCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYs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O0FBQUEsb0NBQ2dCQSxPQUFPLENBQUNHLElBQVIsQ0FBYUMsS0FEN0Isb0JBQ29DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHBDLGVBRUU7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1SLHlEQUFPLEVBQWI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdHLENBQUNuQixPQUFELGlCQUFZLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSGYsRUFJR0EsT0FBTyxJQUFJLENBQUN3QixPQUFaLGlCQUF1Qiw4REFBQywrREFBRDtBQUFnQixpQkFBTyxFQUFFeEI7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKMUIsRUFLR0EsT0FBTyxJQUFJd0IsT0FBWCxpQkFBc0IsOERBQUMsNERBQUQ7QUFBYSxpQkFBTyxFQUFFeEI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMekI7QUFBQSxzQkFSSjtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEOztHQTNCdUJzQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFByb2ZpbGUoeyBwcm9maWxlIH0pIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oeyBkZWZhdWx0VmFsdWVzOiBwcm9maWxlIH0pXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvZWRpdHByb2ZpbGUnLFxyXG4gICAgICBkYXRhOiB2YWx1ZXMsXHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhjb25maWcpXHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+Q3JlYXRlIHlvdXIgcHJvZmlsZTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXRGb3JtKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBsaXR0bGUgYml0IGFib3V0IHlvdVwiXHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdHdpdHRlciBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndHdpdHRlcicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc3RhZ3JhbSBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignaW5zdGFncmFtJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYWNlYm9vayBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZmFjZWJvb2snKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgQ3JlYXRlIFByb2ZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgQ3JlYXRlUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVByb2ZpbGUnXG5pbXBvcnQgRGlzcGxheVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9EaXNwbGF5UHJvZmlsZSdcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRQcm9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc2Vzc2lvbiwgcHJvZmlsZSB9KSB7XG4gIGNvbnN0IFtlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJ1c2luZXNzIENhcmQgQXBwbGljYXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8PlxuICAgICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICBOb3Qgc2lnbmVkIGluIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfSA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICAgICAgeyFwcm9maWxlICYmIDxDcmVhdGVQcm9maWxlIC8+fVxuICAgICAgICAgICAge3Byb2ZpbGUgJiYgIWVkaXRpbmcgJiYgPERpc3BsYXlQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxuICAgICAgICAgICAge3Byb2ZpbGUgJiYgZWRpdGluZyAmJiA8RWRpdFByb2ZpbGUgcHJvZmlsZT17cHJvZmlsZX0gLz59XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHNlc3Npb246IG51bGwsXG4gICAgICB9LFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBwcmlzbWEucHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXG4gICAgc2VsZWN0OiB7XG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgZW1haWw6IHRydWUsXG4gICAgICBiaW86IHRydWUsXG4gICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgIGZhY2Vib29rOiB0cnVlLFxuICAgICAgaW5zdGFncmFtOiB0cnVlLFxuICAgICAgdHdpdHRlcjogdHJ1ZSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKCdwcm9maWxlOicsIHByb2ZpbGUpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2Vzc2lvbixcbiAgICAgIHByb2ZpbGUsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRm9ybSIsInVzZVJvdXRlciIsIkVkaXRQcm9maWxlIiwicHJvZmlsZSIsImRlZmF1bHRWYWx1ZXMiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJvdXRlciIsIm9uU3VibWl0Rm9ybSIsInZhbHVlcyIsImNvbmZpZyIsInVybCIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzIiwic3RhdHVzIiwicmVsb2FkIiwicmVxdWlyZWQiLCJIZWFkIiwidXNlU3RhdGUiLCJzaWduSW4iLCJzaWduT3V0IiwiQ3JlYXRlUHJvZmlsZSIsIkRpc3BsYXlQcm9maWxlIiwiSG9tZSIsInNlc3Npb24iLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=