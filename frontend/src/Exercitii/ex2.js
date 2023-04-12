function ex2() {
  let a = Math.floor(Math.random() * 10) + 1
  let b = Math.floor(Math.random() * 10) + 1
  let x = Math.floor(Math.random() * 10) + 1
  let r

  if (Math.random() <= 0.5) {
    r = a * x + b
    if (a === 1) a = ''
    return [`Rezolva urmatoarea ecuatie: ${a}x + ${b} = ${r}`, x]
  } else {
    r = a * x - b

    if (a === 1) a = ''
    return [`Rezolva urmatoarea ecuatie: ${a}x - ${b} = ${r}`, x]
  }
}

export default ex2
