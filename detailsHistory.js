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
	html +=`<tr class="bg-info"><th>Claim ID</th><td>`+ myArr[i].Claim_id + `</td></tr><tr><th>Employee ID</th><td>`+myArr[i].Emp_id +
	`</td></tr><tr><th>Manager ID</th><td>`+myArr[i].Manager_id + `</td></tr><tr><th>Claim Type</th><td>`+ myArr[i].Claim_type +
	`</td></tr><tr><th>No_of_Person</th><td>`+ myArr[i].No_of_Person + `</td></tr><tr><th>Claim_amount</th><td>`+ myArr[i].Claim_amount +
	`</td></tr><tr><th>Claim_invoice</th><td>` + myArr[i].Claim_invoice + `</td></tr><tr><th>Claim_status</th><td>` + myArr[i].Claim_status + 
	`</td></tr><tr><th>Comment</th><td>`+ myArr[i].Comment+ `</td></tr></table>`;
	$('#detailsHistoryTable').append(html);
}