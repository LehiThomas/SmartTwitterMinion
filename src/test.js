import config from './config';

function test() {
	console.error(`myFollowing ${config.myFollowing}`);
	console.error(`myFollowers ${config.myFollowers}`);
	console.error(`passingScore ${config.passingScore}`);
	console.error(`bannerScore ${config.bannerScore}`);
	console.error(`profileScore ${config.profileScore}`);
}

export default test;