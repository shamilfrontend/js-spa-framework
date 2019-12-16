import { VComponent } from 'framework'

class PipesPage extends VComponent {
  constructor(config) {
    super(config);

    this.data = {
      number: 10
    }
  }
}

export const pipesPage = new PipesPage({
  selector: 'app-pipes-page',

  template: `
  <h1 class="center">Pipes Page</h1>
  <div class="row directive-page">
    <div class="col s6 offset-s3">
      <ul>
        <li>
          <h3>Pipe - multi</h3>
          <p>Value = <strong>{{ number }}</strong></p>
          <p>Value with pipe multi - <strong>{{ number | multi }}</strong></p>
          <p>Value with pipe multi and param 5 - <strong>{{ number | multi:5 }}</strong></p>
          <p>Value with pipe multi and param 500 - <strong>{{ number | multi:500 }}</strong></p>
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
