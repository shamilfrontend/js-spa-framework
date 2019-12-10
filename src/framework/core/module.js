import { initRoutes } from "./routing/init-routing";
import { initComponents } from "./component/init-components";

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
