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
  }
};

export {
  _
}
