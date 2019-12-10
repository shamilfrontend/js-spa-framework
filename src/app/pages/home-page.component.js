import { ShFComponent, router } from "framework"

class HomePageComponent extends ShFComponent{
  constructor(config) {
    super(config);

    this.data = {
      title: 'Главная страница',
      description: 'Пока тут нет никакого функционала',
      linkTabPage: '#tabs',
      linkTitle: 'Перейти на другую страницу'
    }
  }

  events() {
    return {
      'click .js-link': 'goToTabs'
    }
  }

  goToTabs(event) {
    event.preventDefault();
    router.navigate('tabs');
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',

  template: `
    <div class="row home-page">
      <div class="col s6 offset-s3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ title }}</span>
            <p>{{ description }}</p>
          </div>
          <div class="card-action">
            <a href="{{ linkTabPage }}" class="js-link">{{ linkTitle }}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .home-page {
      padding-top: 40px;
    }
  `
});
