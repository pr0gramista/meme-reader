function kwejk(ctx) {
    var url = get_url('kwejk', ctx);

    make_classes('kwejk');

    $.ajax(url).done(function (json) {
        var list = $('#content');

        //Clear content
        list.html('');

        //Generate view for each meme
        json.memes.forEach(function(value, index, arr) {
            var element;
            if(value.content.contentType == "IMAGE")
                element = $(Mustache.render(imageMemeTemplate, value));
            else if (value.content.contentType == "GALLERY") {
                element = $(Mustache.render(galleryMemeTemplate, value));

                //Make the first element active
                element.find('ul.gallery').find('li').first().addClass('active');
            }
            else if (value.content.contentType == "VIDEO")
                element = $(Mustache.render(videoMemeTemplate, value));
            else if (value.content.contentType == "CAPTIONED_GALLERY") {
                element = $(Mustache.render(captionedGalleryMemeTemplate, value));

                //Make the first element active
                element.find('ul.gallery').find('li').first().addClass('active');
            }

            //Finally append the element
            list.append(element);
        });

        //Create next page button
        list.append(
            $('<div class="next-page">').append(
                $('<a>').text('Następna strona').addClass('btn btn-primary').attr('href', json.nextPage.substring(1))
            )
        );

        //Initialize galleries
        createGalleries();

        scrollToTop();
    });
}
