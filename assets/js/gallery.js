jQuery('document').ready( function($) {
    $('.gallery-filters li').on('click', function() {
        $('.gallery-filters li').removeClass('active');
        $(this).addClass('active');
        filter = $(this).attr('gallery-filter');
        $('.portfolio-item').each( function() {
            $(this).fadeOut('slow'); 
            setTimeout(show, 500)
        });

        function show() {
            $('.portfolio-item').each( function() {
                if (filter == 'all') {
                    $(this).fadeIn(400); 
                } else {
                    if ($(this).attr('filter-category').indexOf(filter) > -1) {
                        $(this).fadeIn(400);
                    }
                }
            });
        }
    });
});