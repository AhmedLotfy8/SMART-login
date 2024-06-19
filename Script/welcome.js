var userMess = document.querySelector(".userMessage")
var userData = JSON.parse(localStorage.getItem('UserData'))
var userIdx = localStorage.getItem('UserIndex');  

 userMess.innerHTML = `Welcome ${userData[userIdx].name}`