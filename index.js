function load () {
		document.getElementById('register').style="display:none;";
		document.getElementById('check').value="Register";
	}
	function register () {
		document.getElementById('register').style="height:100%;";
		document.getElementById('login').style="display:none";
		document.getElementById('check').value="Login";
	}
	function login () {
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
	}
	function check () {
		
		var che= document.getElementById('check').value;
		if(che=="Login")
		{
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
		}
		else
		{
			document.getElementById('register').style="height:100%;";
			document.getElementById('login').style="display:none";
			document.getElementById('check').value="Login";
		}
		
	}
	            function Validate() {
     			   	var password = document.getElementById("password").value;
   				    var confirmpassword = document.getElementById("password1").value;
        			if (password != confirmpassword) {
           			alert("Passwords do not match.");
            		return false;
        			}else{
        			return true;
        				}
					}

	function validation()
	{
		
		var check=document.getElementById('email').type;
		if(check=="email")
		{
			var value=document.getElementById('email').value;
			if(value=="")
			{

				document.getElementById('error').innerHTML="Incorrect Email Address";

			}
		}
	}
	
  

