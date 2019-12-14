import { _ } from "framework/tools/utils";
import { pipesFactory } from './pipes-factory';

export function applyPipe(pipeData, value) {
  let pipe = pipesFactory.getPipe(pipeData.name);

  if (_.isUndefined(pipe)) throw new Error(`Pipe with ${pipeData.name} wasn't found`);

  if (_.isUndefined(pipeData.args)) pipeData.args = [];

  return pipe.transform(value, ...pipeData.args);
}
