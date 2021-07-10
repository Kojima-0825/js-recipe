const genkiFunction2 = function(number) {
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 || String(i).includes("3")) {
        console.log(`${i}!!!!!!`)
      } else {
        console.log(i)
      }
    }
  }
  ​
  genkiFunction2(100)