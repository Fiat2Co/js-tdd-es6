# JavaScript: Test-Driven Development (ES6)
https://www.linkedin.com/learning/javascript-test-driven-development-es6

## Introduction

The author of the video used Node.js 10.16.3 LTS. I'm using Node.js 18.12.1 LTS.

## 1. Test-Driven Development (TDD) Basics

## 2. Writing Unit Tests

```sh
npm init -y
...

npm i -D mocha chai
...

npm i -D @babel/core @babel/preset-env @babel/register
...
```

```sh
npx mocha "src/**/*.test.js" --recursive --require @babel/register
```

```sh
npm i -D lodash
```

```sh
npm run test
```

```sh
> js-tdd-es6@1.0.0 test
> npx mocha "src/**/*.test.js" --recursive --require @babel/register


  isAnagram - basic functionality
    ✔ When two known anagrams are passed in, the function returns true.
    ✔ When either of the strings contains extra letters, the function returns false.
    ✔ When the string contains the same letters in different quantities, the function returns false.

  getLetterCount - basic functionality
    ✔ When an empty string is passed, the function returns an empty object.
    ✔ returns the correct letter count for a word that contains exactly one of each letter
    ✔ returns the correct letter count for words containing more than one of a specific letter

  6 passing (9ms)
```

