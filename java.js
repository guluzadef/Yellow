// var lamp = document.getElementsByClassName ("list-group-item");


// function my_function (elemet) {
//     for (var i=0 ; i<lamp.length ; i++) {
//         lamp[i].style.backgroundColor = "white"
//     }
//     //  for (var i=0 ; i<lamp.length ; i++){
//         elemet.style.backgroundColor = "yellow" ;
       
//  }
  
 

 var lampa ; 
 function my_function (element) {
     if(!lampa) {
         element.style.backgroundColor = "yellow"
     }
     else  {
         lampa.style.backgroundColor = "white"
         element.style.backgroundColor = "yellow"

     }
     lampa=element ;
 }