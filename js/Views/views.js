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
		
		 template =$("#projects-template").html();
		 app = $("#app");
		
		var temp='';
		
		$.each(proj, function(index, obj){
			
			temp += template.replace(/{{Program}}/ig, obj.programname)
				.replace(/{{Project Name}}/ig, obj.projectname)
				.replace(/{{Project Manager}}/ig, obj.projectmanager)
				.replace(/{{Status}}/ig, obj.status);
		
		
		});
		
		Core.append(app,temp);
		
		
		/*for (var i = 0, len = proj.length; i < len; i++) {
			
			 temp += template.replace(/{{Program}}/ig, proj[i].programname)
				.replace(/{{Project Name}}/ig, proj[i].projectname)
				.replace(/{{Project Manager}}/ig, proj[i].projectmanager)
				.replace(/{{Status}}/ig, proj[i].status);
			console.log(index);
			
		}

		console.log(temp);
		//app.innerHTML=temp;
		Core.append(app,temp);*/



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
		template = $.trim($("#add-template").html());
		app = $("#app");	
		

		var temp =	template.replace(/{{Project Name}}/ig, parameters);
		
		Core.append(app, temp);
		


	}
	return {

		init: init
	};

}());

//End Projects