import assessMaxFollow from './assessMaxFollow';
import gatherCards from './gatherCards';
import followPeople from './followPeople';
import followFilter from './filters/followPeople';

window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
<<<<<<< Updated upstream
			gatherCards(maxFollow)
=======
			// Get Max Follow Count - User may change the value
			let maxFollow = assessMaxFollow(myFollowing, myFollowers);
			maxFollow = prompt(`The max that can be followed is ${maxFollow}. You may set a different amount`, maxFollow);

			gatherCards(maxFollow, followFilter)
>>>>>>> Stashed changes
				.then(cards => {
					// Placing on window for debugging purposes
					window.cards = cards;
				})
			// .then(peopleToFollow => followPeople(peopleToFollow))
		}
	}
})();
