$(document).ready(function() {
	$("#service-nav a").click(function() {
		section = $(this).attr("sec");
		$('.active-service').removeClass("active-service");
		$('#' + section).addClass("active-service");
	})
});