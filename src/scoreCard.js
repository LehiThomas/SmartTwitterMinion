function scoreCard(card) {
  let score = 0;

  if (card.hasBio) {
    //let keywords = TwitterMinion.wordList.split(", ");
    score += 10;
  }
  // Filter for background images
  if (card.hasBanner) {
    score += 10;
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += 10;
  }
  return score;
}

export default scoreCard;
