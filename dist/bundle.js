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
	let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_0__assessMaxFollow__["a" /* default */])(myFollowing, myFollowers);
	let passingScore = 0;
	let bannerScore = 0;
	let profileScore = 0;
	let keyWords = [];
	return {
		follow: () => {
			// Get Max Follow Count

			// Inform on count - user can change amount if desired

			// Allow User to add key words

			Object(__WEBPACK_IMPORTED_MODULE_1__gatherCards__["a" /* default */])(maxFollow)
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})
			// .then(peopleToFollow => followPeople(peopleToFollow))
		},
		setup: () => {
			// Self Details
			myFollowing = prompt("How many followers do you have?", myFollowing);
			myFollowers = prompt("How many people are you following?", myFollowers);
			// Scoreing Details
			passingScore = prompt("Minimum Passing Score", passingScore);
			bannerScore = prompt("Banner Score", bannerScore);
			profileScore = prompt("Profile Score", profileScore);
		},
		test: () => {
			console.error(`myFollowing ${myFollowing}`);
			console.error(`myFollowers ${myFollowers}`);
			console.error(`passingScore ${passingScore}`);
			console.error(`bannerScore ${bannerScore}`);
			console.error(`profileScore ${profileScore}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTcyNmQ2MzVhYmRmMGNjNzdjZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9sbG93UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QyxnQ0FBZ0MsWUFBWTtBQUM1QyxpQ0FBaUMsYUFBYTtBQUM5QyxnQ0FBZ0MsWUFBWTtBQUM1QyxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwRTs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQUdBOzs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNzI2ZDYzNWFiZGYwY2M3N2NmMSIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxuXHRcdGVsZTogRE9NQ2FyZCxcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXG5cdFx0ZG9DbGljazogZG9DbGlja1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XG5cdHJldHVybiBlbGUgPyBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd3MgeW91XCIgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ2xpY2soKXtcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdGJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XG5pbXBvcnQgZm9sbG93UGVvcGxlIGZyb20gJy4vZm9sbG93UGVvcGxlJztcblxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAgKGZ1bmN0aW9uKCl7XG5cdGxldCBteUZvbGxvd2luZyA9IDA7XG5cdGxldCBteUZvbGxvd2VycyA9IDA7XG5cdGxldCBtYXhGb2xsb3cgPSBhc3Nlc3NNYXhGb2xsb3cobXlGb2xsb3dpbmcsIG15Rm9sbG93ZXJzKTtcblx0bGV0IHBhc3NpbmdTY29yZSA9IDA7XG5cdGxldCBiYW5uZXJTY29yZSA9IDA7XG5cdGxldCBwcm9maWxlU2NvcmUgPSAwO1xuXHRsZXQga2V5V29yZHMgPSBbXTtcblx0cmV0dXJuIHtcblx0XHRmb2xsb3c6ICgpID0+IHtcblx0XHRcdC8vIEdldCBNYXggRm9sbG93IENvdW50XG5cblx0XHRcdC8vIEluZm9ybSBvbiBjb3VudCAtIHVzZXIgY2FuIGNoYW5nZSBhbW91bnQgaWYgZGVzaXJlZFxuXG5cdFx0XHQvLyBBbGxvdyBVc2VyIHRvIGFkZCBrZXkgd29yZHNcblxuXHRcdFx0Z2F0aGVyQ2FyZHMobWF4Rm9sbG93KVxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiB7XG5cdFx0XHRcdFx0Ly8gUGxhY2luZyBvbiB3aW5kb3cgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuXHRcdFx0XHRcdHdpbmRvdy5jYXJkcyA9IGNhcmRzO1xuXHRcdFx0XHR9KVxuXHRcdFx0Ly8gLnRoZW4ocGVvcGxlVG9Gb2xsb3cgPT4gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KSlcblx0XHR9LFxuXHRcdHNldHVwOiAoKSA9PiB7XG5cdFx0XHQvLyBTZWxmIERldGFpbHNcblx0XHRcdG15Rm9sbG93aW5nID0gcHJvbXB0KFwiSG93IG1hbnkgZm9sbG93ZXJzIGRvIHlvdSBoYXZlP1wiLCBteUZvbGxvd2luZyk7XG5cdFx0XHRteUZvbGxvd2VycyA9IHByb21wdChcIkhvdyBtYW55IHBlb3BsZSBhcmUgeW91IGZvbGxvd2luZz9cIiwgbXlGb2xsb3dlcnMpO1xuXHRcdFx0Ly8gU2NvcmVpbmcgRGV0YWlsc1xuXHRcdFx0cGFzc2luZ1Njb3JlID0gcHJvbXB0KFwiTWluaW11bSBQYXNzaW5nIFNjb3JlXCIsIHBhc3NpbmdTY29yZSk7XG5cdFx0XHRiYW5uZXJTY29yZSA9IHByb21wdChcIkJhbm5lciBTY29yZVwiLCBiYW5uZXJTY29yZSk7XG5cdFx0XHRwcm9maWxlU2NvcmUgPSBwcm9tcHQoXCJQcm9maWxlIFNjb3JlXCIsIHByb2ZpbGVTY29yZSk7XG5cdFx0fSxcblx0XHR0ZXN0OiAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2luZyAke215Rm9sbG93aW5nfWApO1xuXHRcdFx0Y29uc29sZS5lcnJvcihgbXlGb2xsb3dlcnMgJHtteUZvbGxvd2Vyc31gKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYHBhc3NpbmdTY29yZSAke3Bhc3NpbmdTY29yZX1gKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYGJhbm5lclNjb3JlICR7YmFubmVyU2NvcmV9YCk7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBwcm9maWxlU2NvcmUgJHtwcm9maWxlU2NvcmV9YCk7XG5cdFx0fVxuXHR9XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XG5cdGxldCBiYXNlRm9sbG93TWF4ID0gNTAwMDtcblx0bGV0IGRhaWx5Rm9sbG93TWF4ID0gMTAwMDtcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcblx0bGV0IGZvbGxvd0luY3JlYXNlID0gMC4xO1xuXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcblx0XHRiYXNlRm9sbG93TWF4ID0gYmFzZUZvbGxvd01heCArIGZvbGxvd2Vyc0NvdW50ICogZm9sbG93SW5jcmVhc2U7XG5cdH1cblxuXHRsZXQgcGVyc29uYWxNYXhGb2xsb3cgPSBiYXNlRm9sbG93TWF4IC0gZm9sbG93aW5nQ291bnQ7XG5cblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuaW1wb3J0IHNjb3JlQ2FyZCAgZnJvbSAnLi9zY29yZUNhcmQnO1xuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tICcuL2dldE1heFBlb3BsZSc7XG5cbmZ1bmN0aW9uIGdhdGhlckNhcmRzKG1heEZvbGxvdykge1xuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0bG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwLCBjYXJkcyA9IFtdKXtcblx0d2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRsZXQgc2Nyb2xsZWRQZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiUHJvZmlsZUNhcmRcIik7XG5cblx0XHRpZihzY3JvbGxlZFBlb3BsZS5sZW5ndGggPj0gbWF4UGVvcGxlKSByZXNvbHZlKGNhcmRzKTtcblxuXHRcdGZvcig7IGluZGV4IDwgc2Nyb2xsZWRQZW9wbGUubGVuZ3RoICYmIGNhcmRzLmxlbmd0aCA8IG1heEZvbGxvdzsgaW5kZXgrKyl7XG5cdFx0XHRsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoc2Nyb2xsZWRQZW9wbGVbaW5kZXhdKTtcblx0XHRcdC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcblx0XHRcdGlmIChjYXJkLmNoZWNrRm9yRm9sbG93ZWQgfHwgY2FyZC5pc1Byb3RlY3RlZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChzY29yZUNhcmQoY2FyZCkgPj0gMzApIHtcblx0XHRcdFx0XHRjYXJkcy5wdXNoKGNhcmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhcmRzLmxlbmd0aCA+PSBtYXhGb2xsb3cgPyByZXNvbHZlKGNhcmRzKSA6IGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXgsIGNhcmRzKTtcblx0fSwgMjAwMCk7IC8vIEJlIGdvb2QgdG8gbWFrZSB0aGlzIGludGVydmFsIHJhbmRvbVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGdhdGhlckNhcmRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2F0aGVyQ2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc2NvcmVDYXJkKGNhcmQpIHtcbiAgbGV0IHNjb3JlID0gMDtcblxuICBpZiAoY2FyZC5oYXNCaW8pIHtcbiAgICAvL2xldCBrZXl3b3JkcyA9IFR3aXR0ZXJNaW5pb24ud29yZExpc3Quc3BsaXQoXCIsIFwiKTtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXG4gIGlmIChjYXJkLmhhc0Jhbm5lcikge1xuICAgIHNjb3JlICs9IDEwO1xuICB9XG4gIC8vIEZpbHRlciBmb3IgcHJvZmlsZSBwaWN0dXJlXG4gIGlmIChjYXJkLmhhc0F2YXRhcikge1xuICAgIHNjb3JlICs9IDEwO1xuICB9XG4gIHJldHVybiBzY29yZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2NvcmVDYXJkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NvcmVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGdldE1heFBlb3BsZSgpe1xuXHRsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblx0bGV0IGxpc3RUeXBlID0gcGF0aC5pbmNsdWRlcyhcImZvbGxvd2Vyc1wiKSA/IFwiZm9sbG93ZXJzXCIgOiBwYXRoLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpID8gXCJmb2xsb3dpbmdcIiA6IG51bGw7XG5cdGxldCBtYXhQZW9wbGVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2RhdGEtbmF2PVwiJHtsaXN0VHlwZX1cIl0gLlByb2ZpbGVOYXYtdmFsdWVgKTtcblx0bGV0IG1heFBlb3BsZSA9IE51bWJlcihtYXhQZW9wbGVFbGUuYXR0cmlidXRlc1tcImRhdGEtY291bnRcIl0udmFsdWUpO1xuXHRyZXR1cm4gbWF4UGVvcGxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXhQZW9wbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0TWF4UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xuXG5cdGxldCBwZW9wbGVUb0ZvbGxvdyA9IHBlb3BsZVRvRm9sbG93O1xuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGVvcGxlVG9Gb2xsb3cubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xuXG5cdFx0aWYgKHBlb3BsZUZvbGxvd2VkID4gNTAwKSB7XG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRjYXJkLmRvQ2xpY2soKTtcblx0XHRcdH0sIDE1MDAwKTtcblx0XHRcdHBlb3BsZUZvbGxvd2VkKys7XG5cdFx0fVxuXHR9XG5cdGFsZXJ0KFwiUHJvZ3JhbSBjb21wbGV0ZWQuIFlvdSBoYXZlIGJlZW4gc2VydmljZWQgOilcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvbGxvd1Blb3BsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZvbGxvd1Blb3BsZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9