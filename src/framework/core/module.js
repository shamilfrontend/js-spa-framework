import { renderComponent } from "./component/render-component";
import { RoutingModule } from "./routing/routing.module";
import { _ } from "../tools/utils";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    initComponents(this.bootstrapComponent, this.components);
    initRoutes(this.routes);
  }
}

function initComponents(bootstrap, components) {
  if (_.isUndefined(bootstrap)) {
    throw new Error('Bootstrap component is not defined');
  }
  [bootstrap, ...components].forEach(renderComponent);
}

function initRoutes(routes) {
  if (_.isUndefined(routes)) return;

  const routing = new RoutingModule(routes);

  routing.init();
}
