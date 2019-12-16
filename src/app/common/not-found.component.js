import { VComponent } from "framework";

class NotFound extends VComponent {
  constructor(props) {
    super(props);
  }
}

export const notFound = new NotFound({
  selector: 'app-not-found',
  template: `
    <div class="not-found-page">
      <div class="not-found-page__inner">
        <h2 class="darken-1">Страница не найдена</h2>
        <a href="#">Перейти на главную страницу</a>
      </div>
    </div>
  `,
  styles: `
    .not-found-page {
      display: flex;
      align-items: center;
      justify-content: center; 
      min-height: calc(100vh - 64px);
    }
    
    .not-found-page__inner {
      text-align: center;
    }
  `
});
