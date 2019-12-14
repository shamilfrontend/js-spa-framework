import { _, $ } from "framework";

import { parsePipe } from '../pipes/parse-зipe';
import { applyPipe } from '../pipes/apply-pipe';

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

  template = template.replace(re, (string, expression) => {
    let key = expression.trim();
    let pipe;

    if (hasPipe(key)) {
      pipe = parsePipe(key);
      key = getKeyFromPipe(key);
    }

    if (_.isUndefined(pipe)) return data[key];

    return applyPipe(pipe, data[key]);
  });

  return template;
}

function initStyles(styles) {
  if (_.isUndefined(styles)) return;

  let style = $(document.createElement('style'));
  style.html(styles);

  $(document.head).append(style)
}

function hasPipe(key) {
  return key.includes('|');
}

function getKeyFromPipe(key) {
  return key.split('|')[0].trim();
}
