//Utils
function get_url(base, ctx) {
    var id = ctx.params.id;
    var json;
    var url;
    if(typeof id !== 'undefined')
        return API + '/' + base + '/' + id;
    else
        return API + '/' + base + '/';
}

var classes = ['kwejk', 'demotywatory', 'mistrzowie', 'thecodinglove'];
function make_classes(classToExist) {
    var body = $('body');
    classes.forEach(function(value, index, next) {
        if(value == classToExist)
            body.toggleClass(value, true);
        else
            body.removeClass(value);
    });

    $('a[href="kwejk"]').toggleClass("selected", false);
    $('a[href="demotywatory"]').toggleClass("selected", false);
    $('a[href="mistrzowie"]').toggleClass("selected", false);
    $('a[href="thecodinglove"]').toggleClass("selected", false);

    $('a[href="' + classToExist + '"]').toggleClass("selected", true);
}

//Basic templates
var imageMemeTemplate = '<div class="post"><h2><a href="{{ url }}">{{ title }}</a></h2><img src="{{ content.url }}"></div>';
var demotywatoryImageMemeTemplate = '<div class="post"><a href="{{ url }}"><img src="{{ content.url }}"></a></div>';
var videoMemeTemplate = '<div class="post"><h2><a href="{{ url }}">{{ title }}</a></h2><video autoplay controls loop><source src="{{ content.url }}"></video></div>';
var galleryMemeTemplate = '<div class="post"><h2><a href="{{ url }}">{{ title }}</a></h2>' +
    '<ul class="gallery">' +
    '<button class="btn btn-gallery-nav btn-gallery-nav-left">' +
    '<i class="fa fa-angle-left" aria-hidden="true"></i>' +
    '</button>' +
    '<button class="btn btn-gallery-nav btn-gallery-nav-right">' +
    '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
    '</button>' +
    '{{ #content.urls }}' +
    '<li>' +
    '<img src="{{ . }}">' +
    '</li>' +
    '{{ /content.urls }}' +
    '</ul>' +
    '</div>';
var captionedGalleryMemeTemplate = '<div class="post">' +
    '<ul class="gallery">' +
    '<button class="btn btn-gallery-nav btn-gallery-nav-left">' +
    '<i class="fa fa-angle-left" aria-hidden="true"></i>' +
    '</button>' +
    '<button class="btn btn-gallery-nav btn-gallery-nav-right">' +
    '<i class="fa fa-angle-right" aria-hidden="true"></i>' +
    '</button>' +
    '{{ #content.images }}' +
    '<li>' +
    '<h4>{{ title}}</h4>' +
    '<img src="{{ url }}">' +
    '<p>{{ caption }}' +
    '</li>' +
    '{{ /content.images }}' +
    '</ul>' +
    '</div>';

//Setup routing
page.base('/meme-reader');
page('/thecodinglove/:id', thecodinglove);
page('/thecodinglove', thecodinglove);
page('/mistrzowie/:id', mistrzowie);
page('/mistrzowie', mistrzowie);
page('/demotywatory/:id', demotywatory);
page('/demotywatory', demotywatory);
page('/kwejk/:id', kwejk);
page('/kwejk', kwejk);
page('*', none);

//Hashbang is optional, but I recommend using it.
page({ hashbang: true });

function index() {
	//still need to do something here
}

function none() {
	//still need to do something here
}
