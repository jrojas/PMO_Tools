var Models =(function(){
    //Varibles for the Model Class 
        
    
    //Data Interface
	
	
	var getProjects = function(){
		var projects = [
			
			{
			id: 1,
			programname: "Marketing",
			projectname: "Website Enhancement",
			projectmanager: "Jorge Rojas",
			status: "Active"
			},
			{
			id: 2,
			programname: "Sales",
			projectname: "Website Deployment",
			projectmanager: "Jorge Rojas",
			status: "Active"
			}
					   ]
		
		// Get a reference to our posts

		return projects;
		
    
		
		
	};
	

  
   
    return {
        
             init: getProjects
     };
    
}());