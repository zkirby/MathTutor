// JavaScript Document
$(document).ready(function() {
	"use strict";
	
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
		else if (this.id == "submit-contact" || this.id == "modal-overlay-contact") {
			$("#modal-contact").hide();
		}
	});
	$(".button").click(function(){
		var div_text = $(this).text();
		if(div_text == "Section 1.3"){
			openInNewTab("http://composingprograms.com/pages/13-defining-new-functions.html");
		} else if(div_text == "Section 3.2"){
			openInNewTab("http://composingprograms.com/pages/32-functional-programming.html");
		} else if(div_text == "Section 4.1"){
			openInNewTab("http://composingprograms.com/pages/41-introduction.html");
		} else if(div_text == "Python"){
			openInNewTab("http://www.pythontutor.com/");
		} else if(div_text == "Scheme"){
			openInNewTab("https://scheme.cs61a.org/");
		} else if(div_text == "SQL"){
			openInNewTab("http://sqlfiddle.com/");
		}
	});

	$(".contact-button").click(function(){
		var div_text = $(this).text();
		 if(div_text == "Fall 2012"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/sp14/exams/61a-fa12-final.pdf");
		} else if(div_text == "Fall 2013"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/sp14/exams/61a-fa13-final.pdf");
		}else if(div_text == "Fall 2014"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/fa14/assets/pdfs/61a-fa14-final.pdf");
		}else if(div_text == "Fall 2015"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/fa15/assets/pdfs/61a-fa15-final.pdf");
		}else if(div_text == "Spring 2013"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/sp14/exams/61a-sp13-final.pdf");
		}else if(div_text == "Spring 2014"){
			openInNewTab("https://www.dropbox.com/sh/hzzz5bz6wl3gy0z/AAAov2_EN6nIeg3IsIBivCTTa/sp14-final.pdf?dl=0");
		}else if(div_text == "Spring 2015"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/sp15/assets/pdfs/61a-sp15-final.pdf");
		}else if(div_text == "Spring 2016"){
			openInNewTab("http://inst.eecs.berkeley.edu/~cs61a/sp16/assets/pdfs/61a-sp16-final.pdf");
		}
	});

	$(".large-font").click(function(){
		var div_text = $(this).text();
		if(div_text == "Community Sections" || div_text == "Find Sections of Book online"){
			openInNewTab("http://composingprograms.com/");
		} else if(div_text == "Released Practice Finals"){
			$("#modal-contact").show();
		} else if(div_text == "Discussions"){
			openInNewTab("http://cs61a.org/");
		} else if(div_text == "Tutors Websites"){
			openInNewTab("http://albertwu.org/cs61a/");
		} else if(div_text == "Videos and Walkthroughs"){
			openInNewTab("http://cs61a.org/articles/resources.html");
		} else if(div_text == "Labs") {
			openInNewTab("http://cs61a.org/");
		}
	});

	function name_passed() {
  	try {
    	return 'localStorage' in window && window['localStorage'] !== null;
  	} catch (e) {
    	return false;
  	}
}
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

});
