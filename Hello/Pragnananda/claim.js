function ajaxcall(){
	alert("running")

		$.ajax({
			url: 'http://localhost:8000/submit',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({
				empID: $("#empID").val(),
				projectManagerId: $("#projectManagerId").val(),
				typeofClaim: $("#typeofClaim").val(),
				noPerson: $("#noPerson").val(),
				amount: $("#amount").val(),
				invoiceFile: $("#invoiceFile").val(),
				comment: $("#comment").val()
			}),
			success: function (data) {
				console.log("ajax is working")
								
			},
			error: function() {
				alert("Ajax code not working...");
				location.reload(true);
			}
		});
}