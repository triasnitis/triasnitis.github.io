let datUser = []

let thisUser = {uname : "woy@gmail.com", psw : "woy123"};
datUser.push(thisUser);
let loginSuccess=false;

function LoadPage(){
    console.log("waw");
    console.log(loginSuccess);
    // if(loginSuccess){
    //     window.location.href = document.getElementById('tets').href;
    //     return;
    // }
    // document.getElementById('loginPanel').style.visibility= "visible";
    // document.getElementById('forgotPanel').style.visibility= "hidden";
    // document.getElementById('registPanel').style.visibility= "hidden";
}

function changPage(){
    window.location.assign("link/welcome.html");
}


function CekValid(){
    
    // document.getElementById('welcomePage').click();
    console.log("Test");
    if(datUser.find(u => u.uname == document.getElementById("u_email").value && u.psw == document.getElementById("u_password").value) != undefined){
        window.location.assign("link/welcome.html");
        loginSuccess = true;
    }else{
        // window.alert("Password wrong");
        // loginSuccess = false;
    }
    localStorage["loginSuccess"] = loginSuccess;
}

function forgetProccess(){
    console.log("see your email");
}

function RegisterConfirm(){
    console.log("prosese regis");
}

function changePanel (_panel){
    switch(_panel){
        case "login":
            document.getElementById('loginPanel').style.visibility= "visible";
            document.getElementById('forgotPanel').style.visibility= "hidden";
            document.getElementById('registPanel').style.visibility= "hidden";  
            break;
        case "register":
            document.getElementById('loginPanel').style.visibility= "hidden";
            document.getElementById('forgotPanel').style.visibility= "hidden";
            document.getElementById('registPanel').style.visibility= "visible"; 
            break;
        case "forget":
            document.getElementById('loginPanel').style.visibility= "hidden";
            document.getElementById('forgotPanel').style.visibility= "visible";
            document.getElementById('registPanel').style.visibility= "hidden"; 
            break;
    }
}