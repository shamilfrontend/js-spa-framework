import { ShFModule } from '../framework'

import { appComponent } from "./app.component";

class AppModule extends ShFModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    appComponent
  ]
});
