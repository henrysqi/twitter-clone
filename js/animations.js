$(document).ready(function(){
	
	$('#tweet-submit').hide();
	$('#char-count').hide();
	
	$('#tweet-content .tweet-compose').click(function(){
		$('.tweet-compose').css('height', '5em');
		$('#tweet-submit').show();
		$('#char-count').show();
		
		$('.tweet-compose').keyup(function(){
			var lettercount = $('.tweet-compose').val().length;
			$('#char-count').html(140-lettercount);
			if ($('#char-count').html() <= 10){
				$('#char-count').css('color', 'red');
			} 
			if ($('#char-count').html() < 0){
					$('button').prop('disabled', true);
				} else {
					$('button').prop('disabled', false);
			  }
		})
	});
	
	$('#tweet-submit').click(function(){
		var profileClone = $('#profile-summary').clone();
		var tweet = $('#left-tweet').val();
		
		console.log(tweet)
		
	  profileClone.find('#own-tweet').html(tweet);
		profileClone.find('#own-tweet-actions').show();
		profileClone.find('#own-stats').show();
		profileClone.find('#own-reply').show();

		
	  $('#stream').prepend(profileClone);
	});
	
	
	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();
	
	$('#stream .tweet').click(function(e){ 
		if($(e.target).is('.tweet-compose')){
      e.preventDefault();
      return;
    }
		$(this).find($('#main .stats')).toggle(1000);
		$(this).find($('#main .reply')).toggle(1000);	
	})
	$('#stream .tweet').hover(function(){
		$(this).find($('#main .tweet-actions')).toggle(); 
	})

	
	
	
	
	
	
	
	
	
	
	
	
})