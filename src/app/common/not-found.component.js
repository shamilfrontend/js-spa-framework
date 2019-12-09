import { ShFComponent } from "framework";

class NotFound extends ShFComponent {
  constructor(props) {
    super(props);
  }
}

export const notFound = new NotFound({
  selector: 'app-not-found',
  template: `
    <div style="display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 64px);">
      <div style="text-align: center;">
        <h2 class="darken-1">Страница не найдена</h2>
        <a href="#">Перейти на главную страницу</a>
      </div>
    </div>
  `,
});
