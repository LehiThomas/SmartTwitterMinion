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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createCard(DOMCard){
	return {
		id: getId(DOMCard),
		ele: DOMCard,
		hasBanner: checkForBanner(DOMCard),
		hasAvatar: checkForAvatar(DOMCard),
		hasBio: checkForBio(DOMCard),
		isFollowed: checkForFollowed(DOMCard),
		bio: getBio(DOMCard),
		doClick: doClick
	}
}

function getId(DOMCard){
	return DOMCard.attributes["data-user-id"].value;
}

function checkForBanner(DOMCard){
	let ele = DOMCard.querySelector(".ProfileCard-bg");
	return ele.style.backgroundImage !== '';
}

function checkForAvatar(DOMCard){
	let ele = DOMCard.querySelector(".ProfileCard-avatarImage");
	return !ele.attributes.src.value.includes("default_profile_images");
}

function checkForBio(DOMCard){
	let ele = DOMCard.querySelector(".ProfileCard-bio");
	let text = ele.innerText;
	return text !== "";
}

function getBio(DOMCard){
	let ele = DOMCard.querySelector(".ProfileCard-bio");
	return ele.innerText;
}

function checkForFollowed(DOMCard){
	let ele = DOMCard.querySelector(".follow-text");
	return ele.innerText === "Follow";
}

function doClick(){
	let btn = this.ele.querySelector(".follow-text");
	btn.click();
}

/* harmony default export */ __webpack_exports__["a"] = (createCard);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assessMaxFollow__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gatherPeopleToFollow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followPeople__ = __webpack_require__(5);




window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 100 //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			Object(__WEBPACK_IMPORTED_MODULE_1__gatherPeopleToFollow__["a" /* default */])(maxFollow)
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})	
			// .then(peopleToFollow => followPeople(peopleToFollow))
		}
	}
})();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function assessMaxFollow(followingCount, followersCount){
	let baseFollowMax = 5000;
	let dailyFollowMax = 1000;
	let followersBreak = 1800;
	let followIncrease = 0.1;

	if (followersCount > followersBreak){
		baseFollowMax = baseFollowMax + followersCount * followIncrease;
	}

	let personalMaxFollow = baseFollowMax - followingCount;

	return personalMaxFollow > dailyFollowMax ? dailyFollowMax : personalMaxFollow;
}

/* unused harmony default export */ var _unused_webpack_default_export = (assessMaxFollow);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scoreCard__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMaxPeople__ = __webpack_require__(6);




function gatherPeopleToFollow(maxFollow) {
	let maxPeople = Object(__WEBPACK_IMPORTED_MODULE_2__getMaxPeople__["a" /* default */])();
	return new Promise((resolve, reject) => {
		loopGather(maxFollow, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(scrolledPeople[index]);
			// Score the card here
			cards.push(card);
		}
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000);
}


/* harmony default export */ __webpack_exports__["a"] = (gatherPeopleToFollow);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function scoreCard(card) {
  let score = 0;
  
  // Filter for bios and search against keywords
  // if (card.hasBio) {
  //   let keywords = TwitterMinion.wordList.split(", ");
  //   score += 10;
  //   // scan bio for keywords
  //   for (var j = 0; j < keywords.length; j++) {
  //     if (bioText.includes(keywords[j])) {
  //       score += 3;
  //     }
  //   }
  // }

  if (card.checkForBio) {
    let keywords = TwitterMinion.wordList.split(", ");
    score += 10;
  }

  // Filter for background images
  if (card.checkForBanner) {
    score += 10;
  }
  // Filter for profile picture
  if (card.checkForAvatar) {
    score += 10;
  }
  return score;
}

/* unused harmony default export */ var _unused_webpack_default_export = (scoreCard);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard__ = __webpack_require__(0);


function followPeople(peopleToFollow){

	let peopleToFollow = peopleToFollow;
	let peopleFollowed = 0;

	for (let i = 0; i < peopleToFollow.length; i++) {
		let card = peopleToFollow[i];

		if (peopleFollowed > 500) {
			alert(`You followed ${peopleFollowed} people!`);
			break;
		} else {
			// click button every 15 seconds
			setTimeout(function(){
				card.doClick();
			}, 15000);
			peopleFollowed++;
		}
	}
	alert("Program completed. You have been serviced :)");
}

/* unused harmony default export */ var _unused_webpack_default_export = (followPeople);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getMaxPeople(){
	let path = window.location.pathname;
	let listType = path.includes("followers") ? "followers" : path.includes("following") ? "following" : null;
	let maxPeopleEle = document.querySelector(`a[data-nav="${listType}"] .ProfileNav-value`);
	let maxPeople = Number(maxPeopleEle.attributes["data-count"].value);
	return maxPeople;
}

/* harmony default export */ __webpack_exports__["a"] = (getMaxPeople);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTgxMmM5ODZlNzg5OWJkYmU1MzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlclBlb3BsZVRvRm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbGxvd1Blb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2V0TWF4UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFOzs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwyRjs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDL0JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTgxMmM5ODZlNzg5OWJkYmU1MzYiLCJmdW5jdGlvbiBjcmVhdGVDYXJkKERPTUNhcmQpe1xuXHRyZXR1cm4ge1xuXHRcdGlkOiBnZXRJZChET01DYXJkKSxcblx0XHRlbGU6IERPTUNhcmQsXG5cdFx0aGFzQmFubmVyOiBjaGVja0ZvckJhbm5lcihET01DYXJkKSxcblx0XHRoYXNBdmF0YXI6IGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpLFxuXHRcdGhhc0JpbzogY2hlY2tGb3JCaW8oRE9NQ2FyZCksXG5cdFx0aXNGb2xsb3dlZDogY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKSxcblx0XHRiaW86IGdldEJpbyhET01DYXJkKSxcblx0XHRkb0NsaWNrOiBkb0NsaWNrXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0SWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXItaWRcIl0udmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQmFubmVyKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJnXCIpO1xuXHRyZXR1cm4gZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJyc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWF2YXRhckltYWdlXCIpO1xuXHRyZXR1cm4gIWVsZS5hdHRyaWJ1dGVzLnNyYy52YWx1ZS5pbmNsdWRlcyhcImRlZmF1bHRfcHJvZmlsZV9pbWFnZXNcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQmlvKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcblx0bGV0IHRleHQgPSBlbGUuaW5uZXJUZXh0O1xuXHRyZXR1cm4gdGV4dCAhPT0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0QmlvKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcblx0cmV0dXJuIGVsZS5pbm5lclRleHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCl7XG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd1wiO1xufVxuXG5mdW5jdGlvbiBkb0NsaWNrKCl7XG5cdGxldCBidG4gPSB0aGlzLmVsZS5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvdy10ZXh0XCIpO1xuXHRidG4uY2xpY2soKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jcmVhdGVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc3Nlc3NNYXhGb2xsb3cgZnJvbSAnLi9hc3Nlc3NNYXhGb2xsb3cnO1xuaW1wb3J0IGdhdGhlclBlb3BsZVRvRm9sbG93IGZyb20gJy4vZ2F0aGVyUGVvcGxlVG9Gb2xsb3cnO1xuaW1wb3J0IGZvbGxvd1Blb3BsZSBmcm9tICcuL2ZvbGxvd1Blb3BsZSc7XG5cbndpbmRvdy5Ud2l0dGVyTWluaW9uID0gIChmdW5jdGlvbigpe1xuXHRsZXQgbXlGb2xsb3dpbmcgPSA0OTk3O1xuXHRsZXQgbXlGb2xsb3dlcnMgPSA2MjM4O1xuXHRsZXQgbWF4Rm9sbG93ID0gMTAwIC8vYXNzZXNzTWF4Rm9sbG93KG15Rm9sbG93aW5nLCBteUZvbGxvd2Vycyk7XG5cdHJldHVybiB7XG5cdFx0Zm9sbG93OiAoKSA9PiB7XG5cdFx0XHRnYXRoZXJQZW9wbGVUb0ZvbGxvdyhtYXhGb2xsb3cpXG5cdFx0XHRcdC50aGVuKGNhcmRzID0+IHtcblx0XHRcdFx0XHQvLyBQbGFjaW5nIG9uIHdpbmRvdyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXG5cdFx0XHRcdFx0d2luZG93LmNhcmRzID0gY2FyZHM7XG5cdFx0XHRcdH0pXHRcblx0XHRcdC8vIC50aGVuKHBlb3BsZVRvRm9sbG93ID0+IGZvbGxvd1Blb3BsZShwZW9wbGVUb0ZvbGxvdykpXG5cdFx0fVxuXHR9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XG5cdGxldCBiYXNlRm9sbG93TWF4ID0gNTAwMDtcblx0bGV0IGRhaWx5Rm9sbG93TWF4ID0gMTAwMDtcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcblx0bGV0IGZvbGxvd0luY3JlYXNlID0gMC4xO1xuXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcblx0XHRiYXNlRm9sbG93TWF4ID0gYmFzZUZvbGxvd01heCArIGZvbGxvd2Vyc0NvdW50ICogZm9sbG93SW5jcmVhc2U7XG5cdH1cblxuXHRsZXQgcGVyc29uYWxNYXhGb2xsb3cgPSBiYXNlRm9sbG93TWF4IC0gZm9sbG93aW5nQ291bnQ7XG5cblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuaW1wb3J0IHNjb3JlQ2FyZCAgZnJvbSAnLi9zY29yZUNhcmQnO1xuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tICcuL2dldE1heFBlb3BsZSc7XG5cbmZ1bmN0aW9uIGdhdGhlclBlb3BsZVRvRm9sbG93KG1heEZvbGxvdykge1xuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwLCBjYXJkcyA9IFtdKXtcblx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgc2Nyb2xsZWRQZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiUHJvZmlsZUNhcmRcIik7XG5cblx0XHRpZihzY3JvbGxlZFBlb3BsZS5sZW5ndGggPj0gbWF4UGVvcGxlKSByZXNvbHZlKGNhcmRzKTtcblxuXHRcdGZvcig7IGluZGV4IDwgc2Nyb2xsZWRQZW9wbGUubGVuZ3RoICYmIGNhcmRzLmxlbmd0aCA8IG1heEZvbGxvdzsgaW5kZXgrKyl7XG5cdFx0XHRsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoc2Nyb2xsZWRQZW9wbGVbaW5kZXhdKTtcblx0XHRcdC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcblx0XHRcdGNhcmRzLnB1c2goY2FyZCk7XG5cdFx0fVxuXHRcdGNhcmRzLmxlbmd0aCA+PSBtYXhGb2xsb3cgPyByZXNvbHZlKGNhcmRzKSA6IGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXgsIGNhcmRzKTtcblx0fSwgMjAwMCk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2F0aGVyUGVvcGxlVG9Gb2xsb3c7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJQZW9wbGVUb0ZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzY29yZUNhcmQoY2FyZCkge1xuICBsZXQgc2NvcmUgPSAwO1xuICBcbiAgLy8gRmlsdGVyIGZvciBiaW9zIGFuZCBzZWFyY2ggYWdhaW5zdCBrZXl3b3Jkc1xuICAvLyBpZiAoY2FyZC5oYXNCaW8pIHtcbiAgLy8gICBsZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gIC8vICAgc2NvcmUgKz0gMTA7XG4gIC8vICAgLy8gc2NhbiBiaW8gZm9yIGtleXdvcmRzXG4gIC8vICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXl3b3Jkcy5sZW5ndGg7IGorKykge1xuICAvLyAgICAgaWYgKGJpb1RleHQuaW5jbHVkZXMoa2V5d29yZHNbal0pKSB7XG4gIC8vICAgICAgIHNjb3JlICs9IDM7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaWYgKGNhcmQuY2hlY2tGb3JCaW8pIHtcbiAgICBsZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cblxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXG4gIGlmIChjYXJkLmNoZWNrRm9yQmFubmVyKSB7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBwcm9maWxlIHBpY3R1cmVcbiAgaWYgKGNhcmQuY2hlY2tGb3JBdmF0YXIpIHtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICByZXR1cm4gc2NvcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcblxuZnVuY3Rpb24gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KXtcblxuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBwZW9wbGVUb0ZvbGxvdztcblx0bGV0IHBlb3BsZUZvbGxvd2VkID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZVRvRm9sbG93Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNhcmQgPSBwZW9wbGVUb0ZvbGxvd1tpXTtcblxuXHRcdGlmIChwZW9wbGVGb2xsb3dlZCA+IDUwMCkge1xuXHRcdFx0YWxlcnQoYFlvdSBmb2xsb3dlZCAke3Blb3BsZUZvbGxvd2VkfSBwZW9wbGUhYCk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY2xpY2sgYnV0dG9uIGV2ZXJ5IDE1IHNlY29uZHNcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Y2FyZC5kb0NsaWNrKCk7XG5cdFx0XHR9LCAxNTAwMCk7XG5cdFx0XHRwZW9wbGVGb2xsb3dlZCsrO1xuXHRcdH1cblx0fVxuXHRhbGVydChcIlByb2dyYW0gY29tcGxldGVkLiBZb3UgaGF2ZSBiZWVuIHNlcnZpY2VkIDopXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dQZW9wbGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb2xsb3dQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XG5cdGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xuXHRsZXQgbWF4UGVvcGxlID0gTnVtYmVyKG1heFBlb3BsZUVsZS5hdHRyaWJ1dGVzW1wiZGF0YS1jb3VudFwiXS52YWx1ZSk7XG5cdHJldHVybiBtYXhQZW9wbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==