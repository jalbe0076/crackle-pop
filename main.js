const cracklePop = () => {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 3)) {
      console.log('Crackle')
    } else {
      console.log(i)
    }
  }
}

cracklePop();