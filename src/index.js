import assessMaxFollow from './assessMaxFollow';
import gatherPeopleToFollow from './gatherPeopleToFollow';
import followPeople from './followPeople';

window.TwitterMinion =  (function(){
	alert("Begin");
	let myFollowing = 4997;
	let myFollowers = 6238;
	let maxFollow = 10 //assessMaxFollow(myFollowing, myFollowers);
	return {
		follow: () => {
			gatherPeopleToFollow(maxFollow)
				.then(followPeople(peopleToFollow))
		}
	}
})();
