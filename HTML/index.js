function ajaxcall(){
	alert("running")

		$.ajax({
			url: 'http://localhost:8000/submit',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify({
				fname: $("#fname").val(),
				lname: $("#lname").val(),
				email: $("#email").val(),
				designation: $("#designation").val(),
				empID: $("#empID").val(),
				password: $("#password").val(),
				password1: $("#password1").val()
			}),
			success: function (data) {
				console.log("ajax is working")
				//alert('Data: ' + data);		
			},
			error : function(xhr,status,err){
				console.log(xhr.responseJson)
			}
			
		});
}

function ajaxlog() {
	//alert("login is running")
	$.ajax({
		url: 'http://localhost:8000/login',
		type: 'post',
		contentType: 'application/json',
		data: JSON.stringify({
			e_mail: $("#e_mail").val(),
			pword: $("#pword").val()
		}),
		success: function (data) {
			console.log("ajax login is working")
			//alert('Data: ' + data);
		}
	});
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
				        var confirmPassword = document.getElementById("password1").value;
				        if (password != confirmPassword) {
				            //alert("Passwords do not match.");
				            document.getElementById("pp").style.display = "block";
				            return false;
				        }else{
				        	document.getElementById("pp").style.display = "none";
				        	return true;
				        	}
					}
					