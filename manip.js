$(document).ready(function(){	
	
	var i=0;
	
	//droite
	$(".arrowr").click(function(){	
		leave();
		i++;	
		enter();
	});
	
	//gauche
	$(".arrowl").click(function(){
		leave();	
		i--;
		enter();
	});
	
	
	//pour quitter
	function leave() {
		$("#"+i).removeClass('lihover');
		if(i==1)
			progressOUT($('.bar'));
		else if(i==0)
			$(".arrowl").css("visibility", "visible");
		else if (i==6)
			$(".arrowr").css("visibility", "visible");
	}
	
	//pour arriver methode de scroll
	function enter(){
		$('html, body').animate({scrollLeft: $("#_"+i).position().left}, 1000, 'easeInOutExpo');
		$("#"+i).addClass('lihover');
	// fonction bouton click avent et arrière
		if(i==6)
			$(".arrowr").css("visibility", "hidden");
		else if(i==1)
			progressIN($('.bar'));
		else if(i==0)
			$(".arrowl").css("visibility", "hidden");
	}
	
	//bar chargement en avent
	function progressIN($element) {
		$element.each(function(){
			var pct = $(this).text();
			$(this).val(0).delay(800).animate({
				value : pct
			}, 2000, 'easeOutCirc');
		});	
	}
	
	//bar chargement en arrière
	function progressOUT($element) {
		$element.each(function(){
			var pct = $(this).text();
			$(this).val(pct).animate({
				value : 0 
			}, 1000, 'easeOutCirc');
		});	
	}

});