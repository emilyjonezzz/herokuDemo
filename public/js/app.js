'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
    'ui.bootstrap'
    // 'ngDay2App.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/product', {
        templateUrl: 'views/product-list.html',
        controller: 'ProductsCtrl'
      })
      .when('/newproduct', {
        templateUrl: 'views/product-create.html',
        controller: 'ProductsCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/product-detail.html',
        controller: 'ProductCtrl'
      })
      .when('/product/:id/edit', {
        templateUrl: 'views/product-editDetail.html',
        controller: 'ProductCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart-list.html',
        controller: 'CartItemsCtrl'
      })
      .when('/newcart', {
        templateUrl: 'views/cart-create.html',
        controller: 'CartItemsCtrl'
      })
      .when('/cart/:id', {
        templateUrl: 'views/cart-detail.html',
        controller: 'CartItemCtrl'
      })
      .when('/cart/:id/edit', {
        templateUrl: 'views/cart-editDetail.html',
        controller: 'CartItemCtrl'
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

// angular.module('ngDay2App.directives', []);
