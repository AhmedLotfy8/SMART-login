var userData;
var emailInput = document.querySelectorAll('input')[0]
var passInput = document.querySelectorAll('input')[1]
var logBtn = document.querySelector('.btn')
var userMess = document.querySelector('.userMessage')

// users present
if (localStorage.getItem('UserData') !== null) {
    userData = JSON.parse(localStorage.getItem('UserData'))
}

// first time entery
else {
    userData = [];
}


// <button class="btn btn-outline-info w-75"> Login </button>
logBtn.addEventListener('click', function (event) {
    event.preventDefault();

    
    if (emailInput.value === '' || passInput.value === '') {
        noInputs();
    }
    
    else {
        checkValidity()
    }
})


function noInputs() {
    userMess.innerHTML = `All inputs is required`
    userMess.classList.add('pb-3', 'text-danger')
}


function checkValidity() {

    flag = 0;
    var userIndex;

    // loop over users
    for (i = 0; i < userData.length; i++) {

        // user found
        if (emailInput.value === userData[i].email && passInput.value === userData[i].pass) {
            userIndex = i;
            flag = 1;
            break;
        }

    }

    if (flag) {
        localStorage.setItem('UserIndex', userIndex);
        window.location.href = './Welcome.html'
    }

    else {
        userMess.innerHTML = `Incorrect email or password`
        userMess.classList.add('pb-3', 'text-danger')
    }

}
