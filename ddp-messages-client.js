import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { ReactiveVar } from 'meteor/reactive-var';

const messages = new Meteor.Collection('__ddp-messages-collection__');
const map = {};

Tracker.autorun(function () {
  if (Meteor.subscribe('__ddp-messages__').ready()) {
    const doc = messages.findOne();
    if (!doc) return;
    if (!map[doc.name]) {
      map[doc.name] = new ReactiveVar();
    }
    map[doc.name].set(doc.data);
  }
})

export function getLastDDPMessage (name) {
  if (!map[name]) {
    map[name] = new ReactiveVar();
  };
  return map[name].get();
}

