function countLetters(toCount) {
  var counting = toCount.split(" ").join("");
  var letterObject = {};
  for (let letters of counting) {
    if (letterObject[letters]) {
      letterObject[letters] += 1;
    }else {
      letterObject[letters] = 1;
    }
  }
  console.log(letterObject);

}




countLetters('lighthouse in the house');