import config from './config';
import randomTime from './randomTime';

function doClicker(cards){
	console.error("Collecting finished. Proceding to clicking phase...");
	return new Promise((resolve, reject) => {
		loopClick(cards, resolve, reject);
	});
}

function loopClick(cards, resolve, reject, index = 0){
	setTimeout(() => {
		if(index >= cards.length) return resolve();
		let card = cards[index];
		card.doClick();
		if(index % (cards.length/10) === 0){
			console.error(index + " people followed out of " + cards.length);
		}
		index++;
		loopClick(cards, resolve, reject, index);
	}, randomTime(config.clickInterval.min, config.clickInterval.max));
}

export default doClicker;
