var Core =(function($,window,undefined){
    //Varibles for the Core Class 
    var doc = window.document;
    
    //Finds DOM elements for caching   
    
   var init =function (){
    };
  
    var findSelector = function(selector, context){
          
              
        var ret = {}, that = this, jqEls, i = 0;

                if (context && context.find) {
                    jqEls = context.find(selector);
                } else {
                    jqEls =$(selector); 
                }
                
                ret = jqEls.get();
                ret.length = jqEls.length;
                ret.query = function (sel) {
                    return that.query(sel, jqEls);
                }
                return ret;
 
        
           
      }; 
	
	var append = function(el,temp){
		
		$(el).append(temp);
		
	}
    
    var bind = function(el,evt,fn){
        $(el).on(evt,fn);
     
    };
       
    var pub = function(evt){
        
      
         $(doc).trigger(evt, evt.data);
  
    };

    var sub = function(evt,fn){
     
     $(doc).on(evt, fn);
           
        
     
    };
    
    return {
        
        findSelector: findSelector,
        bind:   bind,
        publish: pub,
        subscribe: sub,
        init: init,
		append: append
     };
    
}(jQuery,window));


var Router = (function () {

	var routes = [{
			hash: '#projects',
			presenter: 'ListProjectsPresenter'
        },
		{
			hash: '#project-details',
			presenter: 'AddProjectDetailsPresenter'
        }];
	
	var defaultRoute = '#projects';
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
		var pre=eval(presenter.presenter);
		pre.init();

	

	}

	return {
		startRouting: startRouting
	};
})();