angular.module('ngDay2App.directives')
	.directive('myDirective', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/directives.html'
		}
	})

	.directive('logoDirective', function() {
		return {
			restrict: 'E',
			// scope: {
			// 	logo: '@'
			// },
			templateUrl: 'views/logoDirective.html',
			link: function(scope, element, attrs) {
				element.on('click', function(e) {
					element.children().toggleClass('logoChange');
					alert('it works');
				});
			}
		}
	});