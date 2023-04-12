function generateNumbers(par, alese) {
  const results = []
  const unit = []
  const zeci = []
  const sute = []

  alese.forEach((digit) => {
    if (digit % 2 != par) unit.push(digit)
  })

  alese.forEach((digit) => {
    zeci.push(digit)
  })

  alese.forEach((digit) => {
    if (digit != 0) sute.push(digit)
  })

  unit.forEach((u) => {
    zeci.forEach((z) => {
      sute.forEach((s) => {
        if (u != z && z != s && u != s) results.push(u + z * 10 + s * 100)
      })
    })
  })
  return results
}

function ex5() {
  let par
  if (Math.random() <= 0.5) {
    par = true
  } else {
    par = false
  }

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  let alese = []

  let r
  for (let i = 0; i < 3; i++) {
    r = Math.floor(Math.random() * digits.length)
    alese.push(digits[r])
    digits.splice(r, r)
  }

  const rez = generateNumbers(par, alese)

  if (rez.length == 0 || rez.length > 15) return ex5()
  if (par)
    return [
      `Scrie toate numerele naturale pare de exact 3 cifre diferite cu ${alese}`,
      rez,
    ]
  else
    return [
      `Scrie toate numerele naturale impare de exact 3 cifre diferite cu ${alese}`,
      rez,
    ]
}

export default ex5
