import { ShFDirective } from "framework";

class AppHoverDirective extends ShFDirective {
  constructor(config) {
    super(config);
  }
}

export const appHoverDirective = new AppHoverDirective({
  selector: '[v-hover]',

  onInit(element, color = 'blue') {
    const defaultColor = element.css().color;

    element.on('mouseenter', () => {
      element.css({
        color
      });
    });

    element.on('mouseleave', () => {
      element.css({
        color: defaultColor
      });
    });
  }
});
