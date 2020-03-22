// $(document).ready(function (event) {
//     $.ajax({
//         contentType: "application/json",
//         method: "GET",
//         url: "http://localhost:3000/",
//         success: function (result, status, xhr) {
//             console.log("success");
//             console.log(status);
//             console.log(JSON.parse(result));
//             loadBlog(JSON.parse(result))    //function calling
//         },
//         error: function (xhr, status, error) {

//             console.log("error");
//             console.log(status);
//             console.log(error);
//         }
//     });
// });
// function loadBlog(blogJson) {
//     console.log(blogJson);
//     console.log(blogJson.length);
//     let rows = parseInt(blogJson.length / 3);
//     rows += (blogJson.length % 3 == 0) ? 0 : 1;
//     console.log("rows " + rows);
//     let html = '';
//     let blogCount = 0;
//     for (let count = 1; count <= rows; count++) {
//         html += '<div class = "row">';
//         for (let column = 1; column <= 3 && blogCount < blogJson.length; column++, blogCount++) {
//             console.log("Title " + blogJson[blogCount].title_blog);
//             console.log("desc " + blogJson[blogCount].brief_blog);
//             html += '<div class = "col-md-4">';
//             html += '<div class = "card">';
//             html += '<div class = "card-body">';
//             html += '<div class = "card-body">';
//             html += '<h4 class = "card-title">' + blogJson[blogCount].title_blog + '</h4>'
//             html += '<p class = "card-text">' + blogJson[blogCount].brief_blog + '</p>';
//             html += '<button class = "btn bg-oit-green text-color-ghostwhite">Read More..</button></div></div></div></div>';
//         }
//         html += '</div>';
//     }
//     $(".blog-content").append(html);
// }

function blogdata() {
    let urlparam = new URLSearchParams(window.location.search);
    let id = urlparam.get("id");
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let blogcon = JSON.parse(this.response);
             console.log(blogcon);
            let content = "";
            let data = "";

            data += "id_blog=" + blogcon.id_blog +
                "&title_blog=" + blogcon.title_blog +
                "&brief_blog=" + blogcon.brief_blog +
                "&content_blog=" + blogcon.content_blog +
                "&slug_blog=" + blogcon.slug_blog +
                "&date_blog=" + blogcon.date_blog +
                "empID=" + blogcon.empID;

            content += "<h2>Title: </h2><br>" + blogcon.title_blog + "<br>"+
                "<h4>Heading: </h4><br>" + blogcon.brief_blog + "<br>" +
                "<p>Details: </p><br>" + blogcon.content_blog;

            document.getElementById("contain").innerHTML = content;
           
        }
    };

    xml.open("GET", "http://localhost:3000/blog_details/"+id+"", true);
    xml.send();
}