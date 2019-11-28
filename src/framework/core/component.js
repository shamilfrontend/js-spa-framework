export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
  }

  render() {
    document.querySelector(this.selector).innerHTML = this.template;
  }
}
