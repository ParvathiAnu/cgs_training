document.getElementById('btnsignup').addEventListener('click', function() {
    const name = document.getElementById('InputName').value;
    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('InputPassword').value;
    const confirmPassword = document.getElementById('InputConfirmPassword').value;
    const role = document.querySelector('input[name="role"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const error = document.getElementById('error');

    error.style.display = 'none';

    
    if (!name || !email || !password || !confirmPassword || !role || !gender) {
        error.textContent = 'All fields are required.';
        error.style.display = 'block';
        return;
    }

    
    if (password !== confirmPassword) {
        error.textContent = 'Passwords do not match.';
        error.style.display = 'block';
        return;
    }

    const userId = Math.floor(Math.random() * 10000) + 1; 
    const userRole = role.value;
    const userGender = gender.value; 
    const userName = encodeURIComponent(name);

    
    window.location.href = `dashboard.html?role=${userRole}&name=${userName}&id=${userId}&email=${encodeURIComponent(email)}&Gender=${userGender}Welcome ${name}`;
});
