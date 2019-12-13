import { ShFComponent } from 'framework'

class DirectivePage extends ShFComponent {
  constructor(config) {
    super(config);

    this.data = {
      title: 'Главная страница!!!',
      description: 'Пока тут нет никакого функционала',
      linkTabPage: '#tabs',
      linkTitle: 'Перейти на другую страницу'
    }
  }
}

export const directivePage = new DirectivePage({
  selector: 'app-directive-page',

  template: `
  <div class="row directive-page">
    <div class="col s6 offset-s3">
      <h2 v-hover="#f00">Наведи на меня</h2>
    </div>
  </div>
  `,

  styles: `
    .directive-page {
      padding-top: 40px;
    }
  `
});
