var hlactive = 0;
var hlcount = 0;

var nextHeadline = function() {
    hlactive++;

    if (hlactive > hlcount)
        hlactive = 1;

    $('.headline.is-visible').removeClass('is-visible').addClass('is-hidden');
    $('.headline' + hlactive).removeClass('is-hidden').addClass('is-visible').show();
};

var addHeadline = function(str, count) {
    $('#headlines').append($('<div>', {
        class: 'headline headline' + (count+1) + ' is-hidden',
        style: 'display: none;'
    }).append($('<p>').text(str)));

    hlcount++;
};

var addTitle = function(title) {
    $('#headlines').append($('<div>', {
        class: 'headline'
    }).append($('<p>').text(title)));
};

$(document).ready(function() {
    if (headlines.length > 1) {
        $.each(headlines, function(i, hl) {
            addHeadline(hl, i);
        });

        nextHeadline();
        setInterval(function() {
            nextHeadline();
        }, 5000);
    } else if (headlines.length == 1) {
        addTitle(headlines[0]);
    }
});
