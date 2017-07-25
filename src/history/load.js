function load(){
	let history = localStorage.getItem("MINION_HISTORY");
	return history ? JSON.parse(history) : {};
}

export default load;