import { _, $ } from "framework";

export class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.styles = config.styles;
    this.el = null;
  }

  render() {
    initStyles(this.styles);
    this.el = $(this.selector);

    if (!this.el) throw new Error(
      `Component with selector ${this.selector} wasn't found`
    );

    this.el.html(compileTemplate(this.template, this.data));

    initEvents.call(this);
  }
}

function initEvents() {
  if (!this.events) return;

  let events = this.events();

  Object.keys(events).forEach(key => {
    let listener = key.split(' ');

    this.el
      .find(listener[1])
      .on(listener[0], this[events[key]].bind(this))
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

  let style = $(document.createElement('style'));
  style.html(styles);

  $(document.head).append(style)
}
