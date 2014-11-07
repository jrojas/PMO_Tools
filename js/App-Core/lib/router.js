/*var Routersxys = (function () {

	var routes = [{
			hash: '#projects',
			presenter: 'ListPresenter'
        },
		{
			hash: '#add',
			presenter: 'AddPresenter'
        }];
	var defaultRoute = '#list';
	var currentHash = '';

	var startRouting = function () {
		window.location.hash = window.location.hash || defaultRoute;
		setInterval(hashCheck, 100);
	}


	var hashCheck = function () {
		if (window.location.hash != currentHash) {
			for (var i = 0, currentRoute; currentRoute = routes[i++];) {
				if (window.location.hash == currentRoute.hash)
					loadPresenter(currentRoute);
			}
			currentHash = window.location.hash;
		}
	}

	var loadPresenter = function (presenter) {

		var LP = "ListPresenter"
		var AP = "AddPresenter"

		if (LP === presenter.presenter) {

			ListPresenter.start();
		}

		if (AP === presenter.presenter)

			AddPresenter.start();



	}




	return {
		startRouting: startRouting
	};
})(AddPresenter, ListPresenter);*/