function checkForm() {
    const errors = [];

    // Get form elements
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const formErrors = document.getElementById("formErrors");

    // Remove all previous error classes
    [fullName, email, password, confirmPassword].forEach(input => {
        input.classList.remove("error");
    });

    // 1. Full name
    if (!fullName.value.trim()) {
        errors.push("Missing full name.");
        fullName.classList.add("error");
    }

    // 2. Email check
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        errors.push("Invalid or missing email address.");
        email.classList.add("error");
    }

    // 3. Password length
    if (password.value.length < 10 || password.value.length > 20) {
        errors.push("Password must be between 10 and 20 characters.");
        password.classList.add("error");
    }

    // 4. Lowercase
    if (!/[a-z]/.test(password.value)) {
        errors.push("Password must contain at least one lowercase character.");
        password.classList.add("error");
    }

    // 5. Uppercase
    if (!/[A-Z]/.test(password.value)) {
        errors.push("Password must contain at least one uppercase character.");
        password.classList.add("error");
    }

    // 6. Digit
    if (!/[0-9]/.test(password.value)) {
        errors.push("Password must contain at least one digit.");
        password.classList.add("error");
    }

    // 7. Match confirm password
    if (password.value !== confirmPassword.value) {
        errors.push("Password and confirmation password don't match.");
        confirmPassword.classList.add("error");
    }

    // Display or hide errors
    if (errors.length > 0) {
        formErrors.classList.remove("hide");
        formErrors.innerHTML = "<ul>" + errors.map(err => `<li>${err}</li>`).join("") + "</ul>";
    } else {
        formErrors.classList.add("hide");
        formErrors.innerHTML = "";
    }
}

document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    event.preventDefault();
});
