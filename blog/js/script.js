$(document).ready(function (event){
    $("#submit-blog").on("click",function(event){
        event.preventDefault();
        let data = CKEDITOR.instances.editor.getData();
        console.log(data);
    });
});