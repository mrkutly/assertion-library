const { compareObj } = require('./utils/compare')

const expect = (res) => {
  return {
    res,

    toBe: function(val) {
      if (val !== this.res) {
        throw new Error
      } else {
        return this
      }
    },

    toEqual: function(val) {
      if (typeof val === 'object') {
        const equal = compareObj(val, this.res)
        if (!equal) {
          throw new Error
        } else {
          return this
        }
      }

      if (val != this.res) {
        throw new Error
      } else {
        return this
      }
    },

    toNotBe: function(val) {
      if (val === this.res) {
        throw new Error
      } else {
        return this
      }
    },

    toNotEqual: function(val) {
      if (val == this.res) {
        throw new Error
      } else {
        return this
      }
    }
  }
}

module.exports = { expect }
