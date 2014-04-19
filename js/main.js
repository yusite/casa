$(document).ready(function() {
	$('.invis').hide();
	$('.more').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		if ($('#ajax').is(':visible')) {
			$('#ajax').css({ display:'block' }).empty();
		}
		$('#ajax').html($(href).html()).hide().fadeIn('slow');
	});

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
	});
});