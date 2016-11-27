/*is_Blank
Write a JavaScript function to check whether a string *is blank or not*. Go to the editor

    console.log(is_Blank('')); 
    console.log(is_Blank('abc'));
    true 
    false*/

    function is_Blank(text) {  
        if (text.length === 0) { 
        return true;  
        }
        else {  
        return false;  
    	}
      }  

      console.log(is_Blank('')); 
      //console.log(is_Blank('abc'));