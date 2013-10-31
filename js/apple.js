$(document).ready(init);

function init(){
	
	$(".dock-item2").click(function(){ 
		var pass = $(this).attr("id");
		func1(pass);
	});
	
	$(window).load(function(){login();});
}

function login(){
	$("#login").hide();
}

function func1(id){
	//$("#welcome").css('display','none');
	$("#welcome").fadeOut('slow');
	
	$("#welcome").remove();
	if(id == 1){
		$("#itunes").css('display','none');
		//$("#finder").delay('800').fadeIn();
		$("#finder").fadeIn();
	}
	else if(id == 8){
		$("#finder").css('display','none');
		//$("#itunes").delay('800').fadeIn();
		$("#itunes").fadeIn();
	}
	else{
		alert("Sorry, that app is not available yet");
	}
}