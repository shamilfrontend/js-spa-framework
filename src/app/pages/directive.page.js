import { ShFComponent } from 'framework'

class DirectivePage extends ShFComponent {
  constructor(config) {
    super(config);
  }
}

export const directivePage = new DirectivePage({
  selector: 'app-directive-page',

  template: `
  <h1 class="center">Directives Page</h1>
  <div class="row directive-page">
    <div class="col s6 offset-s3">
      <ul>
        <li>
          <h3>Директива <strong>v-hover</strong></h3>
          <p v-hover="#f00">Наведи на меня</p>
        </li>
      </ul>
    </div>
  </div>
  `,

  styles: `
    .directive-page {
      padding-top: 40px;
    }
  `
});
