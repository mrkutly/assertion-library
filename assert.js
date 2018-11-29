function compareObj(obj1, obj2) {
  for (let key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

const expect = (res) => {
  return {
    res,
    
    toBe: function(val) {
      if (val !== this.res) return false
      return true
    },

    toEqual: function(val) {
      if (typeof val === 'object') return compareObj(val, this.res)
      if (val != this.res) return false
      return true
    },

    toNotBe: function(val) {
      if (val === this.res) return false
      return true
    },

    toNotEqual: function(val) {
      if (val == this.res) return false
      return true
    }
  }
}
