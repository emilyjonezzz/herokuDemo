'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/product', {
        templateUrl: 'views/product-list.html',
        controller: ''
      })
      .when('/new', {
        templateUrl: 'views/product-create.html',
        controller: ''
      })
      .when('/product/:id', {
        templateUrl: 'views/product-detail.html',
        controller: ''
      })
      .when('/product/:id/edit', {
        templateUrl: 'views/product-editDetail.html',
        controller: ''
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
