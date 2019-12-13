import { _ } from "framework/tools/utils";

export function initDirectives(directives) {
  if (_.isUndefined(directives)) return;

  directives.forEach(directive => directive.init());
}
