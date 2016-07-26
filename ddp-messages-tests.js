// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ddp-messages.js.
import { name as packageName } from "meteor/colony:ddp-messages";

// Write your tests here!
// Here is an example.
Tinytest.add('ddp-messages - example', function (test) {
  test.equal(packageName, "ddp-messages");
});
