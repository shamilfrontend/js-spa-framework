import { ShFComponent, router, http } from "framework"

class HomePage extends ShFComponent{
  constructor(config) {
    super(config);

    this.data = {
      title: 'Главная страница!!!',
      description: 'Пока тут нет никакого функционала',
      linkTabPage: '#tabs',
      linkTitle: 'Перейти на другую страницу',
      ip: ''
    }
  }

  events() {
    return {
      'click .js-link': 'goToTabs'
    }
  }

  mounted() {
    http.get('https://api.ipify.org/?format=json')
      .then(({ ip }) => {
        this.data.ip = ip;
        this.render();
      })
  }

  goToTabs(event) {
    event.preventDefault();
    router.navigate('tabs');
  }
}

export const homePage = new HomePage({
  selector: 'app-home-page',

  template: `
    <div class="row home-page">
      <div class="col s6 offset-s3">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ title }}</span>
            <p>{{ description }}</p>
            <p>Текущий IP-адрес: {{ ip }}</p>
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
