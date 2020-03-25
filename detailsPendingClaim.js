$(document).ready(function(){
  let url = new URLSearchParams(window.location.search);
  id = url.get('id');
  showTable(id);  
});

function showTable(id){
$.ajax({
   type: "GET",
   url: "http://127.0.0.1:3000/Claim_id/" + id, 
   success: function(response){           
       jsonObj = $.parseJSON(response);
       jsonObj = JSON.parse(response);
           console.log(jsonObj);
       loadTableData(jsonObj);           
   },
   error: function() {
     alert("did not work");
     location.reload(true);
   }
});
}
function loadTableData(myArr){
	let html='';
	html +=`<tr class="bg-info"><th>Claim ID</th><td>`+ myArr[0].Claim_id + `</td></tr><tr><th>Employee ID</th><td>`+myArr[0].Emp_id +
	`</td></tr><tr><th>Manager ID</th><td>`+myArr[0].Manager_id + `</td></tr><tr><th>Claim Type</th><td>`+ myArr[0].Claim_type +
	`</td></tr><tr><th>No_of_Person</th><td>`+ myArr[0].No_of_Person + `</td></tr><tr><th>Claim_amount</th><td>`+ myArr[0].Claim_amount +
	`</td></tr><tr><th>Claim_invoice</th><td>` + myArr[0].Claim_invoice + `</td></tr><tr><th>Claim_status</th><td>` + myArr[0].Claim_status + 
	`</td></tr><tr><th>Comment</th><td>`+ myArr[0].Comment+ `</td></tr></table>`;
	console.log(html);
	//document.getElementById('displayDetails').innerHTML=document.getElementById('displayDetails').innerHTML+html;
	$('#detailsPendingTable').append(html);
}



/**
`Claim_id` int NOT NULL AUTO_INCREMENT,
  `Emp_id` int NOT NULL,
  `Manager_id` varchar(45) NOT NULL,
  `Claim_type` varchar(45) NOT NULL,
  `No_of_Person` int DEFAULT NULL,
  `Claim_amount` int NOT NULL,
  `Claim_invoice` blob,
  `Claim_status` varchar(45) NOT NULL DEFAULT 'Pending',
  `Comment` varchar(100) DEFAULT NULL,
  */