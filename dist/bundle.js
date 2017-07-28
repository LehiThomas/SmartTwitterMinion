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
		followsYou: checkFollowsYou(DOMCard),
		isProtected: checkProtected(DOMCard),
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

function checkFollowsYou(DOMCard){
	let ele = DOMCard.querySelector(".FollowStatus");
	return ele ? ele.innerText === "Follows you" : false;
}

function checkProtected(DOMCard){
	return DOMCard.querySelector("[data-protected=true]") ? true : false;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gatherCards__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followPeople__ = __webpack_require__(6);




window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 10; //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			Object(__WEBPACK_IMPORTED_MODULE_1__gatherCards__["a" /* default */])(maxFollow)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMaxPeople__ = __webpack_require__(5);




function gatherCards(maxFollow) {
	let maxPeople = Object(__WEBPACK_IMPORTED_MODULE_2__getMaxPeople__["a" /* default */])();
	return new Promise((resolve, reject) => {
		loopGather(maxFollow, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople || cards.length >= maxFollow) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(scrolledPeople[index]);
			// Score the card here
			if (card.checkForFollowed) {
				continue;
			} else {
				if (Object(__WEBPACK_IMPORTED_MODULE_1__scoreCard__["a" /* default */])(card) >= 30) {
					cards.push(card);
				}
			}
		}

		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000); // Be good to make this interval random
}


/* harmony default export */ __webpack_exports__["a"] = (gatherCards);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard__ = __webpack_require__(0);


function scoreCard(card) {
  let score = 0;

  if (card.checkForBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
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

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


/***/ }),
/* 5 */
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

/***/ }),
/* 6 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmZlMDliNTAyNGY5NTI3YmQxYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9sbG93UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJGOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLDJEQUEyRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQUdBOzs7Ozs7Ozs7QUNwQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7O0FDUkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0IsMkJBQTJCO0FBQzNDOztBQUVBO0FBQ0EseUJBQXlCLGVBQWU7QUFDeEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmZlMDliNTAyNGY5NTI3YmQxYzEiLCJmdW5jdGlvbiBjcmVhdGVDYXJkKERPTUNhcmQpe1xyXG5cdHJldHVybiB7XHJcblx0XHRpZDogZ2V0SWQoRE9NQ2FyZCksXHJcblx0XHRlbGU6IERPTUNhcmQsXHJcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxyXG5cdFx0aGFzQXZhdGFyOiBjaGVja0ZvckF2YXRhcihET01DYXJkKSxcclxuXHRcdGhhc0JpbzogY2hlY2tGb3JCaW8oRE9NQ2FyZCksXHJcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxyXG5cdFx0Zm9sbG93c1lvdTogY2hlY2tGb2xsb3dzWW91KERPTUNhcmQpLFxyXG5cdFx0aXNQcm90ZWN0ZWQ6IGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpLFxyXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXHJcblx0XHRkb0NsaWNrOiBkb0NsaWNrXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJZChET01DYXJkKXtcclxuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJnXCIpO1xyXG5cdHJldHVybiBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcclxuXHRyZXR1cm4gIWVsZS5hdHRyaWJ1dGVzLnNyYy52YWx1ZS5pbmNsdWRlcyhcImRlZmF1bHRfcHJvZmlsZV9pbWFnZXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQmlvKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmlvXCIpO1xyXG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcclxuXHRyZXR1cm4gdGV4dCAhPT0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmlvKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmlvXCIpO1xyXG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XHJcblx0cmV0dXJuIGVsZS5pbm5lclRleHQgPT09IFwiRm9sbG93XCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLkZvbGxvd1N0YXR1c1wiKTtcclxuXHRyZXR1cm4gZWxlID8gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dzIHlvdVwiIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvQ2xpY2soKXtcclxuXHRsZXQgYnRuID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcclxuXHRidG4uY2xpY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3JlYXRlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXNzZXNzTWF4Rm9sbG93IGZyb20gJy4vYXNzZXNzTWF4Rm9sbG93JztcclxuaW1wb3J0IGdhdGhlckNhcmRzIGZyb20gJy4vZ2F0aGVyQ2FyZHMnO1xyXG5pbXBvcnQgZm9sbG93UGVvcGxlIGZyb20gJy4vZm9sbG93UGVvcGxlJztcclxuXHJcbndpbmRvdy5Ud2l0dGVyTWluaW9uID0gIChmdW5jdGlvbigpe1xyXG5cdGxldCBteUZvbGxvd2luZyA9IDQ5OTc7XHJcblx0bGV0IG15Rm9sbG93ZXJzID0gNjIzODtcclxuXHRsZXQgbWF4Rm9sbG93ID0gMTA7IC8vYXNzZXNzTWF4Rm9sbG93KG15Rm9sbG93aW5nLCBteUZvbGxvd2Vycyk7XHJcblx0cmV0dXJuIHtcclxuXHRcdGZvbGxvdzogKCkgPT4ge1xyXG5cdFx0XHRnYXRoZXJDYXJkcyhtYXhGb2xsb3cpXHJcblx0XHRcdFx0LnRoZW4oY2FyZHMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gUGxhY2luZyBvbiB3aW5kb3cgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xyXG5cdFx0XHRcdFx0d2luZG93LmNhcmRzID0gY2FyZHM7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0Ly8gLnRoZW4ocGVvcGxlVG9Gb2xsb3cgPT4gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KSlcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xyXG5cdGxldCBiYXNlRm9sbG93TWF4ID0gNTAwMDtcclxuXHRsZXQgZGFpbHlGb2xsb3dNYXggPSAxMDAwO1xyXG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XHJcblx0bGV0IGZvbGxvd0luY3JlYXNlID0gMC4xO1xyXG5cclxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XHJcblx0XHRiYXNlRm9sbG93TWF4ID0gYmFzZUZvbGxvd01heCArIGZvbGxvd2Vyc0NvdW50ICogZm9sbG93SW5jcmVhc2U7XHJcblx0fVxyXG5cclxuXHRsZXQgcGVyc29uYWxNYXhGb2xsb3cgPSBiYXNlRm9sbG93TWF4IC0gZm9sbG93aW5nQ291bnQ7XHJcblxyXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcclxuaW1wb3J0IHNjb3JlQ2FyZCAgZnJvbSAnLi9zY29yZUNhcmQnO1xyXG5pbXBvcnQgZ2V0TWF4UGVvcGxlIGZyb20gJy4vZ2V0TWF4UGVvcGxlJztcclxuXHJcbmZ1bmN0aW9uIGdhdGhlckNhcmRzKG1heEZvbGxvdykge1xyXG5cdGxldCBtYXhQZW9wbGUgPSBnZXRNYXhQZW9wbGUoKTtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0bG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDAsIGNhcmRzID0gW10pe1xyXG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xyXG5cclxuXHRcdGlmKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUgfHwgY2FyZHMubGVuZ3RoID49IG1heEZvbGxvdykgcmVzb2x2ZShjYXJkcyk7XHJcblxyXG5cdFx0Zm9yKDsgaW5kZXggPCBzY3JvbGxlZFBlb3BsZS5sZW5ndGggJiYgY2FyZHMubGVuZ3RoIDwgbWF4Rm9sbG93OyBpbmRleCsrKXtcclxuXHRcdFx0bGV0IGNhcmQgPSBjcmVhdGVDYXJkKHNjcm9sbGVkUGVvcGxlW2luZGV4XSk7XHJcblx0XHRcdC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcclxuXHRcdFx0aWYgKGNhcmQuY2hlY2tGb3JGb2xsb3dlZCkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChzY29yZUNhcmQoY2FyZCkgPj0gMzApIHtcclxuXHRcdFx0XHRcdGNhcmRzLnB1c2goY2FyZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xyXG5cdH0sIDIwMDApOyAvLyBCZSBnb29kIHRvIG1ha2UgdGhpcyBpbnRlcnZhbCByYW5kb21cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhdGhlckNhcmRzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcclxuXHJcbmZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XHJcbiAgbGV0IHNjb3JlID0gMDtcclxuXHJcbiAgaWYgKGNhcmQuY2hlY2tGb3JCaW8pIHtcclxuICAgIC8vbGV0IGtleXdvcmRzID0gVHdpdHRlck1pbmlvbi53b3JkTGlzdC5zcGxpdChcIiwgXCIpO1xyXG4gICAgc2NvcmUgKz0gMTA7XHJcbiAgfVxyXG4gIC8vIEZpbHRlciBmb3IgYmFja2dyb3VuZCBpbWFnZXNcclxuICBpZiAoY2FyZC5jaGVja0ZvckJhbm5lcikge1xyXG4gICAgc2NvcmUgKz0gMTA7XHJcbiAgfVxyXG4gIC8vIEZpbHRlciBmb3IgcHJvZmlsZSBwaWN0dXJlXHJcbiAgaWYgKGNhcmQuY2hlY2tGb3JBdmF0YXIpIHtcclxuICAgIHNjb3JlICs9IDEwO1xyXG4gIH1cclxuICByZXR1cm4gc2NvcmU7XHJcbn1cblxyXG5leHBvcnQgZGVmYXVsdCBzY29yZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBnZXRNYXhQZW9wbGUoKXtcclxuXHRsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcclxuXHRsZXQgbWF4UGVvcGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtkYXRhLW5hdj1cIiR7bGlzdFR5cGV9XCJdIC5Qcm9maWxlTmF2LXZhbHVlYCk7XHJcblx0bGV0IG1heFBlb3BsZSA9IE51bWJlcihtYXhQZW9wbGVFbGUuYXR0cmlidXRlc1tcImRhdGEtY291bnRcIl0udmFsdWUpO1xyXG5cdHJldHVybiBtYXhQZW9wbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xyXG5cclxuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBwZW9wbGVUb0ZvbGxvdztcclxuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZVRvRm9sbG93Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xyXG5cclxuXHRcdGlmIChwZW9wbGVGb2xsb3dlZCA+IDUwMCkge1xyXG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2FyZC5kb0NsaWNrKCk7XHJcblx0XHRcdH0sIDE1MDAwKTtcclxuXHRcdFx0cGVvcGxlRm9sbG93ZWQrKztcclxuXHRcdH1cclxuXHR9XHJcblx0YWxlcnQoXCJQcm9ncmFtIGNvbXBsZXRlZC4gWW91IGhhdmUgYmVlbiBzZXJ2aWNlZCA6KVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93UGVvcGxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb2xsb3dQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==