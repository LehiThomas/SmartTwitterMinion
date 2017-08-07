Twitter Minion is designed to automate finding high quality people to follow on twitter. It accomplishes this with the following features:
* Detects how many people to follow based of the users follow to follower ratio
* Compares person to the follow history list
* Only follows people who meet a certain profile score thresh hold
* Determines a persons score threshold based off the following:
	* Does the user have a BIO
	*  Does the users bio contain the given key words
	* Does the user have a banner picture
	* Does the user have a profile picture

Twitter Minion will keep a history of previous sessions. These sessions will be able to give analytics on how the session preformed. It will record the following:
* The host profile Name
* Wether it was the hosts follower or followed list
* Date of search
* Amount followed
* Amount who have followed back to date

Instructions:
* Copy and paste the bundle.js file into the console of the page you wish to run this on
* To override default values and input search terms enter TwitterMinion.setup.promptAll() and fill in the prompts
* Enter TwitterMinion.follow() to run the program
