const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
  request.setBaseUrl('http://localhost:3000');
  settings.setReporterAutoRun(false);
});