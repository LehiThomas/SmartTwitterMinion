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
				config.bannerScore = prompt("Banner Score", config.bannerScore);
			},
			promptAvatarScore: () => {
				config.avatarScore = prompt("Profile Score", config.avatarScore);
			}
		},
		test: test
	}
	return _this;
})();
