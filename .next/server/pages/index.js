"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/CreateProfile.tsx":
/*!**************************************!*\
  !*** ./components/CreateProfile.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateProfile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\components\\CreateProfile.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function CreateProfile() {
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const onSubmitForm = async values => {
    const config = {
      url: '/api/createprofile',
      data: values,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);

    if (res.status === 200) {
      router.reload();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: "text-2xl font-semibold text-gray-900",
      children: "Create your profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmitForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
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

/***/ }),

/***/ "./components/DisplayProfile.tsx":
/*!***************************************!*\
  !*** ./components/DisplayProfile.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayProfile)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\components\\DisplayProfile.tsx";

function DisplayProfile({
  profile
}) {
  console.log(profile);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "text-gray-800 text-lg text-left max-w-2xl mx-auto mt-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mb-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-2xl font-bold",
        children: profile.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: profile.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: profile.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: profile.phone
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: profile.twitter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: profile.instagram
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: profile.facebook
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/EditProfile.tsx":
/*!************************************!*\
  !*** ./components/EditProfile.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditProfile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\components\\EditProfile.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function EditProfile({
  profile
}) {
  const {
    register,
    handleSubmit
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    defaultValues: profile
  });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const onSubmitForm = async values => {
    const config = {
      url: '/api/editprofile',
      data: values,
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(config);

    if (res.status === 200) {
      router.reload();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      className: "text-2xl font-semibold text-gray-900",
      children: "Edit your profile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: handleSubmit(onSubmitForm),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        className: "bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-500",
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CreateProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CreateProfile */ "./components/CreateProfile.tsx");
/* harmony import */ var _components_DisplayProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DisplayProfile */ "./components/DisplayProfile.tsx");
/* harmony import */ var _components_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/EditProfile */ "./components/EditProfile.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\myProjects\\nextjs\\businesscard\\pages\\index.tsx";









function Home({
  session,
  profile
}) {
  const {
    0: editing,
    1: setEditing
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "Business Card Application"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Not signed in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)(),
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Signed in as ", session.user.email, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signOut)(),
          children: "Sign out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), !profile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_CreateProfile__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 26
        }, this), profile && !editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "flex flex-col justify-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DisplayProfile__WEBPACK_IMPORTED_MODULE_5__.default, {
            profile: profile
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            onClick: () => setEditing(true),
            className: "max-w-sm bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 mx-auto hover:bg-yellow-500",
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
        }, this), profile && editing && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_6__.default, {
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
const getServerSideProps = async context => {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();
  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);

  if (!session) {
    return {
      props: {
        session: null
      }
    };
  }

  const profile = await prisma.profile.findUnique({
    where: {
      email: session.user.email
    },
    select: {
      name: true,
      email: true,
      bio: true,
      phone: true,
      facebook: true,
      instagram: true,
      twitter: true
    }
  });
  console.log('profile:', profile);
  return {
    props: {
      session,
      profile
    }
  };
};

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXNwbGF5UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9maWxlKCkge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvY3JlYXRlcHJvZmlsZScsXHJcbiAgICAgIGRhdGE6IHZhbHVlcyxcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGNvbmZpZylcclxuXHJcbiAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5DcmVhdGUgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdEZvcm0pfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBIGxpdHRsZSBiaXQgYWJvdXQgeW91XCJcclxuICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2JpbycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwaG9uZSBudW1iZXJcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdwaG9uZScpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0d2l0dGVyIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCd0d2l0dGVyJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaW5zdGFncmFtIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdpbnN0YWdyYW0nKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZhY2Vib29rIGxpbmtcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdmYWNlYm9vaycpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweS0yIHB4LTQgbXQtNCBob3ZlcjpiZy1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzcGxheVByb2ZpbGUoeyBwcm9maWxlIH0pIHtcclxuICBjb25zb2xlLmxvZyhwcm9maWxlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgdGV4dC1sZyB0ZXh0LWxlZnQgbWF4LXctMnhsIG14LWF1dG8gbXQtMTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3Byb2ZpbGUubmFtZX08L2gxPlxyXG4gICAgICAgIDxwPntwcm9maWxlLmJpb308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT57cHJvZmlsZS5lbWFpbH08L2xpPlxyXG4gICAgICAgIDxsaT57cHJvZmlsZS5waG9uZX08L2xpPlxyXG4gICAgICAgIDxsaT57cHJvZmlsZS50d2l0dGVyfTwvbGk+XHJcbiAgICAgICAgPGxpPntwcm9maWxlLmluc3RhZ3JhbX08L2xpPlxyXG4gICAgICAgIDxsaT57cHJvZmlsZS5mYWNlYm9va308L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0UHJvZmlsZSh7IHByb2ZpbGUgfSkge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7IGRlZmF1bHRWYWx1ZXM6IHByb2ZpbGUgfSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSBhc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgICAgdXJsOiAnL2FwaS9lZGl0cHJvZmlsZScsXHJcbiAgICAgIGRhdGE6IHZhbHVlcyxcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGNvbmZpZylcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJvdXRlci5yZWxvYWQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5FZGl0IHlvdXIgcHJvZmlsZTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXRGb3JtKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBsaXR0bGUgYml0IGFib3V0IHlvdVwiXHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdHdpdHRlciBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndHdpdHRlcicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc3RhZ3JhbSBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignaW5zdGFncmFtJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYWNlYm9vayBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZmFjZWJvb2snKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmcteWVsbG93LTUwMFwiPlxyXG4gICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IENyZWF0ZVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVQcm9maWxlJ1xuaW1wb3J0IERpc3BsYXlQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvRGlzcGxheVByb2ZpbGUnXG5pbXBvcnQgRWRpdFByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0UHJvZmlsZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHNlc3Npb24sIHByb2ZpbGUgfSkge1xuICBjb25zdCBbZWRpdGluZywgc2V0RWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CdXNpbmVzcyBDYXJkIEFwcGxpY2F0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPD5cbiAgICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5lbWFpbH0gPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIHshcHJvZmlsZSAmJiA8Q3JlYXRlUHJvZmlsZSAvPn1cbiAgICAgICAgICAgIHtwcm9maWxlICYmICFlZGl0aW5nICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPERpc3BsYXlQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RWRpdGluZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNtIGJnLXllbGxvdy02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB5LTIgcHgtNCBtdC00IG14LWF1dG8gaG92ZXI6YmcteWVsbG93LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9maWxlICYmIGVkaXRpbmcgJiYgPEVkaXRQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+fVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KVxuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzZXNzaW9uOiBudWxsLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgYmlvOiB0cnVlLFxuICAgICAgcGhvbmU6IHRydWUsXG4gICAgICBmYWNlYm9vazogdHJ1ZSxcbiAgICAgIGluc3RhZ3JhbTogdHJ1ZSxcbiAgICAgIHR3aXR0ZXI6IHRydWUsXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZygncHJvZmlsZTonLCBwcm9maWxlKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNlc3Npb24sXG4gICAgICBwcm9maWxlLFxuICAgIH0sXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRm9ybSIsInVzZVJvdXRlciIsIkNyZWF0ZVByb2ZpbGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJvdXRlciIsIm9uU3VibWl0Rm9ybSIsInZhbHVlcyIsImNvbmZpZyIsInVybCIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzIiwic3RhdHVzIiwicmVsb2FkIiwicmVxdWlyZWQiLCJEaXNwbGF5UHJvZmlsZSIsInByb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImJpbyIsImVtYWlsIiwicGhvbmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJFZGl0UHJvZmlsZSIsImRlZmF1bHRWYWx1ZXMiLCJIZWFkIiwidXNlU3RhdGUiLCJzaWduSW4iLCJzaWduT3V0IiwiZ2V0U2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsIkhvbWUiLCJzZXNzaW9uIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJ1c2VyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByaXNtYSIsInByb3BzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==