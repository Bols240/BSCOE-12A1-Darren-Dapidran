

alert(` 
==========
 To Login
==========
Username: Darren
Password: bscoe1234
======================
 Make sure to logout!
======================
`
);



document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const homePage = document.getElementById('home-page');
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');

const mockUser = {
 username: 'Darren',
 password: 'bscoe1234'
};

const showAlert = (message, type) => {
    alertMessage.textContent = message;
customAlert.classList.remove('hidden');
customAlert.classList.toggle('success', type === 'success');
customAlert.classList.toggle('error', type === 'error');
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === mockUser.username && password === mockUser.password){

window.location.href="./Index.Html"

    }
    else{
        showAlert('Login failed! The username or password is incorrect');
    }
});

logoutButton.addEventListener('click', () => {
    homePage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    customAlert.classList.add('hidden');
})

 closeAlert.addEventListener('click', () => {
     customAlert.classList.add('hidden');
 });

});