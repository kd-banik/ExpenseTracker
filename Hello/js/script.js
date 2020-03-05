$(document).ready(function (){
    let errorDiv = $(".error");
    // errorDiv.css("display","none");
    // errorDiv.css("color","red");
    // let display = $(".menu-drop").css("display");
    // if(display === "block"){
    //     $(".menu-drop").css("display","none");
    // }
    // else{
    //     $(".menu-drop").css("display","block");
    // }
    // $(".claim-drop-down").on("click",function(event){
    //     console.log("clicked");
    //    let targetElement = event.target;
    //    let display = $(targetElement).siblings(".menu-drop").css("display");
    //    if(display === "block"){
    //        $(targetElement).siblings(".menu-drop").css("display","none");
    //    }
    //    else{
    //        $(targetElement).siblings(".menu-drop").css("display","block");
    //    }
    // });
    $("#claim-form").on("submit",function(event){
        event.preventDefault();
        console.log("form submit");
        let empId = $("#empId").val();
        let projectManagerId = $("#projectManagerId").val();
        let typeOfClaim = $("#typeofClaim").val();
        let noPerson = $("#noPerson").val();
        let amount = $("#amount").val();
        let tagempId = $("#tagempId");
        let tagPerson = $("#tagPerson");
        let tagempIdVal = tagempId.val();
        let tagPersonVal = tagPerson.val();
        let invoiceFile = $("#invoiceFile").val();
        let comment = $("#comment").val();
        console.log(errorDiv);
        if(empId == ""){
            errorDiv[0].style.display = "block";
        }
        else{
            errorDiv[0].style.display = "none";
        }
        if(projectManagerId == ""){
            errorDiv[1].style.display = "block";
        }
        else{
            errorDiv[1].style.display = "none";
        }
        if(typeOfClaim == ""){
            errorDiv[2].style.display = "block";
        }
        else{
            errorDiv[2].style.display = "none";
        }
        if(noPerson == ""){
            errorDiv[3].style.display = "block";
        }
        else{
            errorDiv[3].style.display = "none";
        }
        if(amount == ""){
            errorDiv[4].style.display = "block";
        }
        else{
            errorDiv[4].style.display = "none";
        }
        if(noPerson > 0 && tagempId.css("display") === "block" && (tagempIdVal == "" || tagempIdVal == 0)){
            errorDiv[5].style.display = "block";
        }
        else{
            errorDiv[5].style.display = "none";
        }
        if(noPerson > 0 && tagPerson.css("display") === "block" && (tagPersonVal == "" || tagPersonVal == 0)){
            errorDiv[6].style.display = "block";
        }
        else{
            errorDiv[6].style.display = "none";
        }
        if(invoiceFile == ""){
            errorDiv[7].style.display = "block";
        }
        else{
            errorDiv[7].style.display = "none";
        }
        if(comment == ""){
            errorDiv[8].style.display = "block";
        }
        else{
            errorDiv[8].style.display = "none";
        }
        console.log("empId "+empId);
        console.log("projectmannagerId "+projectManagerId);
        console.log("typeofClaim "+typeOfClaim);
        console.log("NoPerson "+noPerson);
        console.log("amount "+amount);
        console.log("tagEmpId "+tagempIdVal);
        console.log("tagPerson "+tagPersonVal);
        console.log("invoice "+invoiceFile);
        console.log("comment "+comment);
        // let tagempId = $("#tagempId");
        // let tagPerson = $("#tagPerson");
        // console.log(tagempId.css("display"));
        // console.log(tagPerson.css("display"));
    });
    $("#reset").on("click",function(event){
        event.preventDefault();
        $(".error").css("display","none");
        $("#empId").val("");
        $("#projectManagerId").val("");
        $("#typeofClaim").val("");
        $("#noPerson").val("");
        $("#amount").val("");
        $("#tagempId").val("");
        $("#tagPerson").val("");
        $("#invoiceFile").val("");
        $("#comment").val("");
    });
});


