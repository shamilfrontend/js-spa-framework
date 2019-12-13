import { _, router, $ } from "framework";
import { renderComponent } from "../component/render-component";

export class RoutingModule {
  constructor(routes, dispatcher) {
    this.routes = routes;
    this.dispatcher = dispatcher;
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
  $('router-outlet').html(`<${selector}></${selector}>`);
  renderComponent(route.component);

  this.dispatcher.emit('routing.change-page');
}
