/*
This is empty on purpose! Your code to build the resume will go here.
 */


 /* jshint forin: false */

  var bio={
 	"name": "Lenore Alford",
 	"role" : "Front-End Developer",
 	"contacts":{
 		"mobile": "415xxxxxxx",
  	"email": "lenore.alford@gmail.com",
  	"twitter": "@LenoreAudreyJ",
  	"github": "topplethepat.io",
  	"location": "San Francisco Bay Area",
 	},
 	"skills" : ["HTML", "CSS", "Javascript", "jQuery"],
 	"welcomeMessage": "Best Coaster musician turned coder: here's what I can do.",
 	"biopic": "http://lenorealford.com/gallery/IMG_3955.JPG"
 };
bio.display=function (){

	var formattedName=HTMLheaderName.replace("%data%", bio.name);
 var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

	if (bio.welcomeMessage.length>0){
	 var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedwelcomeMsg);
  $("#welcome-message").append(formattedwelcomeMsg);
}
	if (bio.biopic.length>0){
	 var formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBiopic);
  $("#biopic").append(formattedBiopic);
}

 if (bio.contacts.mobile.length>0){	
	
	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topcontacts").append(formattedMobile);
	$("#footercontacts").append(formattedMobile);
}	
  if (bio.contacts.email.length>0){
  	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	$("#topcontacts").append(formattedEmail);
	$("#footercontacts").append(formattedEmail);
}
if (bio.contacts.twitter.length>0){
	var formattedTwitter=HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topcontacts").append(formattedTwitter);
	$("#footercontacts").append(formattedTwitter);
}
	if (bio.contacts.github.length>0){
		var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topcontacts").append(formattedGithub);
	$("#footercontacts").append(formattedGithub);
}
	if (bio.contacts.location.length>0){	
		var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topcontacts").append(formattedLocation);
	$("#footercontacts").append(formattedLocation);
}

 if (bio.skills.length>0){
 	$("#header").append(HTMLskillsStart);

 	for (var i in bio.skills) {
 		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
 	
 }
 if (bio.skills.length>0) {
	$("header").append(bio.skills);	
}
else {
	$("#main").append(0);
}
};
bio.display();
 var education= {
	"schools": [{
		//"name": "UBC",
		//"city": "Vancouver, Canada",
		//"degree": "BMus",
		//"major": ["General music", "piano"]
	//}, {
		//"name": "l'universite de Montreal",
		//"city": "Montreal, Canada",
		//"degree": "MMus",
		//"major": ["Piano"]
	//},
	 "name": "The University of Texas at Austin",
	  "location": "Austin, Texas",
	  "degree": "Doctor of Musical Arts",
	  "majors": "Organ performance",
	  "dates": "2005-2008",
	  "url": "http://www.utexas.edu"
	 } 
],
	"onlineClasses": [{
		"title": "Udacity",
		"school": "Front-End Nanodegree",
		"dates": "July 2016",
		"url": "http://udacity.com"
	}]
};
education.display=function (){
	if(education.schools.length>0) {
	
	$("#education").append(HTMLschoolStart);
	for(var item in education.schools){ 
		var formattedSchoolName=HTMLschoolName.replace("#", education.schools[item].url).replace("%data%",education.schools[item].degree);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[item].degree);
		var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", education.schools[item].location);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedschoolDates=HTMLschoolDates.replace("%data%", education.schools[item].dates);
		$(".education-entry:last").append(formattedschoolDates);
	}
   }
   if(education.onlineClasses.length>0) {
	
    $("#education").append(HTMLonlineClasses);
    for(var m in education.onlineClasses){
   	 $("#education").append(HTMLschoolStart);
   	 	 
	  
   	  var formattedonlineTitle=HTMLonlineTitle.replace("#", education.onlineClasses[m].url).replace("%data%", education.onlineClasses[m].title);
      
     var formattedonlineSchool=HTMLonlineSchool.replace("%data%", education.onlineClasses[m].school);
     var formattedonlineDates=HTMLonlineDates.replace("%data%", education.onlineClasses[m].dates);
     
     $(".education-entry:last").append(formattedonlineTitle);
     $(".education-entry:last").append(formattedonlineSchool);
     
     $(".education-entry:last").append(formattedonlineDates);

    }
 }
};
education.display();

var work = {
	"jobs": [{
		"employer": "St Johns Episcopal Church",
		"title": "Music Director",
		"location": "Ross, CA",
		"dates": "2009 to present",
		"url": "http://www.stjohnsross.org",
		"description": ["Founded choir school for children", "organist and choral conductor", "created full-time position from half-time"]
	}, {
		"employer": "College of Marin Emeritus College",
		"title": "Instructor",
		"location": "Kentfield, CA",
		"dates": "Jan through June 2012",
		"url": "http://www.lenorealford.com",
		"description": "Developed and taught two music history courses"	
	}, {
	    "employer": "Legion of Honor Museum",
	    "title": "Organ recitalist",
	    "location": "San Francisco, CA",
	    "dates": "July 2015",
	    "url": "http://www.legionofhonor.org",
	    "description": "Played two organ recitals on the historic Skinner organ"
	},
	   { 
	    "employer": "Université de Montréal",
	    "title": "Collaborative pianist",
	    "location": "Montreal, Canada",
	    "dates": "1999-2005",
	    "url": "http://www.umontreal.ca",
	    "description": "Class collaborative pianist for undergraduate flute students"
	}
	]
};
work.display=function (){
	if(work.jobs.length>0) {

	$("#workExperience").append(HTMLworkStart);

	for (var thing in work.jobs){
	var formattedEmployer=HTMLworkEmployer.replace("#", work.jobs[thing].url);
	formattedEmployer=formattedEmployer.replace("%data%", work.jobs[thing].employer);
	var endAnchor=HTMLworkTitle.replace("%data%", work.jobs[thing].title);
	$(".work-entry:last").append(formattedEmployer + endAnchor);
	var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[thing].location);
	$(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkdates=HTMLworkDates.replace("%data%",work.jobs[thing].dates);
    $(".work-entry:last").append(formattedWorkdates);
    var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[thing].description);
    $(".work-entry:last").append(formattedWorkDescription);
    
}
}
};
work.display();

var projects = {
	"projects": [
	{
	   "title": "Responsive website: Lenore Alford's wedding music page",
	   "dates": "January 1 to January 18, 2016",
	   "description": "Created website to showcase piano and organ wedding music",
	   "url": "http://topplethepat.github.io/Project1/Project1.html",
	   "images": "http://placehold.it/350x150"	
    },
    {
    	"title": "placeholder",
    	"dates": "2016",
    	"description": "placeholder",
    	"images": "http://placehold.it/350x150"
    }
	]
};
projects.display=function (){
	if(projects.projects.length>0) {
	
	$("#projects").append(HTMLprojectStart);
	for(var project in projects.projects){ 
		var formattedTitle=HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
		
		var formattedprojectDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedprojectImage=HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);
	}
}
};
projects.display();

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);



//for putting info into the console re how many clicks on which part of resume

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x=loc.pageX;
  var y=loc.pageY;

  logClicks(x,y);
});


