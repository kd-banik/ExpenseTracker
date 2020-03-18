$(document).ready(function(){
       showTable();  
});

function showTable(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8081/get/approval",
        dataType: "html",
        success: function(response){
                console.log(response)
            //jsonObj = $.parseJSON(response);
            jsonObj = JSON.parse(response);
                console.log(jsonObj)
            loadTableData(jsonObj);           
        },
        error: function() {
            alert("did not work");
            location.reload(true);
        }
    });
}

function loadTableData(arr){
    let detail_data = '';

    for(let i = 0; i < arr.length ; i++){
        detail_data += '<tr>';
        detail_data += '<td>' + arr[i].Claim_id + '</td>';
        detail_data += '<td>' + arr[i].Emp_id + '</td>';
        detail_data += '<td>' + arr[i].Employee_Name + '</td>';
        detail_data += '<td>' + arr[i].Claim_Type + '</td>';
        detail_data += '<td>' + arr[i].No_of_Person + '</td>';
        detail_data += '<td>' + arr[i].Claim_amount + '</td>';
        detail_data += '<td><a href="DetailsApprove.html style="text-decoration:none;">Details</a></td>';
        detail_data += '</tr>';
    }
console.log(detail_data)
    $('#responseContainer tbody').append(detail_data);
}