function followFilter(card, passingScore) {
  let card = card;
  // Score the card here
  if (card.checkForFollowed || card.isProtected) {
    return false;
  } else {
    if (scoreCard(card) >= passingScore) {
      return true;
    } else {
      return false;
    }
  }
}

export default followFilter;
