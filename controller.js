
    document.getElementById('filtering').onchange = function(e) {
		
    	let values = $('#filtering').val();
		let length = values.length;
    html=""
    for(i=0; i< values.length ;i++){
     html  += `<div class = "chip">`+values[i]+
                '<span class="closebtn" onclick="this.parentElement.style.display=\'none\'">&times;</span></div>';
	 }
	 document.getElementById('tagPerson').innerHTML = "" 
	 document.getElementById('tagPerson').innerHTML += html; 
}