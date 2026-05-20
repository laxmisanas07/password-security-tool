function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let bar = document.getElementById("bar");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength <= 1) {
        result.innerHTML = "Weak Password ❌";
        bar.style.width = "25%";
        bar.style.background = "red";
    } 
    else if (strength == 2 || strength == 3) {
        result.innerHTML = "Medium Password ⚠️";
        bar.style.width = "60%";
        bar.style.background = "orange";
    } 
    else {
        result.innerHTML = "Strong Password ✅";
        bar.style.width = "100%";
        bar.style.background = "green";
    }
}

function generatePassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&";
    let password = "";

    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
    checkPassword();
}