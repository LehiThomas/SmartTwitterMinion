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

function loopGather(maxFollow, cardCheck, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
      let card = Object(__WEBPACK_IMPORTED_MODULE_1__createCard__["a" /* default */])(scrolledPeople[index]);
      if(cardCheck(card)) cards.push(card);
			if(cards.length % (maxFollow/10) === 0){
				console.error(cards.length + " people collected out of " + maxFollow);
			}
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
  var keywordsFound = 0;

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
      let keywords = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].keywords.split(",");
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY1M2E3YzMxMjk3NThlNzQ0NmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tVGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2F0aGVyQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NyZWF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dldE1heFBlb3BsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9DbGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXJzL2ZvbGxvd0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NvcmVDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUU7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FDdEdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEU7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTywyREFBMkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBOzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkU7QUFDQTtBQUNBOztBQUVBLHVFOzs7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOzs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQSw4QkFBOEIscUVBQW1CO0FBQ2pELDhCQUE4QixxRUFBbUI7QUFDakQsK0JBQStCLHNFQUFvQjtBQUNuRCw4QkFBOEIscUVBQW1CO0FBQ2pELCtCQUErQixzRUFBb0I7QUFDbkQ7O0FBRUEsK0Q7Ozs7Ozs7OztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjUzYTdjMzEyOTc1OGU3NDQ2ZSIsImxldCBjb25maWcgPSB7XHJcbiAgbXlGb2xsb3dpbmc6IDAsXHJcbiAgbXlGb2xsb3dlcnM6IDAsXHJcbiAgcGFzc2luZ1Njb3JlOiAwLFxyXG4gIGlzQmFubmVyUmVxdWlyZWQ6IGZhbHNlLFxyXG4gIGlzQXZhdGFyUmVxdWlyZWQ6IGZhbHNlLFxyXG4gIGlzQmlvUmVxdWlyZWQ6IGZhbHNlLFxyXG4gIG51bWJlcktleXdvcmRzUmVxdWlyZWQ6IDAsXHJcbiAga2V5d29yZHM6IFwiXCIsXHJcbiAgc2Nyb2xsSW50ZXJ2YWw6IHtcclxuICAgIG1pbjogMjAwMCxcclxuICAgIG1heDogNzAwMFxyXG4gIH0sXHJcbiAgY2xpY2tJbnRlcnZhbDoge1xyXG4gICAgbWluOiAyMDAwLFxyXG4gICAgbWF4OiAxMDAwMFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpe1xyXG5cdG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYW5kb21UaW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JhbmRvbVRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IGFzc2Vzc01heEZvbGxvdyBmcm9tIFwiLi9hc3Nlc3NNYXhGb2xsb3dcIjtcclxuaW1wb3J0IGdhdGhlckNhcmRzIGZyb20gXCIuL2dhdGhlckNhcmRzXCI7XHJcbmltcG9ydCBkb0NsaWNrZXIgZnJvbSBcIi4vZG9DbGlja2VyXCI7XHJcbmltcG9ydCB0ZXN0IGZyb20gXCIuL3Rlc3RcIjtcclxuaW1wb3J0IGZvbGxvd0ZpbHRlciBmcm9tIFwiLi9maWx0ZXJzL2ZvbGxvd0ZpbHRlclwiO1xyXG5cclxud2luZG93LlR3aXR0ZXJNaW5pb24gPSAoZnVuY3Rpb24oKSB7XHJcbiAgbGV0IF90aGlzID0ge1xyXG4gICAgZm9sbG93OiAoKSA9PiB7XHJcbiAgICAgIGxldCBtYXhGb2xsb3cgPSBhc3Nlc3NNYXhGb2xsb3coY29uZmlnLm15Rm9sbG93aW5nLCBjb25maWcubXlGb2xsb3dlcnMpO1xyXG4gICAgICBtYXhGb2xsb3cgPSBwcm9tcHQoXHJcbiAgICAgICAgYFRoZSBtYXggdGhhdCBjYW4gYmUgZm9sbG93ZWQgaXMgJHttYXhGb2xsb3d9LiBZb3UgbWF5IHNldCBhIGRpZmZlcmVudCBhbW91bnRgLFxyXG4gICAgICAgIG1heEZvbGxvd1xyXG4gICAgICApO1xyXG5cclxuICAgICAgZ2F0aGVyQ2FyZHMobWF4Rm9sbG93LCBmb2xsb3dGaWx0ZXIpXHJcbiAgICAgICAgLnRoZW4oY2FyZHMgPT4gZG9DbGlja2VyKGNhcmRzKSlcclxuICAgICAgICAudGhlbigoKSA9PiBhbGVydChcIkFsbCBkb25lIVwiKSk7XHJcbiAgICB9LFxyXG4gICAgc2V0dXA6IHtcclxuICAgICAgcHJvbXB0QWxsOiAoKSA9PiB7XHJcbiAgICAgICAgX3RoaXMuc2V0dXAucHJvbXB0TXlGb2xsb3dpbmcoKTtcclxuICAgICAgICBfdGhpcy5zZXR1cC5wcm9tcHRNeUZvbGxvd2VycygpO1xyXG4gICAgICAgIC8vIF90aGlzLnNldHVwLnByb21wdFBhc3NpbmdTY29yZSgpO1xyXG4gICAgICAgIF90aGlzLnNldHVwLnByb21wdEJhbm5lclF1ZXN0aW9uKCk7XHJcbiAgICAgICAgX3RoaXMuc2V0dXAucHJvbXB0QXZhdGFyUXVlc3Rpb24oKTtcclxuICAgICAgICBfdGhpcy5zZXR1cC5wcm9tcHRCaW9RdWVzdGlvbigpO1xyXG4gICAgICAgIF90aGlzLnNldHVwLnByb21wdEtleXdvcmRzKCk7XHJcbiAgICAgICAgX3RoaXMuc2V0dXAucHJvbXB0S2V5d29yZE51bWJlclF1ZXN0aW9uKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21wdE15Rm9sbG93aW5nOiAoKSA9PiB7XHJcbiAgICAgICAgY29uZmlnLm15Rm9sbG93aW5nID0gcHJvbXB0KFxyXG4gICAgICAgICAgXCJIb3cgbWFueSBmb2xsb3dlcnMgZG8geW91IGhhdmU/XCIsXHJcbiAgICAgICAgICBjb25maWcubXlGb2xsb3dpbmdcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBwcm9tcHRNeUZvbGxvd2VyczogKCkgPT4ge1xyXG4gICAgICAgIGNvbmZpZy5teUZvbGxvd2VycyA9IHByb21wdChcclxuICAgICAgICAgIFwiSG93IG1hbnkgcGVvcGxlIGFyZSB5b3UgZm9sbG93aW5nP1wiLFxyXG4gICAgICAgICAgY29uZmlnLm15Rm9sbG93ZXJzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgLy8gcHJvbXB0UGFzc2luZ1Njb3JlOiAoKSA9PiB7XHJcbiAgICAgIC8vIFx0Y29uZmlnLnBhc3NpbmdTY29yZSA9IHByb21wdChcIk1pbmltdW0gUGFzc2luZyBTY29yZVwiLCBjb25maWcucGFzc2luZ1Njb3JlKTtcclxuICAgICAgLy8gfSxcclxuICAgICAgcHJvbXB0QmFubmVyUXVlc3Rpb246ICgpID0+IHtcclxuICAgICAgICBsZXQgbm90QW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChub3RBbnN3ZXJlZCkge1xyXG4gICAgICAgICAgbGV0IHJlcXVpcmVkID0gcHJvbXB0KFwiSXMgdGhlIEJhbm5lciBpbWFnZSByZXF1aXJlZD8gKHllcy9ubylcIik7XHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgPT0gXCJ5ZXNcIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNCYW5uZXJSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vdEFuc3dlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcXVpcmVkID09IFwibm9cIikge1xyXG4gICAgICAgICAgICBjb25maWcuaXNCYW5uZXJSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub3RBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvbXB0QXZhdGFyUXVlc3Rpb246ICgpID0+IHtcclxuICAgICAgICBsZXQgbm90QW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgIHdoaWxlIChub3RBbnN3ZXJlZCkge1xyXG4gICAgICAgICAgbGV0IHJlcXVpcmVkID0gcHJvbXB0KFwiSXMgdGhlIFByb2ZpbGUgaW1hZ2UgcmVxdWlyZWQ/ICh5ZXMvbm8pXCIpO1xyXG4gICAgICAgICAgaWYgKHJlcXVpcmVkID09IFwieWVzXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmlzQXZhdGFyUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBub3RBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXF1aXJlZCA9PSBcIm5vXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmlzQXZhdGFyUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbm90QW5zd2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21wdEJpb1F1ZXN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5vdEFuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICB3aGlsZSAobm90QW5zd2VyZWQpIHtcclxuICAgICAgICAgIGxldCByZXF1aXJlZCA9IHByb21wdChcIklzIGFuICdBYm91dCBNZScgcmVxdWlyZWQ/ICh5ZXMvbm8pXCIpO1xyXG4gICAgICAgICAgaWYgKHJlcXVpcmVkID09IFwieWVzXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmlzQmlvUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBub3RBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXF1aXJlZCA9PSBcIm5vXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmlzQmlvUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbm90QW5zd2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21wdEtleXdvcmRzOiAoKSA9PiB7XHJcbiAgICAgICAgY29uZmlnLmtleXdvcmRzID0gcHJvbXB0KFxyXG4gICAgICAgICAgXCJXaGF0IEtleXdvcmRzIHdvdWxkIHlvdSBsaWtlIHRvIHNlYXJjaCBmb3I/IChjb21tYSBzZXBhcmF0ZWQgbGlzdClcIixcclxuICAgICAgICAgIGNvbmZpZy5rZXl3b3Jkc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByb21wdEtleXdvcmROdW1iZXJRdWVzdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBrZXl3b3JkTnVtYmVyID0gMDtcclxuICAgICAgICBjb25maWcubnVtYmVyS2V5d29yZHNSZXF1aXJlZCA9IHByb21wdChcclxuICAgICAgICAgIFwiSG93IG1hbnkga2V5d29yZHMgYXJlIHJlcXVpcmVkIHRvIHBhc3M/XCIsXHJcbiAgICAgICAgICBjb25maWcubnVtYmVyS2V5d29yZHNSZXF1aXJlZFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZXN0OiB0ZXN0XHJcbiAgfTtcclxuICByZXR1cm4gX3RoaXM7XHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGFzc2Vzc01heEZvbGxvdyhmb2xsb3dpbmdDb3VudCwgZm9sbG93ZXJzQ291bnQpe1xyXG5cdGxldCBiYXNlRm9sbG93TWF4ID0gNTAwMDtcclxuXHRsZXQgZGFpbHlGb2xsb3dNYXggPSAxMDAwO1xyXG5cdGxldCBmb2xsb3dlcnNCcmVhayA9IDE4MDA7XHJcblx0bGV0IGZvbGxvd0luY3JlYXNlID0gMC4xO1xyXG5cclxuXHRpZiAoZm9sbG93ZXJzQ291bnQgPiBmb2xsb3dlcnNCcmVhayl7XHJcblx0XHRiYXNlRm9sbG93TWF4ID0gYmFzZUZvbGxvd01heCArIGZvbGxvd2Vyc0NvdW50ICogZm9sbG93SW5jcmVhc2U7XHJcblx0fVxyXG5cclxuXHRsZXQgcGVyc29uYWxNYXhGb2xsb3cgPSBiYXNlRm9sbG93TWF4IC0gZm9sbG93aW5nQ291bnQ7XHJcblxyXG5cdHJldHVybiBwZXJzb25hbE1heEZvbGxvdyA+IGRhaWx5Rm9sbG93TWF4ID8gZGFpbHlGb2xsb3dNYXggOiBwZXJzb25hbE1heEZvbGxvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXNzZXNzTWF4Rm9sbG93O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2Vzc01heEZvbGxvdy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IGNyZWF0ZUNhcmQgIGZyb20gJy4vY3JlYXRlQ2FyZCc7XHJcbmltcG9ydCBnZXRNYXhQZW9wbGUgZnJvbSAnLi9nZXRNYXhQZW9wbGUnO1xyXG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQ2FyZHMobWF4Rm9sbG93LCBjYXJkQ2hlY2spIHtcclxuXHRsZXQgbWF4UGVvcGxlID0gZ2V0TWF4UGVvcGxlKCk7XHJcblx0Y29uc29sZS5lcnJvcihcIkJlZ2luLi4uXCIpO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsb29wR2F0aGVyKG1heEZvbGxvdywgY2FyZENoZWNrLCBtYXhQZW9wbGUsIHJlc29sdmUsIHJlamVjdCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BHYXRoZXIobWF4Rm9sbG93LCBjYXJkQ2hlY2ssIG1heFBlb3BsZSwgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDAsIGNhcmRzID0gW10pe1xyXG5cdHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0bGV0IHNjcm9sbGVkUGVvcGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlByb2ZpbGVDYXJkXCIpO1xyXG5cclxuXHRcdGlmKHNjcm9sbGVkUGVvcGxlLmxlbmd0aCA+PSBtYXhQZW9wbGUpIHJlc29sdmUoY2FyZHMpO1xyXG5cclxuXHRcdGZvcig7IGluZGV4IDwgc2Nyb2xsZWRQZW9wbGUubGVuZ3RoICYmIGNhcmRzLmxlbmd0aCA8IG1heEZvbGxvdzsgaW5kZXgrKyl7XHJcbiAgICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZChzY3JvbGxlZFBlb3BsZVtpbmRleF0pO1xyXG4gICAgICBpZihjYXJkQ2hlY2soY2FyZCkpIGNhcmRzLnB1c2goY2FyZCk7XHJcblx0XHRcdGlmKGNhcmRzLmxlbmd0aCAlIChtYXhGb2xsb3cvMTApID09PSAwKXtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKGNhcmRzLmxlbmd0aCArIFwiIHBlb3BsZSBjb2xsZWN0ZWQgb3V0IG9mIFwiICsgbWF4Rm9sbG93KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y2FyZHMubGVuZ3RoID49IG1heEZvbGxvdyA/IHJlc29sdmUoY2FyZHMpIDogbG9vcEdhdGhlcihtYXhGb2xsb3csIGNhcmRDaGVjaywgbWF4UGVvcGxlLCByZXNvbHZlLCByZWplY3QsIGluZGV4LCBjYXJkcyk7XHJcblx0fSwgcmFuZG9tVGltZShjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWluLCBjb25maWcuc2Nyb2xsSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYXRoZXJDYXJkcztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2F0aGVyQ2FyZHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gY3JlYXRlQ2FyZChET01DYXJkKXtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IGdldElkKERPTUNhcmQpLFxyXG5cdFx0ZWxlOiBET01DYXJkLFxyXG5cdFx0aGFzQmFubmVyOiBjaGVja0ZvckJhbm5lcihET01DYXJkKSxcclxuXHRcdGhhc0F2YXRhcjogY2hlY2tGb3JBdmF0YXIoRE9NQ2FyZCksXHJcblx0XHRoYXNCaW86IGNoZWNrRm9yQmlvKERPTUNhcmQpLFxyXG5cdFx0aXNGb2xsb3dlZDogY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKSxcclxuXHRcdGZvbGxvd3NZb3U6IGNoZWNrRm9sbG93c1lvdShET01DYXJkKSxcclxuXHRcdGlzUHJvdGVjdGVkOiBjaGVja1Byb3RlY3RlZChET01DYXJkKSxcclxuXHRcdGJpbzogZ2V0QmlvKERPTUNhcmQpLFxyXG5cdFx0ZG9DbGljazogZG9DbGlja1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoRE9NQ2FyZCl7XHJcblx0cmV0dXJuIERPTUNhcmQuYXR0cmlidXRlc1tcImRhdGEtdXNlci1pZFwiXS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JCYW5uZXIoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxlQ2FyZC1iZ1wiKTtcclxuXHRyZXR1cm4gZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSAhPT0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrRm9yQXZhdGFyKERPTUNhcmQpe1xyXG5cdGxldCBlbGUgPSBET01DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuUHJvZmlsZUNhcmQtYXZhdGFySW1hZ2VcIik7XHJcblx0cmV0dXJuICFlbGUuYXR0cmlidXRlcy5zcmMudmFsdWUuaW5jbHVkZXMoXCJkZWZhdWx0X3Byb2ZpbGVfaW1hZ2VzXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvckJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRsZXQgdGV4dCA9IGVsZS5pbm5lclRleHQ7XHJcblx0cmV0dXJuIHRleHQgIT09IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJpbyhET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLlByb2ZpbGVDYXJkLWJpb1wiKTtcclxuXHRyZXR1cm4gZWxlLmlubmVyVGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JGb2xsb3dlZChET01DYXJkKXtcclxuXHRsZXQgZWxlID0gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItYWN0aW9uc1wiKTtcclxuXHRyZXR1cm4gZWxlICE9PSBudWxsID8gZWxlLmNsYXNzTGlzdC5jb250YWlucyhcImZvbGxvd2luZ1wiKSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ZvbGxvd3NZb3UoRE9NQ2FyZCl7XHJcblx0bGV0IGVsZSA9IERPTUNhcmQucXVlcnlTZWxlY3RvcihcIi5Gb2xsb3dTdGF0dXNcIik7XHJcblx0cmV0dXJuIGVsZSA/IGVsZS5pbm5lclRleHQgPT09IFwiRm9sbG93cyB5b3VcIiA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3RlY3RlZChET01DYXJkKXtcclxuXHRyZXR1cm4gRE9NQ2FyZC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvdGVjdGVkPXRydWVdXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb0NsaWNrKCl7XHJcblx0bGV0IGJ0biA9IHRoaXMuZWxlLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sbG93LXRleHRcIik7XHJcblx0YnRuLmNsaWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NyZWF0ZUNhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZ2V0TWF4UGVvcGxlKCl7XHJcblx0bGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0bGV0IGxpc3RUeXBlID0gcGF0aC5pbmNsdWRlcyhcImZvbGxvd2Vyc1wiKSA/IFwiZm9sbG93ZXJzXCIgOiBwYXRoLmluY2x1ZGVzKFwiZm9sbG93aW5nXCIpID8gXCJmb2xsb3dpbmdcIiA6IG51bGw7XHJcblx0bGV0IG1heFBlb3BsZUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbZGF0YS1uYXY9XCIke2xpc3RUeXBlfVwiXSAuUHJvZmlsZU5hdi12YWx1ZWApO1xyXG5cdGxldCBtYXhQZW9wbGUgPSBOdW1iZXIobWF4UGVvcGxlRWxlLmF0dHJpYnV0ZXNbXCJkYXRhLWNvdW50XCJdLnZhbHVlKTtcclxuXHRyZXR1cm4gbWF4UGVvcGxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNYXhQZW9wbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2V0TWF4UGVvcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgcmFuZG9tVGltZSBmcm9tICcuL3JhbmRvbVRpbWUnO1xyXG5cclxuZnVuY3Rpb24gZG9DbGlja2VyKGNhcmRzKXtcclxuXHRjb25zb2xlLmVycm9yKFwiQ29sbGVjdGluZyBmaW5pc2hlZC4gUHJvY2VkaW5nIHRvIGNsaWNraW5nIHBoYXNlLi4uXCIpO1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRsb29wQ2xpY2soY2FyZHMsIHJlc29sdmUsIHJlamVjdCk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvb3BDbGljayhjYXJkcywgcmVzb2x2ZSwgcmVqZWN0LCBpbmRleCA9IDApe1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0aWYoaW5kZXggPj0gY2FyZHMubGVuZ3RoKSByZXR1cm4gcmVzb2x2ZSgpO1xyXG5cdFx0bGV0IGNhcmQgPSBjYXJkc1tpbmRleF07XHJcblx0XHRjYXJkLmRvQ2xpY2soKTtcclxuXHRcdGlmKGluZGV4ICUgKGNhcmRzLmxlbmd0aC8xMCkgPT09IDApe1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGluZGV4ICsgXCIgcGVvcGxlIGZvbGxvd2VkIG91dCBvZiBcIiArIGNhcmRzLmxlbmd0aCk7XHJcblx0XHR9XHJcblx0XHRpbmRleCsrO1xyXG5cdFx0bG9vcENsaWNrKGNhcmRzLCByZXNvbHZlLCByZWplY3QsIGluZGV4KTtcclxuXHR9LCByYW5kb21UaW1lKGNvbmZpZy5jbGlja0ludGVydmFsLm1pbiwgY29uZmlnLmNsaWNrSW50ZXJ2YWwubWF4KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvQ2xpY2tlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZG9DbGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2luZyAke2NvbmZpZy5teUZvbGxvd2luZ31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBteUZvbGxvd2VycyAke2NvbmZpZy5teUZvbGxvd2Vyc31gKTtcclxuXHRjb25zb2xlLmVycm9yKGBwYXNzaW5nU2NvcmUgJHtjb25maWcucGFzc2luZ1Njb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYGJhbm5lclNjb3JlICR7Y29uZmlnLmJhbm5lclNjb3JlfWApO1xyXG5cdGNvbnNvbGUuZXJyb3IoYHByb2ZpbGVTY29yZSAke2NvbmZpZy5wcm9maWxlU2NvcmV9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHNjb3JlQ2FyZCBmcm9tIFwiLi4vc2NvcmVDYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dGaWx0ZXIoY2FyZCkge1xyXG4gIC8vIFNjb3JlIHRoZSBjYXJkIGhlcmVcclxuICBpZiAoY2FyZC5pc0ZvbGxvd2VkIHx8IGNhcmQuaXNQcm90ZWN0ZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHNjb3JlQ2FyZChjYXJkKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvbGxvd0ZpbHRlcjtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmlsdGVycy9mb2xsb3dGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmZ1bmN0aW9uIHNjb3JlQ2FyZChjYXJkKSB7XHJcbiAgbGV0IGNhcmRQYXNzZXMgPSB0cnVlO1xyXG4gIHZhciBrZXl3b3Jkc0ZvdW5kID0gMDtcclxuXHJcbiAgLy8gRmlsdGVyIGZvciBiYWNrZ3JvdW5kIGltYWdlc1xyXG4gIC8vIGlzIGJhY2tncm91bmQgcmVxdWlyZWQ/XHJcbiAgaWYgKGNvbmZpZy5pc0Jhbm5lclJlcXVpcmVkKSB7XHJcbiAgICBpZiAoIWNhcmQuaGFzQmFubmVyKSB7XHJcbiAgICAgIGNhcmRQYXNzZXMgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGNhcmRQYXNzZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaWx0ZXIgZm9yIHByb2ZpbGUgcGljdHVyZVxyXG4gIC8vIGlzIHByb2ZpbGUgcmVxdWlyZWQ/XHJcbiAgaWYgKGNvbmZpZy5pc0F2YXRhclJlcXVpcmVkKSB7XHJcbiAgICBpZiAoIWNhcmQuaGFzQXZhdGFyKSB7XHJcbiAgICAgIGNhcmRQYXNzZXMgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIGNhcmRQYXNzZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnLmlzQmlvUmVxdWlyZWQpIHtcclxuICAgIGlmICghY2FyZC5oYXNCaW8pIHtcclxuICAgICAgY2FyZFBhc3NlcyA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gY2FyZFBhc3NlcztcclxuICAgIH1cclxuICAgIGlmIChjb25maWcua2V5d29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBrZXl3b3JkcyA9IGNvbmZpZy5rZXl3b3Jkcy5zcGxpdChcIixcIik7XHJcbiAgICAgIC8vIHNjYW4gYmlvIGZvciBrZXl3b3Jkc1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXdvcmRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGNhcmQuYmlvLmluY2x1ZGVzKGtleXdvcmRzW2pdKSkge1xyXG4gICAgICAgICAga2V5d29yZHNGb3VuZCArPSAxO1xyXG4gICAgICAgICAgaWYgKGtleXdvcmRzRm91bmQgPj0gY29uZmlnLm51bWJlcktleXdvcmRzUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChrZXl3b3Jkc0ZvdW5kIDwgY29uZmlnLm51bWJlcktleXdvcmRzUmVxdWlyZWQpIHtcclxuICAgICAgICBjYXJkUGFzc2VzID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNhcmRQYXNzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjb3JlQ2FyZDtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NvcmVDYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9