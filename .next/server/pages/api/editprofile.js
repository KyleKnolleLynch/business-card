"use strict";
(() => {
var exports = {};
exports.id = "pages/api/editprofile";
exports.ids = ["pages/api/editprofile"];
exports.modules = {

/***/ "./pages/api/editprofile.ts":
/*!**********************************!*\
  !*** ./pages/api/editprofile.ts ***!
  \**********************************/
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

    const profile = await prisma.profile.update({
      where: {
        email: session.user.email
      },
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/editprofile.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2VkaXRwcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLDZCQUFlLDBDQUFnQkUsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3ZDLE1BQUk7QUFDRixVQUFNO0FBQUVDLE1BQUFBLElBQUY7QUFBUUMsTUFBQUEsR0FBUjtBQUFhQyxNQUFBQSxLQUFiO0FBQW9CQyxNQUFBQSxPQUFwQjtBQUE2QkMsTUFBQUEsU0FBN0I7QUFBd0NDLE1BQUFBO0FBQXhDLFFBQXFEUCxHQUFHLENBQUNRLElBQS9EO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1aLDREQUFVLENBQUM7QUFBRUcsTUFBQUE7QUFBRixLQUFELENBQWhDOztBQUVBLFFBQUksQ0FBQ1MsT0FBTCxFQUFjO0FBQ1osYUFBT1IsR0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxDQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsT0FBTyxHQUFHLE1BQU1aLE1BQU0sQ0FBQ1ksT0FBUCxDQUFlQyxNQUFmLENBQXNCO0FBQzFDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsS0FBSyxFQUFFTCxPQUFPLENBQUNNLElBQVIsQ0FBYUQ7QUFEZixPQURtQztBQUkxQ0UsTUFBQUEsSUFBSSxFQUFFO0FBQ0pkLFFBQUFBLElBREk7QUFFSkMsUUFBQUEsR0FGSTtBQUdKQyxRQUFBQSxLQUhJO0FBSUpVLFFBQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDTSxJQUFSLENBQWFELEtBSmhCO0FBS0pULFFBQUFBLE9BTEk7QUFNSkMsUUFBQUEsU0FOSTtBQU9KQyxRQUFBQSxRQVBJO0FBUUpRLFFBQUFBLElBQUksRUFBRTtBQUFFRSxVQUFBQSxPQUFPLEVBQUU7QUFBRUgsWUFBQUEsS0FBSyxFQUFFTCxPQUFPLENBQUNNLElBQVIsQ0FBYUQ7QUFBdEI7QUFBWDtBQVJGO0FBSm9DLEtBQXRCLENBQXRCO0FBZ0JBLFdBQU9iLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JRLElBQWhCLENBQXFCUCxPQUFyQixDQUFQO0FBQ0FRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFaO0FBQ0QsR0EzQkQsQ0EyQkUsT0FBT1UsS0FBUCxFQUFjO0FBQ2QsV0FBT3BCLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCRCxLQUFyQixDQUFQO0FBQ0Q7QUFDRjs7Ozs7Ozs7OztBQ3BDRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2VkaXRwcm9maWxlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL2NsaWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgYmlvLCBwaG9uZSwgdHdpdHRlciwgaW5zdGFncmFtLCBmYWNlYm9vayB9ID0gcmVxLmJvZHlcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxyXG5cclxuICAgIGlmICghc2Vzc2lvbikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHByaXNtYS5wcm9maWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYmlvLFxyXG4gICAgICAgIHBob25lLFxyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdHdpdHRlcixcclxuICAgICAgICBpbnN0YWdyYW0sXHJcbiAgICAgICAgZmFjZWJvb2ssXHJcbiAgICAgICAgdXNlcjogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZmlsZSlcclxuICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcilcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm5hbWUiLCJiaW8iLCJwaG9uZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJmYWNlYm9vayIsImJvZHkiLCJzZXNzaW9uIiwic3RhdHVzIiwicHJvZmlsZSIsInVwZGF0ZSIsIndoZXJlIiwiZW1haWwiLCJ1c2VyIiwiZGF0YSIsImNvbm5lY3QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=