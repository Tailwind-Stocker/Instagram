const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signup-link');
const signInlink = document.querySelector('.signIn-link');
const toggleLogin = document.querySelector('.toggle-login');
const close = document.querySelector('.close');

signUpLink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});
signInlink.addEventListener('click', () => {
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});
toggleLogin.addEventListener('click', () => {
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
});
close.addEventListener('click', () => {
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
    wrapper.classList.remove('show-bg');
});