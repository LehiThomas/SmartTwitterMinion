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
	alert("Begin");
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 10 //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			Object(__WEBPACK_IMPORTED_MODULE_1__gatherPeopleToFollow__["a" /* default */])(maxFollow)
				.then(Object(__WEBPACK_IMPORTED_MODULE_2__followPeople__["a" /* default */])(peopleToFollow))
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
	alert("Hello ;) ");
	const maxFollow = maxFollow;
	let peopleToFollow = [];
	let previousLength = 0;
	let people = [];

	while (peopleToFollow.length < maxFollow || (window.innerHeight + window.scrollY) < document.body.scrollHeight) {
		window.scrollTo(0,document.body.scrollHeight);
		people = document.getElementsByClassName("ProfileCard");
		previousLength = people.length

			for (var i = previousLength; i < people.length; i++) {
			let card = Object(__WEBPACK_IMPORTED_MODULE_0__createCard__["a" /* default */])(this.people[i]);

			if (card.checkForFollowed) {
				continue;
			} else {
				let score = __WEBPACK_IMPORTED_MODULE_1__scoreCard__["a" /* default */];
				if (score >= 30) {
					peopleToFollow.push(card);
				}
			}
		}
	}

	if (peopleToFollow.length !== 0) {
		resolve(peopleToFollow);
	} else {
		reject('No one was added to the array');
	}
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

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


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

/* harmony default export */ __webpack_exports__["a"] = (followPeople);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE5MGVhMzlmN2IyMTE4NTkwOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3Nlc3NNYXhGb2xsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhdGhlclBlb3BsZVRvRm9sbG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbGxvd1Blb3BsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRTs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMkY7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLG1CQUFtQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3BDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQy9CQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7O0FBRUE7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYTkwZWEzOWY3YjIxMTg1OTA5NiIsImZ1bmN0aW9uIGNyZWF0ZUNhcmQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiBnZXRJZChET01DYXJkKSxcclxuXHRcdGVsZTogRE9NQ2FyZCxcclxuXHRcdGhhc0Jhbm5lcjogY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCksXHJcblx0XHRoYXNBdmF0YXI6IGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpLFxyXG5cdFx0aGFzQmlvOiBjaGVja0ZvckJpbyhET01DYXJkKSxcclxuXHRcdGlzRm9sbG93ZWQ6IGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCksXHJcblx0XHRiaW86IGdldEJpbyhET01DYXJkKSxcclxuXHRcdGRvQ2xpY2s6IGRvQ2xpY2tcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLmF0dHJpYnV0ZXNbXCJkYXRhLXVzZXItaWRcIl0udmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQmFubmVyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmdcIik7XHJcblx0cmV0dXJuIGVsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckF2YXRhcihET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWF2YXRhckltYWdlXCIpO1xyXG5cdHJldHVybiAhZWxlLmF0dHJpYnV0ZXMuc3JjLnZhbHVlLmluY2x1ZGVzKFwiZGVmYXVsdF9wcm9maWxlX2ltYWdlc1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0bGV0IHRleHQgPSBlbGUuaW5uZXJUZXh0O1xyXG5cdHJldHVybiB0ZXh0ICE9PSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCaW8oRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iaW9cIik7XHJcblx0cmV0dXJuIGVsZS5pbm5lclRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yRm9sbG93ZWQoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcclxuXHRyZXR1cm4gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZG9DbGljaygpe1xyXG5cdGxldCBidG4gPSB0aGlzLmVsZS5xdWVyeVNlbGVjdG9yKFwiLmZvbGxvdy10ZXh0XCIpO1xyXG5cdGJ0bi5jbGljaygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tICcuL2Fzc2Vzc01heEZvbGxvdyc7XHJcbmltcG9ydCBnYXRoZXJQZW9wbGVUb0ZvbGxvdyBmcm9tICcuL2dhdGhlclBlb3BsZVRvRm9sbG93JztcclxuaW1wb3J0IGZvbGxvd1Blb3BsZSBmcm9tICcuL2ZvbGxvd1Blb3BsZSc7XHJcblxyXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9ICAoZnVuY3Rpb24oKXtcclxuXHRhbGVydChcIkJlZ2luXCIpO1xyXG5cdGxldCBteUZvbGxvd2luZyA9IDQ5OTc7XHJcblx0bGV0IG15Rm9sbG93ZXJzID0gNjIzODtcclxuXHRsZXQgbWF4Rm9sbG93ID0gMTAgLy9hc3Nlc3NNYXhGb2xsb3cobXlGb2xsb3dpbmcsIG15Rm9sbG93ZXJzKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9sbG93OiAoKSA9PiB7XHJcblx0XHRcdGdhdGhlclBlb3BsZVRvRm9sbG93KG1heEZvbGxvdylcclxuXHRcdFx0XHQudGhlbihmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpKVxyXG5cdFx0fVxyXG5cdH1cclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XHJcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xyXG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XHJcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcclxuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XHJcblxyXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcclxuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcclxuXHR9XHJcblxyXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcclxuXHJcblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdGVDYXJkICBmcm9tICcuL2NyZWF0ZUNhcmQnO1xyXG5pbXBvcnQgc2NvcmVDYXJkICBmcm9tICcuL3Njb3JlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJQZW9wbGVUb0ZvbGxvdyhtYXhGb2xsb3cpIHtcclxuXHRhbGVydChcIkhlbGxvIDspIFwiKTtcblx0Y29uc3QgbWF4Rm9sbG93ID0gbWF4Rm9sbG93O1xuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBbXTtcblx0bGV0IHByZXZpb3VzTGVuZ3RoID0gMDtcblx0bGV0IHBlb3BsZSA9IFtdO1xuXG5cdHdoaWxlIChwZW9wbGVUb0ZvbGxvdy5sZW5ndGggPCBtYXhGb2xsb3cgfHwgKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5zY3JvbGxZKSA8IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuXHRcdHBlb3BsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJQcm9maWxlQ2FyZFwiKTtcblx0XHRwcmV2aW91c0xlbmd0aCA9IHBlb3BsZS5sZW5ndGhcblxuXHRcdFx0Zm9yICh2YXIgaSA9IHByZXZpb3VzTGVuZ3RoOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2FyZCA9IGNyZWF0ZUNhcmQodGhpcy5wZW9wbGVbaV0pO1xuXG5cdFx0XHRpZiAoY2FyZC5jaGVja0ZvckZvbGxvd2VkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHNjb3JlID0gc2NvcmVDYXJkO1xuXHRcdFx0XHRpZiAoc2NvcmUgPj0gMzApIHtcblx0XHRcdFx0XHRwZW9wbGVUb0ZvbGxvdy5wdXNoKGNhcmQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHBlb3BsZVRvRm9sbG93Lmxlbmd0aCAhPT0gMCkge1xuXHRcdHJlc29sdmUocGVvcGxlVG9Gb2xsb3cpO1xuXHR9IGVsc2Uge1xuXHRcdHJlamVjdCgnTm8gb25lIHdhcyBhZGRlZCB0byB0aGUgYXJyYXknKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJQZW9wbGVUb0ZvbGxvdztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhdGhlclBlb3BsZVRvRm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XHJcbiAgbGV0IHNjb3JlID0gMDtcclxuICBcclxuICAvLyBGaWx0ZXIgZm9yIGJpb3MgYW5kIHNlYXJjaCBhZ2FpbnN0IGtleXdvcmRzXHJcbiAgLy8gaWYgKGNhcmQuaGFzQmlvKSB7XHJcbiAgLy8gICBsZXQga2V5d29yZHMgPSBUd2l0dGVyTWluaW9uLndvcmRMaXN0LnNwbGl0KFwiLCBcIik7XHJcbiAgLy8gICBzY29yZSArPSAxMDtcclxuICAvLyAgIC8vIHNjYW4gYmlvIGZvciBrZXl3b3Jkc1xyXG4gIC8vICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXl3b3Jkcy5sZW5ndGg7IGorKykge1xyXG4gIC8vICAgICBpZiAoYmlvVGV4dC5pbmNsdWRlcyhrZXl3b3Jkc1tqXSkpIHtcclxuICAvLyAgICAgICBzY29yZSArPSAzO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBpZiAoY2FyZC5jaGVja0ZvckJpbykge1xyXG4gICAgbGV0IGtleXdvcmRzID0gVHdpdHRlck1pbmlvbi53b3JkTGlzdC5zcGxpdChcIiwgXCIpO1xyXG4gICAgc2NvcmUgKz0gMTA7XHJcbiAgfVxyXG5cclxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXHJcbiAgaWYgKGNhcmQuY2hlY2tGb3JCYW5uZXIpIHtcclxuICAgIHNjb3JlICs9IDEwO1xyXG4gIH1cclxuICAvLyBGaWx0ZXIgZm9yIHByb2ZpbGUgcGljdHVyZVxyXG4gIGlmIChjYXJkLmNoZWNrRm9yQXZhdGFyKSB7XHJcbiAgICBzY29yZSArPSAxMDtcclxuICB9XHJcbiAgcmV0dXJuIHNjb3JlO1xyXG59XG5cclxuZXhwb3J0IGRlZmF1bHQgc2NvcmVDYXJkO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY29yZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dQZW9wbGUocGVvcGxlVG9Gb2xsb3cpe1xyXG5cclxuXHRsZXQgcGVvcGxlVG9Gb2xsb3cgPSBwZW9wbGVUb0ZvbGxvdztcclxuXHRsZXQgcGVvcGxlRm9sbG93ZWQgPSAwO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBlb3BsZVRvRm9sbG93Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRsZXQgY2FyZCA9IHBlb3BsZVRvRm9sbG93W2ldO1xyXG5cclxuXHRcdGlmIChwZW9wbGVGb2xsb3dlZCA+IDUwMCkge1xyXG5cdFx0XHRhbGVydChgWW91IGZvbGxvd2VkICR7cGVvcGxlRm9sbG93ZWR9IHBlb3BsZSFgKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBjbGljayBidXR0b24gZXZlcnkgMTUgc2Vjb25kc1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2FyZC5kb0NsaWNrKCk7XHJcblx0XHRcdH0sIDE1MDAwKTtcclxuXHRcdFx0cGVvcGxlRm9sbG93ZWQrKztcclxuXHRcdH1cclxuXHR9XHJcblx0YWxlcnQoXCJQcm9ncmFtIGNvbXBsZXRlZC4gWW91IGhhdmUgYmVlbiBzZXJ2aWNlZCA6KVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93UGVvcGxlO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb2xsb3dQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==