'use strict';

// angular.module('ngDay2App', ['ui.bootstrap']);
// function CollapseDemoCtrl($scope) {
//   $scope.isCollapsed = false;
// };

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
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  });

angular.module('ngDay2App')
  .controller('ProductsCtrl', function ($scope, $location, ProductsSvc) {

    $scope.createProduct = function() {
      $location.path('/newproduct');
    };
    $scope.newProduct = function(product) {
      ProductsSvc.create(product)
      $location.path('/product');
    };
    $scope.products = ProductsSvc.query();
    $scope.addItem = function(product) {
    $scope.purchased.push(product);
    }
    $scope.purchased = [];
    $scope.removeItem = function(index) {
      $scope.purchased.splice(index, 1);
    }
    $scope.purchased = [];
  })
  .controller('ProductCtrl', function($scope, $location, $routeParams, ProductSvc) {

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

  .controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  angular.module('ngDay2App')
  .controller('CartItemsCtrl', function ($scope, $location, CartItemsSvc) {

    $scope.addItem = function() {
      $location.path('/cart');
    };
    $scope.newItem = function(item) {
      CartItemsSvc.create(item)
      $location.path('/cart');
    };
    $scope.items = CartItemsSvc.query();
  })
  .controller('CartItemCtrl', function($scope, $location, $routeParams, CartItemSvc) {

    $scope.item = CartItemSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      CartItemSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.edit = function() {
      CartItemSvc.edit($scope.item);
      $location.path('/cart');
    };

  });



  




