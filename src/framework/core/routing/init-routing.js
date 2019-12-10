import { _ } from "framework/tools/utils";
import { RoutingModule } from "./routing.module";

export function initRoutes(routes) {
  if (_.isUndefined(routes)) return;

  const routing = new RoutingModule(routes);

  routing.init();
}
