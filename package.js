Package.describe({
  name: 'codetheweb:zxcvbn',
  version: '4.2.0',
  // Brief, one-line summary of the package.
  summary: "Wrapper for Dropbox's password strength estimator",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/codetheweb/zxcvbn',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('zxcvbn.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('codetheweb:zxcvbn');
  api.addFiles('zxcvbn-tests.js');
});
