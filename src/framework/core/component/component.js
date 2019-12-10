import { _ } from "framework";

export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.styles = config.styles;
    this._el = null;
  }

  render() {
    initStyles(this.styles);
    this._el = document.querySelector(this.selector);
    if (!this._el) throw new Error(
      `Component with selector ${this.selector} wasn't found`
    );
    this._el.innerHTML = compileTemplate(this.template, this.data);

    initEvents.call(this);
  }
}

function initEvents() {
  if (!this.events) return;

  let events = this.events();

  Object.keys(events).forEach(key => {
    let listener = key.split(' ');

    this._el
      .querySelector(listener[1])
      .addEventListener(listener[0], this[events[key]].bind(this))
  })
}

function compileTemplate(template, data) {
  if (_.isUndefined(data)) return template;

  const re = /{{(.*?)}}/g;

  template = template.replace(re, (string, key) => {
    return data[key.trim()];
  });

  return template;
}

function initStyles(styles) {
  if (_.isUndefined(styles)) return;

  let style = document.createElement('style');
  style.innerHTML = styles;

  document.head.appendChild(style)
}
