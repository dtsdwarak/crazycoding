
$("document").ready(function(){
	$("a[href^=#]").click(function(e){
		e.preventDefault();
			var target=$(this).attr("href");
			console.log(target);
				var $target = $(target);
				$("html,body").animate({
				'scrollTop': $target.offset().top
			},2000);
	});
	var headerTop = $("#header").offset().top;
	$(window).scroll(function(){
		var currentScroll = $(window).scrollTop();
		console.log(currentScroll);
		if(currentScroll>=headerTop){
			$("#header").addClass("fixed");
		}
		else{
			$("#header").removeClass("fixed");
		}
	});
});