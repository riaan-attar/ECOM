// Ensure the Email object is defined or imported
// Example: import Email from 'path-to-email-library';

function emailSend(){


	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;


	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "attarriaan6226@gmail.com",
    Password : "1C079405BF41B51CDDD5EFC64D4900FC8F9C",
    To : "riaan6226@gmail.com",
    From : "attarriaan6226@gmail.com",
    Subject : "This is the Testing Email",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
