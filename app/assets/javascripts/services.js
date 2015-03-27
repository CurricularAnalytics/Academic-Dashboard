$(document).ready(function() {
	$("#products-nav a").click(function() {
		section = $(this).attr("sec");
		//$('.chart').html("");
		$(window).unbind("resize");
		$('.active-product').removeClass("active-product");
		$('#' + section).addClass("active-product");
		if (section == "dashboards")
			dashboardcharts();
	})
});