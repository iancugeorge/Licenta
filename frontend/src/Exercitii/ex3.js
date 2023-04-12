function ex3() {
  // generate random integers a, b, c, d between -10 and 10 (inclusive)
  const a = Math.floor(Math.random() * 100) + 1
  const b = Math.floor(Math.random() * 100) + 1
  const c = Math.floor(Math.random() * 100) + 1
  const d = Math.floor(Math.random() * 100) + 1

  // find the solution for x
  const x = (d - b) / (a - c)

  // check if x is a natural number (i.e., positive integer)
  if (x > 0 && Number.isInteger(x)) {
    // return the equation as a string
    return [`Rezolva ecuatia ${a}x + ${b} = ${c}x + ${d}`, x]
  } else {
    // if x is not a natural number, recursively call the function to generate a new equation
    return ex3()
  }
}

export default ex3
