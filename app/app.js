var classes = ['default', 'kwejk', 'demotywatory', 'mistrzowie', 'thecodinglove', 'jbzd', '9gag'];
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
    $('a[href="#jbzd"]').toggleClass("selected", false);
    $('a[href="#9gag"]').toggleClass("selected", false);

    $('a[href="#' + classToExist + '"]').toggleClass("selected", true);
}

function getURL(root, page) {
    if(page !== undefined)
        return API + '/' + root + '/page/' + page;
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
    .when("/kwejk/page/:page", {
        templateUrl : "kwejk.html",
        controller : "siteController",
        site: "kwejk"
    })
    .when("/kwejk/:id", {
        templateUrl : "kwejk_single.html",
        controller : "singleMemeController",
        site: "kwejk"
    })
    .when("/mistrzowie", {
        templateUrl : "mistrzowie.html",
        controller : "siteController",
        site: "mistrzowie"
    })
    .when("/mistrzowie/page/:page", {
        templateUrl : "mistrzowie.html",
        controller : "siteController",
        site: "mistrzowie"
    })
    .when("/thecodinglove", {
        templateUrl : "thecodinglove.html",
        controller : "siteController",
        site: "thecodinglove"
    })
    .when("/thecodinglove/page/:page", {
        templateUrl : "thecodinglove.html",
        controller : "siteController",
        site: "thecodinglove"
    })
    .when("/demotywatory", {
        templateUrl : "demotywatory.html",
        controller : "siteController",
        site: "demotywatory"
    })
    .when("/demotywatory/page/:page", {
        templateUrl : "demotywatory.html",
        controller : "siteController",
        site: "demotywatory"
    })
    .when("/demotywatory/:id", {
        templateUrl : "demotywatory_single.html",
        controller : "singleMemeController",
        site: "demotywatory"
    })
    .when("/jbzd", {
        templateUrl : "jbzd.html",
        controller : "siteController",
        site: "jbzd"
    })
    .when("/jbzd/page/:page", {
        templateUrl : "jbzd.html",
        controller : "siteController",
        site: "jbzd"
    })
    .when("/jbzd/:id", {
        templateUrl : "jbzd_single.html",
        controller : "singleMemeController",
        site: "jbzd"
    })
    .when("/9gag", {
        templateUrl : "9gag.html",
        controller : "siteController",
        site: "9gag"
    })
    .when("/9gag/page/:page", {
        templateUrl : "9gag.html",
        controller : "siteController",
        site: "9gag"
    })
    .when("/9gagnsfw", {
        templateUrl : "9gag.html",
        controller : "siteController",
        site: "9gagnsfw"
    })
    .when("/9gagnsfw/page/:page", {
        templateUrl : "9gag.html",
        controller : "siteController",
        site: "9gagnsfw"
    })
    .otherwise({
      redirectTo:'/'
    });
});
app.controller("siteController", function ($scope, $route, $routeParams, $location, $http) {
    var site = $route.current.site;
    var page = $routeParams.page;
    var url = getURL(site, page);

    if (site != '9gagnsfw') {
      make_classes(site);
    } else {
      make_classes('9gag')
    }

    $scope.nextSlide = function(post) {
        post.currentSlide += 1;

        if(post.slides === undefined) {
            if(post.content.urls !== undefined)
                post.slides = post.content.urls.length;
            else if (post.content.images !== undefined)
                post.slides = post.content.images.length;
        }

        if(post.currentSlide >= post.slides)
            post.currentSlide = 0;
    };

    $scope.previousSlide = function(post) {
        post.currentSlide -= 1;

        if(post.slides === undefined) {
            if(post.content.urls !== undefined)
                post.slides = post.content.urls.length;
            else if (post.content.images !== undefined)
                post.slides = post.content.images.length;
        }

        if(post.currentSlide < 0)
            post.currentSlide = post.slides - 1;
    };

    $(document).keydown(function (event) {
      if(event.keyCode == 39) //Right arrow
      {
        $scope.keyboardNextSlide();
      }
      else if(event.keyCode == 37) { //Left arrow
        $scope.keyboardPreviousSlide();
      }
      else if(event.keyCode == 32) //Space
      {
        $scope.goToNextPage();
      }
    })

    $scope.goToNextPage = function () {
        $location.path($scope.data.nextPage);
        $scope.$apply();
    }

    $scope.findPost = function () {
      var posts = $(".post");
      for (var i = 0; i < posts.length; i++) {
        if(posts[i].offsetTop > window.scrollY)
        {
          return i;
        }
      }
      return posts.length - 1;
    }

    $scope.keyboardNextSlide = function () {
      var postID = $scope.findPost();
      $scope.nextSlide($scope.data.memes[postID]);
      $scope.$apply();
    }

    $scope.keyboardPreviousSlide = function () {
      var postID = $scope.findPost();
      $scope.previousSlide($scope.data.memes[postID]);
      $scope.$apply();
    }

    $scope.error = null;
    $scope.loading = true;
    $http.get(url).then(function(response) {
        $scope.data = response.data;
        $scope.loading = false;
        for (var i = 0; i < $scope.data.memes.length; i++) {
          var meme = $scope.data.memes[i];
          if(meme.content.contentType == "GALLERY" || meme.content.contentType == "CAPTIONED_GALLERY") {
            if(meme.content.urls !== undefined)
                meme.slides = meme.content.urls.length;
            else if (meme.content.images !== undefined)
                meme.slides = meme.content.images.length;
            meme.currentSlide = 0;
          }
        }
    }, function(response) {
        $scope.error = response;
        $scope.loading = false;
    });
});

app.controller("singleMemeController", function ($scope, $route, $routeParams, $location, $http) {
  var site = $route.current.site;
  var id = $routeParams.id;
  var url = API + '/' + site + '/' + id;

  if (site != '9gagnsfw') {
    make_classes(site);
  } else {
    make_classes('9gag')
  }

  $scope.nextSlide = function() {
      $scope.post.currentSlide += 1;

      if($scope.post.slides === undefined) {
          if($scope.post.content.urls !== undefined)
              $scope.post.slides = $scope.post.content.urls.length;
          else if ($scope.post.content.images !== undefined)
              $scope.post.slides = $scope.post.content.images.length;
      }

      if($scope.post.currentSlide >= $scope.post.slides)
          $scope.post.currentSlide = 0;
  };

  $scope.previousSlide = function() {
      $scope.post.currentSlide -= 1;

      if($scope.post.slides === undefined) {
          if($scope.post.content.urls !== undefined)
              $scope.post.slides = $scope.post.content.urls.length;
          else if ($scope.post.content.images !== undefined)
              $scope.post.slides = $scope.post.content.images.length;
      }

      if($scope.post.currentSlide < 0)
          $scope.post.currentSlide = $scope.post.slides - 1;
  };

  $(document).keydown(function (event) {
    if(event.keyCode == 39) //Right arrow
    {
      $scope.keyboardNextSlide();
    }
    else if(event.keyCode == 37) { //Left arrow
      $scope.keyboardPreviousSlide();
    }
  })

  $scope.keyboardNextSlide = function () {
    $scope.nextSlide();
    $scope.$apply();
  }

  $scope.keyboardPreviousSlide = function () {
    $scope.previousSlide();
    $scope.$apply();
  }

  $http.get(url).then(function (response) {
    $scope.post = response.data;
    if($scope.post.content.contentType == "GALLERY" || $scope.post.content.contentType == "CAPTIONED_GALLERY") {
      if($scope.post.content.urls !== undefined)
          $scope.post.slides = $scope.post.content.urls.length;
      else if ($scope.post.content.images !== undefined)
          $scope.post.slides = $scope.post.content.images.length;
      $scope.post.currentSlide = 0;
    }
  })
});

app.controller("defaultController", function ($scope) {
    make_classes("default");
});
