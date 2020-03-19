$(document).ready(function (event){

    $("#blog-title").on("keyup",function(event){
        event.preventDefault();
        let blogTitleSplit =  $("#blog-title").val().split(" ");
        // console.log(blogTitleSplit);
        let blogSlug = "";
        for(let index = 0 ;index < 3 && index < blogTitleSplit.length ; index++){
            //console.log(blogTitleSplit[index]);
            
            blogSlug += (index > 0)? "-"+blogTitleSplit[index] : blogTitleSplit[index];
            
        }
        if(blogSlug.trim().length <= 25){

            $("#blog-slug").val(blogSlug);
        }
    });
    $("#submit-blog").on("click",function(event){
        event.preventDefault();
        // let data = CKEDITOR.instances.editor.getData();
        // console.log(data);
        let blogTitle = $("#blog-title").val();
        let blogSlug = $("#blog-slug").val();
        let blogShortDescription = $("#blog-short-description").val();
        let blogContent = CKEDITOR.instances.blog_editor.getData();
        if(blogTitle == "" || blogTitle == " "){
            $(".blog-title-error").html("Title is empty");
            return false;
        }
        else{
            $(".blog-title-error").html("");
        }
        if(blogSlug == "" || blogSlug == " "){
            $(".blog-slug-error").html("Slug is empty");
            return false;
        }
        else{
            $(".blog-slug-error").html("");
        }
        if(blogShortDescription == "" || blogShortDescription == " "){
            $(".blog-short-description-error").html("Short Description is empty");
            return false;
        }
        else{
            $(".blog-short-description-error").html("");
        }
        if(blogContent == "" || blogContent == " "){
            $(".blog_editor_error").html("Content empty");
            return false;
        }
        else{
            $(".blog_editor_error").html("");
        }
        let blogData = {
            blog_title: blogTitle,
            blog_slug: blogSlug,
            blog_short_description: blogShortDescription,
            blog_content: blogContent
        }
        $(event.target).html("Posting...");
        $.ajax({
            contentType: "application/json",
            method: "POST",
            url : "http://localhost:3000/blog/submit/",
            data: JSON.stringify(blogData),
            success: function(result,status,xhr){
                console.log("success");
                console.log(status);
                console.log(result);
                $(event.target).html("Post");
                $("#blog-title").val("");
                $("#blog-slug").val("");
                $("#blog-short-description").val("");
                CKEDITOR.instances.blog_editor.setData("");
            },
            error: function(xhr,status,error){
                console.log("error");
                console.log(error);
                console.log(status);
            }
        });
        console.log(blogData);
    });
});