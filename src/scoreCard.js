import config from './config';

function scoreCard(card) {
  let score = 0;

  if (card.hasBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
    score += config.profileScore;
  }
  // Filter for background images
  if (card.hasBanner) {
    score += config.bannerScore;
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += config.avatarScore;
  }
  return score;
}

export default scoreCard;
