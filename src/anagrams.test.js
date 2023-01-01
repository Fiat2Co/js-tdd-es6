import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('isAnagram - basic functionality', () => {
  it('When two known anagrams are passed in, the function returns true.', () => {
    const expected = true
    const actual = isAnagram('listen', 'silent')
    expect(actual).to.deep.equal(expected)
  })

  it('When either of the strings contains extra letters, the function returns false.', () => {
    const expected = false
    let actual = isAnagram('elbows', 'below')
    expect(actual).to.deep.equal(expected)

    actual = isAnagram('below', 'elbows')
    expect(actual).to.deep.equal(expected)
  })

  it('When the string contains the same letters in different quantities, the function returns false.', () => {
    const expected = false
    const actual = isAnagram('listens', 'silent')
    expect(actual).to.deep.equal(expected)
  })
})
