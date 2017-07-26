export default function() {
  this.scroll = setInterval(this.autoScrolling, 2000);

  //if autoScrolling return TRUE
  this.follow();
}
