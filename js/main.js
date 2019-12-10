console.log("connected");

var button = document.querySelector("button");
var isPurple = false;

// button.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "whitesmoke";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }
// });

//refactored
button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "whitesmoke";
    } else {
        document.body.style.background = "purple";
    }
    isPurple = !isPurple;
});

//using a class and class toggle
//requires a css class to toggle
// button.body.addEventListener("click", function(){
//     document.body.classList.toggle("purple");
// });