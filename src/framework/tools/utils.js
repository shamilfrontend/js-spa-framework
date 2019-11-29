const utils = {
  delay(ms = 1000) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    })
  }
};

export {
  utils
}
