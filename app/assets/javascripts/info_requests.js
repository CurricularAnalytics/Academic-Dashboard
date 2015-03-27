var header_height = 80;

$(document).ready(function(){ 

	$('body').on('click', '#request-close', function() {
		$('body').css('overflow', 'scroll');
		$('#info-request').remove();
		$('#screen').remove();
	});
	
	//autocomplete fields for institution
	var institution_input = $('#institution-name-field input')
	institution_input.focus(function(){
		var list = $('<ul>',{id:'institution-name-autofill-list'});
		$(this).parent().append(list)
		doneTyping(institution_input.val())
		$(document).bind('mouseup',function (e)
		{
	    var container = $('.institution-name-autofill-list-item,#institution-name-field input')
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
				$(document).unbind('mouseup')
				$('#institution-name-autofill-list').remove()
	    }
				
		});
	}).blur(function(e){
		// console.log(e)
		// if($(e.currentTarget).hasClass('institution-name-autofill-list-item'))
		// 	institution_input.val($(e.currentTarget).text())
		// $('#institution-name-autofill-list').remove()
	});
	
	var typingTimer;                //timer identifier
	var doneTypingInterval = 200;  //time in ms

	//on keyup, restart the countdown
	institution_input.keyup(function(){
		var search_term = $(this).val()
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function(){doneTyping(search_term)}, doneTypingInterval);
	});

	//on keydown, clear the countdown
	institution_input.keydown(function(){
    clearTimeout(typingTimer);
	});

	//user is "finished typing," do something
	function doneTyping (search_term) {
		var autofill_list = $('#institution-name-autofill-list')

		var state_code = $('#state_code option:selected').val()
		console.log('Search for '+state_code+' institutions: '+search_term)
		autofill_list.empty()
		var items = []
		var limit_results = 20
		$.get( "https://inventory.data.gov/api/action/datastore_search", { resource_id:"38625c3d-5388-4c16-a30f-d105432553a4", limit: limit_results, q:search_term } )
		//use this get request if including state code filter
		// $.get( "https://inventory.data.gov/api/action/datastore_search", { resource_id:"38625c3d-5388-4c16-a30f-d105432553a4", limit: 5,q:search_term,filters:JSON.stringify({'STABBR':state_code})} )
		  .done(function( data ) {
				$.each(data.result.records,function(i,v){
					var item = $('<li>',{text: v.INSTNM,class:'institution-name-autofill-list-item'})
					items.push( item )
					item.click(function(e){
						institution_input.val($(this).text())
						$(document).unbind('mouseup')
						$('#institution-name-autofill-list').remove()
					});
				});
				autofill_list.append(items)
		  });
	}
	

});		