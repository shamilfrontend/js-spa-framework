export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
  }

  start() {
    this.initComponents()
  }

  initComponents() {
    this.bootstrapComponent.render();
    this.components.forEach(component => component.render())
  }
}
