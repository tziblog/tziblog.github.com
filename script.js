$(document).ready(function(){

	// hide #back-top first
	$("#backtotop").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#backtotop').fadeIn();
			} else {
				$('#backtotop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#backtotop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
});

$(document).ready(function(){


	$('#copyRight img').before('<span> - 2015 <span>');

});

$(document).ready(function(){
	$('a.moreLoaded').hide();
	$('#loadMore').show();
	article_size = $('a.moreLoaded').size();
	x = 6;
	$('a.moreLoaded').slice( 0, x).show();
	$('#loadMore').click(function() {
		if(x + 6 <= article_size){
            x = x + 6;
		}  else 
			x = article_size ;
		$('a.moreLoaded').slice( 0, x ).show();
		 if(x == article_size){
		 	$('#loadMore').text(' All articles were loaded! ').css({"cursor":"default", "animation":"none"});
			$('#loadMore').mouseover(function() {
				$(this).css({
				"background-color": "transparent", 
				"color":"inherit"
				});
			});
            $('#loadMore').fadeOut(4000);
			
		} // end if
	}); //end click
}); // end ready 