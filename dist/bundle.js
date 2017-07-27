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
	let maxFollow = 100 //assessMaxFollow(myFollowing, myFollowers);
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

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(scrolledPeople[index]);
			// Score the card here
			cards.push(card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTYwODE4OGMxMjkxYmIzYWYzMzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9sbG93UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJGOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLDJEQUEyRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQUdBOzs7Ozs7OztBQzdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNjA4MTg4YzEyOTFiYjNhZjMzMCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XG5cdHJldHVybiB7XG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxuXHRcdGVsZTogRE9NQ2FyZCxcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcblx0XHRiaW86IGdldEJpbyhET01DYXJkKSxcblx0XHRkb0NsaWNrOiBkb0NsaWNrXG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0SWQoRE9NQ2FyZCl7XG5cdHJldHVybiBET01DYXJkLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXItaWRcIl0udmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQmFubmVyKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJnXCIpO1xuXHRyZXR1cm4gZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJyc7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWF2YXRhckltYWdlXCIpO1xuXHRyZXR1cm4gIWVsZS5hdHRyaWJ1dGVzLnNyYy52YWx1ZS5pbmNsdWRlcyhcImRlZmF1bHRfcHJvZmlsZV9pbWFnZXNcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQmlvKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcblx0bGV0IHRleHQgPSBlbGUuaW5uZXJUZXh0O1xuXHRyZXR1cm4gdGV4dCAhPT0gXCJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0QmlvKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcblx0cmV0dXJuIGVsZS5pbm5lclRleHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCl7XG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0ID09PSBcIkZvbGxvd1wiO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCl7XG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuRm9sbG93U3RhdHVzXCIpO1xuXHRyZXR1cm4gZWxlID8gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dzIHlvdVwiIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvQ2xpY2soKXtcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XG5cdGJ0bi5jbGljaygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XG5pbXBvcnQgZm9sbG93UGVvcGxlIGZyb20gJy4vZm9sbG93UGVvcGxlJztcblxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAgKGZ1bmN0aW9uKCl7XG5cdGxldCBteUZvbGxvd2luZyA9IDQ5OTc7XG5cdGxldCBteUZvbGxvd2VycyA9IDYyMzg7XG5cdGxldCBtYXhGb2xsb3cgPSAxMDAgLy9hc3Nlc3NNYXhGb2xsb3cobXlGb2xsb3dpbmcsIG15Rm9sbG93ZXJzKTtcblx0cmV0dXJuIHtcblx0XHRmb2xsb3c6ICgpID0+IHtcblx0XHRcdGdhdGhlckNhcmRzKG1heEZvbGxvdylcblx0XHRcdFx0LnRoZW4oY2FyZHMgPT4ge1xuXHRcdFx0XHRcdC8vIFBsYWNpbmcgb24gd2luZG93IGZvciBkZWJ1Z2dpbmcgcHVycG9zZXNcblx0XHRcdFx0XHR3aW5kb3cuY2FyZHMgPSBjYXJkcztcblx0XHRcdFx0fSlcdFxuXHRcdFx0Ly8gLnRoZW4ocGVvcGxlVG9Gb2xsb3cgPT4gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KSlcblx0XHR9XG5cdH1cbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBhc3Nlc3NNYXhGb2xsb3coZm9sbG93aW5nQ291bnQsIGZvbGxvd2Vyc0NvdW50KXtcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xuXHRsZXQgZGFpbHlGb2xsb3dNYXggPSAxMDAwO1xuXHRsZXQgZm9sbG93ZXJzQnJlYWsgPSAxODAwO1xuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XG5cblx0aWYgKGZvbGxvd2Vyc0NvdW50ID4gZm9sbG93ZXJzQnJlYWspe1xuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcblx0fVxuXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcblxuXHRyZXR1cm4gcGVyc29uYWxNYXhGb2xsb3cgPiBkYWlseUZvbGxvd01heCA/IGRhaWx5Rm9sbG93TWF4IDogcGVyc29uYWxNYXhGb2xsb3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2Vzc01heEZvbGxvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XG5pbXBvcnQgc2NvcmVDYXJkICBmcm9tICcuL3Njb3JlQ2FyZCc7XG5pbXBvcnQgZ2V0TWF4UGVvcGxlIGZyb20gJy4vZ2V0TWF4UGVvcGxlJztcblxuZnVuY3Rpb24gZ2F0aGVyQ2FyZHMobWF4Rm9sbG93KSB7XG5cdGxldCBtYXhQZW9wbGUgPSBnZXRNYXhQZW9wbGUoKTtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDAsIGNhcmRzID0gW10pe1xuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCBzY3JvbGxlZFBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQcm9maWxlQ2FyZFwiKTtcblxuXHRcdGlmKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUpIHJlc29sdmUoY2FyZHMpO1xuXG5cdFx0Zm9yKDsgaW5kZXggPCBzY3JvbGxlZFBlb3BsZS5sZW5ndGggJiYgY2FyZHMubGVuZ3RoIDwgbWF4Rm9sbG93OyBpbmRleCsrKXtcblx0XHRcdGxldCBjYXJkID0gY3JlYXRlQ2FyZChzY3JvbGxlZFBlb3BsZVtpbmRleF0pO1xuXHRcdFx0Ly8gU2NvcmUgdGhlIGNhcmQgaGVyZVxuXHRcdFx0Y2FyZHMucHVzaChjYXJkKTtcblx0XHR9XG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xuXHR9LCAyMDAwKTsgLy8gQmUgZ29vZCB0byBtYWtlIHRoaXMgaW50ZXJ2YWwgcmFuZG9tXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZ2F0aGVyQ2FyZHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzY29yZUNhcmQoY2FyZCkge1xuICBsZXQgc2NvcmUgPSAwO1xuICBcbiAgLy8gRmlsdGVyIGZvciBiaW9zIGFuZCBzZWFyY2ggYWdhaW5zdCBrZXl3b3Jkc1xuICAvLyBpZiAoY2FyZC5oYXNCaW8pIHtcbiAgLy8gICBsZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gIC8vICAgc2NvcmUgKz0gMTA7XG4gIC8vICAgLy8gc2NhbiBiaW8gZm9yIGtleXdvcmRzXG4gIC8vICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXl3b3Jkcy5sZW5ndGg7IGorKykge1xuICAvLyAgICAgaWYgKGJpb1RleHQuaW5jbHVkZXMoa2V5d29yZHNbal0pKSB7XG4gIC8vICAgICAgIHNjb3JlICs9IDM7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgaWYgKGNhcmQuY2hlY2tGb3JCaW8pIHtcbiAgICBsZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cblxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXG4gIGlmIChjYXJkLmNoZWNrRm9yQmFubmVyKSB7XG4gICAgc2NvcmUgKz0gMTA7XG4gIH1cbiAgLy8gRmlsdGVyIGZvciBwcm9maWxlIHBpY3R1cmVcbiAgaWYgKGNhcmQuY2hlY2tGb3JBdmF0YXIpIHtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICByZXR1cm4gc2NvcmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBnZXRNYXhQZW9wbGUoKXtcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cdGxldCBsaXN0VHlwZSA9IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dlcnNcIikgPyBcImZvbGxvd2Vyc1wiIDogcGF0aC5pbmNsdWRlcyhcImZvbGxvd2luZ1wiKSA/IFwiZm9sbG93aW5nXCIgOiBudWxsO1xuXHRsZXQgbWF4UGVvcGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtkYXRhLW5hdj1cIiR7bGlzdFR5cGV9XCJdIC5Qcm9maWxlTmF2LXZhbHVlYCk7XG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcblx0cmV0dXJuIG1heFBlb3BsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWF4UGVvcGxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dldE1heFBlb3BsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcblxuZnVuY3Rpb24gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KXtcblxuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBwZW9wbGVUb0ZvbGxvdztcblx0bGV0IHBlb3BsZUZvbGxvd2VkID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZVRvRm9sbG93Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGNhcmQgPSBwZW9wbGVUb0ZvbGxvd1tpXTtcblxuXHRcdGlmIChwZW9wbGVGb2xsb3dlZCA+IDUwMCkge1xuXHRcdFx0YWxlcnQoYFlvdSBmb2xsb3dlZCAke3Blb3BsZUZvbGxvd2VkfSBwZW9wbGUhYCk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gY2xpY2sgYnV0dG9uIGV2ZXJ5IDE1IHNlY29uZHNcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0Y2FyZC5kb0NsaWNrKCk7XG5cdFx0XHR9LCAxNTAwMCk7XG5cdFx0XHRwZW9wbGVGb2xsb3dlZCsrO1xuXHRcdH1cblx0fVxuXHRhbGVydChcIlByb2dyYW0gY29tcGxldGVkLiBZb3UgaGF2ZSBiZWVuIHNlcnZpY2VkIDopXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb2xsb3dQZW9wbGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb2xsb3dQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==