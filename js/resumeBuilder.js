const bio = {
    "name": "Jason Simpson",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "+61 0468 462 155",
        "email": "simpson.jason.r@gmail.com",
        "github": "https://github.com/epiphanatic",
        "location": "Brisbane, Australia"
    },
    "welcomeMessage": "Temet Nosce",
    "skills": [
        "Angular",
        "Firebase",
        "JavaScript",
        "Node",
        "Python",
        "TypeScript"
    ],
    "biopic": "images/1-JasonHeadshotSmall.jpg",
    "display": function () {
        const formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        const formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName, formattedRole);
        const formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        const formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);
        const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (let i = 0; i < bio.skills.length; i++) {
                const formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }

};

const education = {
    "schools": [
        {
            "name": "Auburn University",
            "location": "Auburn, AL, USA",
            "degree": "MBA",
            "majors": ["Information Systems"],
            "dates": "2008-2010",
            "url": "http://harbert.auburn.edu/academics/graduate/master-of-business-administration/"
        },
        {
            "name": "Auburn University",
            "location": "Auburn, AL, USA",
            "degree": "BSBA",
            "majors": ["Information Systems"],
            "dates": "1999-2004",
            "url": "http://harbert.auburn.edu/academics/undergraduate/information-systems-management/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        },
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function () {
        $("#education").append(HTMLschoolStart);
        const educationList = $(".education-entry");
        for (let i = 0; i < education.schools.length; i ++) {
            const formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            const formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            const formattedNameAndDegree = formattedName + formattedDegree;
            const formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            const formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
            const formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            educationList.append(formattedNameAndDegree, formattedDates, formattedLocation, formattedMajor);
            // change #'s in href's to actual url
            const link = educationList.find('a');
            link.attr('href', education.schools[i].url)
        }

        $("#education").append(HTMLonlineStart);
        const onlineList = $(".online-entry");
        onlineList.append(HTMLonlineClasses);
        for (let i = 0; i < education.onlineCourses.length; i ++) {
            const formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            const formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            const formattedTitleAndSchool = formattedTitle + formattedSchool;
            const formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            // looks better without urls - made title point to url like elsewhere
            // const formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            onlineList.append(formattedTitleAndSchool, formattedDates);
            // change #'s in href's to actual url
            const link = onlineList.find('a');
            link.attr('href', education.onlineCourses[i].url);
        }
    }
};

const projects = {
    "projects": [
        {
            "title": "Luminate QDAS",
            "dates": "2016-Present",
            "description": "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.",
            "images": ["images/luminate1.png", "images/luminate2.png"]
        },
        {
            "title": "Movie trailers",
            "dates": "2017",
            "description": "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.",
            "images": ["images/movie-trailers.png", "images/matrix.jpg"]
        }
    ],
    "display": function () {
        for (let y = 0; y < projects.projects.length; y++) {
            $("#projects").append(HTMLprojectStart);
            const formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[y].title);
            $(".project-entry:last").append(formattedTitle);
            const formattedDates = HTMLprojectDates.replace("%data%", projects.projects[y].dates);
            $(".project-entry:last").append(formattedDates);
            const formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[y].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[y].images.length > 0) {
                for (let i = 0; i < projects.projects[y].images.length; i ++) {
                    const formattedImage = HTMLprojectImage.replace("%data%", projects.projects[y].images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

const work = {
    "jobs": [
        {
            "title": "Director and Full Stack Web Developer",
            "employer": "Luminate QR",
            "location": "Brisbane, QLD, Australia",
            "dates": "2016-Present",
            "description": "Fill in later..."
        },
        {
            "title": "Research Fellow (Information Systems)",
            "employer": "The Australian National University",
            "location": "Canberra, ACT, Australia",
            "dates": "2015-2016",
            "description": "Fill in later..."
        },
        {
            "title": "Lecturer (Information Systems)",
            "employer": "University of New South Wales",
            "location": "Sydney, NSW, Australia",
            "dates": "2012-2014",
            "description": "Fill in later..."
        },
        {
            "title": "Senior Consultant (Technology)",
            "employer": "Deloitte Consulting LLP",
            "location": "Washington, D.C., USA",
            "dates": "2011-2012",
            "description": "Fill in later..."
        },
        {
            "title": "IT Specialist and Operations Research Analyst",
            "employer": "Center for AMEDD Strategic Studies",
            "location": "Fort Sam Houston, Texas, USA",
            "dates": "2009-2011",
            "description": "Fill in later..."
        },
        {
            "title": "Senior Developer and Systems Administrator",
            "employer": "Blue Grass Army Depot",
            "location": "Richmond, KY, USA",
            "dates": "2008-2009",
            "description": "Fill in later..."
        },
        {
            "title": "Signal Corps Officer (ICT Manager)",
            "employer": "United States Army",
            "location": "Mannheim, Germany",
            "dates": "2004-2008",
            "description": "Fill in later..."
        }
    ],
    display: function () {
        for (let i = 0; i < work.jobs.length; i++) {
            // create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            const formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            const formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            const formattedEmployerTitle = formattedEmployer + formattedTitle;
            const formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            const formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            const formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
        }
    }
};

// add bio

bio.display();

// add work

work.display();

// add projects

projects.display();

// add education

education.display();

// add map

$("#mapDiv").append(googleMap);
initializeMap();

// add let's connect info

const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

// get clicks

// $(document).click(function(loc) {
//     const x = loc.pageX;
//     const y = loc.pageY;
//     logClicks(x,y);
// });

// function locationizer(work_obj) {
//     let locationArray = [];
//     let newLocation;
//     for (let i = 0; i < work_obj.jobs.length; i++) {
//         newLocation = work_obj.jobs[i].location;
//         locationArray.push(newLocation);
//     }
//     return locationArray;
// }
