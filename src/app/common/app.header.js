import { ShFComponent } from "framework";

class AppHeader extends ShFComponent {
  constructor(props) {
    super(props);
  }
}

export const appHeader = new AppHeader({
  selector: 'app-header',
  template: `
    <nav class="indigo nav-block">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Native Framework</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Главная</a></li>
          <li><a href="#tabs">Табы</a></li>
          <li><a href="#directive">Директивиы</a></li>
        </ul>
      </div>
    </nav>
  `,

  styles: `
    .nav-block {
      padding: 0 20px;
    }
  `
});
