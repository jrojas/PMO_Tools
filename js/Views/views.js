//Begin Projects

var ListProjectsView = (function () {
	//Varibles for the View Class 
	var template, app, proj, html;

	//Bind Data to template

	var init = function (parameters) {

		_render(parameters);
	
		
		

	};

	var _render = function (parameters) {
		app = Core.findSelector("#app")[0];
		app.innerHTML = "";
		template = Core.findSelector("#projects-template")[0];
		proj = parameters.projects;
		html = template.innerHTML;
		console.log(proj);
		
		for (var i = 0, len = proj.length; i < len; i++) {
			var temp = html.replace(/{{Program}}/ig, proj[i].programname)
				.replace(/{{Project Name}}/ig, proj[i].projectname)
				.replace(/{{Project Manager}}/ig, proj[i].projectmanager)
				.replace(/{{Status}}/ig, proj[i].status);
			Core.append(app,temp);  
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