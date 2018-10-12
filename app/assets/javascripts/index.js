


$(document).on("turbolinks:load", function(){
    
    //reload
    $("#myStocks").click(function(){
        location.reload();
    });



    // percentage colors
    var x = document.querySelectorAll("#perChange"); 
    var i;
    for (i = 0; i < x.length; i++) {
        var m =((x[i].innerText));
        var res = m.split("%");
         m = res[0]
          
        if ((m)> 0 ){ 
        x[i].style.color = "green";
        } else {
            x[i].style.color = "red"; 
        }
    }

    var x = document.querySelectorAll(".showChange"); 
    var i; 
    for (i = 0; i < x.length; i++) {
        var m =((x[i].innerText));
        var res = m.split("%");
         m = res[0]
        if ((m)> 0 ){ 
        x[i].style.color = "green";
        } else {
            x[i].style.color = "red"; 
        } 
    }


    //hide 2
    $("#pp").click(function(){ 
        $(this).location.reload(); 
    });

    // $('#pp').onclick(function(){

    //     alert('jhd')
    //     // var tr = $(this).parents('tr:first').hide();
         
    // });

    // hide table row
    // $('#delBttn').on('ajax:complete', function(data) { 
    //     $('.mainTable').delegate('#pp', 'click', function() {  
    //         var tr = $(this).parents('tr:first'),
    //             tds = tr.find('td'),
    //             l = tds.length;
            
    //         tds.fadeOut('fast', function(){ 
    //             if (! --l) {
    //                 tr.remove();                    
    //                 alert('You have deleted');
    //             }
    //         });    
            
    //         return false; 
    //     });
    // })
     







// //     var x = document.getElementById("mainBody").querySelectorAll("td");
// //     var i;
// //     console.log(x);
// //     console.log(999);
// //    for ( i = 0; i < x.length; i++) {
// //        x[i].style.backgroundColor = "red";
// //    }
// //     var x = document.querySelectorAll("#perChange");
// //     document.querySelector("#perChange").style.backgroundColor = "red";

// // console.log(x)
// });

 


// //     // 
// //     function toggleTable() {
// //         var lTable = document.getElementsByClassName("showBlogDiv");
// //         lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
// //     }

// // // function relod(){
// // //     location.reload();
// // // }
 
// // //   function hideOut(){ 
// // //     $(this).css("color", "blue");
// // // //         // $("a").css("background-color", "red");
          
// // // //     var y = document.querySelectorAll("a")
// // // //    var m = $(this).y;
// // // //     m.css("background-color", "red");
// // // //     // var y = document.querySelectorAll("p")
// // // //     var f =this
// // // //     console.log(f) 
// // // }
    
// // // target all links, add onclick handler that calls an anonymous function with the html id from that link
// // // jquery event listeners 
// // // jquery click event



// //         // $("tr").on("click", "a", changeColor);

// //      // ADDS EVENT LISTENER
// //     // $(".add").on("click", "#addBttn", print);

// //     // $("#add").on("mouseover", "#addBttn", changeColor);
// //     // //     $("#addBttn").css("color", "blue");
// //     // // });
// //     // // $("#addBttn").mouseout(function(){
// //     // //     $("#addBttn").css("color", "white");
// //     // // });

// //     // $("p").mouseover(function(){
// //     //     $("p").css("background-color", "yellow");
// //     // });
// //     // $("p").mouseout(function(){
// //     //     $("p").css("background-color", "lightgray");
// //     // });
    
// // });

// // function changeColor() {
// //     $(this).css("color", "blue");
// //     $(this).fadeOut();
// // }

// // function changejColor() {
// //     $(this).css("color", "white");
// // }

// // //  PICKS OUT STOCK NAME
// // function print(){ 
// //     // var f =this
// //     var d =this.className;
// //     var s= d.split(',') 
// //     var st = s[0];
// //     console.log(s[0]); 
// // }


// // alert("hello");

// // $(document).ready(function(){
// //    $("body").on("click", "p", print);
   
// //    var z =  document.getElementById("p");
   
// //    var x =  document.getElementById("u");
// //    // console.log(x.innerHTML)
// //    // document.getElementsById('u')
// //    var y = document.querySelectorAll("p").onclick = function(){
// //        console.log(7777)
// //    };
// //    // console.log(z)
// //    console.log( 888)
// // });

// // function print(){
// //    $(this).animate({fontSize: "+=10px"});
// //    var y = document.querySelectorAll("p")
// //   var m = $(this).y;
// //    // var y = document.querySelectorAll("p")
// //    var f =this
// //    console.log(f)
// //    console.log(7777)
// // }

// // function hideOut(){
// //    $(this).animate({fontSize: "+=10px"});
// //    var y = document.querySelectorAll("p")
// //   var m = $(this).y;
// //    // var y = document.querySelectorAll("p")
// //    var f =this
// //    console.log(f)
// //    console.log(7777)
// // }



// // {/* <td> <%= link_to row[0], stock_path(row[0]) %> </td> <td><p class= <%= row[0]%>, id='p' >Click me.</p></td>  */}




// //  $(document).ready(function(){  
// //     // don't use live, switch to delegate
// //     // $('.mainTable').delegate('#pp', 'click', function() {  
// //     //     var tr = $(this).parents('tr:first'),
// //     //         tds = tr.find('td'),
// //     //         l = tds.length;
        
// //     //     tds.fadeOut('fast', function(){ 
// //     //         if (! --l) {
// //     //             tr.remove();                    
// //     //             // alert('You have deleted');
// //     //         }
// //     //     });    
        
// //     //     return false; 
// //     // });
 });