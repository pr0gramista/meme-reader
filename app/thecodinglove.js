var thecodingloveTemplate = '<div class="post">' +
    '<span class="thecodinglove-title">/* {{ title }} */</span>' +
    '<img src="{{ content.url }}" /></div>';

function thecodinglove(ctx) {
    var url = get_url('thecodinglove', ctx);

    make_classes('thecodinglove');

    $.ajax(url).done(function (json) {
        var list = $('#content');

        //Clear content
        list.html('');

        //Generate view for each meme
        json.memes.forEach(function(value, index, arr) {
            var element;
            if (value.content.contentType == "GIF")
                element = $(Mustache.render(thecodingloveTemplate, value));

            //Finally append the element
            list.append(element);
        });

        //Create next page button
        list.append(
            $('<div class="next-page">').append(
                $('<a>').text('Next page').addClass('btn btn-primary').attr('href', json.nextPage.substring(1))
            )
        );

        //Initialize galleries
        createGalleries();

        scrollToTop();
    });
}
