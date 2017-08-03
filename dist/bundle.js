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
	bioScore: 0,
	keywordScore: 0,
	keywords: "",
	scrollInterval: {
		min: 2000,
		max: 7000
	},
	clickInterval: {
		min: 2000,
		max: 10000
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
				_this.setup.promptBioScore();
				_this.setup.promptKeywordScore();
				_this.setup.promptKeywords();
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
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore = prompt("Banner Img Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore);
			},
			promptAvatarScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore = prompt("Profile Img Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore);
			},
			promptBioScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bioScore = prompt("Bio Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bioScore);
			},
			promptKeywordScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywordScore = prompt("Keyword Score per word", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywordScore);
			},
			promptKeywords: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords = prompt("Keywords:", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords);
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
	console.error("Begin...");
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
			if(cards.length % (maxFollow/10) === 0){
				console.error(cards.length + " people collected out of " + maxFollow);
			}
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
	return ele !== null ? ele.classList.contains("following") : false;
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
	console.error("Collecting finished. Proceding to clicking phase...");
	return new Promise((resolve, reject) => {
		loopClick(cards, resolve, reject);
	});
}

function loopClick(cards, resolve, reject, index = 0){
	setTimeout(() => {
		if(index >= cards.length) return resolve();
		let card = cards[index];
		card.doClick();
		if(index % (cards.length/10) === 0){
			console.error(index + " people followed out of " + cards.length);
		}
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
  if (card.isFollowed || card.isProtected) {
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
  var score = 0;

  if (card.hasBio) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bioScore);
    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.length !== 0) {
      let keywords = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.split(", ");
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
          score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywordScore);
        }
      }
    }
  }
  // Filter for background images
  if (card.hasBanner) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore);
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore);
  }
  return score;
}

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZiN2IyYjM1MzNkNGE1NmFlMGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFVBQVU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3hERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBFOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU8sMkRBQTJEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7O0FDUkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0EsOEJBQThCLHFFQUFtQjtBQUNqRCw4QkFBOEIscUVBQW1CO0FBQ2pELCtCQUErQixzRUFBb0I7QUFDbkQsOEJBQThCLHFFQUFtQjtBQUNqRCwrQkFBK0Isc0VBQW9CO0FBQ25EOztBQUVBLCtEOzs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2YjdiMmIzNTMzZDRhNTZhZTBkIiwibGV0IGNvbmZpZyA9IHtcclxuXHRteUZvbGxvd2luZzogMCxcclxuXHRteUZvbGxvd2VyczogMCxcclxuXHRwYXNzaW5nU2NvcmU6IDAsXHJcblx0YmFubmVyU2NvcmU6IDAsXHJcblx0YXZhdGFyU2NvcmU6IDAsXHJcblx0YmlvU2NvcmU6IDAsXHJcblx0a2V5d29yZFNjb3JlOiAwLFxyXG5cdGtleXdvcmRzOiBcIlwiLFxyXG5cdHNjcm9sbEludGVydmFsOiB7XHJcblx0XHRtaW46IDIwMDAsXHJcblx0XHRtYXg6IDcwMDBcclxuXHR9LFxyXG5cdGNsaWNrSW50ZXJ2YWw6IHtcclxuXHRcdG1pbjogMjAwMCxcclxuXHRcdG1heDogMTAwMDBcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpe1xyXG5cdG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb21UaW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JhbmRvbVRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCBhc3Nlc3NNYXhGb2xsb3cgZnJvbSAnLi9hc3Nlc3NNYXhGb2xsb3cnO1xyXG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XHJcbmltcG9ydCBkb0NsaWNrZXIgZnJvbSAnLi9kb0NsaWNrZXInO1xyXG5pbXBvcnQgdGVzdCBmcm9tICcuL3Rlc3QnO1xyXG5pbXBvcnQgZm9sbG93RmlsdGVyIGZyb20gJy4vZmlsdGVycy9mb2xsb3dGaWx0ZXInO1xyXG5cclxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAgKGZ1bmN0aW9uKCl7XHJcblx0bGV0IF90aGlzID0ge1xyXG5cdFx0Zm9sbG93OiAoKSA9PiB7XHJcblx0XHRcdGxldCBtYXhGb2xsb3cgPSBhc3Nlc3NNYXhGb2xsb3coY29uZmlnLm15Rm9sbG93aW5nLCBjb25maWcubXlGb2xsb3dlcnMpO1xyXG5cdFx0XHRtYXhGb2xsb3cgPSBwcm9tcHQoYFRoZSBtYXggdGhhdCBjYW4gYmUgZm9sbG93ZWQgaXMgJHttYXhGb2xsb3d9LiBZb3UgbWF5IHNldCBhIGRpZmZlcmVudCBhbW91bnRgLCBtYXhGb2xsb3cpO1xyXG5cclxuXHRcdFx0Z2F0aGVyQ2FyZHMobWF4Rm9sbG93LCBmb2xsb3dGaWx0ZXIpXHJcblx0XHRcdFx0LnRoZW4oY2FyZHMgPT4gZG9DbGlja2VyKGNhcmRzKSlcclxuXHRcdFx0XHQudGhlbigoKSA9PiAgYWxlcnQoXCJBbGwgZG9uZSFcIikpO1xyXG5cdFx0fSxcclxuXHRcdHNldHVwOiB7XHJcblx0XHRcdHByb21wdEFsbDogKCkgPT4ge1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdE15Rm9sbG93aW5nKCk7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dlcnMoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRQYXNzaW5nU2NvcmUoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRCYW5uZXJTY29yZSgpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEF2YXRhclNjb3JlKCk7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0QmlvU2NvcmUoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRLZXl3b3JkU2NvcmUoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRLZXl3b3JkcygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9tcHRNeUZvbGxvd2luZzogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5teUZvbGxvd2luZyA9IHByb21wdChcIkhvdyBtYW55IGZvbGxvd2VycyBkbyB5b3UgaGF2ZT9cIiwgY29uZmlnLm15Rm9sbG93aW5nKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0TXlGb2xsb3dlcnM6ICgpID0+IHtcclxuXHRcdFx0XHRjb25maWcubXlGb2xsb3dlcnMgPSBwcm9tcHQoXCJIb3cgbWFueSBwZW9wbGUgYXJlIHlvdSBmb2xsb3dpbmc/XCIsIGNvbmZpZy5teUZvbGxvd2Vycyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdFBhc3NpbmdTY29yZTogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5wYXNzaW5nU2NvcmUgPSBwcm9tcHQoXCJNaW5pbXVtIFBhc3NpbmcgU2NvcmVcIiwgY29uZmlnLnBhc3NpbmdTY29yZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdEJhbm5lclNjb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLmJhbm5lclNjb3JlID0gcHJvbXB0KFwiQmFubmVyIEltZyBTY29yZVwiLCBjb25maWcuYmFubmVyU2NvcmUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9tcHRBdmF0YXJTY29yZTogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5hdmF0YXJTY29yZSA9IHByb21wdChcIlByb2ZpbGUgSW1nIFNjb3JlXCIsIGNvbmZpZy5hdmF0YXJTY29yZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdEJpb1Njb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLmJpb1Njb3JlID0gcHJvbXB0KFwiQmlvIFNjb3JlXCIsIGNvbmZpZy5iaW9TY29yZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdEtleXdvcmRTY29yZTogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5rZXl3b3JkU2NvcmUgPSBwcm9tcHQoXCJLZXl3b3JkIFNjb3JlIHBlciB3b3JkXCIsIGNvbmZpZy5rZXl3b3JkU2NvcmUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9tcHRLZXl3b3JkczogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5rZXl3b3JkcyA9IHByb21wdChcIktleXdvcmRzOlwiLCBjb25maWcua2V5d29yZHMpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dGVzdDogdGVzdFxyXG5cdH1cclxuXHRyZXR1cm4gX3RoaXM7XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xyXG5cdGxldCBiYXNlRm9sbG93TWF4ID0gNTAwMDtcclxuXHRsZXQgZGFpbHlGb2xsb3dNYXggPSAxMDAwO1xyXG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XHJcblx0bGV0IGZvbGxvd0luY3JlYXNlID0gMC4xO1xyXG5cclxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XHJcblx0XHRiYXNlRm9sbG93TWF4ID0gYmFzZUZvbGxvd01heCArIGZvbGxvd2Vyc0NvdW50ICogZm9sbG93SW5jcmVhc2U7XHJcblx0fVxyXG5cclxuXHRsZXQgcGVyc29uYWxNYXhGb2xsb3cgPSBiYXNlRm9sbG93TWF4IC0gZm9sbG93aW5nQ291bnQ7XHJcblxyXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcbmltcG9ydCBnZXRNYXhQZW9wbGUgZnJvbSAnLi9nZXRNYXhQZW9wbGUnO1xyXG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQ2FyZHMobWF4Rm9sbG93LCBjYXJkQ2hlY2spIHtcclxuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XHJcblx0Y29uc29sZS5lcnJvcihcIkJlZ2luLi4uXCIpO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsb29wR2F0aGVyKG1heEZvbGxvdywgY2FyZENoZWNrLCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BHYXRoZXIobWF4Rm9sbG93LCBjYXJkQ2hlY2ssIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDAsIGNhcmRzID0gW10pe1xyXG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xyXG5cclxuXHRcdGlmKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUpIHJlc29sdmUoY2FyZHMpO1xyXG5cclxuXHRcdGZvcig7IGluZGV4IDwgc2Nyb2xsZWRQZW9wbGUubGVuZ3RoICYmIGNhcmRzLmxlbmd0aCA8IG1heEZvbGxvdzsgaW5kZXgrKyl7XHJcbiAgICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZChzY3JvbGxlZFBlb3BsZVtpbmRleF0pO1xyXG4gICAgICBpZihjYXJkQ2hlY2soY2FyZCkpIGNhcmRzLnB1c2goY2FyZCk7XHJcblx0XHRcdGlmKGNhcmRzLmxlbmd0aCAlIChtYXhGb2xsb3cvMTApID09PSAwKXtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGNhcmRzLmxlbmd0aCArIFwiIHBlb3BsZSBjb2xsZWN0ZWQgb3V0IG9mIFwiICsgbWF4Rm9sbG93KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4LCBjYXJkcyk7XHJcblx0fSwgcmFuZG9tVGltZShjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWluLCBjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJDYXJkcztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2F0aGVyQ2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY3JlYXRlQ2FyZChET01DYXJkKXtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxyXG5cdFx0ZWxlOiBET01DYXJkLFxyXG5cdFx0aGFzQmFubmVyOiBjaGVja0ZvckJhbm5lcihET01DYXJkKSxcclxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXHJcblx0XHRoYXNCaW86IGNoZWNrRm9yQmlvKERPTUNhcmQpLFxyXG5cdFx0aXNGb2xsb3dlZDogY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKSxcclxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcclxuXHRcdGlzUHJvdGVjdGVkOiBjaGVja1Byb3RlY3RlZChET01DYXJkKSxcclxuXHRcdGJpbzogZ2V0QmlvKERPTUNhcmQpLFxyXG5cdFx0ZG9DbGljazogZG9DbGlja1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIERPTUNhcmQuYXR0cmlidXRlc1tcImRhdGEtdXNlci1pZFwiXS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcclxuXHRyZXR1cm4gZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYXZhdGFySW1hZ2VcIik7XHJcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRsZXQgdGV4dCA9IGVsZS5pbm5lclRleHQ7XHJcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRyZXR1cm4gZWxlLmlubmVyVGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcclxuXHRyZXR1cm4gZWxlICE9PSBudWxsID8gZWxlLmNsYXNzTGlzdC5jb250YWlucyhcImZvbGxvd2luZ1wiKSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XHJcblx0cmV0dXJuIGVsZSA/IGVsZS5pbm5lclRleHQgPT09IFwiRm9sbG93cyB5b3VcIiA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3RlY3RlZChET01DYXJkKXtcclxuXHRyZXR1cm4gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvdGVjdGVkPXRydWVdXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb0NsaWNrKCl7XHJcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XHJcblx0YnRuLmNsaWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XHJcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0bGV0IGxpc3RUeXBlID0gcGF0aC5pbmNsdWRlcyhcImZvbGxvd2Vyc1wiKSA/IFwiZm9sbG93ZXJzXCIgOiBwYXRoLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpID8gXCJmb2xsb3dpbmdcIiA6IG51bGw7XHJcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xyXG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcclxuXHRyZXR1cm4gbWF4UGVvcGxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNYXhQZW9wbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0TWF4UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xyXG5cclxuZnVuY3Rpb24gZG9DbGlja2VyKGNhcmRzKXtcclxuXHRjb25zb2xlLmVycm9yKFwiQ29sbGVjdGluZyBmaW5pc2hlZC4gUHJvY2VkaW5nIHRvIGNsaWNraW5nIHBoYXNlLi4uXCIpO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDApe1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0aWYoaW5kZXggPj0gY2FyZHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xyXG5cdFx0bGV0IGNhcmQgPSBjYXJkc1tpbmRleF07XHJcblx0XHRjYXJkLmRvQ2xpY2soKTtcclxuXHRcdGlmKGluZGV4ICUgKGNhcmRzLmxlbmd0aC8xMCkgPT09IDApe1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGluZGV4ICsgXCIgcGVvcGxlIGZvbGxvd2VkIG91dCBvZiBcIiArIGNhcmRzLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRpbmRleCsrO1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QsIGluZGV4KTtcclxuXHR9LCByYW5kb21UaW1lKGNvbmZpZy5jbGlja0ludGVydmFsLm1pbiwgY29uZmlnLmNsaWNrSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvQ2xpY2tlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9DbGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2luZyAke2NvbmZpZy5teUZvbGxvd2luZ31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2VycyAke2NvbmZpZy5teUZvbGxvd2Vyc31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBwYXNzaW5nU2NvcmUgJHtjb25maWcucGFzc2luZ1Njb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYGJhbm5lclNjb3JlICR7Y29uZmlnLmJhbm5lclNjb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYHByb2ZpbGVTY29yZSAke2NvbmZpZy5wcm9maWxlU2NvcmV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4uL3Njb3JlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dGaWx0ZXIoY2FyZCkge1xyXG4gIC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcclxuICBpZiAoY2FyZC5pc0ZvbGxvd2VkIHx8IGNhcmQuaXNQcm90ZWN0ZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHNjb3JlQ2FyZChjYXJkKSA+PSBjb25maWcucGFzc2luZ1Njb3JlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93RmlsdGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XHJcbiAgdmFyIHNjb3JlID0gMDtcclxuXHJcbiAgaWYgKGNhcmQuaGFzQmlvKSB7XHJcbiAgICBzY29yZSArPSBwYXJzZUludChjb25maWcuYmlvU2NvcmUpO1xyXG4gICAgaWYgKGNvbmZpZy5rZXl3b3Jkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbGV0IGtleXdvcmRzID0gY29uZmlnLmtleXdvcmRzLnNwbGl0KFwiLCBcIik7XHJcbiAgICAgIC8vIHNjYW4gYmlvIGZvciBrZXl3b3Jkc1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXdvcmRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNhcmQuYmlvLmluY2x1ZGVzKGtleXdvcmRzW2pdKSkge1xyXG4gICAgICAgICAgc2NvcmUgKz0gcGFyc2VJbnQoY29uZmlnLmtleXdvcmRTY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIEZpbHRlciBmb3IgYmFja2dyb3VuZCBpbWFnZXNcclxuICBpZiAoY2FyZC5oYXNCYW5uZXIpIHtcclxuICAgIHNjb3JlICs9IHBhcnNlSW50KGNvbmZpZy5iYW5uZXJTY29yZSk7XHJcbiAgfVxyXG4gIC8vIEZpbHRlciBmb3IgcHJvZmlsZSBwaWN0dXJlXHJcbiAgaWYgKGNhcmQuaGFzQXZhdGFyKSB7XHJcbiAgICBzY29yZSArPSBwYXJzZUludChjb25maWcuYXZhdGFyU2NvcmUpO1xyXG4gIH1cclxuICByZXR1cm4gc2NvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NvcmVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9