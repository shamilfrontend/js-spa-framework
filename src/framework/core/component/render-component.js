import { _ } from "framework";

export function renderComponent(component) {
  if (!_.isUndefined(component.beforeMounte)) component.beforeMounte();
  component.render();
  if (!_.isUndefined(component.mounted)) component.mounted();
}
