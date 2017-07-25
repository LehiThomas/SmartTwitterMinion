import loadHistory from './load';

function get(id){
	let history = loadHistory();
	let historyObj = history[id];
	return historyObj;
}

export default get;