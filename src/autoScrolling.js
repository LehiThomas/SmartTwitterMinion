export default function() {
	this.count++;
	// 500 person limit (I believe the Twitter limit is 1000/day) or until bottom of page is reached
	if (peopleToAdd.length >= 500 || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    clearInterval(this.scrollInterval);
		// Return true to know when this function is done running?
		return true;
  } else {
		window.scrollTo(0,document.body.scrollHeight);
		this.people = document.getElementsByClassName("ProfileCard");

		for (var i = 0; i < this.people.length; i++) {
			const card = this.people[i];
			const bio = card.getElementsByClassName("ProfileCard-bio");
			const button = card.getElementsByClassName("follow-text");

			// Only add person to list if they have a bio and are not yet being followed
			if (bio[0].innerText !== "" && button[0].innerText === "Follow") {
				peopleToAdd.push(card);
			}
		}
	}
}
