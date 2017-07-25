function save(history = {}){
	history = JSON.stringify(history);
	localStorage.setItem("MINION_HISTORY", history);
}

export default save;