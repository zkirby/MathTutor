// JavaScript Document
$(document).ready(function() {
	"use strict";

	if (name_passed()){
		$("#main-title").text(localStorage.getItem("Title"));
	} else {
		$("#main-title").text("Calc AB");
	}
	
	$( ".symbol" ).hover(
	  function() {
	    $( "#main-title" ).css("color", $(this).css("color")); 
	  },
	   function() {
	     $( "#main-title" ).css("color", "#F47C7C");
	  });

	$( ".logo-symbol" ).hover(
	  function() {
	    $( "#logo" ).css("color", $(this).css("color")); 
	  },
	   function() {
	     $( "#logo" ).css("color", "#F47C7C");
	  });

	$(window).scroll(function () {

 		var height = $(window).scrollTop();

 		if (height > 10){
 		 $("#background-bar").css("opacity", 0.8);
 		} else {
 			$("#background-bar").css("opacity", 0);
 		}
	});


	$("div").click(function(){
		if (this.id == "login" || this.id == "register"){
			$("#modal-header").text(this.id[0].toUpperCase() + this.id.slice(1));
			$("#modal-container").show();
		} 
		else if(this.id == "submit" || this.id == "cancel" || this.id == "modal-overlay"){
			$("#modal-container").hide();
		}
		if(this.id=="content-section"){
			$("#modal-contact").show();
		}
		else if (this.id == "submit-contact" || this.id == "modal-overlay-contact") {
			$("#modal-contact").hide();
		}
	});

	function name_passed() {
  	try {
    	return 'localStorage' in window && window['localStorage'] !== null;
  	} catch (e) {
    	return false;
  	}
}


});
