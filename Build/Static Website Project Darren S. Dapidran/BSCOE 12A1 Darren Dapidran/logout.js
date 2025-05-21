document.addEventListener('DOMContentLoaded', () => {


const logout = document.getElementById('logout');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const xBtn = document.getElementById('x-Btn');
const logoutDsgn = document.getElementById('logout-Dsgn');

logout.onclick = (event) => {
    event.preventDefault();
    logoutDsgn.classList.toggle('hidden');
}

xBtn.onclick = (event) => {
    event.preventDefault();
    logoutDsgn.classList.add('hidden');
}

yesButton.onclick = (event) => {
    event.preventDefault();
    window.location.href = "./login.html";
}

noButton.onclick = (event) => {
    event.preventDefault();
    logoutDsgn.classList.add('hidden');
}










});