$(document).ready(function(){
	
	// hide button and count until click
	$('#tweet-submit').hide();
	$('#char-count').hide();
	
	//increase form size and working counter
	$('#tweet-content .tweet-compose').click(function(){
		$('.tweet-compose').css('height', '5em');
		$('#tweet-submit').show();
		$('#char-count').show();
		
		$('#left-tweet').keyup(function(){
			var lettercount = $('#left-tweet').val().length;
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
	
	//hide these initially
	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();
	
	//info toggle for existing tweets. hover and click. 
	$('#stream .tweet').click(function(e){ 
		if($(e.target).is('.tweet-compose')){
      e.preventDefault();
      return;
    }
		$(this).find($('#main .stats')).toggle(500);
		$(this).find($('#main .reply')).toggle(500);	
	})
	$('#stream .tweet').hover(function(){
		$(this).find($('#main .tweet-actions')).toggle(); 
	})
	
	//submit tweets
	$('#tweet-submit').click(function(){
		var profileClone = $('#profile-summary').clone();
		var tweet = $('#left-tweet').val();
		
	  profileClone.find('#own-tweet').html(tweet);
//		profileClone.find('#own-tweet-actions').show();
//		profileClone.find('#own-stats').show();
//		profileClone.find('#own-reply').show();

	  $('#stream').prepend(profileClone);
	});
	
//info toggle for created tweets. click and hover.
	$('#main #profile-summary').click(function(e){ 
		console.log("CMON FUCKIN WORK ASDIUFH")
		if($(e.target).is('.tweet-compose')){
      e.preventDefault();
      return;
    }
		$(this).find($('#own-stats')).toggle(500);
		$(this).find($('#own-reply')).toggle(500);	
	})
	$('#stream #profile-summary').hover(function(){
		$(this).find($('#own-tweet-actions')).toggle(); 
	})


	
	
	
	
	
	
	
	
	
	
	
	
})