import { Meteor } from 'meteor/meteor';
import shortid from 'shortid';
import { EventEmitter } from 'events';

const emitter = new EventEmitter();

Meteor.publish('__ddp-messages__', function () {
  const id = 'message';
  this.added('__ddp-messages-collection__', id, { msgId: shortid.generate() });

  emitter.on('message', (name, data) => {
    this.changed('__ddp-messages-collection__', id, { msgId: shortid.generate(), name, data });
  });

  this.ready();
  this.onStop(function () {
    emitter.removeAllListeners();
  });
});

export function emitDDPMessage (name, data) {
  emitter.emit('message', name, data);
}
