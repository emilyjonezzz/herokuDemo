'use strict';

angular.module('ngDay2App');
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = true;
};
var RatingDemoCtrl = function ($scope) {
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };
};


angular.module('ngDay2App')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

    $scope.createPost = function() {
      $location.path('/new');
    };
    $scope.newPost = function(post) {
      PostsSvc.create(post)
      $location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function ($scope, $location, $routeParams, PostSvc) {

    $scope.post = PostSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      PostSvc.delete({ id: $routeParams.id });
      $location.path('/blog');
    };
    $scope.edit = function() {
      PostSvc.edit($scope.post);
      $location.path('/blog');
    };

  })


  .controller('ProductsCtrl', function ($scope, $location, ProductsSvc) {

    $scope.createProduct = function() {
      $location.path('/newproduct');
    };
    $scope.newProduct = function(product) {
      ProductsSvc.create(product)
      $location.path('/product');
    };
    $scope.products = ProductsSvc.query();
    
  })
  .controller('ProductCtrl', function ($scope, $location, $routeParams, ProductSvc) {

    $scope.product = ProductSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      ProductSvc.delete({ id: $routeParams.id });
      $location.path('/product');
    };
    $scope.edit = function() {
      ProductSvc.edit($scope.product);
      $location.path('/product');
    };
  })
  .controller("PanelController", function() {
  this.tab = 0;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
  })
  .controller('CartItemsCtrl', function ($scope, $location, CartItemsSvc) {

    // $scope.addItem = function() {
    //   $location.path('/cart');
    // };
    $scope.addItem = function(item) {
      CartItemsSvc.create(item)
      $location.path('/cart');
    };
    $scope.items = CartItemsSvc.query();
  })
  .controller('CartItemCtrl', function ($scope, $location, $routeParams, CartItemSvc) {

    $scope.cartItem = CartItemSvc.show({ id: $routeParams.id });
    $scope.deleteItem = function() { 
      CartItemSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.editItem = function() {
      CartItemSvc.edit($scope.cartItem);
      $location.path('/cart');
    };

  });




  




