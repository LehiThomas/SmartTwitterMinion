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
	profileScore: 0,
	keyWords:[]
}

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assessMaxFollow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gatherCards__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doClicker__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__followPeople__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_followFilter__ = __webpack_require__(9);








window.TwitterMinion =  (function(){
	let _this = {
		follow: () => {
			let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_1__assessMaxFollow__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			Object(__WEBPACK_IMPORTED_MODULE_2__gatherCards__["a" /* default */])(maxFollow, __WEBPACK_IMPORTED_MODULE_6__filters_followFilter__["a" /* default */])
				.then(cards => Object(__WEBPACK_IMPORTED_MODULE_3__doClicker__["a" /* default */])(cards))
				.then(() =>  alert("All done!"));
		},
		setup: {
			promptAll: () => {
				_this.setup.promptMyFollowing();
				_this.setup.promptMyFollowers();
				_this.setup.promptPassingScore();
				_this.setup.promptBannerScore();
				_this.setup.promptProfileScore();
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
			promptProfileScore: () => {
				__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].profileScore = prompt("Profile Score", __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].profileScore);
			}
		},
		test: __WEBPACK_IMPORTED_MODULE_5__test__["a" /* default */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getMaxPeople__ = __webpack_require__(5);



function gatherCards(maxFollow, cardCheck) {
	let maxPeople = Object(__WEBPACK_IMPORTED_MODULE_1__getMaxPeople__["a" /* default */])();
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
      if(cardCheck.call(card)) cards.push(card);
    }
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000); // Be good to make this interval random
}


/* harmony default export */ __webpack_exports__["a"] = (gatherCards);


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
	}, 2000);
}

/* harmony default export */ __webpack_exports__["a"] = (doClicker);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createCard__ = __webpack_require__(1);


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
    score += __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].profileScore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTRiY2IyMzg1OTY5NjBiMTQ3MDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb2xsb3dQZW9wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlcnMvZm9sbG93RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxVQUFVOztBQUVuRTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM3Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwRTs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVE7QUFDVjs7O0FBR0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7Ozs7Ozs7O0FDaEJBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQSw4QkFBOEIscUVBQW1CO0FBQ2pELDhCQUE4QixxRUFBbUI7QUFDakQsK0JBQStCLHNFQUFvQjtBQUNuRCw4QkFBOEIscUVBQW1CO0FBQ2pELCtCQUErQixzRUFBb0I7QUFDbkQ7O0FBRUEsK0Q7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NGJjYjIzODU5Njk2MGIxNDcwMSIsImxldCBjb25maWcgPSB7XHJcblx0bXlGb2xsb3dpbmc6IDAsXHJcblx0bXlGb2xsb3dlcnM6IDAsXHJcblx0cGFzc2luZ1Njb3JlOiAwLFxyXG5cdGJhbm5lclNjb3JlOiAwLFxyXG5cdHByb2ZpbGVTY29yZTogMCxcclxuXHRrZXlXb3JkczpbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBnZXRJZChET01DYXJkKSxcclxuXHRcdGVsZTogRE9NQ2FyZCxcclxuXHRcdGhhc0Jhbm5lcjogY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCksXHJcblx0XHRoYXNBdmF0YXI6IGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpLFxyXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcclxuXHRcdGlzRm9sbG93ZWQ6IGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCksXHJcblx0XHRmb2xsb3dzWW91OiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCksXHJcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXHJcblx0XHRiaW86IGdldEJpbyhET01DYXJkKSxcclxuXHRcdGRvQ2xpY2s6IGRvQ2xpY2tcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXItaWRcIl0udmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQmFubmVyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmdcIik7XHJcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWF2YXRhckltYWdlXCIpO1xyXG5cdHJldHVybiAhZWxlLmF0dHJpYnV0ZXMuc3JjLnZhbHVlLmluY2x1ZGVzKFwiZGVmYXVsdF9wcm9maWxlX2ltYWdlc1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0bGV0IHRleHQgPSBlbGUuaW5uZXJUZXh0O1xyXG5cdHJldHVybiB0ZXh0ICE9PSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0cmV0dXJuIGVsZS5pbm5lclRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi51c2VyLWFjdGlvbnNcIik7XHJcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLkZvbGxvd1N0YXR1c1wiKTtcclxuXHRyZXR1cm4gZWxlID8gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dzIHlvdVwiIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvQ2xpY2soKXtcclxuXHRsZXQgYnRuID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcclxuXHRidG4uY2xpY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jcmVhdGVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgYXNzZXNzTWF4Rm9sbG93IGZyb20gJy4vYXNzZXNzTWF4Rm9sbG93JztcclxuaW1wb3J0IGdhdGhlckNhcmRzIGZyb20gJy4vZ2F0aGVyQ2FyZHMnO1xyXG5pbXBvcnQgZG9DbGlja2VyIGZyb20gJy4vZG9DbGlja2VyJztcclxuaW1wb3J0IGZvbGxvd1Blb3BsZSBmcm9tICcuL2ZvbGxvd1Blb3BsZSc7XHJcbmltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdCc7XHJcbmltcG9ydCBmb2xsb3dGaWx0ZXIgZnJvbSAnLi9maWx0ZXJzL2ZvbGxvd0ZpbHRlcic7XHJcblxyXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcclxuXHRsZXQgX3RoaXMgPSB7XHJcblx0XHRmb2xsb3c6ICgpID0+IHtcclxuXHRcdFx0bGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhjb25maWcubXlGb2xsb3dpbmcsIGNvbmZpZy5teUZvbGxvd2Vycyk7XHJcblx0XHRcdG1heEZvbGxvdyA9IHByb21wdChgVGhlIG1heCB0aGF0IGNhbiBiZSBmb2xsb3dlZCBpcyAke21heEZvbGxvd30uIFlvdSBtYXkgc2V0IGEgZGlmZmVyZW50IGFtb3VudGAsIG1heEZvbGxvdyk7XHJcblxyXG5cdFx0XHRnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGZvbGxvd0ZpbHRlcilcclxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiBkb0NsaWNrZXIoY2FyZHMpKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+ICBhbGVydChcIkFsbCBkb25lIVwiKSk7XHJcblx0XHR9LFxyXG5cdFx0c2V0dXA6IHtcclxuXHRcdFx0cHJvbXB0QWxsOiAoKSA9PiB7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dpbmcoKTtcclxuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2VycygpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdFBhc3NpbmdTY29yZSgpO1xyXG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEJhbm5lclNjb3JlKCk7XHJcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0UHJvZmlsZVNjb3JlKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHByb21wdE15Rm9sbG93aW5nOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLm15Rm9sbG93aW5nID0gcHJvbXB0KFwiSG93IG1hbnkgZm9sbG93ZXJzIGRvIHlvdSBoYXZlP1wiLCBjb25maWcubXlGb2xsb3dpbmcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9tcHRNeUZvbGxvd2VyczogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbmZpZy5teUZvbGxvd2VycyA9IHByb21wdChcIkhvdyBtYW55IHBlb3BsZSBhcmUgeW91IGZvbGxvd2luZz9cIiwgY29uZmlnLm15Rm9sbG93ZXJzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0UGFzc2luZ1Njb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLnBhc3NpbmdTY29yZSA9IHByb21wdChcIk1pbmltdW0gUGFzc2luZyBTY29yZVwiLCBjb25maWcucGFzc2luZ1Njb3JlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0QmFubmVyU2NvcmU6ICgpID0+IHtcclxuXHRcdFx0XHRjb25maWcuYmFubmVyU2NvcmUgPSBwcm9tcHQoXCJCYW5uZXIgU2NvcmVcIiwgY29uZmlnLmJhbm5lclNjb3JlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvbXB0UHJvZmlsZVNjb3JlOiAoKSA9PiB7XHJcblx0XHRcdFx0Y29uZmlnLnByb2ZpbGVTY29yZSA9IHByb21wdChcIlByb2ZpbGUgU2NvcmVcIiwgY29uZmlnLnByb2ZpbGVTY29yZSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0ZXN0OiB0ZXN0XHJcblx0fVxyXG5cdHJldHVybiBfdGhpcztcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XHJcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xyXG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XHJcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcclxuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XHJcblxyXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcclxuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcclxuXHR9XHJcblxyXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcclxuXHJcblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xyXG5pbXBvcnQgZ2V0TWF4UGVvcGxlIGZyb20gJy4vZ2V0TWF4UGVvcGxlJztcclxuXHJcbmZ1bmN0aW9uIGdhdGhlckNhcmRzKG1heEZvbGxvdywgY2FyZENoZWNrKSB7XHJcblx0bGV0IG1heFBlb3BsZSA9IGdldE1heFBlb3BsZSgpO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4ID0gMCwgY2FyZHMgPSBbXSl7XHJcblx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRsZXQgc2Nyb2xsZWRQZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiUHJvZmlsZUNhcmRcIik7XHJcblxyXG5cdFx0aWYoc2Nyb2xsZWRQZW9wbGUubGVuZ3RoID49IG1heFBlb3BsZSkgcmVzb2x2ZShjYXJkcyk7XHJcblxyXG5cdFx0Zm9yKDsgaW5kZXggPCBzY3JvbGxlZFBlb3BsZS5sZW5ndGggJiYgY2FyZHMubGVuZ3RoIDwgbWF4Rm9sbG93OyBpbmRleCsrKXtcclxuICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKHNjcm9sbGVkUGVvcGxlW2luZGV4XSk7XHJcbiAgICAgIGlmKGNhcmRDaGVjay5jYWxsKGNhcmQpKSBjYXJkcy5wdXNoKGNhcmQpO1xyXG4gICAgfVxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xyXG5cdH0sIDIwMDApOyAvLyBCZSBnb29kIHRvIG1ha2UgdGhpcyBpbnRlcnZhbCByYW5kb21cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhdGhlckNhcmRzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBnZXRNYXhQZW9wbGUoKXtcclxuXHRsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcclxuXHRsZXQgbWF4UGVvcGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtkYXRhLW5hdj1cIiR7bGlzdFR5cGV9XCJdIC5Qcm9maWxlTmF2LXZhbHVlYCk7XHJcblx0bGV0IG1heFBlb3BsZSA9IE51bWJlcihtYXhQZW9wbGVFbGUuYXR0cmlidXRlc1tcImRhdGEtY291bnRcIl0udmFsdWUpO1xyXG5cdHJldHVybiBtYXhQZW9wbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZG9DbGlja2VyKGNhcmRzKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwKXtcclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGlmKGluZGV4ID49IGNhcmRzLmxlbmd0aCkgcmV0dXJuIHJlc29sdmUoKTtcclxuXHRcdGxldCBjYXJkID0gY2FyZHNbaW5kZXhdO1xyXG5cdFx0Y2FyZC5kb0NsaWNrKCk7XHJcblx0XHRpbmRleCsrO1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QsIGluZGV4KTtcclxuXHR9LCAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9DbGlja2VyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb0NsaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xyXG5cclxuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBwZW9wbGVUb0ZvbGxvdztcclxuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZVRvRm9sbG93Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xyXG5cclxuXHRcdGlmIChwZW9wbGVGb2xsb3dlZCA+IDUwMCkge1xyXG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2FyZC5kb0NsaWNrKCk7XHJcblx0XHRcdH0sIDE1MDAwKTtcclxuXHRcdFx0cGVvcGxlRm9sbG93ZWQrKztcclxuXHRcdH1cclxuXHR9XHJcblx0YWxlcnQoXCJQcm9ncmFtIGNvbXBsZXRlZC4gWW91IGhhdmUgYmVlbiBzZXJ2aWNlZCA6KVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93UGVvcGxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb2xsb3dQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0KCkge1xyXG5cdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93aW5nICR7Y29uZmlnLm15Rm9sbG93aW5nfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93ZXJzICR7Y29uZmlnLm15Rm9sbG93ZXJzfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYHBhc3NpbmdTY29yZSAke2NvbmZpZy5wYXNzaW5nU2NvcmV9YCk7XHJcblx0Y29uc29sZS5lcnJvcihgYmFubmVyU2NvcmUgJHtjb25maWcuYmFubmVyU2NvcmV9YCk7XHJcblx0Y29uc29sZS5lcnJvcihgcHJvZmlsZVNjb3JlICR7Y29uZmlnLnByb2ZpbGVTY29yZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHNjb3JlQ2FyZCAgZnJvbSAnLi4vc2NvcmVDYXJkJztcclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0ZpbHRlcihjYXJkKSB7XHJcbiAgLy8gU2NvcmUgdGhlIGNhcmQgaGVyZVxyXG4gIGlmIChjYXJkLmNoZWNrRm9yRm9sbG93ZWQgfHwgY2FyZC5pc1Byb3RlY3RlZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoc2NvcmVDYXJkKGNhcmQpID49IGNvbmZpZy5wYXNzaW5nU2NvcmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dGaWx0ZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZpbHRlcnMvZm9sbG93RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gc2NvcmVDYXJkKGNhcmQpIHtcclxuICBsZXQgc2NvcmUgPSAwO1xyXG5cclxuICBpZiAoY2FyZC5oYXNCaW8pIHtcclxuICAgIC8vbGV0IGtleXdvcmRzID0gVHdpdHRlck1pbmlvbi53b3JkTGlzdC5zcGxpdChcIiwgXCIpO1xyXG4gICAgc2NvcmUgKz0gY29uZmlnLnByb2ZpbGVTY29yZTtcclxuICB9XHJcbiAgLy8gRmlsdGVyIGZvciBiYWNrZ3JvdW5kIGltYWdlc1xyXG4gIGlmIChjYXJkLmhhc0Jhbm5lcikge1xyXG4gICAgc2NvcmUgKz0gY29uZmlnLmJhbm5lclNjb3JlO1xyXG4gIH1cclxuICAvLyBGaWx0ZXIgZm9yIHByb2ZpbGUgcGljdHVyZVxyXG4gIGlmIChjYXJkLmhhc0F2YXRhcikge1xyXG4gICAgc2NvcmUgKz0gY29uZmlnLmF2YXRhclNjb3JlO1xyXG4gIH1cclxuICByZXR1cm4gc2NvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NvcmVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9