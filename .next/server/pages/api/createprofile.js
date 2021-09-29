"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createprofile";
exports.ids = ["pages/api/createprofile"];
exports.modules = {

/***/ "./pages/api/createprofile.ts":
/*!************************************!*\
  !*** ./pages/api/createprofile.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  try {
    const {
      name,
      bio,
      phone,
      twitter,
      instagram,
      facebook
    } = req.body;
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({
      req
    });

    if (!session) {
      return res.status(401);
    }

    const profile = await prisma.profile.create({
      data: {
        name,
        bio,
        phone,
        email: session.user.email,
        twitter,
        instagram,
        facebook,
        user: {
          connect: {
            email: session.user.email
          }
        }
      }
    });
    return res.status(200).json(profile);
    console.log(profile);
  } catch (error) {
    return res.status(500).send(error);
  }
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createprofile.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZXByb2ZpbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRUEsNkJBQWUsMENBQWdCRSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDdkMsTUFBSTtBQUNGLFVBQU07QUFBRUMsTUFBQUEsSUFBRjtBQUFRQyxNQUFBQSxHQUFSO0FBQWFDLE1BQUFBLEtBQWI7QUFBb0JDLE1BQUFBLE9BQXBCO0FBQTZCQyxNQUFBQSxTQUE3QjtBQUF3Q0MsTUFBQUE7QUFBeEMsUUFBcURQLEdBQUcsQ0FBQ1EsSUFBL0Q7QUFFQSxVQUFNQyxPQUFPLEdBQUcsTUFBTVosNERBQVUsQ0FBQztBQUFFRyxNQUFBQTtBQUFGLEtBQUQsQ0FBaEM7O0FBRUEsUUFBSSxDQUFDUyxPQUFMLEVBQWM7QUFDWixhQUFPUixHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLENBQVA7QUFDRDs7QUFFRCxVQUFNQyxPQUFPLEdBQUcsTUFBTVosTUFBTSxDQUFDWSxPQUFQLENBQWVDLE1BQWYsQ0FBc0I7QUFDMUNDLE1BQUFBLElBQUksRUFBRTtBQUNKWCxRQUFBQSxJQURJO0FBRUpDLFFBQUFBLEdBRkk7QUFHSkMsUUFBQUEsS0FISTtBQUlKVSxRQUFBQSxLQUFLLEVBQUVMLE9BQU8sQ0FBQ00sSUFBUixDQUFhRCxLQUpoQjtBQUtKVCxRQUFBQSxPQUxJO0FBTUpDLFFBQUFBLFNBTkk7QUFPSkMsUUFBQUEsUUFQSTtBQVFKUSxRQUFBQSxJQUFJLEVBQUU7QUFBRUMsVUFBQUEsT0FBTyxFQUFFO0FBQUVGLFlBQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDTSxJQUFSLENBQWFEO0FBQXRCO0FBQVg7QUFSRjtBQURvQyxLQUF0QixDQUF0QjtBQWFBLFdBQU9iLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCTixPQUFyQixDQUFQO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixPQUFaO0FBQ0QsR0F4QkQsQ0F3QkUsT0FBT1MsS0FBUCxFQUFjO0FBQ2QsV0FBT25CLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JXLElBQWhCLENBQXFCRCxLQUFyQixDQUFQO0FBQ0Q7QUFDRjs7Ozs7Ozs7OztBQ2pDRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZXByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBuYW1lLCBiaW8sIHBob25lLCB0d2l0dGVyLCBpbnN0YWdyYW0sIGZhY2Vib29rIH0gPSByZXEuYm9keVxyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXHJcblxyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnByb2ZpbGUuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYmlvLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdHdpdHRlcixcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgZmFjZWJvb2ssXHJcbiAgICAgICAgdXNlcjogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZmlsZSlcclxuICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcilcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm5hbWUiLCJiaW8iLCJwaG9uZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsImJvZHkiLCJzZXNzaW9uIiwic3RhdHVzIiwicHJvZmlsZSIsImNyZWF0ZSIsImRhdGEiLCJlbWFpbCIsInVzZXIiLCJjb25uZWN0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9