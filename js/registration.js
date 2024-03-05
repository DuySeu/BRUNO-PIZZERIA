function validate() {
    // User Information
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var genm = document.getElementById('genm').checked;
    var genf = document.getElementById('genf').checked;
    // Account Information
    var email = document.getElementById('email').value;
    var pwd1 = document.getElementById('pwd1').value;
    var pwd2 = document.getElementById('pwd2').value;
    var errMsg = '';
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;

    // All required inputs have value
    if (name == '') {
        errMsg += 'Username cannot be empty.\n';
    }
	if (age == '') {
        errMsg += 'Age cannot be empty.\n';
	}
	if (genm == '' && genf == '') {
        errMsg += 'A gender must be selected.\n';
	}
	if (email == '') {
        errMsg += 'Email cannot be empty.\n';
	}
    if (pwd1 == '') {
        errMsg += 'Password cannot be empty.\n';
    }
    if (pwd2 == '') {
        errMsg += 'Retype Password cannot be empty.\n';
    }
    // Other required
    if (!name.match(pattern)) {
        errMsg += "Username contains symbols.\n";
    }
	if (email.indexOf('@') < 0 ) { 
		errMsg += "User ID must contain an @ symbol.\n"; 
	   } 
    if (pwd1.length < 8) {
        errMsg += 'Password has to be at least 8 characters long.\n';
    }
    if (pwd1 != pwd2) {
        errMsg += 'Passwords do not match.\n';
    }
    if (errMsg != '') {
        alert(errMsg);
        result = false;
    }
    return result;
}

function showPwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin");
	var scrnOverlay = document.getElementById("scrnOverlay");

	console.log(pwdHelpWin)
	console.log(scrnOverlay)
	
	pwdHelpWin.style.display = "block";    	
	scrnOverlay.style.visibility = "visible"; 
}

function hidePwdWin () {
	var pwdHelpWin = document.getElementById("pwdHelpWin"); 
	var scrnOverlay = document.getElementById("scrnOverlay");
	
	pwdHelpWin.style.display = "none";
    console.log(scrnOverlay);
	scrnOverlay.style.visibility = "hidden";
}

function init() {
	var pwdHelpBtn = document.getElementById("pwdHelpBtn"); 
	var pwdHelpClose = document.getElementById("pwdHelpClose"); 
		
	pwdHelpBtn.onclick = showPwdWin;
	pwdHelpClose.onclick = hidePwdWin; 

    var regForm = document.getElementById('regform');
    regForm.onsubmit = validate;
}
window.onload = init;
