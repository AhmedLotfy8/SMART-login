var userData;
var nameInput = document.querySelectorAll('input')[0]
var emailInput = document.querySelectorAll('input')[1]
var passInput = document.querySelectorAll('input')[2]
var signBtn = document.querySelector('.btn')
var userMess = document.querySelector('.userMessage')

// users present
if (localStorage.getItem('UserData') !== null) {
    userData = JSON.parse(localStorage.getItem('UserData'))
}

// first time entery
else {
    userData = [];
}

// <button class="btn btn-outline-info w-75"> Sign Up </button>
signBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addUser();
})

function addUser() {

    user = {
        name: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    }

    if (user.name === '' || user.email === '' || user.pass === '') {
        userMess.innerHTML = `All inputs is required`
        userMess.classList.add('pb-3', 'text-danger')
    }

    else {


        userMess.classList.remove("text-succ", 'text-danger');

        flag = 0;
        for (i = 0; i < userData.length; i++) {

            if (emailInput.value === userData[i].email) {
                userMess.innerHTML = `email already exists`
                userMess.classList.add('pb-3', 'text-danger');
                flag = 1;
                break;
            }
            
        }

        if(!flag){
            userData.push(user)
            localStorage.setItem('UserData', JSON.stringify(userData))
            userMess.innerHTML = `Success`
            userMess.classList.add('pb-3', 'text-succ')
        }

    }
}


