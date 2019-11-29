import {bootstrap, utils} from "./framework";
import { appModule } from "./app/app.module";

utils.delay()
  .then(() => {
    bootstrap(appModule);
  });
