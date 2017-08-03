import config from './config';

function scoreCard(card) {
  var score = 0;
  console.error(score);
  if (card.hasBio) {
    score += parseInt(config.bioScore);
    console.error("Add Bio " + score);
    if (config.keywords.length !== 0) {
      let keywords = config.keywords.split(", ");
      console.error(keywords);
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
          console.error("Found: " + keywords[j]);
          console.error(score);
          score += parseInt(config.keywordScore);
          console.error(score);
        }
      }
    }
  }
  // Filter for background images
  if (card.hasBanner) {
    score += parseInt(config.bannerScore);
    console.error("Add Banner " + score);
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += parseInt(config.avatarScore);
    console.error("Add Profile " + score);
  }
  console.error("Final Score " + score);
  return score;
}

export default scoreCard;
