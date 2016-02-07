/*
This is empty on purpose! Your code to build the resume will go here.
 */
 

 var formattedName=HTMLheaderName.replace("%data%","Lenore Alford");
 var formattedRole=HTMLheaderRole.replace("%data%","Front-End Developer");
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var bio={
 	"name": "Lenore",
 	"role" : "Front-End Developer",
 	"skills" : ["virtuoso typist", "monkey behaviorist", "amazing coder", "stellar mountain biker"]
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
 

 var education= {
	"schools": [{
		"name": "UBC",
		"city": "Vancouver, Canada",
		"degree": "BMus",
		"major": ["General music", "piano"]
	}, {
		"name": "l'universite de Montreal",
		"city": "Montreal, Canada",
		"degree": "MMus",
		"major": ["Piano"]
	}]
}
var work = {
	"jobs": [{
		"employer": "St Johns Episcopal Church",
		"title": "Music Director",
		"location": "Ross, CA",
		"dates_worked": "May 2009 to present",
		"url": "http://www.stjohnsross.org",
		"description": ["Ran robot", "humored the self-unaware", "dazzled on the keyboard"]
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
	    "url": "http://www.legionofhonor.org"
	     
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
	"Projects": [{
	   "Responsive website": "Lenore Alford's wedding music page",
	   "Dates worked": "January 1 to January 18, 2016",
	   "Description": "Created website to showcase piano and organ wedding music",
	   "Website url": ["http://topplethepat.github.io/Project1/Project1.html"],	
	}]
}

if (bio.skills.length>0) {
	$("header").append(bio["skills"]);	
}
else {
	$("#main").append(0);
}



