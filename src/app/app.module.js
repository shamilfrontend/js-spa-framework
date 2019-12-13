import { ShFModule } from 'framework'
import { appRoutes } from './app.routes'

// components
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";
import { appHoverDirective } from "./common/directives/hover.directive";

class AppModule extends ShFModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    appHeader
  ],

  bootstrap: appComponent,

  routes: appRoutes,

  directives: [
    appHoverDirective
  ]
});
