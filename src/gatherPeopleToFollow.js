import createCard  from './createCard';
import scoreCard  from './scoreCard';

function gatherPeopleToFollow(maxFollow) {
	// Get if followers or following
	// Get maxPeople
	let maxPeople = 500;

	return new Promise((resolve, reject) => {
		loopGather(maxFollow, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) return peopleToFollow;

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
			let card = createCard(scrolledPeople[index]);
			// Score the card here
			cards.push(card);
		}
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000);
}


export default gatherPeopleToFollow;
