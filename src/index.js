import {bootstrap} from './framework'
import {appModule} from './app/app.module'
import {wfm} from './framework'

wfm.delay(500)
  .then(() => {
    bootstrap(appModule);
  });
