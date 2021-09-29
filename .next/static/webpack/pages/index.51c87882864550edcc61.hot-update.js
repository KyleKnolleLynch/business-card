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
        }, this), profile && !editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "flex flex-",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_DisplayProfile__WEBPACK_IMPORTED_MODULE_4__.default, {
            profile: profile
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            onClick: function onClick() {
              return setEditing(true);
            },
            className: "bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-500",
            children: "Edit Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, this), profile && editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_5__.default, {
          profile: profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTFjODc4ODI4NjQ1NTBlZGNjNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBRWUsU0FBU08sSUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ2pELGtCQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSxpQkFDRyxDQUFDSCxPQUFELGlCQUNDO0FBQUEsa0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGhCLGVBRUU7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLHdEQUFNLEVBQVo7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBLHNCQUZKLEVBT0dNLE9BQU8saUJBQ047QUFBQSxvQ0FDZ0JBLE9BQU8sQ0FBQ0ksSUFBUixDQUFhQyxLQUQ3QixvQkFDb0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEcEMsZUFFRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVYseURBQU8sRUFBYjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0csQ0FBQ00sT0FBRCxpQkFBWSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhmLEVBSUdBLE9BQU8sSUFBSSxDQUFDQyxPQUFaLGlCQUNDO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0UsOERBQUMsK0RBQUQ7QUFBZ0IsbUJBQU8sRUFBRUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRSxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFDLHdFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixFQWNHRixPQUFPLElBQUlDLE9BQVgsaUJBQXNCLDhEQUFDLDREQUFEO0FBQWEsaUJBQU8sRUFBRUQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkekI7QUFBQSxzQkFSSjtBQUFBLG9CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQXBDdUJGOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCBDcmVhdGVQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZmlsZSdcbmltcG9ydCBEaXNwbGF5UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0Rpc3BsYXlQcm9maWxlJ1xuaW1wb3J0IEVkaXRQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvRWRpdFByb2ZpbGUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBzZXNzaW9uLCBwcm9maWxlIH0pIHtcbiAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QnVzaW5lc3MgQ2FyZCBBcHBsaWNhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDw+XG4gICAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIE5vdCBzaWduZWQgaW4gPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9IDxiciAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgICAgICB7IXByb2ZpbGUgJiYgPENyZWF0ZVByb2ZpbGUgLz59XG4gICAgICAgICAgICB7cHJvZmlsZSAmJiAhZWRpdGluZyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtJz5cbiAgICAgICAgICAgICAgICA8RGlzcGxheVByb2ZpbGUgcHJvZmlsZT17cHJvZmlsZX0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmcteWVsbG93LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9maWxlICYmIGVkaXRpbmcgJiYgPEVkaXRQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXNzaW9uOiBudWxsLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgYmlvOiB0cnVlLFxuICAgICAgcGhvbmU6IHRydWUsXG4gICAgICBmYWNlYm9vazogdHJ1ZSxcbiAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcbiAgICAgIHR3aXR0ZXI6IHRydWUsXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZygncHJvZmlsZTonLCBwcm9maWxlKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlc3Npb24sXG4gICAgICBwcm9maWxlLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzaWduSW4iLCJzaWduT3V0IiwiQ3JlYXRlUHJvZmlsZSIsIkRpc3BsYXlQcm9maWxlIiwiRWRpdFByb2ZpbGUiLCJIb21lIiwic2Vzc2lvbiIsInByb2ZpbGUiLCJlZGl0aW5nIiwic2V0RWRpdGluZyIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=