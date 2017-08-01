import createCard  from './createCard';
import scoreCard  from './scoreCard';
import getMaxPeople from './getMaxPeople';

function gatherCards(maxFollow, cardCheck) {
	let maxPeople = getMaxPeople();
	return new Promise((resolve, reject) => {
		loopGather(maxFollow, maxPeople, resolve, reject);
	});
}

function loopGather(maxFollow, maxPeople, resolve, reject, index = 0, cards = []){
	window.scrollTo(0, document.body.scrollHeight);

	setTimeout(() => {
		let scrolledPeople = document.getElementsByClassName("ProfileCard");

		if(scrolledPeople.length >= maxPeople) resolve(cards);

		for(; index < scrolledPeople.length && cards.length < maxFollow; index++){
      let card = createCard(scrolledPeople[index]);
      if(cardCheck(card)) cards.push(card);
    }
		cards.length >= maxFollow ? resolve(cards) : loopGather(maxFollow, maxPeople, resolve, reject, index, cards);
	}, 2000); // Be good to make this interval random
}


export default gatherCards;
