import {router} from "../tools/router";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    if (this.routes) this.initRoutes()
  }

  initComponents() {
    this.bootstrapComponent.render();
    this.components.forEach(this.renderComponent.bind(this))
  }

  initRoutes() {
    window.addEventListener('hashchange', this.renderRoute.bind(this));
    this.renderRoute();
  }

  renderRoute() {
    let route = this.routes.find(route => route.path === router.getUrl());

    if (!route) {
      route = this.routes.find( route => route.path === '**')
    }

    const { selector } = route.component;
    document.querySelector('router-outlet').innerHTML = `<${selector}></${selector}>`;
    this.renderComponent(route.component);
  }

  renderComponent(c) {
    c.render();
  }
}
