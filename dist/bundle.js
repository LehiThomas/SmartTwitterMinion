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
  var score = 0;
  console.error(score);
  if (card.hasBio) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bioScore);
    console.error("Add Bio " + score);
    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.length !== 0) {
      let keywords = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.split(", ");
      console.error(keywords);
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
          console.error("Found: " + keywords[j]);
          console.error(score);
          score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywordScore);
          console.error(score);
        }
      }
    }
  }
  // Filter for background images
  if (card.hasBanner) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].bannerScore);
    console.error("Add Banner " + score);
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += parseInt(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].avatarScore);
    console.error("Add Profile " + score);
  }
  console.error("Final Score " + score);
  return score;
}

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjBmYWYzM2UxNzlkZDlkODljNTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFVBQVU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3hERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBFOzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLDJEQUEyRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOzs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQSw4QkFBOEIscUVBQW1CO0FBQ2pELDhCQUE4QixxRUFBbUI7QUFDakQsK0JBQStCLHNFQUFvQjtBQUNuRCw4QkFBOEIscUVBQW1CO0FBQ2pELCtCQUErQixzRUFBb0I7QUFDbkQ7O0FBRUEsK0Q7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMGZhZjMzZTE3OWRkOWQ4OWM1NSIsImxldCBjb25maWcgPSB7XHJcblx0bXlGb2xsb3dpbmc6IDAsXHJcblx0bXlGb2xsb3dlcnM6IDAsXHJcblx0cGFzc2luZ1Njb3JlOiAwLFxyXG5cdGJhbm5lclNjb3JlOiAwLFxyXG5cdGF2YXRhclNjb3JlOiAwLFxyXG5cdGJpb1Njb3JlOiAwLFxyXG5cdGtleXdvcmRTY29yZTogMCxcclxuXHRrZXl3b3JkczogXCJcIixcclxuXHRzY3JvbGxJbnRlcnZhbDoge1xyXG5cdFx0bWluOiAyMDAwLFxyXG5cdFx0bWF4OiAxMDAwMFxyXG5cdH0sXHJcblx0Y2xpY2tJbnRlcnZhbDoge1xyXG5cdFx0bWluOiAyMDAwLFxyXG5cdFx0bWF4OiAyMDAwMFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCl7XHJcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVRpbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmFuZG9tVGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XHJcbmltcG9ydCBnYXRoZXJDYXJkcyBmcm9tICcuL2dhdGhlckNhcmRzJztcclxuaW1wb3J0IGRvQ2xpY2tlciBmcm9tICcuL2RvQ2xpY2tlcic7XHJcbmltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdCc7XHJcbmltcG9ydCBmb2xsb3dGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL2ZvbGxvd0ZpbHRlcic7XHJcblxyXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcclxuXHRsZXQgX3RoaXMgPSB7XHJcblx0XHRmb2xsb3c6ICgpID0+IHtcclxuXHRcdFx0bGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhjb25maWcubXlGb2xsb3dpbmcsIGNvbmZpZy5teUZvbGxvd2Vycyk7XHJcblx0XHRcdG1heEZvbGxvdyA9IHByb21wdChgVGhlIG1heCB0aGF0IGNhbiBiZSBmb2xsb3dlZCBpcyAke21heEZvbGxvd30uIFlvdSBtYXkgc2V0IGEgZGlmZmVyZW50IGFtb3VudGAsIG1heEZvbGxvdyk7XHJcblxyXG5cdFx0XHRnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGZvbGxvd0ZpbHRlcilcclxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiBkb0NsaWNrZXIoY2FyZHMpKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+ICBhbGVydChcIkFsbCBkb25lIVwiKSk7XHJcblx0XHR9LFxyXG5cdFx0c2V0dXA6IHtcclxuXHRcdFx0cHJvbXB0QWxsOiAoKSA9PiB7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2VycygpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdFBhc3NpbmdTY29yZSgpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEJhbm5lclNjb3JlKCk7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0QXZhdGFyU2NvcmUoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRCaW9TY29yZSgpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEtleXdvcmRTY29yZSgpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEtleXdvcmRzKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdE15Rm9sbG93aW5nOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLm15Rm9sbG93aW5nID0gcHJvbXB0KFwiSG93IG1hbnkgZm9sbG93ZXJzIGRvIHlvdSBoYXZlP1wiLCBjb25maWcubXlGb2xsb3dpbmcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9tcHRNeUZvbGxvd2VyczogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5teUZvbGxvd2VycyA9IHByb21wdChcIkhvdyBtYW55IHBlb3BsZSBhcmUgeW91IGZvbGxvd2luZz9cIiwgY29uZmlnLm15Rm9sbG93ZXJzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0UGFzc2luZ1Njb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLnBhc3NpbmdTY29yZSA9IHByb21wdChcIk1pbmltdW0gUGFzc2luZyBTY29yZVwiLCBjb25maWcucGFzc2luZ1Njb3JlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0QmFubmVyU2NvcmU6ICgpID0+IHtcclxuXHRcdFx0XHRjb25maWcuYmFubmVyU2NvcmUgPSBwcm9tcHQoXCJCYW5uZXIgSW1nIFNjb3JlXCIsIGNvbmZpZy5iYW5uZXJTY29yZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdEF2YXRhclNjb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLmF2YXRhclNjb3JlID0gcHJvbXB0KFwiUHJvZmlsZSBJbWcgU2NvcmVcIiwgY29uZmlnLmF2YXRhclNjb3JlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0QmlvU2NvcmU6ICgpID0+IHtcclxuXHRcdFx0XHRjb25maWcuYmlvU2NvcmUgPSBwcm9tcHQoXCJCaW8gU2NvcmVcIiwgY29uZmlnLmJpb1Njb3JlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0S2V5d29yZFNjb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLmtleXdvcmRTY29yZSA9IHByb21wdChcIktleXdvcmQgU2NvcmUgcGVyIHdvcmRcIiwgY29uZmlnLmtleXdvcmRTY29yZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdEtleXdvcmRzOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLmtleXdvcmRzID0gcHJvbXB0KFwiS2V5d29yZHM6XCIsIGNvbmZpZy5rZXl3b3Jkcyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0ZXN0OiB0ZXN0XHJcblx0fVxyXG5cdHJldHVybiBfdGhpcztcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XHJcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xyXG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XHJcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcclxuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XHJcblxyXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcclxuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcclxuXHR9XHJcblxyXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcclxuXHJcblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcclxuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tICcuL2dldE1heFBlb3BsZSc7XHJcbmltcG9ydCByYW5kb21UaW1lIGZyb20gJy4vcmFuZG9tVGltZSc7XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGNhcmRDaGVjaykge1xyXG5cdGxldCBtYXhQZW9wbGUgPSBnZXRNYXhQZW9wbGUoKTtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0bG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wR2F0aGVyKG1heEZvbGxvdywgY2FyZENoZWNrLCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwLCBjYXJkcyA9IFtdKXtcclxuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGxldCBzY3JvbGxlZFBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQcm9maWxlQ2FyZFwiKTtcclxuXHJcblx0XHRpZihzY3JvbGxlZFBlb3BsZS5sZW5ndGggPj0gbWF4UGVvcGxlKSByZXNvbHZlKGNhcmRzKTtcclxuXHJcblx0XHRmb3IoOyBpbmRleCA8IHNjcm9sbGVkUGVvcGxlLmxlbmd0aCAmJiBjYXJkcy5sZW5ndGggPCBtYXhGb2xsb3c7IGluZGV4Kyspe1xyXG4gICAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoc2Nyb2xsZWRQZW9wbGVbaW5kZXhdKTtcclxuICAgICAgaWYoY2FyZENoZWNrKGNhcmQpKSBjYXJkcy5wdXNoKGNhcmQpO1xyXG5cdFx0fVxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4LCBjYXJkcyk7XHJcblx0fSwgcmFuZG9tVGltZShjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWluLCBjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJDYXJkcztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2F0aGVyQ2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY3JlYXRlQ2FyZChET01DYXJkKXtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxyXG5cdFx0ZWxlOiBET01DYXJkLFxyXG5cdFx0aGFzQmFubmVyOiBjaGVja0ZvckJhbm5lcihET01DYXJkKSxcclxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXHJcblx0XHRoYXNCaW86IGNoZWNrRm9yQmlvKERPTUNhcmQpLFxyXG5cdFx0aXNGb2xsb3dlZDogY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKSxcclxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcclxuXHRcdGlzUHJvdGVjdGVkOiBjaGVja1Byb3RlY3RlZChET01DYXJkKSxcclxuXHRcdGJpbzogZ2V0QmlvKERPTUNhcmQpLFxyXG5cdFx0ZG9DbGljazogZG9DbGlja1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIERPTUNhcmQuYXR0cmlidXRlc1tcImRhdGEtdXNlci1pZFwiXS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcclxuXHRyZXR1cm4gZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYXZhdGFySW1hZ2VcIik7XHJcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRsZXQgdGV4dCA9IGVsZS5pbm5lclRleHQ7XHJcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRyZXR1cm4gZWxlLmlubmVyVGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcclxuXHRyZXR1cm4gZWxlICE9PSBudWxsID8gZWxlLmNsYXNzTGlzdC5jb250YWlucyhcImZvbGxvd2luZ1wiKSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XHJcblx0cmV0dXJuIGVsZSA/IGVsZS5pbm5lclRleHQgPT09IFwiRm9sbG93cyB5b3VcIiA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3RlY3RlZChET01DYXJkKXtcclxuXHRyZXR1cm4gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvdGVjdGVkPXRydWVdXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb0NsaWNrKCl7XHJcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XHJcblx0YnRuLmNsaWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XHJcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0bGV0IGxpc3RUeXBlID0gcGF0aC5pbmNsdWRlcyhcImZvbGxvd2Vyc1wiKSA/IFwiZm9sbG93ZXJzXCIgOiBwYXRoLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpID8gXCJmb2xsb3dpbmdcIiA6IG51bGw7XHJcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xyXG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcclxuXHRyZXR1cm4gbWF4UGVvcGxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNYXhQZW9wbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0TWF4UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xyXG5cclxuZnVuY3Rpb24gZG9DbGlja2VyKGNhcmRzKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwKXtcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGlmKGluZGV4ID49IGNhcmRzLmxlbmd0aCkgcmV0dXJuIHJlc29sdmUoKTtcclxuXHRcdGxldCBjYXJkID0gY2FyZHNbaW5kZXhdO1xyXG5cdFx0Y2FyZC5kb0NsaWNrKCk7XHJcblx0XHRpbmRleCsrO1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QsIGluZGV4KTtcclxuXHR9LCByYW5kb21UaW1lKGNvbmZpZy5jbGlja0ludGVydmFsLm1pbiwgY29uZmlnLmNsaWNrSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvQ2xpY2tlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9DbGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2luZyAke2NvbmZpZy5teUZvbGxvd2luZ31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2VycyAke2NvbmZpZy5teUZvbGxvd2Vyc31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBwYXNzaW5nU2NvcmUgJHtjb25maWcucGFzc2luZ1Njb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYGJhbm5lclNjb3JlICR7Y29uZmlnLmJhbm5lclNjb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYHByb2ZpbGVTY29yZSAke2NvbmZpZy5wcm9maWxlU2NvcmV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4uL3Njb3JlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dGaWx0ZXIoY2FyZCkge1xyXG4gIC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcclxuICBpZiAoY2FyZC5jaGVja0ZvckZvbGxvd2VkIHx8IGNhcmQuaXNQcm90ZWN0ZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHNjb3JlQ2FyZChjYXJkKSA+PSBjb25maWcucGFzc2luZ1Njb3JlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93RmlsdGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XHJcbiAgdmFyIHNjb3JlID0gMDtcclxuICBjb25zb2xlLmVycm9yKHNjb3JlKTtcclxuICBpZiAoY2FyZC5oYXNCaW8pIHtcclxuICAgIHNjb3JlICs9IHBhcnNlSW50KGNvbmZpZy5iaW9TY29yZSk7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQWRkIEJpbyBcIiArIHNjb3JlKTtcclxuICAgIGlmIChjb25maWcua2V5d29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBrZXl3b3JkcyA9IGNvbmZpZy5rZXl3b3Jkcy5zcGxpdChcIiwgXCIpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGtleXdvcmRzKTtcclxuICAgICAgLy8gc2NhbiBiaW8gZm9yIGtleXdvcmRzXHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5d29yZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoY2FyZC5iaW8uaW5jbHVkZXMoa2V5d29yZHNbal0pKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRm91bmQ6IFwiICsga2V5d29yZHNbal0pO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihzY29yZSk7XHJcbiAgICAgICAgICBzY29yZSArPSBwYXJzZUludChjb25maWcua2V5d29yZFNjb3JlKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2NvcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXHJcbiAgaWYgKGNhcmQuaGFzQmFubmVyKSB7XHJcbiAgICBzY29yZSArPSBwYXJzZUludChjb25maWcuYmFubmVyU2NvcmUpO1xyXG4gICAgY29uc29sZS5lcnJvcihcIkFkZCBCYW5uZXIgXCIgKyBzY29yZSk7XHJcbiAgfVxyXG4gIC8vIEZpbHRlciBmb3IgcHJvZmlsZSBwaWN0dXJlXHJcbiAgaWYgKGNhcmQuaGFzQXZhdGFyKSB7XHJcbiAgICBzY29yZSArPSBwYXJzZUludChjb25maWcuYXZhdGFyU2NvcmUpO1xyXG4gICAgY29uc29sZS5lcnJvcihcIkFkZCBQcm9maWxlIFwiICsgc2NvcmUpO1xyXG4gIH1cclxuICBjb25zb2xlLmVycm9yKFwiRmluYWwgU2NvcmUgXCIgKyBzY29yZSk7XHJcbiAgcmV0dXJuIHNjb3JlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY29yZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==