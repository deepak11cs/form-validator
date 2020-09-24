let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let form = document.getElementById("form");

// show error
function showError(input, message){
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
}

// show success
function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
    let ret = false;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        ret = true;
    } 
    else {
        showError(input, 'Email is not valid');
    }
    return ret;
}

// check isRequired
function isRequired(inputArray){
    let ret = false;
    inputArray.forEach(ele => {
        if(ele.value === ''){
            showError(ele,`${ele.id} is required`);
        }
        else{
            showSuccess(ele);
            ret = true;
        }
    });
    return ret;
}

//check password is correct or not
function checkPassword(pass1, pass2){
    let ret = false;
    if(pass1.value.trim().length <6 || pass1.value.trim().length >25){
        showError(pass1,"Password should be of length 6-25.");
    }
    else if(pass1.value.trim() === pass2.value.trim()){
        showSuccess(pass1);
        showSuccess(pass2);
        ret = true;
    }
    else{
        showError(pass2,"Password do not match.");
    }
    return ret;
}

// check username
function checkUserName(input){
    let ret = false;
    if(input.value.trim().length >=3 && input.value.trim().length <=25){
        showSuccess(input);
        ret = true;
    }
    else{
        showError(input,"Username must be of length 3-25.");
    }
    return ret;
}

// form submit event listener

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(isRequired([email,username,password,password2])){
        if(checkEmail(email) & checkPassword(password,password2) & checkUserName(username)){
            alert("Form Validated!");
        }
    }
});