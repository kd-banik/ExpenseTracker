$(document).ready(function (event){

    $("#blog-title").on("blur",function(event){
        event.preventDefault();
        console.log("Blur called");
        let blogTitleSplit =  $("#blog-title").val().split(" ");
    
        let blogSlug = "";
        for(let index = 0 ;index < 3 && index < blogTitleSplit.length ; index++){
    
            
            blogSlug += (index > 0)? "-"+blogTitleSplit[index] : blogTitleSplit[index];
            
        }
        if(blogSlug.trim().length > 25){
            blogSlug = blogSlug.slice(0,24);
            //$("#blog-slug").val(blogSlug);
        }
        $.ajax({
            contentType: "application/json",
            method: "POST",
            url: "http://localhost:3000/blog/slug/",
            data: JSON.stringify({
                slug: blogSlug
            }),
            success: function(result,status,xhr){
                console.log("Success");
                console.log(status);
                console.log(result);
                let jsonCountSlug = JSON.parse(result);
                console.log(jsonCountSlug)
                $("#blog-slug").val(blogSlug+"-"+jsonCountSlug[0].count_slug);
            },
            error: function(xhr,status,error){
                console.log("error");
                console.log(status);
                console.log(error);
            }
        })
        console.log(blogSlug);
    });

    $("#submit-blog").on("click",function(event){
        event.preventDefault();
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

    // $(".blog-dashboard-body").on("load",function(event){
    //     event.preventDefault();
    //     console.log("Body Loading");
    // });
});