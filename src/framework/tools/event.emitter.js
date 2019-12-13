import { _ } from './utils';

export class EventEmitter {
  constructor() {
    this.listeners = {}
  }

  on(eventName, callback) {
    if(_.isUndefined(this.listeners[eventName])) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
  }

  emit(eventName, data) {
    if (_.isUndefined(this.listeners[eventName])) return;

    this.listeners[eventName].forEach(callback => callback(data))
  }
}
