function doClicker(cards){
	return new Promise((resolve, reject) => {
		loopClick(cards, resolve, reject);
	});
}

function loopClick(cards, resolve, reject, index = 0){
	setTimeout(() => {
		if(index >= cards.length) return resolve();
		let card = cards[index];
		card.doClick();
		index++;
		loopClick(cards, resolve, reject, index);
	}, 2000);
}

export default doClicker;
