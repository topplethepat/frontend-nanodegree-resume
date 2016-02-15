/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

 var formattedName=HTMLheaderName.replace("%data%","Lenore Alford");
 var formattedRole=HTMLheaderRole.replace("%data%","Front-End Developer");
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#main").append(internationalizeButton);
 

  var bio={
 	"name": "Lenore",
 	"role" : "Front-End Developer",
 	"skills" : ["virtuoso typist", "monkey behaviorist", "amazing coder", "stellar mountain biker"],
 	"welcomeMessage": "West Coaster musician turned coder: here's what I can do.",
 	"biopic": "http://lenorealford.com/gallery/IMG_3955.JPG"
 }

  var contact={
  	"mobile": "415xxxxxxx",
  	"email": "lenore.alford@gmail.com",
  	"twitter": "@LenoreAudreyJ",
  	"github": "topplethepat.io",
  	"location": "San Francisco Bay Area"
  }

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

 if (contact.mobile.length>0){	
	
	var formattedMobile=HTMLmobile.replace("%data%", contact.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
}	
  if (contact.email.length>0){
  	var formattedEmail=HTMLemail.replace("%data%", contact.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
}
if (contact.twitter.length>0){
	var formattedTwitter=HTMLtwitter.replace("%data%", contact.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
}
	if (contact.github.length>0){
		var formattedGithub=HTMLgithub.replace("%data%", contact.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
}
	if (contact.location.length>0){	
		var formattedLocation=HTMLlocation.replace("%data%", contact.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
}

 if (bio.skills.length>0){
 	$("#header").append(HTMLskillsStart);

 	var formattedSkills=HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills=HTMLskills.replace("%data%",bio.skills[1]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills=HTMLskills.replace("%data%",bio.skills[2]);
 	$("#skills").append(formattedSkills);
 	var formattedSkills=HTMLskills.replace("%data%",bio.skills[3]);
 	$("#skills").append(formattedSkills);

 }
 if (bio.skills.length>0) {
	$("header").append(bio["skills"]);	
}
else {
	$("#main").append(0);
}

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
	  "city": "Austin, Texas",
	  "degree": "Doctor of Musical Arts",
	  "major": "Organ performance",
	  "dates": "2005-2008",
	  "url": "http://www.utexas.edu"
	 } 
],
    
	"onlineClasses": [{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"dates": "Jan-July 2016",
		"url": "http://udacity.com"
	}]
}
education.display=function (){
	for(item in education.schools){ 
	$("#education").append(HTMLschoolStart);
		var formattedSchoolName=HTMLschoolName.replace("#", education.schools[item].url);
		var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[item].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[item].degree);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedDegree);
		var formattedschoolDates=HTMLschoolDates.replace("%data%", education.schools[item].dates);
		$(".date-text").append(formattedschoolDates);
	}
    for(item in education.onlineClasses){
     $("#education").append(HTMLonlineClasses);
     var formattedonlineTitle=HTMLonlineTitle.replace("#", education.onlineClasses[item].url);
     var formattedonlineTitle=HTMLonlineTitle.replace("%data%", education.onlineClasses[item].title);
     $(".education-entry").append(formattedonlineTitle);
    }
}
education.display();
var work = {
	"jobs": [{
		"employer": "St Johns Episcopal Church",
		"title": "Music Director",
		"location": "Ross, CA",
		"dates_worked": "2009 to present",
		"url": "http://www.stjohnsross.org",
		"description": ["Ran robot", "wrote Southern-style emails", "dazzled on the keyboard"]
	}, {
		"employer": "College of Marin Emeritus College",
		"title": "Instructor",
		"location": "Kentfield, CA",
		"dates_worked": "Jan through June 2012",
		"url": "http://www.lenorealford.com",
		"description": "Developed and taught two music history courses"	
	}, {
	    "employer": "Legion of Honor Museum",
	    "title": "Organ recitalist",
	    "location": "San Francisco, CA",
	    "dates_worked": "July 2015",
	    "url": "http://www.legionofhonor.org",
	    "description": "Played two organ recitals on the historic Skinner organ"
	},
	   { 
	    "employer": "Université de Montréal",
	    "title": "Collaborative pianist",
	    "location": "Montreal, Canada",
	    "dates_worked": "1999-2005",
	    "url": "http://www.umontreal.ca",
	    "description": "Class collaborative pianist for undergraduate flute students"
	}
	]
}

for (item in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("#", work.jobs[item].url);
	formattedEmployer=formattedEmployer.replace("%data%", work.jobs[item].employer);
	var endAnchor=HTMLworkTitle.replace("%data%", work.jobs[item].title);
	$(".work-entry:last").append(formattedEmployer + endAnchor);
	var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[item].location);
	$(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkdates=HTMLworkDates.replace("%data%",work.jobs[item].dates_worked);
    $(".work-entry:last").append(formattedWorkdates);
    var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[item].description);
    $(".work-entry:last").append(formattedWorkDescription);
    
}

var projects = {
	"projects": [
	{
	   "title": "Responsive website: Lenore Alford's wedding music page",
	   "dates": "January 1 to January 18, 2016",
	   "description": "Created website to showcase piano and organ wedding music",
	   "images": "http://placehold.it/350x150",
	   "url": "http://topplethepat.github.io/Project1/Project1.html"	
    },
    {
    	"title": "placeholder",
    	"dates": "2016",
    	"description": "placeholder",
    	"images": "http://placehold.it/350x150"
    }
	]
}
projects.display=function (){
	for(project in projects.projects){ 
	$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("#", projects.projects[project].url);
		var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
	}
}
projects.display();

//map.display=function(){

//$("#mapDiv").append(googleMap);
//}
//map.display();


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


