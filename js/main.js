$("document").ready(function(){
/*$(".profile-pic").animate({
	left:"140px",
	top:"25px",
	},2000);*/
rotate(0);	
	function rotate(degree){
		console.log(degree);
		$(".profile-pic").css({"-webkit-transform":"rotate("+degree+"deg)"});
		if(degree<360){
			setTimeout(function(){rotate(degree+15);},100);
		}
		else{
			$(".profile-pic").animate({
				left:"140px",
				top:"25px"
			},500,function(){
				$(".name").fadeIn(2000);
				setTimeout(function(){$(".tagline").fadeIn(2000);},1500);
			});
		}
	}
});