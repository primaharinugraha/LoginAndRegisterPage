//  const wraper = document.querySelector('.wraper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click', ()=> {
//     wraper.classList.add('active');
// });
// loginLink.addEventListener('click', ()=> {
//     wraper.classList.remove('active');
// });
const submitBtn = document.getElementById('submit');
const closeBtn = document.getElementById('close');
const popup = document.querySelector('.popupContainer');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginBtn = document.querySelector('.btnlogin-popup');
const wraper = document.querySelector('.wraper');
const closeIcon = document.querySelector('.icon-close');

submitBtn.addEventListener('click', function () {
    popup.classList.add('popupActive');
});

loginBtn.addEventListener('click', function () {
    wraper.style.display = 'flex'; // Menampilkan .wraper saat tombol "Login" diklik
    wraper.classList.add('active'); // Menambah class 'active' pada .wraper
    formBox.classList.add('login'); // Pastikan formulir memiliki class 'login'
});

closeBtn.addEventListener('click', function () {
    popup.classList.remove('popupActive');
    
});

closeIcon.addEventListener('click', function () {
    // Fungsi reset nilai input hanya di sini jika closeIcon diklik
    emailInput.value = ''; // Mengosongkan nilai input email
    passwordInput.value = ''; // Mengosongkan nilai input password
});
