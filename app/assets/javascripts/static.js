var header_height = 80
$(document).ready(function(){ 
	var sign_in_form = $('#sign-in-form'),
			sign_in_link = $('#sign-in-link');
			
	var sign_in_form_width = sign_in_form.width(),
		 	sign_in_link_width = sign_in_link.width();
	
	sign_in_form.css('width','0px');
	
	sign_in_link.click(function(){
	  sign_in_form.animate({"width":sign_in_form_width+'px',"opacity":'1'}, 500).find('#user_email').focus(); 
	  sign_in_link.animate({"opacity":'0','width':'0px'}, 500)
		$(document).on('click.hide_sign_in_form',function(e){
	    if (!sign_in_link.is(e.target)
					&& !sign_in_form.is(e.target) 
	        && sign_in_form.has(e.target).length === 0)
	    {
				$(document).unbind('click.hide_sign_in_form')
			  sign_in_form.animate({"width":'0px',"opacity":'0'}, 500);
			  sign_in_link.animate({"opacity":'1','width':sign_in_link_width+'px'}, 500)
	    }
		})
	});
	
	
	$('#get-started-link').click(function(){
		$('html,body').animate({
		          scrollTop: $('.section#sign-up').position().top - header_height
		        }, 500);
	})
	
	// $(document).scrollTop($('#sign-up-errors').position().top-header_height-40 )
		
});		