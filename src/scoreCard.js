import config from "./config";

function scoreCard(card) {
  let cardPasses = true;
  var keywordsFound = 0;

  // Filter for background images
  // is background required?
  if (config.isBannerRequired) {
    if (!card.hasBanner) {
      cardPasses = false;
      return cardPasses;
    }
  }

  // Filter for profile picture
  // is profile required?
  if (config.isAvatarRequired) {
    if (!card.hasAvatar) {
      cardPasses = false;
      return cardPasses;
    }
  }

  if (config.isBioRequired) {
    if (!card.hasBio) {
      cardPasses = false;
      return cardPasses;
    }
    if (config.keywords.length !== 0) {
      let keywords = config.keywords.split(",");
      // scan bio for keywords
      for (var j = 0; j < keywords.length; j++) {
        if (card.bio.includes(keywords[j])) {
          keywordsFound += 1;
          if (keywordsFound >= config.numberKeywordsRequired) {
            continue;
          }
        }
      }
      if (keywordsFound < config.numberKeywordsRequired) {
        cardPasses = false;
      }
    }
  }
  return cardPasses;
}

export default scoreCard;
