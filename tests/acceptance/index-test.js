import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
// test('Feed should show up', function (assert) {
// });
//
// test('Feed should have posts in it.', function (assert) {
// });
// test('Should be able to upload video', function (assert) {
// });
// test('Video should load', function (assert) {
// });
//
//
//
// test('Posts should have options to edit', function (assert) {
// });
//
// test('Login should show up', function (assert) {
// });
//
// test('Login should have a form that sends a request when used', function (assert) {
// });
//
// test('Logged-in user should be able to post', function (assert) {
// });

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
