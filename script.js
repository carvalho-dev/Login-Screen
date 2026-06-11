console.log("Script carregado!");

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede aparecer na URL

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    const validEmail = "admin@email.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {

        if (remember) {
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("email");
        }

        alert("Login realizado com sucesso!");
        window.location.href = "home.html";

    } else {
        alert("E-mail ou senha incorretos!");
    }
});