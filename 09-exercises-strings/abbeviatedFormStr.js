/*abbrev_name

Write a JavaScript function to convert a string in abbreviated form.

console.log(abbrev_name("Robin Singh"));
"Robin S."*/

function abbrev_name(name) {
	var aName = name.split("")
	var abbreviatedName = []
	for (var i = 0; i < aName.length; i++) {
		abbreviatedName += aName[i];
	  if (aName[i] === "S"){
	  	break;
	  }

	}
	return abbreviatedName + ".";
}
abbrev_name("Robin Singh");