Package.describe({
  name: 'colony:ddp-messages',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Send Meteor ddp messages from the server to the client',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JoinColony/ddp-messages.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['meteor', 'ecmascript', 'tracker', 'reactive-var']);
  api.mainModule('ddp-messages-server.js', 'server');
  api.mainModule('ddp-messages-client.js', 'client');
});

Package.onTest(function(api) {
  api.use([
    'colony:ddp-messages',
    'ecmascript',
    'meteor',
    'http',
    'practicalmeteor:chai',
    'practicalmeteor:mocha',
    'practicalmeteor:sinon',
    'dispatch:mocha-phantomjs'
  ]);

  api.add_files(['ddp-messages-client.test.js'], ['client']);
  api.add_files(['ddp-messages-server.test.js'], ['server']);
});

Npm.depends({
  'shortid': '2.2.6'
});
