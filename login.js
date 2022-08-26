
// var submit = document.getElementById("nedi");
// var email = document.getElementById("barid");
// var password = document.getElementById("mdp");

// submit.addEventListener("click",LGN)
// function LGN() {
//     console.log(email.value)
//     if (email.value == "demo@demo.com" && password.value == "password") {
//         window.location.replace("page1.html");
//     }
//     else {
//         alert("please enter correct email and password")
//     }
// }
submit = document.getElementById('nedi');
email = document.getElementById('barid');
password = document.getElementById('mdp');


submit.addEventListener('click', sub);
function sub () {
    if (email.value == 'demo@demo.com' && password.value == 'pass') {
        window.location.replace("page1.html");
    }
    else {
        alert("please enter correct email and password")
}
}
