import assessMaxFollow from './assessMaxFollow';
import gatherCards from './gatherCards';
import followPeople from './followPeople';

window.TwitterMinion =  (function(){
	let myFollowing = 0;
	let myFollowers = 0;
	let maxFollow = assessMaxFollow(myFollowing, myFollowers);
	let passingScore = 0;
	let bannerScore = 0;
	let profileScore = 0;
	let keyWords = [];
	return {
		follow: () => {
			// Get Max Follow Count

			// Inform on count - user can change amount if desired

			// Allow User to add key words

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
