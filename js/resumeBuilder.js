/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formattedName=HTMLheaderName.replace("%data%","Lenore Alford");
 var formattedRole=HTMLheaderRole.replace("%data%","Front-End Developer");
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#main").append(internationalizeButton);

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
 	"welcomeMessage": "West Coaster musician turned coder: here's what I can do.",
 	"biopic": "http://lenorealford.com/gallery/IMG_3955.JPG"
 }
bio.display=function (){
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
}
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
}
education.display=function (){
	for(item in education.schools){ 
	$("#education").append(HTMLschoolStart);
		var formattedSchoolName=HTMLschoolName.replace("#", education.schools[item].url);
		var formattedSchoolName=formattedSchoolName.replace("%data%", education.schools[item].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[item].degree);
		var formattedSchoolLocation=HTMLschoolLocation.replace("%data%", education.schools[item].location);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedschoolDates=HTMLschoolDates.replace("%data%", education.schools[item].dates);
		$(".education-entry:last").append(formattedschoolDates);
	}
    for(item in education.onlineClasses){	
    $("#education").append(HTMLonlineClasses);
   	 $("#education").append(HTMLschoolStart);	 
	  
   	  var formattedonlineTitle=HTMLonlineTitle.replace("#", education.onlineClasses[item].url);
      var formattedonlineTitle=formattedonlineTitle.replace("%data%", education.onlineClasses[item].title);
     var formattedonlineSchool=HTMLonlineSchool.replace("%data%", education.onlineClasses[item].school);
     var formattedonlineDates=HTMLonlineDates.replace("%data%", education.onlineClasses[item].dates);
     //var formattedonlineSchoolLink=HTMLonlineURL.replace("#", education.onlineClasses[item].url);
     //var formattedonlineSchoolLink=formattedonlineSchoolLink.replace("%data%", education.onlineClasses[item].school);
     $(".education-entry:last").append(formattedonlineTitle);
     $(".education-entry:last").append(formattedonlineSchool);
     
     $(".education-entry:last").append(formattedonlineDates);

    }
}
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
}
work.display=function (){
for (item in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("#", work.jobs[item].url);
	formattedEmployer=formattedEmployer.replace("%data%", work.jobs[item].employer);
	var endAnchor=HTMLworkTitle.replace("%data%", work.jobs[item].title);
	$(".work-entry:last").append(formattedEmployer + endAnchor);
	var formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[item].location);
	$(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkdates=HTMLworkDates.replace("%data%",work.jobs[item].dates);
    $(".work-entry:last").append(formattedWorkdates);
    var formattedWorkDescription=HTMLworkDescription.replace("%data%",work.jobs[item].description);
    $(".work-entry:last").append(formattedWorkDescription);
    
}
}
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
}
projects.display=function (){
	for(project in projects.projects){ 
	$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("#", projects.projects[project].url);
		var formattedTitle=formattedTitle.replace("%data%", projects.projects[project].title);
		var formattedprojectDescription=HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedprojectImage=HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);
	}
}
projects.display();


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


