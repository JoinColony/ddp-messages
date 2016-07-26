/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { DDP } from 'meteor/ddp-client';
import { Tracker } from 'meteor/tracker';
import { expect } from 'meteor/practicalmeteor:chai';
import { getLastDDPMessage } from 'meteor/colony:ddp-messages';

const waitForSubscriptions = () => new Promise(resolve => {
  const poll = Meteor.setInterval(() => {
    if (DDP._allSubscriptionsReady()) {
      Meteor.clearInterval(poll);
      resolve();
    }
  }, 200);
});

describe('DDP messages integration test', function () {

  before(waitForSubscriptions);

  it('get the last DDP message reactively', function (done) {
    setTimeout(function () {
       Meteor.call('__ddp-messages-test-send-message__', { name: 'test',  data: { foo: 'bar' }});
    }, 500);
    Tracker.autorun(function () {
      const msg = getLastDDPMessage('test');
      if (msg) {
        expect(msg).to.deep.equal({ foo: 'bar' });
        done();
      }
    });
  });

});
