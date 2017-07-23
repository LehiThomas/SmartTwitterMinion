import autoScrolling  from './autoScrolling';
import follow  from './follow';

const TwitterMinion = {
	count: 1,
	people: [],
	peopleToAdd: [],
	peopleAdded: 0,
	autoScrolling,
	follow
}

window.TwitterMinion = TwitterMinion;