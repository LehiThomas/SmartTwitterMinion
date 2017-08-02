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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let config = {
	myFollowing: 0,
	myFollowers: 0,
	passingScore: 0,
	bannerScore: 0,
	avatarScore: 0,
	keyWords:[],
	scrollInterval: {
		min: 2000,
		max: 10000
	},
	clickInterval: {
		min: 2000,
		max: 20000
	}
}

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function randomTime(min, max){
	min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/* harmony default export */ __webpack_exports__["a"] = (randomTime);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assessMaxFollow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatherCards__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doClicker__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters_followFilter__ = __webpack_require__(9);







window.TwitterMinion =  (function(){
	let _this = {
		follow: () => {
			let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_1__assessMaxFollow__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			Object(__WEBPACK_IMPORTED_MODULE_2__gatherCards__["a" /* default */])(maxFollow, __WEBPACK_IMPORTED_MODULE_5__filters_followFilter__["a" /* default */])
				.then(cards => Object(__WEBPACK_IMPORTED_MODULE_3__doClicker__["a" /* default */])(cards))
				.then(() =>  alert("All done!"));
		},
		setup: {
			promptAll: () => {
				_this.setup.promptMyFollowing();
				_this.setup.promptMyFollowers();
				_this.setup.promptPassingScore();
				_this.setup.promptBannerScore();
				_this.setup.promptAvatarScore();
			},
			promptMyFollowing: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing = prompt("How many followers do you have?", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing);
			},
			promptMyFollowers: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers = prompt("How many people are you following?", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers);
			},
			promptPassingScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].passingScore = prompt("Minimum Passing Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].passingScore);
			},
			promptBannerScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore = prompt("Banner Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore);
			},
			promptAvatarScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore = prompt("Profile Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore);
			}
		},
		test: __WEBPACK_IMPORTED_MODULE_4__test__["a" /* default */]
	}
	return _this;
})();


/***/ }),
/* 3 */
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

/* harmony default export */ __webpack_exports__["a"] = (assessMaxFollow);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createCard__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMaxPeople__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__randomTime__ = __webpack_require__(1);





function gatherCards(maxFollow, cardCheck) {
	let maxPeople = Object(__WEBPACK_IMPORTED_MODULE_2__getMaxPeople__["a" /* default */])();
	return new Promise((resolve, reject) => {
		loopGather(maxFollow, cardCheck, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, cardCheck, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
      let card = Object(__WEBPACK_IMPORTED_MODULE_1__createCard__["a" /* default */])(scrolledPeople[index]);
      if(cardCheck(card)) cards.push(card);
		}
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, cardCheck, maxPeople, resolve, reject, index, cards);
	}, Object(__WEBPACK_IMPORTED_MODULE_3__randomTime__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].scrollInterval.min, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].scrollInterval.max));
}


/* harmony default export */ __webpack_exports__["a"] = (gatherCards);


/***/ }),
/* 5 */
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
	let ele = DOMCard.querySelector(".user-actions");
	return ele.classList.contains("following");
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

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__randomTime__ = __webpack_require__(1);



function doClicker(cards){
	return new Promise((resolve, reject) => {
		loopClick(cards, resolve, reject);
	});
}

function loopClick(cards, resolve, reject, index = 0){
	setTimeout(() => {
		if(index >= cards.length) return resolve();
		let card = cards[index];
		card.doClick();
		index++;
		loopClick(cards, resolve, reject, index);
	}, Object(__WEBPACK_IMPORTED_MODULE_1__randomTime__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].clickInterval.min, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].clickInterval.max));
}

/* harmony default export */ __webpack_exports__["a"] = (doClicker);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);


function test() {
	console.error(`myFollowing ${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing}`);
	console.error(`myFollowers ${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers}`);
	console.error(`passingScore ${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].passingScore}`);
	console.error(`bannerScore ${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore}`);
	console.error(`profileScore ${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].profileScore}`);
}

/* harmony default export */ __webpack_exports__["a"] = (test);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scoreCard__ = __webpack_require__(10);



function followFilter(card) {
  // Score the card here
  if (card.checkForFollowed || card.isProtected) {
    return false;
  } else {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__scoreCard__["a" /* default */])(card) >= __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].passingScore) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (followFilter);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);


function scoreCard(card) {
  let score = 0;

  if (card.hasBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
  }
  // Filter for background images
  if (card.hasBanner) {
    score += __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore;
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore;
  }
  
  return score;
}

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjFmZjAyZjU2MWZmYmMzMjA1YzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFFOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVOztBQUVuRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwRTs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOzs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQSw4QkFBOEIscUVBQW1CO0FBQ2pELDhCQUE4QixxRUFBbUI7QUFDakQsK0JBQStCLHNFQUFvQjtBQUNuRCw4QkFBOEIscUVBQW1CO0FBQ2pELCtCQUErQixzRUFBb0I7QUFDbkQ7O0FBRUEsK0Q7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYxZmYwMmY1NjFmZmJjMzIwNWMxIiwibGV0IGNvbmZpZyA9IHtcblx0bXlGb2xsb3dpbmc6IDAsXG5cdG15Rm9sbG93ZXJzOiAwLFxuXHRwYXNzaW5nU2NvcmU6IDAsXG5cdGJhbm5lclNjb3JlOiAwLFxuXHRhdmF0YXJTY29yZTogMCxcblx0a2V5V29yZHM6W10sXG5cdHNjcm9sbEludGVydmFsOiB7XG5cdFx0bWluOiAyMDAwLFxuXHRcdG1heDogMTAwMDBcblx0fSxcblx0Y2xpY2tJbnRlcnZhbDoge1xuXHRcdG1pbjogMjAwMCxcblx0XHRtYXg6IDIwMDAwXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KXtcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tVGltZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yYW5kb21UaW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XG5pbXBvcnQgZG9DbGlja2VyIGZyb20gJy4vZG9DbGlja2VyJztcbmltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdCc7XG5pbXBvcnQgZm9sbG93RmlsdGVyIGZyb20gJy4vZmlsdGVycy9mb2xsb3dGaWx0ZXInO1xuXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcblx0bGV0IF90aGlzID0ge1xuXHRcdGZvbGxvdzogKCkgPT4ge1xuXHRcdFx0bGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhjb25maWcubXlGb2xsb3dpbmcsIGNvbmZpZy5teUZvbGxvd2Vycyk7XG5cdFx0XHRtYXhGb2xsb3cgPSBwcm9tcHQoYFRoZSBtYXggdGhhdCBjYW4gYmUgZm9sbG93ZWQgaXMgJHttYXhGb2xsb3d9LiBZb3UgbWF5IHNldCBhIGRpZmZlcmVudCBhbW91bnRgLCBtYXhGb2xsb3cpO1xuXG5cdFx0XHRnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGZvbGxvd0ZpbHRlcilcblx0XHRcdFx0LnRoZW4oY2FyZHMgPT4gZG9DbGlja2VyKGNhcmRzKSlcblx0XHRcdFx0LnRoZW4oKCkgPT4gIGFsZXJ0KFwiQWxsIGRvbmUhXCIpKTtcblx0XHR9LFxuXHRcdHNldHVwOiB7XG5cdFx0XHRwcm9tcHRBbGw6ICgpID0+IHtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dpbmcoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dlcnMoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0UGFzc2luZ1Njb3JlKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEJhbm5lclNjb3JlKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEF2YXRhclNjb3JlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cHJvbXB0TXlGb2xsb3dpbmc6ICgpID0+IHtcblx0XHRcdFx0Y29uZmlnLm15Rm9sbG93aW5nID0gcHJvbXB0KFwiSG93IG1hbnkgZm9sbG93ZXJzIGRvIHlvdSBoYXZlP1wiLCBjb25maWcubXlGb2xsb3dpbmcpO1xuXHRcdFx0fSxcblx0XHRcdHByb21wdE15Rm9sbG93ZXJzOiAoKSA9PiB7XG5cdFx0XHRcdGNvbmZpZy5teUZvbGxvd2VycyA9IHByb21wdChcIkhvdyBtYW55IHBlb3BsZSBhcmUgeW91IGZvbGxvd2luZz9cIiwgY29uZmlnLm15Rm9sbG93ZXJzKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRQYXNzaW5nU2NvcmU6ICgpID0+IHtcblx0XHRcdFx0Y29uZmlnLnBhc3NpbmdTY29yZSA9IHByb21wdChcIk1pbmltdW0gUGFzc2luZyBTY29yZVwiLCBjb25maWcucGFzc2luZ1Njb3JlKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRCYW5uZXJTY29yZTogKCkgPT4ge1xuXHRcdFx0XHRjb25maWcuYmFubmVyU2NvcmUgPSBwcm9tcHQoXCJCYW5uZXIgU2NvcmVcIiwgY29uZmlnLmJhbm5lclNjb3JlKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRBdmF0YXJTY29yZTogKCkgPT4ge1xuXHRcdFx0XHRjb25maWcuYXZhdGFyU2NvcmUgPSBwcm9tcHQoXCJQcm9maWxlIFNjb3JlXCIsIGNvbmZpZy5hdmF0YXJTY29yZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZXN0OiB0ZXN0XG5cdH1cblx0cmV0dXJuIF90aGlzO1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xuXHRsZXQgYmFzZUZvbGxvd01heCA9IDUwMDA7XG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XG5cdGxldCBmb2xsb3dJbmNyZWFzZSA9IDAuMTtcblxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XG5cdFx0YmFzZUZvbGxvd01heCA9IGJhc2VGb2xsb3dNYXggKyBmb2xsb3dlcnNDb3VudCAqIGZvbGxvd0luY3JlYXNlO1xuXHR9XG5cblx0bGV0IHBlcnNvbmFsTWF4Rm9sbG93ID0gYmFzZUZvbGxvd01heCAtIGZvbGxvd2luZ0NvdW50O1xuXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tICcuL2dldE1heFBlb3BsZSc7XG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xuXG5mdW5jdGlvbiBnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGNhcmRDaGVjaykge1xuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4ID0gMCwgY2FyZHMgPSBbXSl7XG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xuXG5cdFx0aWYoc2Nyb2xsZWRQZW9wbGUubGVuZ3RoID49IG1heFBlb3BsZSkgcmVzb2x2ZShjYXJkcyk7XG5cblx0XHRmb3IoOyBpbmRleCA8IHNjcm9sbGVkUGVvcGxlLmxlbmd0aCAmJiBjYXJkcy5sZW5ndGggPCBtYXhGb2xsb3c7IGluZGV4Kyspe1xuICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKHNjcm9sbGVkUGVvcGxlW2luZGV4XSk7XG4gICAgICBpZihjYXJkQ2hlY2soY2FyZCkpIGNhcmRzLnB1c2goY2FyZCk7XG5cdFx0fVxuXHRcdGNhcmRzLmxlbmd0aCA+PSBtYXhGb2xsb3cgPyByZXNvbHZlKGNhcmRzKSA6IGxvb3BHYXRoZXIobWF4Rm9sbG93LCBjYXJkQ2hlY2ssIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xuXHR9LCByYW5kb21UaW1lKGNvbmZpZy5zY3JvbGxJbnRlcnZhbC5taW4sIGNvbmZpZy5zY3JvbGxJbnRlcnZhbC5tYXgpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJDYXJkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhdGhlckNhcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxuXHRcdGVsZTogRE9NQ2FyZCxcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXG5cdFx0ZG9DbGljazogZG9DbGlja1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XG5cdHJldHVybiBlbGUgPyBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd3MgeW91XCIgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ2xpY2soKXtcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdGJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XG5cdGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xuXHRsZXQgbWF4UGVvcGxlID0gTnVtYmVyKG1heFBlb3BsZUVsZS5hdHRyaWJ1dGVzW1wiZGF0YS1jb3VudFwiXS52YWx1ZSk7XG5cdHJldHVybiBtYXhQZW9wbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xuXG5mdW5jdGlvbiBkb0NsaWNrZXIoY2FyZHMpe1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDApe1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRpZihpbmRleCA+PSBjYXJkcy5sZW5ndGgpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0bGV0IGNhcmQgPSBjYXJkc1tpbmRleF07XG5cdFx0Y2FyZC5kb0NsaWNrKCk7XG5cdFx0aW5kZXgrKztcblx0XHRsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCwgaW5kZXgpO1xuXHR9LCByYW5kb21UaW1lKGNvbmZpZy5jbGlja0ludGVydmFsLm1pbiwgY29uZmlnLmNsaWNrSW50ZXJ2YWwubWF4KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvQ2xpY2tlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RvQ2xpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuZnVuY3Rpb24gdGVzdCgpIHtcblx0Y29uc29sZS5lcnJvcihgbXlGb2xsb3dpbmcgJHtjb25maWcubXlGb2xsb3dpbmd9YCk7XG5cdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93ZXJzICR7Y29uZmlnLm15Rm9sbG93ZXJzfWApO1xuXHRjb25zb2xlLmVycm9yKGBwYXNzaW5nU2NvcmUgJHtjb25maWcucGFzc2luZ1Njb3JlfWApO1xuXHRjb25zb2xlLmVycm9yKGBiYW5uZXJTY29yZSAke2NvbmZpZy5iYW5uZXJTY29yZX1gKTtcblx0Y29uc29sZS5lcnJvcihgcHJvZmlsZVNjb3JlICR7Y29uZmlnLnByb2ZpbGVTY29yZX1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4uL3Njb3JlQ2FyZCc7XG5cbmZ1bmN0aW9uIGZvbGxvd0ZpbHRlcihjYXJkKSB7XG4gIC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcbiAgaWYgKGNhcmQuY2hlY2tGb3JGb2xsb3dlZCB8fCBjYXJkLmlzUHJvdGVjdGVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChzY29yZUNhcmQoY2FyZCkgPj0gY29uZmlnLnBhc3NpbmdTY29yZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmlsdGVycy9mb2xsb3dGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbmZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XG4gIGxldCBzY29yZSA9IDA7XG5cbiAgaWYgKGNhcmQuaGFzQmlvKSB7XG4gICAgLy9sZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBiYWNrZ3JvdW5kIGltYWdlc1xuICBpZiAoY2FyZC5oYXNCYW5uZXIpIHtcbiAgICBzY29yZSArPSBjb25maWcuYmFubmVyU2NvcmU7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBwcm9maWxlIHBpY3R1cmVcbiAgaWYgKGNhcmQuaGFzQXZhdGFyKSB7XG4gICAgc2NvcmUgKz0gY29uZmlnLmF2YXRhclNjb3JlO1xuICB9XG4gIFxuICByZXR1cm4gc2NvcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==