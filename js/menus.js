var $hexes = $('.unihex');
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

    $('#widgetpane, #twitterfeed, .network-label').on('click', function(e) {
        e.stopPropagation();

        $('#widgetpane').toggleClass('is-visible');
        if ($('#widgetpane').hasClass('is-visible'))
            $('body').css('overflow', 'hidden');
        else
            $('body').css('overflow', 'initial');

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
