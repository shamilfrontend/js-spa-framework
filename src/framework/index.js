// core
import { Module as VModule } from './core/module'
import { Component as VComponent } from './core/component/component'
import { Directive as VDirective } from './core/directives/directive'
import { Pipe as VPipe } from './core/pipes/pipe'
import { bootstrap } from './core/functions/bootstrap'
import { router } from './core/routing/router'
import { EventEmitter } from './tools/event.emitter'

// tools
import { _ } from './tools/utils'
import { $ } from './tools/dom-manipulations'
import { http } from './tools/http'

export {
  VModule,
  VComponent,
  VDirective,
  VPipe,
  bootstrap,
  router,
  EventEmitter,

  _,
  $,
  http
}
