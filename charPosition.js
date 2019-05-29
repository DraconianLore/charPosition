function countLetters(toCount) {
  var letterObject = {};
  for (let i = 0; i < toCount.length; i++) {
    if (toCount[i] != ' ') {
      if (letterObject[toCount[i]]) {
        letterObject[toCount[i]][0] += 1;
        letterObject[toCount[i]][1].push(i);
      }else {
        letterObject[toCount[i]] = [];
        letterObject[toCount[i]][0] = 1;
        letterObject[toCount[i]][1] = [];
        letterObject[toCount[i]][1].push(i);

      }
    }

  }
  console.log(letterObject);

}




countLetters('lighthouse in the house');