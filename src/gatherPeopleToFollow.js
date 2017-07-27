import createCard  from './createCard';
import scoreCard  from './scoreCard';

function gatherPeopleToFollow(maxFollow) {
	alert("Hello ;) ");
	const maxFollow = maxFollow;
	let peopleToFollow = [];
	let previousLength = 0;
	let people = [];

	while (peopleToFollow.length < maxFollow || (window.innerHeight + window.scrollY) < document.body.scrollHeight) {
		window.scrollTo(0,document.body.scrollHeight);
		people = document.getElementsByClassName("ProfileCard");
		previousLength = people.length

			for (var i = previousLength; i < people.length; i++) {
			let card = createCard(this.people[i]);

			if (card.checkForFollowed) {
				continue;
			} else {
				let score = scoreCard;
				if (score >= 30) {
					peopleToFollow.push(card);
				}
			}
		}
	}

	if (peopleToFollow.length !== 0) {
		resolve(peopleToFollow);
	} else {
		reject('No one was added to the array');
	}
}

export default gatherPeopleToFollow;
