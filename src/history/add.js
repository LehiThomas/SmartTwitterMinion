import loadHistory from './load';
import saveHistory from './save';

function add(card){
	let history = loadHistory();
	let historyObj = new HistoryObj(card);
	history[historyObj.id] = historyObj;
	saveHistory(history);
}

class HistoryObj {
	constructor(card){
		this.id = card.id;
		this.date = Date.now();
	}
}

export default add;