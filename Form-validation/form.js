const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const pass2=document.getElementById("pass2");


//show inbput error messsage
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className= "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}
//check email is valid 
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
showSuccess(input);
    }else{
showError(input,"Email is not valid");
    }
}

//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === " "){
            showError(input,`${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input,min,max){

    if(input.value.length <min){
        showError(
            input, `${getFieldName(input)} must be at least ${min} charaecter `
        );
    } else if(input.value.length >max){
        showError(
            input, `${getFieldName(input)} must be less than ${max} charaecter `
        );
    } else{
        showSuccess(input);
    }
}

//check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"password does not matches");
    }
}



//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(username.value);
    
//for username
    // if(username.value === ""){
    //     showError(username,"username is required");
    // }else{
    //     showSuccess(username);
    // }
    
    // //for email
    // if(email.value === ""){
    //     showError(email,"email is required");
    // }
    // else if(!isValidEmail(email.value)){
    //     showError(email,"email is not valid")
    // }
    // else{
    //     showSuccess(email);
    // }
    // //for password
    // if(password.value === ""){
    //     showError(password,"password is required");
    // }else{
    //     showSuccess(password);
    // }
    // //for pass 2
    // if(pass2.value === ""){
    //     showError(pass2,"pass2 is required");
    // }else{
    //     showSuccess(pass2);
    // }


 checkRequired([username,email,password,pass2]);
checkLength(username,3,15);
checkLength(password,6,25);
checkLength(pass2,6,25);
checkEmail(email);
checkPasswordMatch(password,pass2);


});