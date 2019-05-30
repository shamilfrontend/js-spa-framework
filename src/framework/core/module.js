import {router} from "../index";
import {wfm} from "../tools/util";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponents = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    if (this.routes) this.initRoutes();
  }

  initComponents() {
    this.bootstrapComponents.render();
    this.components.forEach(this.renderComponent.bind(this));
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRouter.bind(this));
    this.renderRouter();
  }

  renderRouter() {
    let url = router.getUrl();
    let route = this.routes.find(route => route.path === url);

    if (wfm.isUndefined(route)) {
      route = this.routes.find(route => route.path === '**')
    }

    document.querySelector('router-outlet').innerHTML = `
      <${route.component.selector}></${route.component.selector}>
    `;
    this.renderComponent(route.component);
  }

  renderComponent(component) {
    component.render();
  }
}
