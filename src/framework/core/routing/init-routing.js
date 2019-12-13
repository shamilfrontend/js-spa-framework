import { _ } from "framework/tools/utils";
import { RoutingModule } from "./routing.module";

export function initRoutes(routes, dispatcher) {
  if (_.isUndefined(routes)) return;

  const routing = new RoutingModule(routes, dispatcher);

  routing.init();
}
