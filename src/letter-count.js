export const getLetterCount = (word) => {
  const letters = word.split('')
  let letterCount = {}

  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1
    } else {
      letterCount[letter]++
    }
  })

  return letterCount
}
