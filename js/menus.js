var $hexes;
var addHex = function(hex, label, url) {
    var $hex = $($hexes[hex]);
	
    $hex.append($('<div>').html(label));

    var linkobj = {
        href: url
    };

    if (/^http/.test(url))
        linkobj['target'] = '_blank';

    if (/^#/.test(url))
        linkobj['class'] = 'scrollto';
	
    $hex.wrap($('<a>', linkobj));
};

$(document).ready(function() {
    $hexes = $('.unihex');

    $.each(hexitems, function(i, item) {
        addHex(i, item[0], item[1]);
    });

    $('#langselector').on('change', function() {
        window.location = $(this).val();
    });

    $('.scrollto').on('click', function(e) {
        e.stopPropagation();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

        return false;
    });

    $('#chatfeed').on('click', function(e) {
        e.stopPropagation();

	var url = $(this).find('.network-label').attr('href');

	window.open(url, "_blank");

	return false;
    });

    $('#widgetpane, #newsfeed, #videofeed').on('click', function(e) {
        e.stopPropagation();

        $('#widgetpane').toggleClass('is-visible');
        if ($('#widgetpane').hasClass('is-visible')) {
            $('body').css('overflow', 'hidden');
            if (e.currentTarget.id == 'newsfeed')
                $('#newspane').addClass('is-visible');
            else if (e.currentTarget.id == 'videofeed')
                $('#videopane').addClass('is-visible');
	} else {
            $('body').css('overflow', 'initial');
            $('.is-visible').removeClass('is-visible');
	}

	return false;
    });
 
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500)
            $('#totop').addClass('top-after');
        else
            $('#totop').removeClass('top-after');
    });

    $(window).trigger('scroll');
});
