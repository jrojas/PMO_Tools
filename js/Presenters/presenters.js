var ListProjectsPresenter =(function(){
    //Varibles for the Presenter Class 
        
    //Subscribe to Data
    //Publish Data
    
    var init =function (){
		
		 var projects = Models.init();
		
        ListProjectsView.init({projects:projects});
		
			 
    };
  
   
    return {
        
             init: init
     };
    
}());


var AddProjectDetailsPresenter =(function(){
var init = function(){
	AddProjectDetailsView.init("Add-Project");
	

};

return{
	
	init:init

}


}());