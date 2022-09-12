const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
  spec[method.toLowerCase()](endpoint);
});

When(/^I receive a response$/, async function () {
  await spec.toss();
});

Then('I expect response status code to be {int}', function (int) {
  spec.response().should.have.status(int);
});

Then('I expect response body to contain', function (value) {
  spec.response().should.have.bodyContains(value);
});

Then(/^I expect response follows json schema$/, function (json) {
  spec.response().should.have.jsonSchema(JSON.parse(json));
});

After(() => {
  spec.end();
});