/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoScrolling__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__follow__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(3);




const TwitterMinion = {
	count: 1,
	people: [],
	peopleToAdd: [],
	peopleAdded: 0,
	scrollInterval: 0,
	autoScrolling: __WEBPACK_IMPORTED_MODULE_0__autoScrolling__["a" /* default */],
	follow: __WEBPACK_IMPORTED_MODULE_1__follow__["a" /* default */],
	start: __WEBPACK_IMPORTED_MODULE_2__start__["a" /* default */]
}

window.TwitterMinion = TwitterMinion;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
	this.count++;
	// 500 person limit (I believe the Twitter limit is 1000/day) or until bottom of page is reached
	if (peopleToAdd.length >= 500 || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    clearInterval(this.scrollInterval);
		// Return true to know when this function is done running?
		return true;
  } else {
		window.scrollTo(0,document.body.scrollHeight);
		this.people = document.getElementsByClassName("ProfileCard");

		for (var i = 0; i < this.people.length; i++) {
			const card = this.people[i];
			const bio = card.getElementsByClassName("ProfileCard-bio");
			const button = card.getElementsByClassName("follow-text");

			// Only add person to list if they have a bio and are not yet being followed
			if (bio[0].innerText !== "" && button[0].innerText === "Follow") {
				peopleToAdd.push(card);
			}
		}
	}
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(){
	alert(this.count);
	for (var i = 0; i < this.peopleToAdd.length; i++) {
		var card = this.peopleToAdd[i];
		var button = card.getElementsByClassName("follow-text");

		if (this.peopleAdded > 500) {
			alert(`You followed ${this.peopleAdded} people!`);
			break;
		} else {
			// click button every 15 seconds
			setTimeout(function(){
				button[0].click();
			}, 15000);
			this.peopleAdded++;
		}
	}
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  this.scroll = setInterval(autoScrolling, 2000);

  // if autoScrolling return TRUE
  follow();
});


/***/ })
/******/ ]);