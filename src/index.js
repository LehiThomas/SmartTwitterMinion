import config from './config';
import assessMaxFollow from './assessMaxFollow';
import gatherCards from './gatherCards';
import doClicker from './doClicker';
import test from './test';
import followFilter from './filters/followFilter';

window.TwitterMinion =  (function(){
	let _this = {
		follow: () => {
			let maxFollow = assessMaxFollow(config.myFollowing, config.myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			gatherCards(maxFollow, followFilter)
				.then(cards => doClicker(cards))
				.then(() =>  alert("All done!"));
		},
		setup: {
			promptAll: () => {
				_this.setup.promptMyFollowing();
				_this.setup.promptMyFollowers();
				_this.setup.promptPassingScore();
				_this.setup.promptBannerScore();
				_this.setup.promptAvatarScore();
				_this.setup.promptBioScore();
				_this.setup.promptKeywordScore();
				_this.setup.promptKeywords();
			},
			promptMyFollowing: () => {
				config.myFollowing = prompt("How many followers do you have?", config.myFollowing);
			},
			promptMyFollowers: () => {
				config.myFollowers = prompt("How many people are you following?", config.myFollowers);
			},
			promptPassingScore: () => {
				config.passingScore = prompt("Minimum Passing Score", config.passingScore);
			},
			promptBannerScore: () => {
				config.bannerScore = prompt("Banner Img Score", config.bannerScore);
			},
			promptAvatarScore: () => {
				config.avatarScore = prompt("Profile Img Score", config.avatarScore);
			},
			promptBioScore: () => {
				config.bioScore = prompt("Bio Score", config.bioScore);
			},
			promptKeywordScore: () => {
				config.keywordScore = prompt("Keyword Score per word", config.keywordScore);
			},
			promptKeywords: () => {
				config.keywords = prompt("Keywords:", config.keywords);
			}
		},
		test: test
	}
	return _this;
})();
