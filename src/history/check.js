import loadHistory from './load';

function check(id){
	let history = loadHistory();
	let historyObj = history[id];
	return historyObj ? true : false;
}

export default check;