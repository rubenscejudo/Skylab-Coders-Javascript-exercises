/*string_Array
Write a JavaScript *function to split a string and 
convert it into an array* of words. Go to the editor

    console.log(string_to_array("Robin Singh"));
    ["Robin", "Singh"]*/


function string_to_array (str) {  
     var array = str.split(" ");  
     return array;
};  
console.log(string_to_array("Robin Singh"));