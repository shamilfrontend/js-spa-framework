import { ShFComponent } from "../framework";

class AppComponent extends ShFComponent {
  constructor(config) {
    super(config)
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="row" style="padding-top: 40px;">
      <div class="col s6 offset-s3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Главная страница</span>
            <p>Пока тут нет никакого функционала</p>
          </div>
          <div class="card-action">
            <a href="#">Перейти на другую страницу</a>
          </div>
        </div>
      </div>
    </div>
  `
});
