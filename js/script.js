$(document).ready(function (){
    let display = $(".menu-drop").css("display");
    if(display === "block"){
        $(".menu-drop").css("display","none");
    }
    else{
        $(".menu-drop").css("display","block");
    }
    $(".claim-drop-down").on("click",function(event){
        console.log("clicked");
       let targetElement = event.target;
       let display = $(targetElement).siblings(".menu-drop").css("display");
       if(display === "block"){
           $(targetElement).siblings(".menu-drop").css("display","none");
       }
       else{
           $(targetElement).siblings(".menu-drop").css("display","block");
       }
    });
});