import config from './config';
import createCard  from './createCard';
import getMaxPeople from './getMaxPeople';
import randomTime from './randomTime';

function gatherCards(maxFollow, cardCheck) {
	let maxPeople = getMaxPeople();
	console.error("Begin...");
	return new Promise((resolve, reject) => {
		loopGather(maxFollow, cardCheck, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, cardCheck, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
      let card = createCard(scrolledPeople[index]);
      if(cardCheck(card)) cards.push(card);
			if(cards.length % (maxFollow/10) === 0){
				console.error(cards.length + " people collected out of " + maxFollow);
			}
		}
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, cardCheck, maxPeople, resolve, reject, index, cards);
	}, randomTime(config.scrollInterval.min, config.scrollInterval.max));
}


export default gatherCards;
