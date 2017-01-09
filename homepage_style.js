$(document).ready(function() {
	"use strict";
	
	$( ".symbol" ).hover(
	  function() {
	    $( "#main-title" ).css("color", $(this).css("color")); 
	  },
	   function() {
	     $( "#main-title" ).css("color", "#F47C7C");
	  });


	$("#bottom-arrow").click(function(){
		$('html, body').animate({
   			 scrollTop: $("#module-text").offset().top
			}, 1000);
	});

	$(".grid-item").hover(
		function() {
			if (this.name=="Calculus"){
				$(this).css("background", $("#Oth").css("color"));
			} else if (this.name=="Algebra"){
				$(this).css("background", $("#Calc").css("color"));
			} else if (this.name=="Other"){
				$(this).css("background", $("#Alg").css("color"));
			} 
		},
		function() {
			if (this.name=="Calculus"){
				$(this).css("background", "#7F8C8D");
			} else if (this.name=="Algebra"){
				$(this).css("background", "#7F8C8D");
			} else if (this.name=="Other"){
				$(this).css("background", "#7F8C8D");
			} 
		});

	$(".grid-item").click(function(){
		var text_body = $(this).text();
		var text_name = $(this).text().slice(0, $(this).text().indexOf("Grade-Level"));
		if (text_name.includes("Calculus")){
			text_name = text_name.replace("Calculus", "Calc")
		}
		localStorage.setItem("Title", text_name); 
	})

	$("#search").click(function(){
		var searched_for = document.getElementById("searchbar").value;
		var valid_searches = ["Calc AB", "Calc BC", "Calc D", "Pre-Calc", "Math Fundamentals", "Linear Algebra", "Algebra I", "Algebra II", "Pre-Algebra", "Geometry", "Multivar Calc"];
		console.log(searched_for);
		if (valid_searches.includes(searched_for)){
			localStorage.setItem("Title", searched_for);
			window.location = "module.html";
		} else {
			alert('Non-valid Search. Make sure the module name is EXACT. Valid Module names: "Calc AB", "Calc BC", "Calc D", "Pre-Calc", "Math Fundamentals", "Linear Algebra", "Algebra I", "Algebra II", "Pre-Algebra", "Geometry", "Multivar Calc"');
		}
	})


	$("div").click(function(){
		if (this.id == "login" || this.id == "register"){
			$("#modal-header").text(this.id[0].toUpperCase() + this.id.slice(1));
			$("#modal-container").show();
		} 
		else if(this.id == "submit" || this.id == "cancel" || this.id == "modal-overlay"){
			$("#modal-container").hide();
		}
		if (this.id == "contact-bar") { 
			$("#modal-contact").show();
		}
		if(this.id == "help"){
			$("#modal-help").show();
		}
		else if (this.id == "submit-contact" || this.id == "modal-overlay-contact") {
			$("#modal-contact").hide();
			$("#modal-help").hide();
		}
	});

	$(window).scroll(function () {

 		var height = $(window).scrollTop();

 		if (height > 30){
 		 $("#background-bar").css("opacity", 0.8);
 		} else {
 			$("#background-bar").css("opacity", 0);
 		}

 		if (isnear(height, Math.round($('#module-text').offset().top - 500))) {
 			setTimeout(function(){
				$('#row_one1').css('opacity', 1);}, 0);
 			setTimeout(function(){
				$('#row_one2').css('opacity', 1);}, 125);
 			setTimeout(function(){
				$('#row_one3').css('opacity', 1);}, 250);
 			setTimeout(function(){
				$('#row_one4').css('opacity', 1);}, 375);
 		}
 		if (isnear(height, Math.round($('#module-text').offset().top - 250))) {
			
			setTimeout(function(){
				$('#row_two1').css('opacity', 1);}, 0);
 			setTimeout(function(){
				$('#row_two2').css('opacity', 1);}, 125);
 			setTimeout(function(){
				$('#row_two3').css('opacity', 1);}, 250);
 			setTimeout(function(){
				$('#row_two4').css('opacity', 1);}, 375);
 		}

 		if (isnear(height, Math.round($('#module-text').offset().top - 0))) {
			setTimeout(function(){
				$('#row_three1').css('opacity', 1);}, 0);
 			setTimeout(function(){
				$('#row_three2').css('opacity', 1);}, 125);
 			setTimeout(function(){
				$('#row_three3').css('opacity', 1);}, 250);
 			setTimeout(function(){
				$('#row_three4').css('opacity', 1);}, 375);
 		}

 		if (height < 100) {
 			$(".grid-item").css('opacity', 0);
 		}

	});


	function isnear(compare, number) {
		if (number >= compare + 30 || number <= compare - 30) {
			return false;
		} else {
			return true;
		}
	}

});


