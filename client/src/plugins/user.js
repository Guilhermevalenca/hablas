let user = JSON.parse(localStorage.getItem('user'));

document.addEventListener('isLogged', () => {
    user = JSON.parse(localStorage.getItem('user'));
});

export default user;