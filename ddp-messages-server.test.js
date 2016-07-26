import { emitDDPMessage } from 'meteor/colony:ddp-messages';
import { expect } from 'meteor/practicalmeteor:chai';

Meteor.methods({
  '__ddp-messages-test-send-message__': function (msg) {
    emitDDPMessage(msg.name, msg.data);
  }
});

describe('ddp-messages', function () {

  it('has a emitDDPMessage function', function () {
    expect(emitDDPMessage).to.be.a('function')
  });

})
