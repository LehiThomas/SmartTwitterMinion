var people = [];
var peopleToAdd = [];
var peopleAdded = 0;
var scroll = setInterval(autoScrolling, 2000); 

function autoScrolling() {
	if (peopleToAdd.length > 500 || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        clearInterval(scroll);
		followUsers();
    } else {
		window.scrollTo(0,document.body.scrollHeight); 
		people = document.getElementsByClassName("ProfileCard");
		
		for (var i = 0; i < people.length; i++) { 
			var card = people[i];
			var bio = card.getElementsByClassName("ProfileCard-bio");
			var button = card.getElementsByClassName("follow-text");
			
			if (bio[0].innerText !== "" && button[0].innerText === "Follow") {
				peopleToAdd.push(card);
			}
		}
	}
}
function followUsers() {
	for (var i = 0; i < peopleToAdd.length; i++) { 
		var card = peopleToAdd[i];
		var button = card.getElementsByClassName("follow-text");
		
		if (peopleAdded > 500) {
			break;
		} else {
			// click button
			setTimeout(function(){
				button[0].click();
			}, 15000);			
			peopleAdded++;
		}
	}
}