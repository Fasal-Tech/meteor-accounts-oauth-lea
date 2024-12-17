/* eslint-env meteor */
Package.describe({
  name: 'mrspark:oauth-lea',
  version: '1.0.3',
  // Brief, one-line summary of the package.
  summary: 'OAuth package to provide authorizaiton code login with lea',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:leaonline/meteor-accounts-oauth-lea.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(api => {
  api.versionsFrom('3.0.4')
  api.use('ecmascript@0.12.7', ['client', 'server'])
  api.use('oauth2@1.3.3', ['client', 'server'])
  api.use('oauth@3.0.0', ['client', 'server'])
  api.use('http@3.0.0', ['server'])
  api.use('random@1.2.2', 'client')
  api.use('service-configuration@1.3.5', ['client', 'server'])
  api.addFiles('lea_client.js', 'client')  

  api.addFiles('lea_server.js', 'server')

  api.export('Lea')
})
