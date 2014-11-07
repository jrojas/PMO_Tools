//Begin Projects

var DOMElements = {
	
	
	app : document.getElementById('app'),
	vtemplate : document.getElementById('projects-template').innerHTML,
	atemplate: document.getElementById('add-template').innerHTML

}

var ListProjectsView = (function (){
	
	
	var init = function (parameters) {
		
		var proj = parameters.projects;
		var vtemplate = DOMElements.vtemplate;
		var app = DOMElements.app;
		var temp='';
		
		for (var i = 0, len = proj.length; i < len; i++) {
			
			 temp += vtemplate.replace(/{{Program}}/ig, proj[i].programname)
				.replace(/{{Project Name}}/ig, proj[i].projectname)
				.replace(/{{Project Manager}}/ig, proj[i].projectmanager)
				.replace(/{{Status}}/ig, proj[i].status);
			
		}
	}
		app.innerHTML=temp;

}());

var AddProjectDetailsView = (function () {
	
	
	var init = function (parameters) {
		var atemplate = DOMElements.atemplate
		var app = DOMElements.app	
		var temp =	atemplate.replace(/{{Project Name}}/ig, parameters);
		app.innerHTML=temp;
		


	}
	return {

		init: init
	};
	
	
	
	
}());

//End Projects