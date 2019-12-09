import { _ } from "framework";

export function renderComponent(component) {
  if (!_.isUndefined(component.beforeInit)) component.beforeInit();
  component.render();
  if (!_.isUndefined(component.afterInit)) component.afterInit();
}
