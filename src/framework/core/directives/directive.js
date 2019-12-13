import { $ } from '../../tools/dom-manipulations';
import { _ } from '../../tools/utils';

export class Directive {
  constructor(config) {
    this.selector = config.selector;
    this.onInit = config.onInit;
  }

  init() {
    const elements = $(document).findAll(this.selector);

    if (!_.isUndefined(this.onInit) && !_.isEmpty(elements)) {
      elements.forEach(element => {
        this.onInit(element, getParamValue(element, this.selector))
      })
    }
  }
}

function getParamValue(element, selector) {
  // const directiveName = selector.slice(1).slice(0, selector.length - 2);
  const directiveName = selector.replace('[', '').replace(']', '');
  console.log('directiveName', directiveName);
  return element
    .attr(directiveName)
}
