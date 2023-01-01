import { expect } from 'chai'
import { getLetterCount } from './letter-count'

describe('getLetterCount - basic functionality', () => {
  it('When an empty string is passed, the function returns an empty object.', () => {
    const expected = {}
    const actual = getLetterCount('')
    expect(actual).to.deep.equal(expected)
  })

  it('returns the correct letter count for a word that contains exactly one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 } // 'cat' -> { c: 1, a: 1, t: 1 }
    const actual = getLetterCount('cat')
    expect(actual).to.deep.equal(expected)
  })

  it('returns the correct letter count for words containing more than one of a specific letter', () => {
    const expected = { m: 1, i: 4, s: 3, p: 2 } // 'missisippi' -> { m: 1, i: 4, s: 3, p: 2 }
    const actual = getLetterCount('missisippi')
    expect(actual).to.deep.equal(expected)
  })
})
