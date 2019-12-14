import { ShFPipe } from 'framework';

class MultiPipe extends ShFPipe {
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
