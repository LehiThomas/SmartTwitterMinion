function scoreCard(card) {
  let score = 0;
  
  // Filter for bios and search against keywords
  // if (card.hasBio) {
  //   let keywords = TwitterMinion.wordList.split(", ");
  //   score += 10;
  //   // scan bio for keywords
  //   for (var j = 0; j < keywords.length; j++) {
  //     if (bioText.includes(keywords[j])) {
  //       score += 3;
  //     }
  //   }
  // }

  if (card.checkForBio) {
    let keywords = TwitterMinion.wordList.split(", ");
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
