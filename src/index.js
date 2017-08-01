import assessMaxFollow from './assessMaxFollow';
import gatherCards from './gatherCards';
import followPeople from './followPeople';

window.TwitterMinion =  (function(){
	let myFollowing = 0;
	let myFollowers = 0;
	let passingScore = 0;
	let bannerScore = 0;
	let profileScore = 0;
	let keyWords = [];
	return {
		follow: () => {
			// Get Max Follow Count - User may change the value
			let maxFollow = assessMaxFollow(myFollowing, myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			gatherCards(maxFollow)
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
