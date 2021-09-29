"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_CreateProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateProfile */ "./components/CreateProfile.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\pages\\index.tsx";





var __N_SSP = true;
function Home(_ref) {
  var session = _ref.session,
      profile = _ref.profile;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center min-h-screen py-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: "Business Card Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: ["Not signed in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)();
          },
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)]
      }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: ["Signed in as ", session.user.email, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signOut)();
          },
          children: "Sign out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), !profile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_CreateProfile__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 26
        }, this)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODAyYmJlY2IxMTI0NGYyNGUyNTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7O0FBR2UsU0FBU0ksSUFBVCxPQUFvQztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDakQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkRBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLGlCQUNHLENBQUNELE9BQUQsaUJBQ0M7QUFBQSxrREFDZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEaEIsZUFFRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUosd0RBQU0sRUFBWjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsc0JBRkosRUFPR0ksT0FBTyxpQkFDTjtBQUFBLG9DQUNnQkEsT0FBTyxDQUFDRSxJQUFSLENBQWFDLEtBRDdCLG9CQUNvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURwQyxlQUVFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNTix5REFBTyxFQUFiO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRyxDQUFDSSxPQUFELGlCQUFZLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSGY7QUFBQSxzQkFSSjtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEO0tBeEJ1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBDcmVhdGVQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZmlsZSdcbmltcG9ydCBtb2R1bGVOYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvRGlzcGxheVByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzZXNzaW9uLCBwcm9maWxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBweS0yXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJ1c2luZXNzIENhcmQgQXBwbGljYXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8PlxuICAgICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICBOb3Qgc2lnbmVkIGluIDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfSA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICAgICAgeyFwcm9maWxlICYmIDxDcmVhdGVQcm9maWxlIC8+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXNzaW9uOiBudWxsLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnByb2ZpbGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSB9KVxuXG4gIGNvbnNvbGUubG9nKCdwcm9maWxlOicsIHByb2ZpbGUpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2Vzc2lvbixcbiAgICAgIHByb2ZpbGUsXG4gICAgfSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzaWduSW4iLCJzaWduT3V0IiwiQ3JlYXRlUHJvZmlsZSIsIkhvbWUiLCJzZXNzaW9uIiwicHJvZmlsZSIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=