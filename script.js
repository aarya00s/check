// Define validateCode first to ensure it is available when referenced
function validateCode(event) {
    // Prevent the form from submitting traditionally
    event.preventDefault();

    var codeInput = document.querySelector('#b-form input[type="password"]').value;
    var accessCode = "sig2024xcf";
    var accessCode2 = "reperio2024";
     var accessCode3 = "microsoft2024";
     var accessCode4 = "virtu2024";
     var accessCode5 = "dab2024";
    var accessCode6 = "vir2024";
    
    if(codeInput === accessCode) {
        window.location.href = "https://aarya00s.github.io/login/";
    }
    else if(codeInput === accessCode2) {
        window.location.href = "https://aarya00s.github.io/login2/";
    } 
    else if(codeInput === accessCode3) {
        window.location.href = "https://aarya00s.github.io/loginMicrosoft/";
    } 
    else if(codeInput === accessCode4) {
        window.location.href = "https://aarya00s.github.io/loginvirtu/";
    } 
    else if(codeInput === accessCode5) {
        window.location.href = "https://aarya00s.github.io/logindandb/";
    } 
    else if(codeInput === accessCode6) {
        window.location.href = "https://aarya00s.github.io/login_viridian/";
    } 
            
    else {
        alert("Incorrect code. Please try again.");
    }
}

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function() {
        switchCtn.classList.remove("is-gx");
    }, 1500);

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = () => {
    for (var i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener("click", changeForm);
    }
    
    // Correctly attach event listener to the "SIGN IN" form for submission
    document.getElementById('b-form').addEventListener('submit', validateCode);
}

window.addEventListener("load", mainF);
