function countLetters(str) {
    const givenArr = str.split("");
    const uniqueArr = [...new Set(str)];
  
    let letters = []
  
    for (let i = 0; i < uniqueArr.length; i++) {
      let count = 0;
      for (let j = 0; j < givenArr.length; j++) {
        if (uniqueArr[i] === givenArr[j]) {
          count++;
        }
      }
      let value = `${count}${uniqueArr[i]}`;
      letters= [...letters, value];
    }
  
    return letters;
  }
  
  console.log(countLetters("ffffefferrtttoo"));