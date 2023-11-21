let imgChange = document.getElementById('switch');  

let on = document.getElementById('btn_on');  
 on.addEventListener("click", function(){  
      imgChange.src = "on.png";  
 })  
 let off = document.getElementById('btn_off');  
 off.addEventListener("click", function(){  
      imgChange.src = "off.png";  
 })  