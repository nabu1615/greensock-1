(function($){

	// Variables

	var $projects = $(".projects"), // Projects Container
		$project = $(".project"), // Single Project
		$projectImageBefore = CSSRulePlugin.getRule(".project-image:before"), // Decoration
		$projectImageAfter = CSSRulePlugin.getRule(".project-image:after"), // Decoration
		tlProjects, tlProject;

	// Timeline Projects

	tlProject = new TimelineMax({ repeat: -1, repeatDelay: 2});

	var projectClasses = $project.attr("class").split(" "),
		projectClass = projectClasses[1],
		$pixel = $project.find(".pixel"),
		$pixels = $project.find(".project-pixels"),
		$projectTitle = $project.find(".project-title"),
		$projectSubtitle = $project.find(".project-subtitle"),
		$projectImage = $project.find(".project-image");

	// Create a Project Timeline 

	tlProject
		.set([$projectTitle, $projectSubtitle, $pixel], {autoAlpha: 0})
		.fromTo($projectImage, 0.4, {autoAlpha: 0, xPercent: "-200"}, {autoAlpha: 1, xPercent: "-10", ease:Power4.easeInOut})
		.add("imageIn")
		.staggerFromTo($pixel, 0.3, {autoAlpha: 0, x: "-=10"}, {autoAlpha: 1, x: "'0" , ease:Power4.easeInOut}, 0.02, "-=0.2")
		.add("pixelsIn")
		.fromTo($projectTitle, 0.7, {autoAlpha: 0, xPercent: "-50"}, {autoAlpha: 1, xPercent: "-5", ease:Power4.easeInOut}, "-=0.4")
		.fromTo($projectSubtitle, 0.7, {autoAlpha: 0, xPercent: "-50"}, {autoAlpha: 1, xPercent: "-2", ease:Power4.easeInOut}, "-=0.5")
		.add("titleIn")
		.to($projectTitle, 4.3, {xPercent: "+=5", ease:Linear.easeNone} , "titleIn-=0.1")
		.to($projectSubtitle, 4.3, {xPercent: "+=2", ease:Linear.easeNone} , "titleIn-=0.2")
		.add("titleOut")
		.to($projectImage, 3, {xPercent: "0", ease:Linear.easeNone}, "imageIn")
		.add("imageOut")
		.to($pixels, 4.1, {x: "-5", ease:Linear.easeNone}, "pixelsIn")
		.to([$projectTitle, $projectSubtitle], 0.5, {autoAlpha:0, xPercent: "+=10", ease:Power4.easeInOut}, "titleOut")
		.to($projectImage, 0.4, {autoAlpha:0, xPercent: "+=80", ease:Power4.easeInOut}, "imageOut")
		;

})(jQuery);




