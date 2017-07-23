import autoScrolling  from './autoScrolling';
import follow  from './follow';
import start  from './launch';

const TwitterMinion = {
	count: 1,
	people: [],
	peopleToAdd: [],
	peopleAdded: 0,
	scrollInterval: 0,
	autoScrolling,
	follow,
	start
}

window.TwitterMinion = TwitterMinion;
