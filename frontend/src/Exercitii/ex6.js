function ex6() {
  let rand = Math.floor(Math.random() * 1000) + 10
  let norm = rand
  let inv = 0
  while (rand) {
    inv = (rand % 10) + inv * 10
    rand = Math.floor(rand / 10)
  }

  return [`Rasturnatul numarului natural ${norm} este?`, inv]
}

export default ex6
