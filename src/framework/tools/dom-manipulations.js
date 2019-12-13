import { _ } from './utils';

class DomManipulations {
  constructor(element) {
    if (_.isString(element)) {
      element = document.querySelector(element)
    }
    this.nativeElement = element;
    this.isOurInstance = true;
  }

  on(eventName, callback, context = null) {
    callback = callback.bind(context);
    this.nativeElement.addEventListener(eventName, callback);
    return this;
  }

  off(eventName, callback) {
    this.nativeElement.removeEventListener(eventName, callback);
    return this;
  }

  css(styles) {
    if (_.isUndefined(styles)) return this.nativeElement.style;

    Object.keys(styles).forEach(key => {
      this.nativeElement.style[key] = styles[key];
    });

    return this;
  }

  addClass(className) {
    this.nativeElement.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.nativeElement.classList.remove(className);
    return this;
  }

  hasClass(className) {
    return this.nativeElement.classList.contains(className);
  }

  html(htmlCode) {
    if (htmlCode.isOurInstance) {
      htmlCode = htmlCode.nativeElement.innerHTML;
    }
    this.nativeElement.innerHTML = htmlCode;
    return this;
  }

  append(element) {
    if (element.isOurInstance) {
      element = element.nativeElement
    }
    this.nativeElement.appendChild(element);
    return this;
  }

  parent() {
    return $(this.nativeElement.parentNode);
  }

  attr(name, value = null) {
    if (_.isNull(value)) {
      return this.nativeElement.getAttribute(name);
    }
    this.nativeElement.setAttribute(name, value);
    return this;
  }

  find(selector) {
    return $(this.nativeElement.querySelector(selector));
  }

  findAll(selector) {
    return Array
      .from(this.nativeElement.querySelectorAll(selector))
      .map($);
  }
}

export function $(element) {
  return new DomManipulations(element)
}
