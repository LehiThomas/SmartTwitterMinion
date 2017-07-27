import assessMaxFollow from './assessMaxFollow';
import gatherPeopleToFollow from './gatherPeopleToFollow';
import followPeople from './followPeople';

window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 100 //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			gatherPeopleToFollow(maxFollow)
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})	
			// .then(peopleToFollow => followPeople(peopleToFollow))
		}
	}
})();
