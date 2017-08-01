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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followPeople__ = __webpack_require__(6);




window.TwitterMinion =  (function(){
	let myFollowing = 0;
	let myFollowers = 0;
	let passingScore = 0;
	let bannerScore = 0;
	let profileScore = 0;
	let keyWords = [];
	let _this = {
		follow: () => {
			// Get Max Follow Count - User may change the value
			let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_0__assessMaxFollow__["a" /* default */])(myFollowing, myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			Object(__WEBPACK_IMPORTED_MODULE_1__gatherCards__["a" /* default */])(maxFollow)
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})
			// .then(peopleToFollow => followPeople(peopleToFollow))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzVlOTgzZDMyYWQwMTkzZDYyYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9sbG93UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFVBQVU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUMsZ0NBQWdDLFlBQVk7QUFDNUMsaUNBQWlDLGFBQWE7QUFDOUMsZ0NBQWdDLFlBQVk7QUFDNUMsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwRTs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQUdBOzs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNWU5ODNkMzJhZDAxOTNkNjJjNCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxuXHRcdGVsZTogRE9NQ2FyZCxcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXG5cdFx0ZG9DbGljazogZG9DbGlja1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XG5cdHJldHVybiBlbGUgPyBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd3MgeW91XCIgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ2xpY2soKXtcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdGJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XG5pbXBvcnQgZm9sbG93UGVvcGxlIGZyb20gJy4vZm9sbG93UGVvcGxlJztcblxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAgKGZ1bmN0aW9uKCl7XG5cdGxldCBteUZvbGxvd2luZyA9IDA7XG5cdGxldCBteUZvbGxvd2VycyA9IDA7XG5cdGxldCBwYXNzaW5nU2NvcmUgPSAwO1xuXHRsZXQgYmFubmVyU2NvcmUgPSAwO1xuXHRsZXQgcHJvZmlsZVNjb3JlID0gMDtcblx0bGV0IGtleVdvcmRzID0gW107XG5cdGxldCBfdGhpcyA9IHtcblx0XHRmb2xsb3c6ICgpID0+IHtcblx0XHRcdC8vIEdldCBNYXggRm9sbG93IENvdW50IC0gVXNlciBtYXkgY2hhbmdlIHRoZSB2YWx1ZVxuXHRcdFx0bGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhteUZvbGxvd2luZywgbXlGb2xsb3dlcnMpO1xuXHRcdFx0bWF4Rm9sbG93ID0gcHJvbXB0KGBUaGUgbWF4IHRoYXQgY2FuIGJlIGZvbGxvd2VkIGlzICR7bWF4Rm9sbG93fS4gWW91IG1heSBzZXQgYSBkaWZmZXJlbnQgYW1vdW50YCwgbWF4Rm9sbG93KTtcblxuXHRcdFx0Z2F0aGVyQ2FyZHMobWF4Rm9sbG93KVxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiB7XG5cdFx0XHRcdFx0Ly8gUGxhY2luZyBvbiB3aW5kb3cgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuXHRcdFx0XHRcdHdpbmRvdy5jYXJkcyA9IGNhcmRzO1xuXHRcdFx0XHR9KVxuXHRcdFx0Ly8gLnRoZW4ocGVvcGxlVG9Gb2xsb3cgPT4gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KSlcblx0XHR9LFxuXHRcdHNldHVwOiB7XG5cdFx0XHRwcm9tcHRBbGw6ICgpID0+IHtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dpbmcoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dlcnMoKTtcblx0XHRcdFx0X3RoaXMuc2V0dXAucHJvbXB0UGFzc2luZ1Njb3JlKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdEJhbm5lclNjb3JlKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwLnByb21wdFByb2ZpbGVTY29yZSgpO1xuXHRcdFx0fSxcblx0XHRcdHByb21wdE15Rm9sbG93aW5nOiAoKSA9PiB7XG5cdFx0XHRcdG15Rm9sbG93aW5nID0gcHJvbXB0KFwiSG93IG1hbnkgZm9sbG93ZXJzIGRvIHlvdSBoYXZlP1wiLCBteUZvbGxvd2luZyk7XG5cdFx0XHR9LFxuXHRcdFx0cHJvbXB0TXlGb2xsb3dlcnM6ICgpID0+IHtcblx0XHRcdFx0bXlGb2xsb3dlcnMgPSBwcm9tcHQoXCJIb3cgbWFueSBwZW9wbGUgYXJlIHlvdSBmb2xsb3dpbmc/XCIsIG15Rm9sbG93ZXJzKTtcblx0XHRcdH0sXG5cdFx0XHRwcm9tcHRQYXNzaW5nU2NvcmU6ICgpID0+IHtcblx0XHRcdFx0cGFzc2luZ1Njb3JlID0gcHJvbXB0KFwiTWluaW11bSBQYXNzaW5nIFNjb3JlXCIsIHBhc3NpbmdTY29yZSk7XG5cdFx0XHR9LFxuXHRcdFx0cHJvbXB0QmFubmVyU2NvcmU6ICgpID0+IHtcblx0XHRcdFx0YmFubmVyU2NvcmUgPSBwcm9tcHQoXCJCYW5uZXIgU2NvcmVcIiwgYmFubmVyU2NvcmUpO1xuXHRcdFx0fSxcblx0XHRcdHByb21wdFByb2ZpbGVTY29yZTogKCkgPT4ge1xuXHRcdFx0XHRwcm9maWxlU2NvcmUgPSBwcm9tcHQoXCJQcm9maWxlIFNjb3JlXCIsIHByb2ZpbGVTY29yZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0ZXN0OiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2luZyAke215Rm9sbG93aW5nfWApO1xuXHRcdFx0Y29uc29sZS5lcnJvcihgbXlGb2xsb3dlcnMgJHtteUZvbGxvd2Vyc31gKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYHBhc3NpbmdTY29yZSAke3Bhc3NpbmdTY29yZX1gKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYGJhbm5lclNjb3JlICR7YmFubmVyU2NvcmV9YCk7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBwcm9maWxlU2NvcmUgJHtwcm9maWxlU2NvcmV9YCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBfdGhpcztcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBhc3Nlc3NNYXhGb2xsb3coZm9sbG93aW5nQ291bnQsIGZvbGxvd2Vyc0NvdW50KXtcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xuXHRsZXQgZGFpbHlGb2xsb3dNYXggPSAxMDAwO1xuXHRsZXQgZm9sbG93ZXJzQnJlYWsgPSAxODAwO1xuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XG5cblx0aWYgKGZvbGxvd2Vyc0NvdW50ID4gZm9sbG93ZXJzQnJlYWspe1xuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcblx0fVxuXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcblxuXHRyZXR1cm4gcGVyc29uYWxNYXhGb2xsb3cgPiBkYWlseUZvbGxvd01heCA/IGRhaWx5Rm9sbG93TWF4IDogcGVyc29uYWxNYXhGb2xsb3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2Vzc01heEZvbGxvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XG5pbXBvcnQgc2NvcmVDYXJkICBmcm9tICcuL3Njb3JlQ2FyZCc7XG5pbXBvcnQgZ2V0TWF4UGVvcGxlIGZyb20gJy4vZ2V0TWF4UGVvcGxlJztcblxuZnVuY3Rpb24gZ2F0aGVyQ2FyZHMobWF4Rm9sbG93KSB7XG5cdGxldCBtYXhQZW9wbGUgPSBnZXRNYXhQZW9wbGUoKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDAsIGNhcmRzID0gW10pe1xuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBzY3JvbGxlZFBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQcm9maWxlQ2FyZFwiKTtcblxuXHRcdGlmKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUpIHJlc29sdmUoY2FyZHMpO1xuXG5cdFx0Zm9yKDsgaW5kZXggPCBzY3JvbGxlZFBlb3BsZS5sZW5ndGggJiYgY2FyZHMubGVuZ3RoIDwgbWF4Rm9sbG93OyBpbmRleCsrKXtcblx0XHRcdGxldCBjYXJkID0gY3JlYXRlQ2FyZChzY3JvbGxlZFBlb3BsZVtpbmRleF0pO1xuXHRcdFx0Ly8gU2NvcmUgdGhlIGNhcmQgaGVyZVxuXHRcdFx0aWYgKGNhcmQuY2hlY2tGb3JGb2xsb3dlZCB8fCBjYXJkLmlzUHJvdGVjdGVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHNjb3JlQ2FyZChjYXJkKSA+PSAzMCkge1xuXHRcdFx0XHRcdGNhcmRzLnB1c2goY2FyZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xuXHR9LCAyMDAwKTsgLy8gQmUgZ29vZCB0byBtYWtlIHRoaXMgaW50ZXJ2YWwgcmFuZG9tXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2F0aGVyQ2FyZHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzY29yZUNhcmQoY2FyZCkge1xuICBsZXQgc2NvcmUgPSAwO1xuXG4gIGlmIChjYXJkLmhhc0Jpbykge1xuICAgIC8vbGV0IGtleXdvcmRzID0gVHdpdHRlck1pbmlvbi53b3JkTGlzdC5zcGxpdChcIiwgXCIpO1xuICAgIHNjb3JlICs9IDEwO1xuICB9XG4gIC8vIEZpbHRlciBmb3IgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKGNhcmQuaGFzQmFubmVyKSB7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBwcm9maWxlIHBpY3R1cmVcbiAgaWYgKGNhcmQuaGFzQXZhdGFyKSB7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzY29yZUNhcmQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY29yZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XG5cdGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xuXHRsZXQgbWF4UGVvcGxlID0gTnVtYmVyKG1heFBlb3BsZUVsZS5hdHRyaWJ1dGVzW1wiZGF0YS1jb3VudFwiXS52YWx1ZSk7XG5cdHJldHVybiBtYXhQZW9wbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XG5cbmZ1bmN0aW9uIGZvbGxvd1Blb3BsZShwZW9wbGVUb0ZvbGxvdyl7XG5cblx0bGV0IHBlb3BsZVRvRm9sbG93ID0gcGVvcGxlVG9Gb2xsb3c7XG5cdGxldCBwZW9wbGVGb2xsb3dlZCA9IDA7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZW9wbGVUb0ZvbGxvdy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBjYXJkID0gcGVvcGxlVG9Gb2xsb3dbaV07XG5cblx0XHRpZiAocGVvcGxlRm9sbG93ZWQgPiA1MDApIHtcblx0XHRcdGFsZXJ0KGBZb3UgZm9sbG93ZWQgJHtwZW9wbGVGb2xsb3dlZH0gcGVvcGxlIWApO1xuXHRcdFx0YnJlYWs7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGNsaWNrIGJ1dHRvbiBldmVyeSAxNSBzZWNvbmRzXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGNhcmQuZG9DbGljaygpO1xuXHRcdFx0fSwgMTUwMDApO1xuXHRcdFx0cGVvcGxlRm9sbG93ZWQrKztcblx0XHR9XG5cdH1cblx0YWxlcnQoXCJQcm9ncmFtIGNvbXBsZXRlZC4gWW91IGhhdmUgYmVlbiBzZXJ2aWNlZCA6KVwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93UGVvcGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9sbG93UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=