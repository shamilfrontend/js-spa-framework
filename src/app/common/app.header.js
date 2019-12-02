import { ShFComponent } from "../../framework";

class AppHeader extends ShFComponent {
  constructor(props) {
    super(props);
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <nav class="indigo" style="padding: 0 20px;">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Native Framework</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#tabs">Табы</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
});
