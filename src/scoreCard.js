import createCard  from './createCard';

function scoreCard(card) {
  let score = 0;

  if (card.checkForBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
    score += 10;
  }
  // Filter for background images
  if (card.checkForBanner) {
    score += 10;
  }
  // Filter for profile picture
  if (card.checkForAvatar) {
    score += 10;
  }
  return score;
}

export default scoreCard;
