import { initRoutes } from "./routing/init-routing";
import { initComponents } from "./component/init-components";
import { initDirectives } from "./directives/init-directives";
import { EventEmitter } from "../tools/event.emitter";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
    this.directives = config.directives;

    this.dispatcher = new EventEmitter();
  }

  start() {
    initComponents(this.bootstrapComponent, this.components);
    initRoutes(this.routes, this.dispatcher);
    initDirectives(this.directives);

    this.dispatcher.on('routing.change-page', () => {
      initDirectives(this.directives);
    })
  }
}
