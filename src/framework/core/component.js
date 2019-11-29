export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this._el = null;
  }

  render() {
    this._el = document.querySelector(this.selector);
    if (!this._el) throw new Error(`Component with selector ${this.selector} wasn't found`);
    this._el.innerHTML = this.template;
  }
}
