const cracklePop = () => {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log('CracklePop')
    } else if (!(i % 3)) {
      console.log('Crackle')
    } else if(!(i % 5)) {
      console.log('Pop')
    } else {
      console.log(i)
    }
  }
}

cracklePop();