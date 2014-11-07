var Main =(function(){
    //Varibles for the Main Class 
        
    //Init the Application
    
    
    var init =function (){
		
        var routes = [{
			hash: '#projects',
			presenter: 'ListProjectsPresenter'
        },
		{
			hash: '#project-details',
			presenter: 'AddProjectDetailsPresenter'
        }];
      
		Router.startRouting();
		
		
    };
  
   
    return {
        
             init: init
     };
    
}());


Main.init();
