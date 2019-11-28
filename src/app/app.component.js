import { ShFComponent } from "../framework";

class AppComponent extends ShFComponent {
  constructor(config) {
    super(config)
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
  <div>
    <h4>App Component works!</h4>
    <h6>Does it really works</h6>
  </div>
  `
});
