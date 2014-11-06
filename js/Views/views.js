//Begin Projects

var ListProjectsView = (function () {
	//Varibles for the View Class 
	var template, app, proj, html;
		

	//Bind Data to template

	var init = function (parameters) {
		
		
		_render(parameters);	
		

	};

	var _render = function (parameters) {
		
		
		var proj = parameters.projects;
		
		var template = document.getElementById("projects-template").innerHTML;
		
		for (var i = 0, len = proj.length; i < len; i++) {
			var app = document.getElementById("app-tbody");	
			
			var temp = template.replace(/{{Program}}/ig, proj[i].programname)
				.replace(/{{Project Name}}/ig, proj[i].projectname)
				.replace(/{{Project Manager}}/ig, proj[i].projectmanager)
				.replace(/{{Status}}/ig, proj[i].status);
			
			app.innerHTML += temp;
		}






	}
	
	
	
		
	return {

		init: init
	};

}());

var AddProjectDetailsView = (function () {
	//Varibles for the View Class 
	var template, app, proj, html;

	//Bind Data to template

	var init = function (parameters) {

		_render(parameters);

	};

	var _render = function (parameters) {
		template = Core.findSelector("#projects-template")[0],
		app = Core.findSelector("#app")[0];
		app.innerHTML = "";


		Core.append(app, parameters);
	


	}
	return {

		init: init
	};

}());

//End Projects