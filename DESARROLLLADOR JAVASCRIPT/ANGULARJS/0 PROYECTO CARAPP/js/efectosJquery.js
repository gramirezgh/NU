$('#thumbs a').click( function() {
    var changeSrc = $(this).attr('href');
    $('#detail').attr('src', changeSrc);
    return false;
});