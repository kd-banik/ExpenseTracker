   
    document.getElementById('filtering').onchange = function(e) {
    	
     
	 let values = $('#filtering').val();
        html=""	
   
    for(i=0; i< values.length ;i++){
     html  += `<div class = "chip" style="padding-top: 2px;"  >`+values[i]+
                '<span class="closebtn" onclick="this.parentElement.style.display=\'none\'">&times;</span></div> ';
	 }
	 document.getElementById('tagPerson').innerHTML = "" 
	 document.getElementById('tagPerson').innerHTML += html; 

       var x =  document.getElementsByClassName("multiselect dropdown-toggle btn btn-default").getAttribute("aria-expanded");
       
  			x = "false"
 		
  		document.getElementById("multiselect dropdown-toggle btn btn-default").setAttribute("aria-expanded", x);
}