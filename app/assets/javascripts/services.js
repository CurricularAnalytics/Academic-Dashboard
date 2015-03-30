$(document).ready(function() {
	$("#products-nav a").click(function() {
		section = $(this).attr("sec");
		//$('.chart').html("");
		$(window).unbind("resize");
		$('.active-product').removeClass("active-product");
		$('#' + section).addClass("active-product");
		if (section == "dashboards")
			dashboardcharts();

		$('.active-product-link').removeClass('active-product-link');
		$(this).addClass("active-product-link");
	})
});
