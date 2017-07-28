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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTVjOGY4MTc2YzIyZjEwY2QwZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlckNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9sbG93UGVvcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDJGOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPLDJEQUEyRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRO0FBQ1Y7OztBQUdBOzs7Ozs7OztBQzdCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNWM4ZjgxNzZjMjJmMTBjZDBkOCIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBnZXRJZChET01DYXJkKSxcclxuXHRcdGVsZTogRE9NQ2FyZCxcclxuXHRcdGhhc0Jhbm5lcjogY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCksXHJcblx0XHRoYXNBdmF0YXI6IGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpLFxyXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcclxuXHRcdGlzRm9sbG93ZWQ6IGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCksXHJcblx0XHRmb2xsb3dzWW91OiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCksXHJcblx0XHRpc1Byb3RlY3RlZDogY2hlY2tQcm90ZWN0ZWQoRE9NQ2FyZCksXHJcblx0XHRiaW86IGdldEJpbyhET01DYXJkKSxcclxuXHRcdGRvQ2xpY2s6IGRvQ2xpY2tcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXItaWRcIl0udmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQmFubmVyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmdcIik7XHJcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWF2YXRhckltYWdlXCIpO1xyXG5cdHJldHVybiAhZWxlLmF0dHJpYnV0ZXMuc3JjLnZhbHVlLmluY2x1ZGVzKFwiZGVmYXVsdF9wcm9maWxlX2ltYWdlc1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0bGV0IHRleHQgPSBlbGUuaW5uZXJUZXh0O1xyXG5cdHJldHVybiB0ZXh0ICE9PSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0cmV0dXJuIGVsZS5pbm5lclRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi51c2VyLWFjdGlvbnNcIik7XHJcblx0cmV0dXJuIGVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3dpbmdcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLkZvbGxvd1N0YXR1c1wiKTtcclxuXHRyZXR1cm4gZWxlID8gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dzIHlvdVwiIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvQ2xpY2soKXtcclxuXHRsZXQgYnRuID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcclxuXHRidG4uY2xpY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jcmVhdGVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc3Nlc3NNYXhGb2xsb3cgZnJvbSAnLi9hc3Nlc3NNYXhGb2xsb3cnO1xyXG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSAnLi9nYXRoZXJDYXJkcyc7XHJcbmltcG9ydCBmb2xsb3dQZW9wbGUgZnJvbSAnLi9mb2xsb3dQZW9wbGUnO1xyXG5cclxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAgKGZ1bmN0aW9uKCl7XHJcblx0bGV0IG15Rm9sbG93aW5nID0gNDk5NztcclxuXHRsZXQgbXlGb2xsb3dlcnMgPSA2MjM4O1xyXG5cdGxldCBtYXhGb2xsb3cgPSAxMDAgLy9hc3Nlc3NNYXhGb2xsb3cobXlGb2xsb3dpbmcsIG15Rm9sbG93ZXJzKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9sbG93OiAoKSA9PiB7XHJcblx0XHRcdGdhdGhlckNhcmRzKG1heEZvbGxvdylcclxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiB7XHJcblx0XHRcdFx0XHQvLyBQbGFjaW5nIG9uIHdpbmRvdyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXHJcblx0XHRcdFx0XHR3aW5kb3cuY2FyZHMgPSBjYXJkcztcclxuXHRcdFx0XHR9KVx0XHJcblx0XHRcdC8vIC50aGVuKHBlb3BsZVRvRm9sbG93ID0+IGZvbGxvd1Blb3BsZShwZW9wbGVUb0ZvbGxvdykpXHJcblx0XHR9XHJcblx0fVxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBhc3Nlc3NNYXhGb2xsb3coZm9sbG93aW5nQ291bnQsIGZvbGxvd2Vyc0NvdW50KXtcclxuXHRsZXQgYmFzZUZvbGxvd01heCA9IDUwMDA7XHJcblx0bGV0IGRhaWx5Rm9sbG93TWF4ID0gMTAwMDtcclxuXHRsZXQgZm9sbG93ZXJzQnJlYWsgPSAxODAwO1xyXG5cdGxldCBmb2xsb3dJbmNyZWFzZSA9IDAuMTtcclxuXHJcblx0aWYgKGZvbGxvd2Vyc0NvdW50ID4gZm9sbG93ZXJzQnJlYWspe1xyXG5cdFx0YmFzZUZvbGxvd01heCA9IGJhc2VGb2xsb3dNYXggKyBmb2xsb3dlcnNDb3VudCAqIGZvbGxvd0luY3JlYXNlO1xyXG5cdH1cclxuXHJcblx0bGV0IHBlcnNvbmFsTWF4Rm9sbG93ID0gYmFzZUZvbGxvd01heCAtIGZvbGxvd2luZ0NvdW50O1xyXG5cclxuXHRyZXR1cm4gcGVyc29uYWxNYXhGb2xsb3cgPiBkYWlseUZvbGxvd01heCA/IGRhaWx5Rm9sbG93TWF4IDogcGVyc29uYWxNYXhGb2xsb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzc2Vzc01heEZvbGxvdztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4vc2NvcmVDYXJkJztcclxuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tICcuL2dldE1heFBlb3BsZSc7XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJDYXJkcyhtYXhGb2xsb3cpIHtcclxuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCwgaW5kZXggPSAwLCBjYXJkcyA9IFtdKXtcclxuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuXHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdGxldCBzY3JvbGxlZFBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQcm9maWxlQ2FyZFwiKTtcclxuXHJcblx0XHRpZihzY3JvbGxlZFBlb3BsZS5sZW5ndGggPj0gbWF4UGVvcGxlKSByZXNvbHZlKGNhcmRzKTtcclxuXHJcblx0XHRmb3IoOyBpbmRleCA8IHNjcm9sbGVkUGVvcGxlLmxlbmd0aCAmJiBjYXJkcy5sZW5ndGggPCBtYXhGb2xsb3c7IGluZGV4Kyspe1xyXG5cdFx0XHRsZXQgY2FyZCA9IGNyZWF0ZUNhcmQoc2Nyb2xsZWRQZW9wbGVbaW5kZXhdKTtcclxuXHRcdFx0Ly8gU2NvcmUgdGhlIGNhcmQgaGVyZVxyXG5cdFx0XHRjYXJkcy5wdXNoKGNhcmQpO1xyXG5cdFx0fVxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xyXG5cdH0sIDIwMDApOyAvLyBCZSBnb29kIHRvIG1ha2UgdGhpcyBpbnRlcnZhbCByYW5kb21cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhdGhlckNhcmRzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzY29yZUNhcmQoY2FyZCkge1xyXG4gIGxldCBzY29yZSA9IDA7XHJcbiAgXHJcbiAgLy8gRmlsdGVyIGZvciBiaW9zIGFuZCBzZWFyY2ggYWdhaW5zdCBrZXl3b3Jkc1xyXG4gIC8vIGlmIChjYXJkLmhhc0Jpbykge1xyXG4gIC8vICAgbGV0IGtleXdvcmRzID0gVHdpdHRlck1pbmlvbi53b3JkTGlzdC5zcGxpdChcIiwgXCIpO1xyXG4gIC8vICAgc2NvcmUgKz0gMTA7XHJcbiAgLy8gICAvLyBzY2FuIGJpbyBmb3Iga2V5d29yZHNcclxuICAvLyAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5d29yZHMubGVuZ3RoOyBqKyspIHtcclxuICAvLyAgICAgaWYgKGJpb1RleHQuaW5jbHVkZXMoa2V5d29yZHNbal0pKSB7XHJcbiAgLy8gICAgICAgc2NvcmUgKz0gMztcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgaWYgKGNhcmQuY2hlY2tGb3JCaW8pIHtcclxuICAgIGxldCBrZXl3b3JkcyA9IFR3aXR0ZXJNaW5pb24ud29yZExpc3Quc3BsaXQoXCIsIFwiKTtcclxuICAgIHNjb3JlICs9IDEwO1xyXG4gIH1cclxuXHJcbiAgLy8gRmlsdGVyIGZvciBiYWNrZ3JvdW5kIGltYWdlc1xyXG4gIGlmIChjYXJkLmNoZWNrRm9yQmFubmVyKSB7XHJcbiAgICBzY29yZSArPSAxMDtcclxuICB9XHJcbiAgLy8gRmlsdGVyIGZvciBwcm9maWxlIHBpY3R1cmVcclxuICBpZiAoY2FyZC5jaGVja0ZvckF2YXRhcikge1xyXG4gICAgc2NvcmUgKz0gMTA7XHJcbiAgfVxyXG4gIHJldHVybiBzY29yZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2NvcmVDYXJkO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY29yZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XHJcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0bGV0IGxpc3RUeXBlID0gcGF0aC5pbmNsdWRlcyhcImZvbGxvd2Vyc1wiKSA/IFwiZm9sbG93ZXJzXCIgOiBwYXRoLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpID8gXCJmb2xsb3dpbmdcIiA6IG51bGw7XHJcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xyXG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcclxuXHRyZXR1cm4gbWF4UGVvcGxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNYXhQZW9wbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0TWF4UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xyXG5cclxuZnVuY3Rpb24gZm9sbG93UGVvcGxlKHBlb3BsZVRvRm9sbG93KXtcclxuXHJcblx0bGV0IHBlb3BsZVRvRm9sbG93ID0gcGVvcGxlVG9Gb2xsb3c7XHJcblx0bGV0IHBlb3BsZUZvbGxvd2VkID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZW9wbGVUb0ZvbGxvdy5sZW5ndGg7IGkrKykge1xyXG5cdFx0bGV0IGNhcmQgPSBwZW9wbGVUb0ZvbGxvd1tpXTtcclxuXHJcblx0XHRpZiAocGVvcGxlRm9sbG93ZWQgPiA1MDApIHtcclxuXHRcdFx0YWxlcnQoYFlvdSBmb2xsb3dlZCAke3Blb3BsZUZvbGxvd2VkfSBwZW9wbGUhYCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gY2xpY2sgYnV0dG9uIGV2ZXJ5IDE1IHNlY29uZHNcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGNhcmQuZG9DbGljaygpO1xyXG5cdFx0XHR9LCAxNTAwMCk7XHJcblx0XHRcdHBlb3BsZUZvbGxvd2VkKys7XHJcblx0XHR9XHJcblx0fVxyXG5cdGFsZXJ0KFwiUHJvZ3JhbSBjb21wbGV0ZWQuIFlvdSBoYXZlIGJlZW4gc2VydmljZWQgOilcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvbGxvd1Blb3BsZTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZm9sbG93UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=