
var people = []; // Total list of people
var peopleToAdd = []; // List of people that meet criteria
var peopleAdded = 0; // Number of people added

// Start the auto-scrolling every 2 seconds
var scroll = setInterval(autoScrolling, 2000); 

function autoScrolling() {
	// 500 person limit (I believe the Twitter limit is 1000/day) or until bottom of page is reached
	if (peopleToAdd.length >= 500 || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        clearInterval(scroll);
		followUsers();
    } else {
		window.scrollTo(0,document.body.scrollHeight); 
		people = document.getElementsByClassName("ProfileCard");
		
		for (var i = 0; i < people.length; i++) { 
			var card = people[i];
			var bio = card.getElementsByClassName("ProfileCard-bio");
			var button = card.getElementsByClassName("follow-text");
			
			// Only add person to list if they have a bio and are not yet being followed
			if (bio[0].innerText !== "" && button[0].innerText === "Follow") {
				peopleToAdd.push(card);
			}
		}
	}
}

// After the list is built, loop through and follow users
function followUsers() {
	for (var i = 0; i < peopleToAdd.length; i++) { 
		var card = peopleToAdd[i];
		var button = card.getElementsByClassName("follow-text");
		
		if (peopleAdded > 500) {
			break;
		} else {
			// click button every 15 seconds
			setTimeout(function(){
				button[0].click();
			}, 15000);			
			peopleAdded++;
		}
	}
}