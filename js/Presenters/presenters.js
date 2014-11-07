var ListProjectsPresenter = (function () {
	//Subscribe to Data


	var init = function () {

		var projects = Models.init();

		ListProjectsView.init({
			projects: projects
		});

	};


	return {

		init: init
	};

}());


var AddProjectDetailsPresenter = (function () {
	//Publish Data

	var init = function () {
		AddProjectDetailsView.init("Add-Project");


	};

	return {

		init: init

	}


}());