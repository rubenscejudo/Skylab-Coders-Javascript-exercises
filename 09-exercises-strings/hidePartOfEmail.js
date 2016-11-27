/*protect

Write a JavaScript function to hide email addresses to protect 
from unauthorized user.

console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"*/

function protect_email(email) {
	var splittedEmail = email.split("@");
	var userName = splittedEmail[0];
	var addressEmail = splittedEmail[1];
	var splittedUserName = userName.split("_");
	
	return splittedUserName[0] + "...@" + addressEmail
}
protect_email("robin_singh@example.com");