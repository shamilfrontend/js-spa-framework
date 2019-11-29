import { ShFModule } from '../framework'

// components
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";

class AppModule extends ShFModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    appHeader
  ],

  bootstrap: appComponent
});
