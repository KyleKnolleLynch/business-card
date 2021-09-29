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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "slug",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your unique profile URL"
      }, register('slug', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        className: "bg-indigo-700 text-white rounded-md py-2 px-4 mt-4 hover:bg-indigo-500",
        children: "Create Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, this), " ", profile.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Slug:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, this), " ", profile.slug]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Phone:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this), " ", profile.phone]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Twitter:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this), " ", profile.twitter]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Instagram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), " ", profile.instagram]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "font-bold",
          children: "Facebook:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, this), " ", profile.facebook]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
  profile,
  setEditing
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "slug",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your unique profile URL"
      }, register('slug', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", _objectSpread({
        className: "w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3",
        placeholder: "A little bit about you",
        rows: 4
      }, register('bio', {
        required: true
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "phone",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your phone number"
      }, register('phone')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "twitter",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your twitter link"
      }, register('twitter')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "instagram",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your instagram link"
      }, register('instagram')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread({
        type: "text",
        name: "facebook",
        className: "w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3",
        placeholder: "Enter your facebook link"
      }, register('facebook')), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        className: "bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-500",
        children: "Edit Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: () => setEditing(false),
      className: "bg-yellow-900 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-800",
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      children: [!session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "p-2",
        children: ["Not signed in ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 27
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signIn)(),
          className: "bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-500 mt-1",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "p-2",
        children: ["Signed in as ", session.user.email, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: () => (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.signOut)(),
          className: "bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-500 mt-1 mb-3",
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
          profile: profile,
          setEditing: setEditing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 36
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, this)]
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
      slug: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBd0JGLE9BQXhCO0FBRUEsU0FBTztBQUNMMkIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xOLE1BQUFBLE9BREs7QUFFTHJCLE1BQUFBO0FBRks7QUFERixHQUFQO0FBTUQsQ0FsQ007Ozs7Ozs7Ozs7QUM5Q1A7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaXNwbGF5UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVQcm9maWxlKCkge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgIHVybDogJy9hcGkvY3JlYXRlcHJvZmlsZScsXHJcbiAgICAgIGRhdGE6IHZhbHVlcyxcclxuICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKGNvbmZpZylcclxuXHJcbiAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5DcmVhdGUgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdEZvcm0pfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInNsdWdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdW5pcXVlIHByb2ZpbGUgVVJMXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3Rlcignc2x1ZycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBsaXR0bGUgYml0IGFib3V0IHlvdVwiXHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdHdpdHRlciBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndHdpdHRlcicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc3RhZ3JhbSBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignaW5zdGFncmFtJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYWNlYm9vayBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZmFjZWJvb2snKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmctaW5kaWdvLTUwMFwiPlxyXG4gICAgICAgICAgQ3JlYXRlIFByb2ZpbGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpc3BsYXlQcm9maWxlKHsgcHJvZmlsZSB9KSB7XHJcbiAgY29uc29sZS5sb2cocHJvZmlsZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHRleHQtbGcgdGV4dC1sZWZ0IG1heC13LTJ4bCBteC1hdXRvIG10LTEwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xMCc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9maWxlLm5hbWV9PC9oMT5cclxuICAgICAgICA8cD57cHJvZmlsZS5iaW99PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPkVtYWlsOjwvc3Bhbj4ge3Byb2ZpbGUuZW1haWx9PC9saT5cclxuICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQnPlNsdWc6PC9zcGFuPiB7cHJvZmlsZS5zbHVnfTwvbGk+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5QaG9uZTo8L3NwYW4+IHtwcm9maWxlLnBob25lfTwvbGk+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5Ud2l0dGVyOjwvc3Bhbj4ge3Byb2ZpbGUudHdpdHRlcn08L2xpPlxyXG4gICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+SW5zdGFncmFtOjwvc3Bhbj4ge3Byb2ZpbGUuaW5zdGFncmFtfTwvbGk+XHJcbiAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5GYWNlYm9vazo8L3NwYW4+IHtwcm9maWxlLmZhY2Vib29rfTwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9maWxlKHsgcHJvZmlsZSwgc2V0RWRpdGluZyB9KSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHsgZGVmYXVsdFZhbHVlczogcHJvZmlsZSB9KVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICB1cmw6ICcvYXBpL2VkaXRwcm9maWxlJyxcclxuICAgICAgZGF0YTogdmFsdWVzLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoY29uZmlnKVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPkVkaXQgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdEZvcm0pfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInNsdWdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdW5pcXVlIHByb2ZpbGUgVVJMXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3Rlcignc2x1ZycsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBsaXR0bGUgYml0IGFib3V0IHlvdVwiXHJcbiAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdiaW8nLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigncGhvbmUnKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgcm91bmRlZC1tZCBoLTEyIHBsLTIgbXQtM1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdHdpdHRlciBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndHdpdHRlcicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbWQgaC0xMiBwbC0yIG10LTNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGluc3RhZ3JhbSBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignaW5zdGFncmFtJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMCByb3VuZGVkLW1kIGgtMTIgcGwtMiBtdC0zXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmYWNlYm9vayBsaW5rXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcignZmFjZWJvb2snKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmcteWVsbG93LTUwMFwiPlxyXG4gICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0aW5nKGZhbHNlKX0gY2xhc3NOYW1lPVwiYmcteWVsbG93LTkwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHktMiBweC00IG10LTQgaG92ZXI6YmcteWVsbG93LTgwMFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgQ3JlYXRlUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVByb2ZpbGUnXG5pbXBvcnQgRGlzcGxheVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9EaXNwbGF5UHJvZmlsZSdcbmltcG9ydCBFZGl0UHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRQcm9maWxlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc2Vzc2lvbiwgcHJvZmlsZSB9KSB7XG4gIGNvbnN0IFtlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJ1c2luZXNzIENhcmQgQXBwbGljYXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8PlxuICAgICAgICB7IXNlc3Npb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTInPlxuICAgICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9IGNsYXNzTmFtZT0nYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtMyByb3VuZGVkLW1kIGhvdmVyOmJnLWluZGlnby01MDAgbXQtMSc+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7c2Vzc2lvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMic+XG4gICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5lbWFpbH0gPGJyIC8+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gY2xhc3NOYW1lPSdiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcHktMSBweC0zIHJvdW5kZWQtbWQgaG92ZXI6YmctaW5kaWdvLTUwMCBtdC0xIG1iLTMnPlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgICAgICB7IXByb2ZpbGUgJiYgPENyZWF0ZVByb2ZpbGUgLz59XG4gICAgICAgICAgICB7cHJvZmlsZSAmJiAhZWRpdGluZyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxEaXNwbGF5UHJvZmlsZSBwcm9maWxlPXtwcm9maWxlfSAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVkaXRpbmcodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zbSBiZy15ZWxsb3ctNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweS0yIHB4LTQgbXQtNCBteC1hdXRvIGhvdmVyOmJnLXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvZmlsZSAmJiBlZGl0aW5nICYmIDxFZGl0UHJvZmlsZSBwcm9maWxlPXtwcm9maWxlfSBzZXRFZGl0aW5nPXtzZXRFZGl0aW5nfSAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgc2Vzc2lvbjogbnVsbCxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHByaXNtYS5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgICBzZWxlY3Q6IHtcbiAgICAgIG5hbWU6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIGJpbzogdHJ1ZSxcbiAgICAgIHNsdWc6IHRydWUsXG4gICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgIGZhY2Vib29rOiB0cnVlLFxuICAgICAgaW5zdGFncmFtOiB0cnVlLFxuICAgICAgdHdpdHRlcjogdHJ1ZSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKCdwcm9maWxlOicsIHByb2ZpbGUpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc2Vzc2lvbixcbiAgICAgIHByb2ZpbGUsXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VGb3JtIiwidXNlUm91dGVyIiwiQ3JlYXRlUHJvZmlsZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwicm91dGVyIiwib25TdWJtaXRGb3JtIiwidmFsdWVzIiwiY29uZmlnIiwidXJsIiwiZGF0YSIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXMiLCJzdGF0dXMiLCJyZWxvYWQiLCJyZXF1aXJlZCIsIkRpc3BsYXlQcm9maWxlIiwicHJvZmlsZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYmlvIiwiZW1haWwiLCJzbHVnIiwicGhvbmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJFZGl0UHJvZmlsZSIsInNldEVkaXRpbmciLCJkZWZhdWx0VmFsdWVzIiwiSGVhZCIsInVzZVN0YXRlIiwic2lnbkluIiwic2lnbk91dCIsImdldFNlc3Npb24iLCJQcmlzbWFDbGllbnQiLCJIb21lIiwic2Vzc2lvbiIsImVkaXRpbmciLCJ1c2VyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByaXNtYSIsInByb3BzIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==