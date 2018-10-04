webpackHotUpdate("main",{

/***/ "./src/components/Credential.js":
/*!**************************************!*\
  !*** ./src/components/Credential.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Credential.js";


var Credential =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Credential, _Component);

  function Credential(props) {
    var _this;

    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Credential);

    _this = Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Credential).call(this, props));
    _this.state = {
      modal: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Credential, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        modal: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var course = this.props.course;
      var modal = this.state.modal;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "education-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, course.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, course.type), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, course.description), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.handleClick,
        className: "more-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "More Info"), modal && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        "aria-hidden": !this.state.modal,
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, course.name, " - ", course.type), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: course.certificate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "There was an error loading. Please reload the page or try again later."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "invalid-input-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Close"))));
    }
  }]);

  return Credential;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Credential);

/***/ })

})
//# sourceMappingURL=main.60a6e77aa5463e4b22ec.hot-update.js.map