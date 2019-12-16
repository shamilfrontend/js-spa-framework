import { VPipe } from 'framework';

class MultiPipe extends VPipe {
  constructor(config) {
    super(config);
  }
}

export const multiPipe = new MultiPipe({
  name: 'multi',
  transform(value, number = 2) {
    return value * number;
  }
});
