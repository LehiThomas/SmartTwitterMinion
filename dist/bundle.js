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
  isBannerRequired: false,
  isAvatarRequired: false,
  isBioRequired: false,
  numberKeywordsRequired: 0,
  keywords: "",
  scrollInterval: {
    min: 2000,
    max: 7000
  },
  clickInterval: {
    min: 2000,
    max: 10000
  }
};

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







window.TwitterMinion = (function() {
  let _this = {
    follow: () => {
      let maxFollow = Object(__WEBPACK_IMPORTED_MODULE_1__assessMaxFollow__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers);
      maxFollow = prompt(
        `The max that can be followed is ${maxFollow}. You may set a different amount`,
        maxFollow
      );

      Object(__WEBPACK_IMPORTED_MODULE_2__gatherCards__["a" /* default */])(maxFollow, __WEBPACK_IMPORTED_MODULE_5__filters_followFilter__["a" /* default */])
        .then(cards => Object(__WEBPACK_IMPORTED_MODULE_3__doClicker__["a" /* default */])(cards))
        .then(() => alert("All done!"));
    },
    setup: {
      promptAll: () => {
        _this.setup.promptMyFollowing();
        _this.setup.promptMyFollowers();
        // _this.setup.promptPassingScore();
        _this.setup.promptBannerQuestion();
        _this.setup.promptAvatarQuestion();
        _this.setup.promptBioQuestion();
        _this.setup.promptKeywords();
        _this.setup.promptKeywordNumberQuestion();
      },
      promptMyFollowing: () => {
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing = prompt(
          "How many followers do you have?",
          __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowing
        );
      },
      promptMyFollowers: () => {
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers = prompt(
          "How many people are you following?",
          __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].myFollowers
        );
      },
      // promptPassingScore: () => {
      // 	config.passingScore = prompt("Minimum Passing Score", config.passingScore);
      // },
      promptBannerQuestion: () => {
        let notAnswered = true;
        while (notAnswered) {
          let required = prompt("Is the Banner image required? (yes/no)");
          if (required == "yes") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBannerRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBannerRequired = false;
            notAnswered = false;
          }
        }
      },
      promptAvatarQuestion: () => {
        let notAnswered = true;
        while (notAnswered) {
          let required = prompt("Is the Profile image required? (yes/no)");
          if (required == "yes") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isAvatarRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isAvatarRequired = false;
            notAnswered = false;
          }
        }
      },
      promptBioQuestion: () => {
        let notAnswered = true;
        while (notAnswered) {
          let required = prompt("Is an 'About Me' required? (yes/no)");
          if (required == "yes") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBioRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBioRequired = false;
            notAnswered = false;
          }
        }
      },
      promptKeywords: () => {
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords = prompt(
          "What Keywords would you like to search for? (comma separated list)",
          __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords
        );
      },
      promptKeywordNumberQuestion: () => {
        let keywordNumber = 0;
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].numberKeywordsRequired = prompt(
          "How many keywords are required to pass?",
          __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].numberKeywordsRequired
        );
      }
    },
    test: __WEBPACK_IMPORTED_MODULE_4__test__["a" /* default */]
  };
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

function loopGather(
  maxFollow,
  cardCheck,
  maxPeople,
  resolve,
  reject,
  index = 0,
  cards = []
) {
  window.scrollTo(0, document.body.scrollHeight);

  setTimeout(() => {
    let scrolledPeople = document.getElementsByClassName("ProfileCard");

    if (scrolledPeople.length >= maxPeople) resolve(cards);

    for (; index < scrolledPeople.length && cards.length < maxFollow; index++) {
      let card = Object(__WEBPACK_IMPORTED_MODULE_1__createCard__["a" /* default */])(scrolledPeople[index]);
      if (cardCheck(card)) cards.push(card);
      if (cards.length % (maxFollow / 10) === 0) {
        console.error(cards.length + " people collected out of " + maxFollow);
      }
    }
    cards.length >= maxFollow
      ? resolve(cards)
      : loopGather(
          maxFollow,
          cardCheck,
          maxPeople,
          resolve,
          reject,
          index,
          cards
        );
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
    if (Object(__WEBPACK_IMPORTED_MODULE_1__scoreCard__["a" /* default */])(card)) {
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
  let cardPasses = true;
  let keywordsFound = 0;

  // Filter for background images
  // is background required?
  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBannerRequired) {
    if (!card.hasBanner) {
      cardPasses = false;
      return cardPasses;
    }
  }

  // Filter for profile picture
  // is profile required?
  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isAvatarRequired) {
    if (!card.hasAvatar) {
      cardPasses = false;
      return cardPasses;
    }
  }

  if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].isBioRequired) {
    if (!card.hasBio) {
      cardPasses = false;
      return cardPasses;
    }
    if (__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.length !== 0) {
      let keywords = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.toLowerCase().split(",");
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.toLowerCase().includes(keywords[j].trim())) {
          keywordsFound += 1;
          if (keywordsFound >= __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].numberKeywordsRequired) {
            continue;
          }
        }
      }
      if (keywordsFound < __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].numberKeywordsRequired) {
        cardPasses = false;
      }
    }
  }
  return cardPasses;
}

/* harmony default export */ __webpack_exports__["a"] = (scoreCard);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzk0OTcxMjVlZTI4OWUwNWUxYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdEdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEU7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFVBQVUsMkRBQTJEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7Ozs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBLDhCQUE4QixxRUFBbUI7QUFDakQsOEJBQThCLHFFQUFtQjtBQUNqRCwrQkFBK0Isc0VBQW9CO0FBQ25ELDhCQUE4QixxRUFBbUI7QUFDakQsK0JBQStCLHNFQUFvQjtBQUNuRDs7QUFFQSwrRDs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc5NDk3MTI1ZWUyODllMDVlMWFhIiwibGV0IGNvbmZpZyA9IHtcclxuICBteUZvbGxvd2luZzogMCxcclxuICBteUZvbGxvd2VyczogMCxcclxuICBwYXNzaW5nU2NvcmU6IDAsXHJcbiAgaXNCYW5uZXJSZXF1aXJlZDogZmFsc2UsXHJcbiAgaXNBdmF0YXJSZXF1aXJlZDogZmFsc2UsXHJcbiAgaXNCaW9SZXF1aXJlZDogZmFsc2UsXHJcbiAgbnVtYmVyS2V5d29yZHNSZXF1aXJlZDogMCxcclxuICBrZXl3b3JkczogXCJcIixcclxuICBzY3JvbGxJbnRlcnZhbDoge1xyXG4gICAgbWluOiAyMDAwLFxyXG4gICAgbWF4OiA3MDAwXHJcbiAgfSxcclxuICBjbGlja0ludGVydmFsOiB7XHJcbiAgICBtaW46IDIwMDAsXHJcbiAgICBtYXg6IDEwMDAwXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCl7XHJcblx0bWluID0gTWF0aC5jZWlsKG1pbik7XHJcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJhbmRvbVRpbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmFuZG9tVGltZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXNzZXNzTWF4Rm9sbG93IGZyb20gXCIuL2Fzc2Vzc01heEZvbGxvd1wiO1xyXG5pbXBvcnQgZ2F0aGVyQ2FyZHMgZnJvbSBcIi4vZ2F0aGVyQ2FyZHNcIjtcclxuaW1wb3J0IGRvQ2xpY2tlciBmcm9tIFwiLi9kb0NsaWNrZXJcIjtcclxuaW1wb3J0IHRlc3QgZnJvbSBcIi4vdGVzdFwiO1xyXG5pbXBvcnQgZm9sbG93RmlsdGVyIGZyb20gXCIuL2ZpbHRlcnMvZm9sbG93RmlsdGVyXCI7XHJcblxyXG53aW5kb3cuVHdpdHRlck1pbmlvbiA9IChmdW5jdGlvbigpIHtcclxuICBsZXQgX3RoaXMgPSB7XHJcbiAgICBmb2xsb3c6ICgpID0+IHtcclxuICAgICAgbGV0IG1heEZvbGxvdyA9IGFzc2Vzc01heEZvbGxvdyhjb25maWcubXlGb2xsb3dpbmcsIGNvbmZpZy5teUZvbGxvd2Vycyk7XHJcbiAgICAgIG1heEZvbGxvdyA9IHByb21wdChcclxuICAgICAgICBgVGhlIG1heCB0aGF0IGNhbiBiZSBmb2xsb3dlZCBpcyAke21heEZvbGxvd30uIFlvdSBtYXkgc2V0IGEgZGlmZmVyZW50IGFtb3VudGAsXHJcbiAgICAgICAgbWF4Rm9sbG93XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBnYXRoZXJDYXJkcyhtYXhGb2xsb3csIGZvbGxvd0ZpbHRlcilcclxuICAgICAgICAudGhlbihjYXJkcyA9PiBkb0NsaWNrZXIoY2FyZHMpKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGFsZXJ0KFwiQWxsIGRvbmUhXCIpKTtcclxuICAgIH0sXHJcbiAgICBzZXR1cDoge1xyXG4gICAgICBwcm9tcHRBbGw6ICgpID0+IHtcclxuICAgICAgICBfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2luZygpO1xyXG4gICAgICAgIF90aGlzLnNldHVwLnByb21wdE15Rm9sbG93ZXJzKCk7XHJcbiAgICAgICAgLy8gX3RoaXMuc2V0dXAucHJvbXB0UGFzc2luZ1Njb3JlKCk7XHJcbiAgICAgICAgX3RoaXMuc2V0dXAucHJvbXB0QmFubmVyUXVlc3Rpb24oKTtcclxuICAgICAgICBfdGhpcy5zZXR1cC5wcm9tcHRBdmF0YXJRdWVzdGlvbigpO1xyXG4gICAgICAgIF90aGlzLnNldHVwLnByb21wdEJpb1F1ZXN0aW9uKCk7XHJcbiAgICAgICAgX3RoaXMuc2V0dXAucHJvbXB0S2V5d29yZHMoKTtcclxuICAgICAgICBfdGhpcy5zZXR1cC5wcm9tcHRLZXl3b3JkTnVtYmVyUXVlc3Rpb24oKTtcclxuICAgICAgfSxcclxuICAgICAgcHJvbXB0TXlGb2xsb3dpbmc6ICgpID0+IHtcclxuICAgICAgICBjb25maWcubXlGb2xsb3dpbmcgPSBwcm9tcHQoXHJcbiAgICAgICAgICBcIkhvdyBtYW55IGZvbGxvd2VycyBkbyB5b3UgaGF2ZT9cIixcclxuICAgICAgICAgIGNvbmZpZy5teUZvbGxvd2luZ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21wdE15Rm9sbG93ZXJzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uZmlnLm15Rm9sbG93ZXJzID0gcHJvbXB0KFxyXG4gICAgICAgICAgXCJIb3cgbWFueSBwZW9wbGUgYXJlIHlvdSBmb2xsb3dpbmc/XCIsXHJcbiAgICAgICAgICBjb25maWcubXlGb2xsb3dlcnNcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBwcm9tcHRQYXNzaW5nU2NvcmU6ICgpID0+IHtcclxuICAgICAgLy8gXHRjb25maWcucGFzc2luZ1Njb3JlID0gcHJvbXB0KFwiTWluaW11bSBQYXNzaW5nIFNjb3JlXCIsIGNvbmZpZy5wYXNzaW5nU2NvcmUpO1xyXG4gICAgICAvLyB9LFxyXG4gICAgICBwcm9tcHRCYW5uZXJRdWVzdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBub3RBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgd2hpbGUgKG5vdEFuc3dlcmVkKSB7XHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWQgPSBwcm9tcHQoXCJJcyB0aGUgQmFubmVyIGltYWdlIHJlcXVpcmVkPyAoeWVzL25vKVwiKTtcclxuICAgICAgICAgIGlmIChyZXF1aXJlZCA9PSBcInllc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pc0Jhbm5lclJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbm90QW5zd2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWlyZWQgPT0gXCJub1wiKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5pc0Jhbm5lclJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vdEFuc3dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwcm9tcHRBdmF0YXJRdWVzdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBub3RBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgd2hpbGUgKG5vdEFuc3dlcmVkKSB7XHJcbiAgICAgICAgICBsZXQgcmVxdWlyZWQgPSBwcm9tcHQoXCJJcyB0aGUgUHJvZmlsZSBpbWFnZSByZXF1aXJlZD8gKHllcy9ubylcIik7XHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgPT0gXCJ5ZXNcIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNBdmF0YXJSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vdEFuc3dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVpcmVkID09IFwibm9cIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNBdmF0YXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub3RBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvbXB0QmlvUXVlc3Rpb246ICgpID0+IHtcclxuICAgICAgICBsZXQgbm90QW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChub3RBbnN3ZXJlZCkge1xyXG4gICAgICAgICAgbGV0IHJlcXVpcmVkID0gcHJvbXB0KFwiSXMgYW4gJ0Fib3V0IE1lJyByZXF1aXJlZD8gKHllcy9ubylcIik7XHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgPT0gXCJ5ZXNcIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNCaW9SZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vdEFuc3dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVpcmVkID09IFwibm9cIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNCaW9SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub3RBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvbXB0S2V5d29yZHM6ICgpID0+IHtcclxuICAgICAgICBjb25maWcua2V5d29yZHMgPSBwcm9tcHQoXHJcbiAgICAgICAgICBcIldoYXQgS2V5d29yZHMgd291bGQgeW91IGxpa2UgdG8gc2VhcmNoIGZvcj8gKGNvbW1hIHNlcGFyYXRlZCBsaXN0KVwiLFxyXG4gICAgICAgICAgY29uZmlnLmtleXdvcmRzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgcHJvbXB0S2V5d29yZE51bWJlclF1ZXN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGtleXdvcmROdW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbmZpZy5udW1iZXJLZXl3b3Jkc1JlcXVpcmVkID0gcHJvbXB0KFxyXG4gICAgICAgICAgXCJIb3cgbWFueSBrZXl3b3JkcyBhcmUgcmVxdWlyZWQgdG8gcGFzcz9cIixcclxuICAgICAgICAgIGNvbmZpZy5udW1iZXJLZXl3b3Jkc1JlcXVpcmVkXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlc3Q6IHRlc3RcclxuICB9O1xyXG4gIHJldHVybiBfdGhpcztcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gYXNzZXNzTWF4Rm9sbG93KGZvbGxvd2luZ0NvdW50LCBmb2xsb3dlcnNDb3VudCl7XHJcblx0bGV0IGJhc2VGb2xsb3dNYXggPSA1MDAwO1xyXG5cdGxldCBkYWlseUZvbGxvd01heCA9IDEwMDA7XHJcblx0bGV0IGZvbGxvd2Vyc0JyZWFrID0gMTgwMDtcclxuXHRsZXQgZm9sbG93SW5jcmVhc2UgPSAwLjE7XHJcblxyXG5cdGlmIChmb2xsb3dlcnNDb3VudCA+IGZvbGxvd2Vyc0JyZWFrKXtcclxuXHRcdGJhc2VGb2xsb3dNYXggPSBiYXNlRm9sbG93TWF4ICsgZm9sbG93ZXJzQ291bnQgKiBmb2xsb3dJbmNyZWFzZTtcclxuXHR9XHJcblxyXG5cdGxldCBwZXJzb25hbE1heEZvbGxvdyA9IGJhc2VGb2xsb3dNYXggLSBmb2xsb3dpbmdDb3VudDtcclxuXHJcblx0cmV0dXJuIHBlcnNvbmFsTWF4Rm9sbG93ID4gZGFpbHlGb2xsb3dNYXggPyBkYWlseUZvbGxvd01heCA6IHBlcnNvbmFsTWF4Rm9sbG93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3Nlc3NNYXhGb2xsb3c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXNzTWF4Rm9sbG93LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCBjcmVhdGVDYXJkIGZyb20gXCIuL2NyZWF0ZUNhcmRcIjtcclxuaW1wb3J0IGdldE1heFBlb3BsZSBmcm9tIFwiLi9nZXRNYXhQZW9wbGVcIjtcclxuaW1wb3J0IHJhbmRvbVRpbWUgZnJvbSBcIi4vcmFuZG9tVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQ2FyZHMobWF4Rm9sbG93LCBjYXJkQ2hlY2spIHtcclxuICBsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XHJcbiAgY29uc29sZS5lcnJvcihcIkJlZ2luLi4uXCIpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsb29wR2F0aGVyKG1heEZvbGxvdywgY2FyZENoZWNrLCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BHYXRoZXIoXHJcbiAgbWF4Rm9sbG93LFxyXG4gIGNhcmRDaGVjayxcclxuICBtYXhQZW9wbGUsXHJcbiAgcmVzb2x2ZSxcclxuICByZWplY3QsXHJcbiAgaW5kZXggPSAwLFxyXG4gIGNhcmRzID0gW11cclxuKSB7XHJcbiAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsZWRQZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiUHJvZmlsZUNhcmRcIik7XHJcblxyXG4gICAgaWYgKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUpIHJlc29sdmUoY2FyZHMpO1xyXG5cclxuICAgIGZvciAoOyBpbmRleCA8IHNjcm9sbGVkUGVvcGxlLmxlbmd0aCAmJiBjYXJkcy5sZW5ndGggPCBtYXhGb2xsb3c7IGluZGV4KyspIHtcclxuICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKHNjcm9sbGVkUGVvcGxlW2luZGV4XSk7XHJcbiAgICAgIGlmIChjYXJkQ2hlY2soY2FyZCkpIGNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICAgIGlmIChjYXJkcy5sZW5ndGggJSAobWF4Rm9sbG93IC8gMTApID09PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihjYXJkcy5sZW5ndGggKyBcIiBwZW9wbGUgY29sbGVjdGVkIG91dCBvZiBcIiArIG1heEZvbGxvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhcmRzLmxlbmd0aCA+PSBtYXhGb2xsb3dcclxuICAgICAgPyByZXNvbHZlKGNhcmRzKVxyXG4gICAgICA6IGxvb3BHYXRoZXIoXHJcbiAgICAgICAgICBtYXhGb2xsb3csXHJcbiAgICAgICAgICBjYXJkQ2hlY2ssXHJcbiAgICAgICAgICBtYXhQZW9wbGUsXHJcbiAgICAgICAgICByZXNvbHZlLFxyXG4gICAgICAgICAgcmVqZWN0LFxyXG4gICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICBjYXJkc1xyXG4gICAgICAgICk7XHJcbiAgfSwgcmFuZG9tVGltZShjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWluLCBjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhdGhlckNhcmRzO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYXRoZXJDYXJkcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBjcmVhdGVDYXJkKERPTUNhcmQpe1xyXG5cdHJldHVybiB7XHJcblx0XHRpZDogZ2V0SWQoRE9NQ2FyZCksXHJcblx0XHRlbGU6IERPTUNhcmQsXHJcblx0XHRoYXNCYW5uZXI6IGNoZWNrRm9yQmFubmVyKERPTUNhcmQpLFxyXG5cdFx0aGFzQXZhdGFyOiBjaGVja0ZvckF2YXRhcihET01DYXJkKSxcclxuXHRcdGhhc0JpbzogY2hlY2tGb3JCaW8oRE9NQ2FyZCksXHJcblx0XHRpc0ZvbGxvd2VkOiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpLFxyXG5cdFx0Zm9sbG93c1lvdTogY2hlY2tGb2xsb3dzWW91KERPTUNhcmQpLFxyXG5cdFx0aXNQcm90ZWN0ZWQ6IGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpLFxyXG5cdFx0YmlvOiBnZXRCaW8oRE9NQ2FyZCksXHJcblx0XHRkb0NsaWNrOiBkb0NsaWNrXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJZChET01DYXJkKXtcclxuXHRyZXR1cm4gRE9NQ2FyZC5hdHRyaWJ1dGVzW1wiZGF0YS11c2VyLWlkXCJdLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckJhbm5lcihET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJnXCIpO1xyXG5cdHJldHVybiBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlICE9PSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1hdmF0YXJJbWFnZVwiKTtcclxuXHRyZXR1cm4gIWVsZS5hdHRyaWJ1dGVzLnNyYy52YWx1ZS5pbmNsdWRlcyhcImRlZmF1bHRfcHJvZmlsZV9pbWFnZXNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQmlvKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmlvXCIpO1xyXG5cdGxldCB0ZXh0ID0gZWxlLmlubmVyVGV4dDtcclxuXHRyZXR1cm4gdGV4dCAhPT0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmlvKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYmlvXCIpO1xyXG5cdHJldHVybiBlbGUuaW5uZXJUZXh0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckZvbGxvd2VkKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1hY3Rpb25zXCIpO1xyXG5cdHJldHVybiBlbGUgIT09IG51bGwgPyBlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9sbG93aW5nXCIpIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9sbG93c1lvdShET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLkZvbGxvd1N0YXR1c1wiKTtcclxuXHRyZXR1cm4gZWxlID8gZWxlLmlubmVyVGV4dCA9PT0gXCJGb2xsb3dzIHlvdVwiIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUHJvdGVjdGVkKERPTUNhcmQpe1xyXG5cdHJldHVybiBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm90ZWN0ZWQ9dHJ1ZV1cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvQ2xpY2soKXtcclxuXHRsZXQgYnRuID0gdGhpcy5lbGUucXVlcnlTZWxlY3RvcihcIi5mb2xsb3ctdGV4dFwiKTtcclxuXHRidG4uY2xpY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FyZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3JlYXRlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBnZXRNYXhQZW9wbGUoKXtcclxuXHRsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHRsZXQgbGlzdFR5cGUgPSBwYXRoLmluY2x1ZGVzKFwiZm9sbG93ZXJzXCIpID8gXCJmb2xsb3dlcnNcIiA6IHBhdGguaW5jbHVkZXMoXCJmb2xsb3dpbmdcIikgPyBcImZvbGxvd2luZ1wiIDogbnVsbDtcclxuXHRsZXQgbWF4UGVvcGxlRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtkYXRhLW5hdj1cIiR7bGlzdFR5cGV9XCJdIC5Qcm9maWxlTmF2LXZhbHVlYCk7XHJcblx0bGV0IG1heFBlb3BsZSA9IE51bWJlcihtYXhQZW9wbGVFbGUuYXR0cmlidXRlc1tcImRhdGEtY291bnRcIl0udmFsdWUpO1xyXG5cdHJldHVybiBtYXhQZW9wbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldE1heFBlb3BsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nZXRNYXhQZW9wbGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCByYW5kb21UaW1lIGZyb20gJy4vcmFuZG9tVGltZSc7XHJcblxyXG5mdW5jdGlvbiBkb0NsaWNrZXIoY2FyZHMpe1xyXG5cdGNvbnNvbGUuZXJyb3IoXCJDb2xsZWN0aW5nIGZpbmlzaGVkLiBQcm9jZWRpbmcgdG8gY2xpY2tpbmcgcGhhc2UuLi5cIik7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QsIGluZGV4ID0gMCl7XHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRpZihpbmRleCA+PSBjYXJkcy5sZW5ndGgpIHJldHVybiByZXNvbHZlKCk7XHJcblx0XHRsZXQgY2FyZCA9IGNhcmRzW2luZGV4XTtcclxuXHRcdGNhcmQuZG9DbGljaygpO1xyXG5cdFx0aWYoaW5kZXggJSAoY2FyZHMubGVuZ3RoLzEwKSA9PT0gMCl7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoaW5kZXggKyBcIiBwZW9wbGUgZm9sbG93ZWQgb3V0IG9mIFwiICsgY2FyZHMubGVuZ3RoKTtcclxuXHRcdH1cclxuXHRcdGluZGV4Kys7XHJcblx0XHRsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCwgaW5kZXgpO1xyXG5cdH0sIHJhbmRvbVRpbWUoY29uZmlnLmNsaWNrSW50ZXJ2YWwubWluLCBjb25maWcuY2xpY2tJbnRlcnZhbC5tYXgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9DbGlja2VyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kb0NsaWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0KCkge1xyXG5cdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93aW5nICR7Y29uZmlnLm15Rm9sbG93aW5nfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYG15Rm9sbG93ZXJzICR7Y29uZmlnLm15Rm9sbG93ZXJzfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYHBhc3NpbmdTY29yZSAke2NvbmZpZy5wYXNzaW5nU2NvcmV9YCk7XHJcblx0Y29uc29sZS5lcnJvcihgYmFubmVyU2NvcmUgJHtjb25maWcuYmFubmVyU2NvcmV9YCk7XHJcblx0Y29uc29sZS5lcnJvcihgcHJvZmlsZVNjb3JlICR7Y29uZmlnLnByb2ZpbGVTY29yZX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgc2NvcmVDYXJkIGZyb20gXCIuLi9zY29yZUNhcmRcIjtcclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0ZpbHRlcihjYXJkKSB7XHJcbiAgLy8gU2NvcmUgdGhlIGNhcmQgaGVyZVxyXG4gIGlmIChjYXJkLmlzRm9sbG93ZWQgfHwgY2FyZC5pc1Byb3RlY3RlZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoc2NvcmVDYXJkKGNhcmQpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9sbG93RmlsdGVyO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZnVuY3Rpb24gc2NvcmVDYXJkKGNhcmQpIHtcclxuICBsZXQgY2FyZFBhc3NlcyA9IHRydWU7XHJcbiAgbGV0IGtleXdvcmRzRm91bmQgPSAwO1xyXG5cclxuICAvLyBGaWx0ZXIgZm9yIGJhY2tncm91bmQgaW1hZ2VzXHJcbiAgLy8gaXMgYmFja2dyb3VuZCByZXF1aXJlZD9cclxuICBpZiAoY29uZmlnLmlzQmFubmVyUmVxdWlyZWQpIHtcclxuICAgIGlmICghY2FyZC5oYXNCYW5uZXIpIHtcclxuICAgICAgY2FyZFBhc3NlcyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gY2FyZFBhc3NlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZpbHRlciBmb3IgcHJvZmlsZSBwaWN0dXJlXHJcbiAgLy8gaXMgcHJvZmlsZSByZXF1aXJlZD9cclxuICBpZiAoY29uZmlnLmlzQXZhdGFyUmVxdWlyZWQpIHtcclxuICAgIGlmICghY2FyZC5oYXNBdmF0YXIpIHtcclxuICAgICAgY2FyZFBhc3NlcyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gY2FyZFBhc3NlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChjb25maWcuaXNCaW9SZXF1aXJlZCkge1xyXG4gICAgaWYgKCFjYXJkLmhhc0Jpbykge1xyXG4gICAgICBjYXJkUGFzc2VzID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBjYXJkUGFzc2VzO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5rZXl3b3Jkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbGV0IGtleXdvcmRzID0gY29uZmlnLmtleXdvcmRzLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAvLyBzY2FuIGJpbyBmb3Iga2V5d29yZHNcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXl3b3Jkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChjYXJkLmJpby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmRzW2pdLnRyaW0oKSkpIHtcclxuICAgICAgICAgIGtleXdvcmRzRm91bmQgKz0gMTtcclxuICAgICAgICAgIGlmIChrZXl3b3Jkc0ZvdW5kID49IGNvbmZpZy5udW1iZXJLZXl3b3Jkc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoa2V5d29yZHNGb3VuZCA8IGNvbmZpZy5udW1iZXJLZXl3b3Jkc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgY2FyZFBhc3NlcyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjYXJkUGFzc2VzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY29yZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njb3JlQ2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==