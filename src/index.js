import assessMaxFollow from './assessMaxFollow';
import gatherCards from './gatherCards';
import followPeople from './followPeople';

window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			gatherCards(maxFollow)
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})
			// .then(peopleToFollow => followPeople(peopleToFollow))
		}
	}
})();
