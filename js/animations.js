$(document).ready(function(){
	
	$('#tweet-submit').hide();
	$('#char-count').hide();
	
	$('.tweet-compose').click(function(){
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
		var tweet = $('.tweet-compose').val();
		
	  profileClone.find('#own-tweet').html(tweet);
		profileClone.find('#own-tweet-actions').show();
		profileClone.find('#own-stats').show();
		profileClone.find('#own-reply').show();

		
	  $('#stream').prepend(profileClone);
		
		
	});
	

	
	
	
	
	
	
	
	
	
	
	
	
})