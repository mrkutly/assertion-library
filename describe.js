const { expect } = require('./expect')


function describe(string, cb) {
  console.log(`-- ${string} --`)
  cb()
}

function it(string, cb) {
  console.log(`Expect that it ${string}`)
  try {
    cb()
    console.log('\x1b[32m%s\x1b[0m', 'Test passed')
  }
  catch (err) {
    console.log('\x1b[31m%s\x1b[0m', 'Test failed')
  }
}

describe('[4, [1]]', () => {
  it('is equal to [4, [1]]', () => {
    expect([4, [1]]).toEqual([4, [1]])
  })
})
