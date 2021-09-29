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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/dist/client/index.js");
/* harmony import */ var _components_CreateProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateProfile */ "./components/CreateProfile.tsx");
/* harmony import */ var _components_DisplayProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DisplayProfile */ "./components/DisplayProfile.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Business Card Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: ["Not signed in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)();
          },
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)]
      }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: ["Signed in as ", session.user.email, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: function onClick() {
            return (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signOut)();
          },
          children: "Sign out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this), !profile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CreateProfile__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 26
        }, this), profile && !editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_DisplayProfile__WEBPACK_IMPORTED_MODULE_4__.default, {
          profile: profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }, this), profile && editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Profile, {
          profile: profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 36
        }, this)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ4YTFkZTc2NTBmZmQ2NGVhM2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRWUsU0FBU00sSUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ2pELGtCQUE4QlAsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1EsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSxpQkFDRyxDQUFDSCxPQUFELGlCQUNDO0FBQUEsa0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGhCLGVBRUU7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1MLHdEQUFNLEVBQVo7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQUZKLEVBT0dLLE9BQU8saUJBQ047QUFBQSxvQ0FDZ0JBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxLQUQ3QixvQkFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEcEMsZUFFRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVQseURBQU8sRUFBYjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0csQ0FBQ0ssT0FBRCxpQkFBWSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhmLEVBSUdBLE9BQU8sSUFBSSxDQUFDQyxPQUFaLGlCQUF1Qiw4REFBQywrREFBRDtBQUFnQixpQkFBTyxFQUFFRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUoxQixFQUtHQSxPQUFPLElBQUlDLE9BQVgsaUJBQXNCLDhEQUFDLE9BQUQ7QUFBUyxpQkFBTyxFQUFFRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUx6QjtBQUFBLHNCQVJKO0FBQUEsb0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBM0J1QkY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IENyZWF0ZVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVQcm9maWxlJ1xuaW1wb3J0IERpc3BsYXlQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvRGlzcGxheVByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzZXNzaW9uLCBwcm9maWxlIH0pIHtcbiAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QnVzaW5lc3MgQ2FyZCBBcHBsaWNhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDw+XG4gICAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIE5vdCBzaWduZWQgaW4gPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9IDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgICAgICB7IXByb2ZpbGUgJiYgPENyZWF0ZVByb2ZpbGUgLz59XG4gICAgICAgICAgICB7cHJvZmlsZSAmJiAhZWRpdGluZyAmJiA8RGlzcGxheVByb2ZpbGUgcHJvZmlsZT17cHJvZmlsZX0gLz59XG4gICAgICAgICAgICB7cHJvZmlsZSAmJiBlZGl0aW5nICYmIDxQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXNzaW9uOiBudWxsLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgYmlvOiB0cnVlLFxuICAgICAgcGhvbmU6IHRydWUsXG4gICAgICBmYWNlYm9vazogdHJ1ZSxcbiAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcbiAgICAgIHR3aXR0ZXI6IHRydWUsXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZygncHJvZmlsZTonLCBwcm9maWxlKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlc3Npb24sXG4gICAgICBwcm9maWxlLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzaWduSW4iLCJzaWduT3V0IiwiQ3JlYXRlUHJvZmlsZSIsIkRpc3BsYXlQcm9maWxlIiwiSG9tZSIsInNlc3Npb24iLCJwcm9maWxlIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJ1c2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9