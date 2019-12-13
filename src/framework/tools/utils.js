const _ = {
  delay(ms = 1000) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    })
  },

  isUndefined(value) {
    return typeof value === 'undefined'
  },

  isNull(value) {
    return value === null
  },

  isString(value) {
    return typeof value === 'string';
  },

  isEmpty(values) {
    return values.length && values.length === 0;
  }
};

export {
  _
}
