$(document).ready(function(){
	$("#iniciaranimacion").click(function(){
	animacion();
	});
	$("#deteneranimacion").click(function(){
	$("img").stop();
	});
	function animacion(){
	$("img").animate({"left":"600px"});
	$("img").animate({"top":"500px"});
	$("img").hide(5000);
	$("img").show(2000);
	$("img").animate({"left":"150px"});
	$("img").animate({"left":"200px"},animacion);
	}
	
});