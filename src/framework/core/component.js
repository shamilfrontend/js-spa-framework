export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.el = null;
  }

  render() {
    this.el = document.querySelector(this.selector);

    if (!this.el) throw new Error(`Component with selector ${this.selector} wasn't found`);

    this.el.innerHTML = this.template;
  }
}
