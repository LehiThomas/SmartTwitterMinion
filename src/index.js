import config from "./config";
import assessMaxFollow from "./assessMaxFollow";
import gatherCards from "./gatherCards";
import doClicker from "./doClicker";
import test from "./test";
import followFilter from "./filters/followFilter";

window.TwitterMinion = (function() {
  let _this = {
    follow: () => {
      let maxFollow = assessMaxFollow(config.myFollowing, config.myFollowers);
      maxFollow = prompt(
        `The max that can be followed is ${maxFollow}. You may set a different amount`,
        maxFollow
      );

      gatherCards(maxFollow, followFilter)
        .then(cards => doClicker(cards))
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
        config.myFollowing = prompt(
          "How many followers do you have?",
          config.myFollowing
        );
      },
      promptMyFollowers: () => {
        config.myFollowers = prompt(
          "How many people are you following?",
          config.myFollowers
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
            config.isBannerRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            config.isBannerRequired = false;
            notAnswered = false;
          }
        }
      },
      promptAvatarQuestion: () => {
        let notAnswered = true;
        while (notAnswered) {
          let required = prompt("Is the Profile image required? (yes/no)");
          if (required == "yes") {
            config.isAvatarRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            config.isAvatarRequired = false;
            notAnswered = false;
          }
        }
      },
      promptBioQuestion: () => {
        let notAnswered = true;
        while (notAnswered) {
          let required = prompt("Is an 'About Me' required? (yes/no)");
          if (required == "yes") {
            config.isBioRequired = true;
            notAnswered = false;
          } else if (required == "no") {
            config.isBioRequired = false;
            notAnswered = false;
          }
        }
      },
      promptKeywords: () => {
        config.keywords = prompt(
          "What Keywords would you like to search for? (comma separated list)",
          config.keywords
        );
      },
      promptKeywordNumberQuestion: () => {
        let keywordNumber = 0;
        config.numberKeywordsRequired = prompt(
          "How many keywords are required to pass?",
          config.numberKeywordsRequired
        );
      }
    },
    test: test
  };
  return _this;
})();
