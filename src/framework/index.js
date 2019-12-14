import { Module as ShFModule } from './core/module'
import { Component as ShFComponent } from './core/component/component'
import { Directive as ShFDirective } from './core/directives/directive'
import { Pipe as ShFPipe } from './core/pipes/pipe'
import { bootstrap } from './core/functions/bootstrap'
import { router } from './core/routing/router'
import { EventEmitter } from './tools/event.emitter'

import { _ } from './tools/utils'
import { $ } from './tools/dom-manipulations'

export {
  ShFModule,
  ShFComponent,
  ShFDirective,
  ShFPipe,
  bootstrap,
  router,
  EventEmitter,
  _,
  $,
}
