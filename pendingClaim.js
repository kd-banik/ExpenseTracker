$(document).ready(function(){
  showTable();  
});

function showTable(){
$.ajax({
   type: "GET",
   url: "http://127.0.0.1:3000/all",
   contentType: "application/json",
   success: function(response){
           console.log(response)
       //jsonObj = $.parseJSON(response);
       jsonObj = JSON.parse(response);
           console.log(jsonObj)
       loadTableData(jsonObj);           
   },
   error: function() {
     //alert("did not work");
      // location.reload(true);
   }
});
}

function loadTableData(arr){
   let html=``;

for(let i = 0; i < arr.length ; i++){
   html +=`<tr><td>`+arr[i].Claim_id+`</td><td>`+arr[i].Manager_id+`</td><td>`+arr[i].Claim_type+`</td><td>`+arr[i].Claim_amount+`</td><td>`+arr[i].Claim_status+`</td><td><button type="button" class="btn btn-dark active"><a class="selectedRow" href="detailsPending.html?id=` +arr[i].Claim_id+` " style="color: white; text-decoration: none;">
            Details</a></button></td></tr>`;
}
//console.log(detail_data)
$('#pendingTable').append(html);
}