//This is my old gallery code
function createGalleries() {

	function getActiveLiIndex(list) {
		for(var j = 0; j < list.length; j++) {
			var image = list[j];
			if(image.className.includes("active")) {
				return j;
			}
		}
	}

	function setActiveLiIndex(list, index) {
		if(index > list.length - 1)
			index = 0;
		if(index < 0)
			index = list.length - 1;

		for(var j = 0; j < list.length; j++) {
			var image = list[j];
			if(index == j) {
				image.className = image.className + " active";
			}
			else {
				if(image.className.includes("active")) {
					image.className = image.className.replace("active","");
				}
			}
		}
	}

	var galleries = document.getElementsByClassName("gallery");
	for(var i = 0; i < galleries.length; i++) {
		var gallery = galleries[i];

		(function() {
			var g = gallery;

			return function() {
				var navRight = g.getElementsByClassName("btn-gallery-nav-right")[0];
				navRight.addEventListener("click", function() {
					var images = g.getElementsByTagName("li");
					setActiveLiIndex(images, getActiveLiIndex(images) + 1);
				});
			};
		})()();

		(function() {
			var g = gallery;

			return function() {
				var navLeft = g.getElementsByClassName("btn-gallery-nav-left")[0];
				navLeft.addEventListener("click", function() {
					var images = g.getElementsByTagName("li");
					setActiveLiIndex(images, getActiveLiIndex(images) - 1);
				});
			};
		})()();
	}
}
