// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require jquery3
//= require jquery2


function get(){ 
    var x = document.getElementById("myText").value; 
    var s= x.toUpperCase();
    tm(s); 
}

function tm(word){
    window.open("http://localhost:3000/stocks/"+word);
}


function wrap(){

// $(".search").click(function(){
//     alert("hhhhhhh")
//         entW = document.getElementById("char").value.toLowerCase(); 
// console.log(entW);
// console.log(0000);
// });


// function mySearch(){
//     alert(hello);
//     entW = document.getElementById("char").value.toLowerCase(); 
// console.log(entW);
// console.log(0000);
// }


// function clickSubmit() {
//     $('button').on('click', event => {
//       event.preventDefault();
//       formReset();
//       var searchCriteria = $('input[type=text]').val();
//       var searchUpperCase = searchCriteria.toUpperCase();
//       console.log(searchUpperCase)
//      document.getElementById("demo").innerHTML = searchUpperCase ;
   
  
//     });
  
//   }
  
//   function formReset() {
//     $('.searchresults').empty(); 
//   };
}