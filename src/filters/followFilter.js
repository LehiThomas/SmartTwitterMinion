import config from './config';

function followFilter(card) {
  // Score the card here
  if (card.checkForFollowed || card.isProtected) {
    return false;
  } else {
    if (scoreCard(card) >= config.passingScore) {
      return true;
    } else {
      return false;
    }
  }
}

export default followFilter;
