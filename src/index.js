import assessMaxFollow from './assessMaxFollow';

window.TwitterMinion =  (function(){
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			gatherPeopleToFollow(maxFollow)
				.then(followPeople(peopleToFollow))
		}
	}
})();

