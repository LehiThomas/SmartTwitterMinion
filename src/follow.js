export default function(){
	alert(this.count);
	for (var i = 0; i < this.peopleToAdd.length; i++) {
		var card = this.peopleToAdd[i];
		var button = card.getElementsByClassName("follow-text");

		if (this.peopleAdded > 500) {
			alert(`You followed ${this.peopleAdded} people!`);
			break;
		} else {
			// click button every 15 seconds
			setTimeout(function(){
				button[0].click();
			}, 15000);
			this.peopleAdded++;
		}
	}
}
