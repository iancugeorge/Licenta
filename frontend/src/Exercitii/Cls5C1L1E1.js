function numberToText(number) {
  const zeroToNineteen = [
    'zero',
    'unu',
    'doi',
    'trei',
    'patru',
    'cinci',
    'sase',
    'sapte',
    'opt',
    'noua',
    'zece',
    'unsprezece',
    'doisprezece',
    'treisprezece',
    'paisprezece',
    'cincisprezece',
    'saisprezece',
    'saptesprezece',
    'optsprezece',
    'nouasprezece',
  ]
  const tens = [
    '',
    '',
    'douazeci',
    'treizeci',
    'patruzeci',
    'cincizeci',
    'saizeci',
    'saptezeci',
    'optzeci',
    'nouazeci',
  ]
  const hundreds = [
    '',
    'o suta',
    'doua sute',
    'trei sute',
    'patru sute',
    'cinci sute',
    'sase sute',
    'sapte sute',
    'opt sute',
    'noua sute',
  ]

  if (number < 0 || number > 999) {
    return 'Numarul trebuie sa fie între 0 si 999'
  }

  if (number < 20) {
    return zeroToNineteen[number]
  }

  if (number < 100) {
    const ten = tens[Math.floor(number / 10)]
    const unit = zeroToNineteen[number % 10]
    if (number % 10 === 0) {
      return ten
    }
    return ten + ' si ' + unit
  }

  const hundred = hundreds[Math.floor(number / 100)]
  const rest = number % 100

  if (rest === 0) {
    return hundred
  }

  const restText = numberToText(rest)
  return hundred + ' ' + restText
}

export default function Cls5C1L1E1() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1
  const numberText = numberToText(randomNumber)
  return [`Scrie cu cifre numarul natural ${numberText}.`, randomNumber]
}
