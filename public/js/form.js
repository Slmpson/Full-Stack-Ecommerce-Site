//redirect to home page if user logged in
//user can not access sign in form if logged in
window.onload = () => {
    if(sessionStorage.user){ //check is user exists in session or not
        user = JSON.parse(sessionStorage.user); // access data
        if(compareToken(user.authToken, user.email)){ // if user exists, compare auth token
            location.replace('/')
        } 
    }
}

const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const login = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-and-conditions') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(login != null){ //sign up page
        if(login.value.length < 3){
            showAlert('name must be 3 letters long');
        } else if(!email.value.length){
            showAlert('enter your email');
        } else if(password.value.length < 8){
            showAlert('password must be 8 or more characters long');
        } else if(!number.value.length){
            showAlert('enter your phone number');
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('invalid number, please enter a valid number');
        } else if(!tac.checked){
            showAlert('you must agree to our terms & conditions');
        } else{
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                login: login.value,
                email: email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked,
                notification: notification.checked,
                seller: false
            })
        }
    } else {
        //login page
        if(!email.value.length || !password.value.length){
            showAlert('fill all the inputs')
        } else {
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})

// send data function
// const sendData = (path, data) => {
//     fetch(path, {
//         method: 'post',
//         headers: new Headers({'Content-Type': 'application/json'}),
//         body: JSON.stringify(data)
//     }).then((res) => res.json())
//     .then(response => {
//         processData(response);
//     })
// }

// const processData = (data) => {
//     loader.style.display = null;
//     if(data.alert){ // check if data has the alert key
//         showAlert(data.alert);
//     } else if(data.login){
//         //create authToken
//         data.authToken = generateToken(data.email);
//         sessionStorage.user = JSON.stringify(data);
//         location.replace('/')
//     }
// }

// //alert function
// const showAlert = (msg) => {
//     let alertBox = document.querySelector('.alert-box');
//     let alertMsg = document.querySelector('.alert-msg');
//     alertMsg.innerHTML = msg;
//     alertBox.classList.add('show');
//     setTimeout(() => {
//         alertBox.classList.remove('show');
//     }, 3000)
// }