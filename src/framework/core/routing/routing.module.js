import { _, router } from "framework";
import { renderComponent } from "../component/render-component";

export class RoutingModule {
  constructor(routes) {
    this.routes = routes
  }

  init() {
    window.addEventListener('hashchange', renderRoute.bind(this));
    renderRoute.call(this)
  }
}

function renderRoute() {
  let route = this.routes.find(route => route.path === router.getUrl());

  if (!route) {
    route = this.routes.find(route => route.path === '**')
  }

  const {selector} = route.component;
  document.querySelector('router-outlet').innerHTML = `<${selector}></${selector}>`;
  renderComponent(route.component)
}
