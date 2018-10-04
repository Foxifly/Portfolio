(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nnav {\n  position: fixed;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  background-color: black;\n  color: white;\n  justify-content: center;\n  padding: 20px;\n  margin-top: 0;\n}\n\nh1,\nh2,\nh3 {\n  margin: 0;\n}\n\nh2 {\n  text-align: center;\n}\n\n.logo,\n.sm-nav-list,\n.nav-list {\n  font-family: \"Dosis\", sans-serif;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 33.33333%;\n}\n\n.logo,\n.sm-nav-item,\n.nav-item {\n  list-style: none;\n}\n\n.nav-item {\n  color: grey;\n}\n\n.nav-item-link {\n  text-decoration: none;\n  color: gray;\n  padding: 20px;\n}\n\n.nav-item-link:hover>.nav-item {\n  border-bottom: 1px solid white;\n}\n\n.selected {\n  color: white;\n}\n\n.main-image {\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.about-me-pic {\n  width: 150px;\n  height: auto;\n  border-radius: 600px;\n}\n\n.about {\n  margin: 0 auto;\n  width: 50%;\n  text-align: center;\n}\n\n.education {\n  background-color: gray;\n  margin: 0;\n}\n\n.projects {\n  background-color: lightgray;\n}\n\n.education-container {\n  display: grid;\n  grid-gap: 25px;\n  justify-content: center;\n  grid-template-columns: repeat(3, 20%);\n  padding: 20px;\n}\n\n.education-content {\n  background-color: yellow;\n  text-align: center;\n  padding: 20px;\n}\n\nh3 {\n  text-align: center;\n}\n\n.heading {\n  text-align: center;\n  padding: 20%;\n  color: white;\n}\n\n.project-container {\n  display: grid;\n  grid-gap: 25px;\n  justify-content: center;\n  grid-template-columns: repeat(4, 20%);\n  padding: 20px;\n}\n\n.project-content {\n  background-color: lightblue;\n  text-align: center;\n  padding: 20px;\n}\n\n\n.modal {\n  display: flex;\n  flex-wrap: wrap;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 10;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  top:0;\n  left: 0;\n}\n.modal-content {\n  text-align: center;\n  background-color: white;\n  margin: auto;\n  padding: 10px;\n  border-radius: 10px;\n  width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/data.json */ "./src/data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var _data_education_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/education.json */ "./src/data/education.json");
var _data_education_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/education.json */ "./src/data/education.json", 1);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/App.js";






var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      projectList: [],
      courseWork: []
    };
    return _this;
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        projectList: _data_data_json__WEBPACK_IMPORTED_MODULE_7__,
        courseWork: _data_education_json__WEBPACK_IMPORTED_MODULE_8__
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          projectList = _this$state.projectList,
          courseWork = _this$state.courseWork;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_6__["default"], {
        courseWork: courseWork,
        projectList: projectList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AboutMe.js":
/*!***********************************!*\
  !*** ./src/components/AboutMe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/AboutMe.js";


var AboutMe =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutMe, _Component);

  function AboutMe() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutMe);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutMe).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutMe, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: "about",
        id: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "About Me"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "about-me-pic",
        src: "../resources/img/about-me.jpg",
        alt: "picture of Lindsay Ciastko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "In late 2011, I graduated high school wanting to be a physics major. I wanted to get a great career in a lab and be a renown scientist. I had confidence that I would find a career in my field easily after graduation. In early 2016, I graduated Albion College with my shiny new Bachelor's Degree. Little did I know that the job market really wasn't looking for a newbie physics major.", " "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "After spending some time struggling to find a job in physics, I decided to pick up coding to make the time go by quicker. I spent a great deal of time designing a small website and a chat bot for a music sharing platform known as plug.dj. At first, this site and bot were honestly nothing special. My website looked like something that was born in the 90ss, and my chat bot had minimal features and crashed constantly. But, for some reason, I wanted to continue to work on them."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "As time passed, my website became more and more complex and beautiful and my chat bot completely transformed. Instead of running in a browser through a bookmarklet, I was able to redesign my bot using Node.js and run it on the command line. In my perspective, this was absolutely revolutionary! Soon after, I applied for a scholarship with Udacity sponsored by Google for a Front End Developer Nanodegree. I was awarded this scholarship for both the challenge course and the nanodegree itself. I am working on completing this nanodegree and I expect to be complete this upcoming October."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Goodbye science."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Hello development.")));
    }
  }]);

  return AboutMe;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Contact.js";


var Contact =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _Component);

  function Contact() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: "contact",
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Contact me for things"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        role: "textbox",
        id: "name",
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "name-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Your Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "name-input",
        id: "name-input",
        placeholder: "Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        role: "textbox",
        id: "email",
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "email-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Your Email"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "input",
        type: "text",
        name: "email-input",
        id: "email-input",
        placeholder: "Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        role: "textbox",
        id: "description",
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "text-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        id: "text-description",
        className: "input",
        name: "description",
        placeholder: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "button",
        id: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

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

/***/ }),

/***/ "./src/components/Education.js":
/*!*************************************!*\
  !*** ./src/components/Education.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Credential__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Credential */ "./src/components/Credential.js");





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Education.js";



var Education =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Education, _Component);

  function Education() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Education);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Education).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Education, [{
    key: "render",
    value: function render() {
      var courseWork = this.props.courseWork;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: "education",
        id: "education",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Education"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "education-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, courseWork.map(function (course) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Credential__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: course.key,
          course: course,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        });
      })));
    }
  }]);

  return Education;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _AboutMe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutMe */ "./src/components/AboutMe.js");
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Education */ "./src/components/Education.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact.js");





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Main.js";







var Main =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);

  function Main() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          projectList = _this$props.projectList,
          courseWork = _this$props.courseWork;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AboutMe__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Education__WEBPACK_IMPORTED_MODULE_8__["default"], {
        courseWork: courseWork,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
        projectList: projectList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Contact__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/NavBar.js";


var NavBar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavBar, _Component);

  function NavBar() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Logo here"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-item-link selected",
        href: "#home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-item-link",
        href: "#about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "ABOUT")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-item-link",
        href: "#education",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "EDUCATION")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-item-link",
        href: "#projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "PROJECTS")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "nav-item-link",
        href: "#contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "CONTACT"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "sm-nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "sm-nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "SM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "sm-nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "SM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "sm-nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "SM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "sm-nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "SM"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "sm-nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "SM")));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Project.js";


var Project =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, _Component);

  function Project() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Project);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Project).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Project, [{
    key: "render",
    value: function render() {
      var projectInfo = this.props.projectInfo;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "project-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, projectInfo.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "project-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "more-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "More Info"));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");





var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/components/Projects.js";



var Projects =
/*#__PURE__*/
function (_Component) {
  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _Component);

  function Projects() {
    Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_Users_foxifly_Desktop_Portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      var projectList = this.props.projectList;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: "projects",
        id: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "All my things to show off"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "project-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, projectList.map(function (project) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_6__["default"], {
          projectInfo: project,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        });
      })));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"name":"Spur of the Moment","language":["React.JS","JavaScript","HTML","CSS"],"image":"","date":"September 2018","github":"https://github.com/Foxifly/Udacity-Map-Project","demo":"https://foxifly.github.io/Udacity-Map-Project/","bio":"Part of the final project for Udacity's Front End Development Course, Spur of the Moment is an accessibility-friendly application built with the React.js framework. Spur of the Moment was brought to life using Google Maps, Yelp, and more to create a fully functioning web application. Using this application, users are able to search locations for various horse-related locations. For example, if a user is looking for a farrier to take care of their horses's horseshoes, Spur of the Moment will make it easy for them to locate one near them."},{"name":"Arcade Game Clone","language":["JavaScript","HTML","CSS"],"image":"IMG","date":"August 2018","github":"https://github.com/Foxifly/Arcade-Game-Clone","demo":"https://udacity.foxifly.net/FroggerClone/Arcade%20Game%20Clone/","bio":"The purpose of this project is to get acquainted with Object Oriented JavaScript to create a Frogger game clone. As provided by the Udacity project rubric, students were to create player and enemy entity classes that would spawn on the canvas. The enemy entities move across the board. The player entity is controlled by the end-user who will use the arrow keys to navigate to avoid the enemies. The object of the game is to clear all the levels and complete level 10."},{"name":"Memory Game","image":"IMG","language":["JavaScript","jQuery","HTML","CSS"],"date":"May 2018","github":"https://github.com/Foxifly/Udacity-Memory-Game","demo":"https://udacity.foxifly.net/memorygame/","bio":"This memory game was designed for the second project of Udacity's Frontend Development Nano Degree program. This app runs on the browser and generates a matching game for users to play. The goal of the game is to pair each card with a card that has a matching image. Once all matches have been made, the user will be rated based on how many moves were made and the time taken. The purpose of this game is to gain proficiency with building front-end web applications to design a browser based game. This game utilized skills in HTML, CSS, JavaScript, and JQuery to build a fully functioning game."},{"name":"Fox Bot","image":"IMG","language":["Node.JS"],"date":"Ongoing","github":"","demo":"","bio":""},{"name":"Fox Den EDM Website","image":"IMG","language":["React","JavaScript","Express.js","HTML","CSS"],"date":"November 2018","github":"","demo":"","bio":""},{"name":"Jamming","image":"IMG","language":["React.JS","JavaScript"],"date":"June 2018","github":"https://github.com/Foxifly/jamming","demo":"","bio":"The Codecademy final project required students to create a React Application from scratch. This application uses the Spotify API to authenticate a user through Spotify in order to create playlists and publish tracks. This application allows a user to search tracks based on a query in the input field, and add them to a playlist which then POSTs to Spotify."},{"name":"My Reads","image":"IMG","language":["React.JS","JavaScript"],"date":"September 2018","github":"https://github.com/Foxifly/My-Reads-Project","demo":"","bio":"MyReads is a book tracking app that allows users to sort and search for books that they are currently reading, want to read, and read. In this app, users can view books in their shelves and move them to different shelves. Additionally, if a user no longer wants a book in their shelf, they can remove it by selecting 'none'. To add new books, the user will select the search button in the bottom right corner to search for a new book. This app was built using the React JavaScript Framework and was modified for Udacity's Project 6."},{"name":"Pixel Art Maker","image":"IMG","language":["JavaScript","JQuery","CSS","HTML"],"date":"September 2018","github":"https://github.com/Foxifly/My-Reads-Project","demo":"","bio":"MyReads is a book tracking app that allows users to sort and search for books that they are currently reading, want to read, and read. In this app, users can view books in their shelves and move them to different shelves. Additionally, if a user no longer wants a book in their shelf, they can remove it by selecting 'none'. To add new books, the user will select the search button in the bottom right corner to search for a new book. This app was built using the React JavaScript Framework and was modified for Udacity's Project 6."}];

/***/ }),

/***/ "./src/data/education.json":
/*!*********************************!*\
  !*** ./src/data/education.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"key":"1","name":"Udacity","type":"Front End Development","logo":"../img/udacity-logo.png","date":"April 2018 - October 2018","description":"Nanodegree scholarship obtained through Grow with Google April 2018. Completed 7 projects.","long_description":"","certificate":"../img/FrontEndDev-Certificate.svg","certificate_url":"https://confirm.udacity.com/WKVSX4PP","course_link":""},{"key":"2","name":"Codecademy","type":"Building Web Applications","logo":"../img/codecademy-logo.png","date":"April 2018 - June 2018","description":"Learned how to develop interactive front-end applications using JavaScript and React.JS.","long_description":"","certificate":"../img/FrontEndApps-Credential.png","certificate_url":"https://www.credential.net/9mf16v0r","course_link":"https://help.codecademy.com/hc/en-us/articles/115000727594-What-curriculum-is-covered-in-Build-Front-End-Apps-from-Scratch"},{"key":"3","name":"Codecademy","type":"Building Website UIs","logo":"../img/codecademy-logo.png","date":"April 2018 - June 2018","description":"Studied in-depth concepts of website usability, accessibility, color theory, typography, and layouts using HTML and CSS.","long_description":"","certificate":"../img/BuildWebsiteUIs-Credential.png","certificate_url":"https://www.credential.net/bjazfapw","course_link":"https://help.codecademy.com/hc/en-us/articles/115003852494-What-curriculum-is-covered-in-Build-Website-UIs"}];

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/foxifly/Desktop/Portfolio/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.'); // Execute callback

            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/foxifly/Desktop/Portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/foxifly/Desktop/Portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map