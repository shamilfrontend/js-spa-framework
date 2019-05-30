import {WFMModule} from "../framework";
import {appComponent} from "./app.component";
import {appHeader} from "./common/app.header";
import {appRoutes} from "./app.routes";

class AppModule extends WFMModule{
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  bootstrap: appComponent,
  components: [
    appHeader,
  ],
  routes: appRoutes,
});
