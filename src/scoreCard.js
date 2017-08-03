import config from './config';

function scoreCard(card) {
  var score = 0;

  if (card.hasBio) {
    score += parseInt(config.bioScore);
    if (config.keywords.length !== 0) {
      let keywords = config.keywords.split(", ");
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
          score += parseInt(config.keywordScore);
        }
      }
    }
  }
  // Filter for background images
  if (card.hasBanner) {
    score += parseInt(config.bannerScore);
  }
  // Filter for profile picture
  if (card.hasAvatar) {
    score += parseInt(config.avatarScore);
  }
  return score;
}

export default scoreCard;
