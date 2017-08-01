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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assessMaxFollow__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gatherCards__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doClicker__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followPeople__ = __webpack_require__(7);





window.TwitterMinion =  (function(){
	let myFollowing = 0;
	let myFollowers = 0;
	let passingScore = 0;
	let bannerScore = 0;
	let profileScore = 0;
	let keyWords = [];
	let _this = {
		follow: () => {
			let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_0__assessMaxFollow__["a" /* default */])(myFollowing, myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			Object(__WEBPACK_IMPORTED_MODULE_1__gatherCards__["a" /* default */])(maxFollow)
				.then(cards => Object(__WEBPACK_IMPORTED_MODULE_2__doClicker__["a" /* default */])(cards))
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
				myFollowing = prompt("How many followers do you have?", myFollowing);
			},
			promptMyFollowers: () => {
				myFollowers = prompt("How many people are you following?", myFollowers);
			},
			promptPassingScore: () => {
				passingScore = prompt("Minimum Passing Score", passingScore);
			},
			promptBannerScore: () => {
				bannerScore = prompt("Banner Score", bannerScore);
			},
			promptProfileScore: () => {
				profileScore = prompt("Profile Score", profileScore);
			}
		},
		test: () => {
			console.error(`myFollowing ${myFollowing}`);
			console.error(`myFollowers ${myFollowers}`);
			console.error(`passingScore ${passingScore}`);
			console.error(`bannerScore ${bannerScore}`);
			console.error(`profileScore ${profileScore}`);
		}
	}
	return _this;
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

/* harmony default export */ __webpack_exports__["a"] = (assessMaxFollow);

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

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(scrolledPeople[index]);
			// Score the card here
			if (card.checkForFollowed || card.isProtected) {
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
function scoreCard(card) {
  let score = 0;

  if (card.hasBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
    score += 10;
  }
  // Filter for background images
  if (card.hasBanner) {
    score += 10;
  }
  // Filter for profile picture
  if (card.hasAvatar) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkxNjNjMTEyZmM4NmMzYTEzOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mb2xsb3dQZW9wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFVBQVU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDLGdDQUFnQyxZQUFZO0FBQzVDLGlDQUFpQyxhQUFhO0FBQzlDLGdDQUFnQyxZQUFZO0FBQzVDLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEU7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU8sMkRBQTJEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsUUFBUTtBQUNWOzs7QUFHQTs7Ozs7Ozs7QUNuQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7Ozs7Ozs7OztBQ2hCQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlOTE2M2MxMTJmYzg2YzNhMTM4ZCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxuXHRcdGVsZTogRE9NQ2FyZCxcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXG5cdFx0ZG9DbGljazogZG9DbGlja1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XG5cdHJldHVybiBlbGUgPyBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd3MgeW91XCIgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ2xpY2soKXtcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdGJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XG5pbXBvcnQgZG9DbGlja2VyIGZyb20gJy4vZG9DbGlja2VyJztcbmltcG9ydCBmb2xsb3dQZW9wbGUgZnJvbSAnLi9mb2xsb3dQZW9wbGUnO1xuXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcblx0bGV0IG15Rm9sbG93aW5nID0gMDtcblx0bGV0IG15Rm9sbG93ZXJzID0gMDtcblx0bGV0IHBhc3NpbmdTY29yZSA9IDA7XG5cdGxldCBiYW5uZXJTY29yZSA9IDA7XG5cdGxldCBwcm9maWxlU2NvcmUgPSAwO1xuXHRsZXQga2V5V29yZHMgPSBbXTtcblx0bGV0IF90aGlzID0ge1xuXHRcdGZvbGxvdzogKCkgPT4ge1xuXHRcdFx0bGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhteUZvbGxvd2luZywgbXlGb2xsb3dlcnMpO1xuXHRcdFx0bWF4Rm9sbG93ID0gcHJvbXB0KGBUaGUgbWF4IHRoYXQgY2FuIGJlIGZvbGxvd2VkIGlzICR7bWF4Rm9sbG93fS4gWW91IG1heSBzZXQgYSBkaWZmZXJlbnQgYW1vdW50YCwgbWF4Rm9sbG93KTtcblxuXHRcdFx0Z2F0aGVyQ2FyZHMobWF4Rm9sbG93KVxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiBkb0NsaWNrZXIoY2FyZHMpKVxuXHRcdFx0XHQudGhlbigoKSA9PiAgYWxlcnQoXCJBbGwgZG9uZSFcIikpO1xuXHRcdH0sXG5cdFx0c2V0dXA6IHtcblx0XHRcdHByb21wdEFsbDogKCkgPT4ge1xuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2luZygpO1xuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2VycygpO1xuXHRcdFx0XHRfdGhpcy5zZXR1cC5wcm9tcHRQYXNzaW5nU2NvcmUoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0QmFubmVyU2NvcmUoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0UHJvZmlsZVNjb3JlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cHJvbXB0TXlGb2xsb3dpbmc6ICgpID0+IHtcblx0XHRcdFx0bXlGb2xsb3dpbmcgPSBwcm9tcHQoXCJIb3cgbWFueSBmb2xsb3dlcnMgZG8geW91IGhhdmU/XCIsIG15Rm9sbG93aW5nKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRNeUZvbGxvd2VyczogKCkgPT4ge1xuXHRcdFx0XHRteUZvbGxvd2VycyA9IHByb21wdChcIkhvdyBtYW55IHBlb3BsZSBhcmUgeW91IGZvbGxvd2luZz9cIiwgbXlGb2xsb3dlcnMpO1xuXHRcdFx0fSxcblx0XHRcdHByb21wdFBhc3NpbmdTY29yZTogKCkgPT4ge1xuXHRcdFx0XHRwYXNzaW5nU2NvcmUgPSBwcm9tcHQoXCJNaW5pbXVtIFBhc3NpbmcgU2NvcmVcIiwgcGFzc2luZ1Njb3JlKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRCYW5uZXJTY29yZTogKCkgPT4ge1xuXHRcdFx0XHRiYW5uZXJTY29yZSA9IHByb21wdChcIkJhbm5lciBTY29yZVwiLCBiYW5uZXJTY29yZSk7XG5cdFx0XHR9LFxuXHRcdFx0cHJvbXB0UHJvZmlsZVNjb3JlOiAoKSA9PiB7XG5cdFx0XHRcdHByb2ZpbGVTY29yZSA9IHByb21wdChcIlByb2ZpbGUgU2NvcmVcIiwgcHJvZmlsZVNjb3JlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHRlc3Q6ICgpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93aW5nICR7bXlGb2xsb3dpbmd9YCk7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2VycyAke215Rm9sbG93ZXJzfWApO1xuXHRcdFx0Y29uc29sZS5lcnJvcihgcGFzc2luZ1Njb3JlICR7cGFzc2luZ1Njb3JlfWApO1xuXHRcdFx0Y29uc29sZS5lcnJvcihgYmFubmVyU2NvcmUgJHtiYW5uZXJTY29yZX1gKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYHByb2ZpbGVTY29yZSAke3Byb2ZpbGVTY29yZX1gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIF90aGlzO1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xuXHRsZXQgYmFzZUZvbGxvd01heCA9IDUwMDA7XG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XG5cdGxldCBmb2xsb3dJbmNyZWFzZSA9IDAuMTtcblxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XG5cdFx0YmFzZUZvbGxvd01heCA9IGJhc2VGb2xsb3dNYXggKyBmb2xsb3dlcnNDb3VudCAqIGZvbGxvd0luY3JlYXNlO1xuXHR9XG5cblx0bGV0IHBlcnNvbmFsTWF4Rm9sbG93ID0gYmFzZUZvbGxvd01heCAtIGZvbGxvd2luZ0NvdW50O1xuXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4vc2NvcmVDYXJkJztcbmltcG9ydCBnZXRNYXhQZW9wbGUgZnJvbSAnLi9nZXRNYXhQZW9wbGUnO1xuXG5mdW5jdGlvbiBnYXRoZXJDYXJkcyhtYXhGb2xsb3cpIHtcblx0bGV0IG1heFBlb3BsZSA9IGdldE1heFBlb3BsZSgpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4ID0gMCwgY2FyZHMgPSBbXSl7XG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xuXG5cdFx0aWYoc2Nyb2xsZWRQZW9wbGUubGVuZ3RoID49IG1heFBlb3BsZSkgcmVzb2x2ZShjYXJkcyk7XG5cblx0XHRmb3IoOyBpbmRleCA8IHNjcm9sbGVkUGVvcGxlLmxlbmd0aCAmJiBjYXJkcy5sZW5ndGggPCBtYXhGb2xsb3c7IGluZGV4Kyspe1xuXHRcdFx0bGV0IGNhcmQgPSBjcmVhdGVDYXJkKHNjcm9sbGVkUGVvcGxlW2luZGV4XSk7XG5cdFx0XHQvLyBTY29yZSB0aGUgY2FyZCBoZXJlXG5cdFx0XHRpZiAoY2FyZC5jaGVja0ZvckZvbGxvd2VkIHx8IGNhcmQuaXNQcm90ZWN0ZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoc2NvcmVDYXJkKGNhcmQpID49IDMwKSB7XG5cdFx0XHRcdFx0Y2FyZHMucHVzaChjYXJkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjYXJkcy5sZW5ndGggPj0gbWF4Rm9sbG93ID8gcmVzb2x2ZShjYXJkcykgOiBsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4LCBjYXJkcyk7XG5cdH0sIDIwMDApOyAvLyBCZSBnb29kIHRvIG1ha2UgdGhpcyBpbnRlcnZhbCByYW5kb21cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJDYXJkcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhdGhlckNhcmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XG4gIGxldCBzY29yZSA9IDA7XG5cbiAgaWYgKGNhcmQuaGFzQmlvKSB7XG4gICAgLy9sZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBiYWNrZ3JvdW5kIGltYWdlc1xuICBpZiAoY2FyZC5oYXNCYW5uZXIpIHtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICAvLyBGaWx0ZXIgZm9yIHByb2ZpbGUgcGljdHVyZVxuICBpZiAoY2FyZC5oYXNBdmF0YXIpIHtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICByZXR1cm4gc2NvcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBnZXRNYXhQZW9wbGUoKXtcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cdGxldCBsaXN0VHlwZSA9IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dlcnNcIikgPyBcImZvbGxvd2Vyc1wiIDogcGF0aC5pbmNsdWRlcyhcImZvbGxvd2luZ1wiKSA/IFwiZm9sbG93aW5nXCIgOiBudWxsO1xuXHRsZXQgbWF4UGVvcGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtkYXRhLW5hdj1cIiR7bGlzdFR5cGV9XCJdIC5Qcm9maWxlTmF2LXZhbHVlYCk7XG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcblx0cmV0dXJuIG1heFBlb3BsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWF4UGVvcGxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dldE1heFBlb3BsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBkb0NsaWNrZXIoY2FyZHMpe1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDApe1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRpZihpbmRleCA+PSBjYXJkcy5sZW5ndGgpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0bGV0IGNhcmQgPSBjYXJkc1tpbmRleF07XG5cdFx0Y2FyZC5kb0NsaWNrKCk7XG5cdFx0aW5kZXgrKztcblx0XHRsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCwgaW5kZXgpO1xuXHR9LCAyMDAwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9DbGlja2VyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9DbGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xuXG5cdGxldCBwZW9wbGVUb0ZvbGxvdyA9IHBlb3BsZVRvRm9sbG93O1xuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGVvcGxlVG9Gb2xsb3cubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xuXG5cdFx0aWYgKHBlb3BsZUZvbGxvd2VkID4gNTAwKSB7XG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRjYXJkLmRvQ2xpY2soKTtcblx0XHRcdH0sIDE1MDAwKTtcblx0XHRcdHBlb3BsZUZvbGxvd2VkKys7XG5cdFx0fVxuXHR9XG5cdGFsZXJ0KFwiUHJvZ3JhbSBjb21wbGV0ZWQuIFlvdSBoYXZlIGJlZW4gc2VydmljZWQgOilcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvbGxvd1Blb3BsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZvbGxvd1Blb3BsZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9