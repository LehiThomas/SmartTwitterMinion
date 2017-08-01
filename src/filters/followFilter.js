import config from './config';
import scoreCard  from './scoreCard';

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
