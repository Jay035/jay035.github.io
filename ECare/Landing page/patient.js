function showPassword() {
    let pass = document.getElementById('pass');
    if (pass.type == 'password') {
        document.getElementById('see-icon').className = 'fa fa-eye';
        pass.type = 'text';
    } else {
        document.getElementById('see-icon').className = 'fa fa-eye-slash';
        pass.type = 'password';
    }
}