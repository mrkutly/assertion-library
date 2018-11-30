function compareObj(obj1, obj2) {
  for (let key in obj1) {
    // for nested objects or arrays
    if (typeof obj1[key] === 'object' && obj2[key] && typeof obj2[key] === 'object') {
      const equal = compareObj(obj1[key], obj2[key])
      if (!equal) return false
    } else if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

module.exports = { compareObj }
