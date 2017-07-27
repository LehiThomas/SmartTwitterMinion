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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gatherPeopleToFollow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__followPeople__ = __webpack_require__(5);




window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 100 //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			Object(__WEBPACK_IMPORTED_MODULE_1__gatherPeopleToFollow__["a" /* default */])(maxFollow)
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



function gatherPeopleToFollow(maxFollow) {
	// Get if followers or following
	// Get maxPeople
	let maxPeople = 500;

	return new Promise((resolve, reject) => {
		loopGather(maxFollow, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) return peopleToFollow;

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(scrolledPeople[index]);
			// Score the card here
			cards.push(card);
		}
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000);
}


/* harmony default export */ __webpack_exports__["a"] = (gatherPeopleToFollow);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDcwZmU4OTc4NzRjNWM2YTkyMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlclBlb3BsZVRvRm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbGxvd1Blb3BsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMkY7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7Ozs7Ozs7O0FDL0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDL0JBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDJCQUEyQjtBQUMzQzs7QUFFQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3MGZlODk3ODc0YzVjNmE5MjEyIiwiZnVuY3Rpb24gY3JlYXRlQ2FyZChET01DYXJkKXtcblx0cmV0dXJuIHtcblx0XHRpZDogZ2V0SWQoRE9NQ2FyZCksXG5cdFx0ZWxlOiBET01DYXJkLFxuXHRcdGhhc0Jhbm5lcjogY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCksXG5cdFx0aGFzQXZhdGFyOiBjaGVja0ZvckF2YXRhcihET01DYXJkKSxcblx0XHRoYXNCaW86IGNoZWNrRm9yQmlvKERPTUNhcmQpLFxuXHRcdGlzRm9sbG93ZWQ6IGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCksXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXG5cdFx0ZG9DbGljazogZG9DbGlja1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvdy10ZXh0XCIpO1xuXHRyZXR1cm4gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dcIjtcbn1cblxuZnVuY3Rpb24gZG9DbGljaygpe1xuXHRsZXQgYnRuID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcblx0YnRuLmNsaWNrKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3JlYXRlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXNzZXNzTWF4Rm9sbG93IGZyb20gJy4vYXNzZXNzTWF4Rm9sbG93JztcbmltcG9ydCBnYXRoZXJQZW9wbGVUb0ZvbGxvdyBmcm9tICcuL2dhdGhlclBlb3BsZVRvRm9sbG93JztcbmltcG9ydCBmb2xsb3dQZW9wbGUgZnJvbSAnLi9mb2xsb3dQZW9wbGUnO1xuXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcblx0bGV0IG15Rm9sbG93aW5nID0gNDk5Nztcblx0bGV0IG15Rm9sbG93ZXJzID0gNjIzODtcblx0bGV0IG1heEZvbGxvdyA9IDEwMCAvL2Fzc2Vzc01heEZvbGxvdyhteUZvbGxvd2luZywgbXlGb2xsb3dlcnMpO1xuXHRyZXR1cm4ge1xuXHRcdGZvbGxvdzogKCkgPT4ge1xuXHRcdFx0Z2F0aGVyUGVvcGxlVG9Gb2xsb3cobWF4Rm9sbG93KVxuXHRcdFx0XHQudGhlbihjYXJkcyA9PiB7XG5cdFx0XHRcdFx0Ly8gUGxhY2luZyBvbiB3aW5kb3cgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xuXHRcdFx0XHRcdHdpbmRvdy5jYXJkcyA9IGNhcmRzO1xuXHRcdFx0XHR9KVx0XG5cdFx0XHQvLyAudGhlbihwZW9wbGVUb0ZvbGxvdyA9PiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpKVxuXHRcdH1cblx0fVxufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xuXHRsZXQgYmFzZUZvbGxvd01heCA9IDUwMDA7XG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XG5cdGxldCBmb2xsb3dJbmNyZWFzZSA9IDAuMTtcblxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XG5cdFx0YmFzZUZvbGxvd01heCA9IGJhc2VGb2xsb3dNYXggKyBmb2xsb3dlcnNDb3VudCAqIGZvbGxvd0luY3JlYXNlO1xuXHR9XG5cblx0bGV0IHBlcnNvbmFsTWF4Rm9sbG93ID0gYmFzZUZvbGxvd01heCAtIGZvbGxvd2luZ0NvdW50O1xuXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlQ2FyZCAgZnJvbSAnLi9jcmVhdGVDYXJkJztcbmltcG9ydCBzY29yZUNhcmQgIGZyb20gJy4vc2NvcmVDYXJkJztcblxuZnVuY3Rpb24gZ2F0aGVyUGVvcGxlVG9Gb2xsb3cobWF4Rm9sbG93KSB7XG5cdC8vIEdldCBpZiBmb2xsb3dlcnMgb3IgZm9sbG93aW5nXG5cdC8vIEdldCBtYXhQZW9wbGVcblx0bGV0IG1heFBlb3BsZSA9IDUwMDtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGxvb3BHYXRoZXIobWF4Rm9sbG93LCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb29wR2F0aGVyKG1heEZvbGxvdywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4ID0gMCwgY2FyZHMgPSBbXSl7XG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xuXG5cdFx0aWYoc2Nyb2xsZWRQZW9wbGUubGVuZ3RoID49IG1heFBlb3BsZSkgcmV0dXJuIHBlb3BsZVRvRm9sbG93O1xuXG5cdFx0Zm9yKDsgaW5kZXggPCBzY3JvbGxlZFBlb3BsZS5sZW5ndGggJiYgY2FyZHMubGVuZ3RoIDwgbWF4Rm9sbG93OyBpbmRleCsrKXtcblx0XHRcdGxldCBjYXJkID0gY3JlYXRlQ2FyZChzY3JvbGxlZFBlb3BsZVtpbmRleF0pO1xuXHRcdFx0Ly8gU2NvcmUgdGhlIGNhcmQgaGVyZVxuXHRcdFx0Y2FyZHMucHVzaChjYXJkKTtcblx0XHR9XG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCwgY2FyZHMpO1xuXHR9LCAyMDAwKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJQZW9wbGVUb0ZvbGxvdztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhdGhlclBlb3BsZVRvRm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XG4gIGxldCBzY29yZSA9IDA7XG4gIFxuICAvLyBGaWx0ZXIgZm9yIGJpb3MgYW5kIHNlYXJjaCBhZ2FpbnN0IGtleXdvcmRzXG4gIC8vIGlmIChjYXJkLmhhc0Jpbykge1xuICAvLyAgIGxldCBrZXl3b3JkcyA9IFR3aXR0ZXJNaW5pb24ud29yZExpc3Quc3BsaXQoXCIsIFwiKTtcbiAgLy8gICBzY29yZSArPSAxMDtcbiAgLy8gICAvLyBzY2FuIGJpbyBmb3Iga2V5d29yZHNcbiAgLy8gICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXdvcmRzLmxlbmd0aDsgaisrKSB7XG4gIC8vICAgICBpZiAoYmlvVGV4dC5pbmNsdWRlcyhrZXl3b3Jkc1tqXSkpIHtcbiAgLy8gICAgICAgc2NvcmUgKz0gMztcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cblxuICBpZiAoY2FyZC5jaGVja0ZvckJpbykge1xuICAgIGxldCBrZXl3b3JkcyA9IFR3aXR0ZXJNaW5pb24ud29yZExpc3Quc3BsaXQoXCIsIFwiKTtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuXG4gIC8vIEZpbHRlciBmb3IgYmFja2dyb3VuZCBpbWFnZXNcbiAgaWYgKGNhcmQuY2hlY2tGb3JCYW5uZXIpIHtcbiAgICBzY29yZSArPSAxMDtcbiAgfVxuICAvLyBGaWx0ZXIgZm9yIHByb2ZpbGUgcGljdHVyZVxuICBpZiAoY2FyZC5jaGVja0ZvckF2YXRhcikge1xuICAgIHNjb3JlICs9IDEwO1xuICB9XG4gIHJldHVybiBzY29yZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2NvcmVDYXJkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NvcmVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xuXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xuXG5cdGxldCBwZW9wbGVUb0ZvbGxvdyA9IHBlb3BsZVRvRm9sbG93O1xuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGVvcGxlVG9Gb2xsb3cubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xuXG5cdFx0aWYgKHBlb3BsZUZvbGxvd2VkID4gNTAwKSB7XG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRjYXJkLmRvQ2xpY2soKTtcblx0XHRcdH0sIDE1MDAwKTtcblx0XHRcdHBlb3BsZUZvbGxvd2VkKys7XG5cdFx0fVxuXHR9XG5cdGFsZXJ0KFwiUHJvZ3JhbSBjb21wbGV0ZWQuIFlvdSBoYXZlIGJlZW4gc2VydmljZWQgOilcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvbGxvd1Blb3BsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZvbGxvd1Blb3BsZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9