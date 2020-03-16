
$(document).ready(function () {
         $(function () {
        $('#filtering').multiselect({
           nonSelectedText: 'Select',
           optionLength : 4,

           enableFiltering: true,
           filterBehavior: 'text',
           enableCaseInsensitiveFiltering: true,
           templates: {
        
        		
        filter: '<li class="multiselect-item filter"><div class="input-group-sm m-0 mb-1"><input class="form-control multiselect-search" type="text" style = "width :35rem ;height : 3rem;"></li>',
        filterClearBtn: false
    },
   

        });
    });
//     const l = document.getElementById("filtering")
//   l.setAttribute()
        //document.getElementById("multiselect dropdown-toggle btn btn-default").setAttribute("size", 4);
  		
         });

