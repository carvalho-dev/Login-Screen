const form = document.getElementById("loginForm");

window.addEventListener("load", () => {
    const savedEmail = localStorage.getItem("savedEmail");

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("remember").checked = true;
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    const validEmail = "admin@email.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {

        if (remember) {
            localStorage.setItem("savedEmail", email);
        } else {
            localStorage.removeItem("savedEmail");
        }

        alert("Login realizado com sucesso!");
        window.location.href = "home.html";

    } else {
        alert("E-mail ou senha incorretos!");
    }
});
