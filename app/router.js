import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('people', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('subjects', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('classes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('grades', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
});

export default Router;
