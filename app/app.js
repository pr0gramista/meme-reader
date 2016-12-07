var classes = ['default', 'kwejk', 'demotywatory', 'mistrzowie', 'thecodinglove'];
function make_classes(classToExist) {
    var body = $('body');
    classes.forEach(function(value, index, next) {
        if(value == classToExist)
            body.toggleClass(value, true);
        else
            body.removeClass(value);
    });

    $('a[href="#kwejk"]').toggleClass("selected", false);
    $('a[href="#demotywatory"]').toggleClass("selected", false);
    $('a[href="#mistrzowie"]').toggleClass("selected", false);
    $('a[href="#thecodinglove"]').toggleClass("selected", false);

    $('a[href="#' + classToExist + '"]').toggleClass("selected", true);
}

function getURL(root, page) {
    if(page !== undefined)
        return API + '/' + root + '/' + page;
    else
        return API + '/' + root + '/';
}

var app = angular.module("meme-reader", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "default.html",
        controller : "defaultController"
    })
    .when("/kwejk", {
        templateUrl : "kwejk.html",
        controller : "siteController",
        site: "kwejk"
    })
    .when("/kwejk/:page", {
        templateUrl : "kwejk.html",
        controller : "siteController",
        site: "kwejk"
    })
    .when("/mistrzowie", {
        templateUrl : "mistrzowie.html",
        controller : "siteController",
        site: "mistrzowie"
    })
    .when("/mistrzowie/:page", {
        templateUrl : "mistrzowie.html",
        controller : "siteController",
        site: "mistrzowie"
    })
    .when("/thecodinglove", {
        templateUrl : "thecodinglove.html",
        controller : "siteController",
        site: "thecodinglove"
    })
    .when("/thecodinglove/:page", {
        templateUrl : "thecodinglove.html",
        controller : "siteController",
        site: "thecodinglove"
    })
    .when("/demotywatory", {
        templateUrl : "demotywatory.html",
        controller : "siteController",
        site: "demotywatory"
    })
    .when("/demotywatory/:page", {
        templateUrl : "demotywatory.html",
        controller : "siteController",
        site: "demotywatory"
    })
    .otherwise({
      redirectTo:'/'
    });
});
app.controller("siteController", function ($scope, $route, $routeParams, $http) {
    var site = $route.current.site;
    var page = $routeParams.page;
    var url = getURL(site, page);

    make_classes(site);

    $scope.nextSlide = function(post) {
        post.currentSlide += 1;
        if(post.currentSlide >= post.content.urls.length)
            post.currentSlide = 0;
    };

    $scope.previousSlide = function(post) {
        post.currentSlide -= 1;
        if(post.currentSlide < 0)
            post.currentSlide = post.content.urls.length - 1;
    };

    $http.get(url).then(function(response) {
        $scope.data = response.data;
    });
});
app.controller("defaultController", function ($scope) {
    make_classes("default");
});
