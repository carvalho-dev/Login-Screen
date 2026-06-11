const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Usuário e senha de exemplo
    const validEmail = "admin@email.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        alert("Login realizado com sucesso!");

        // Redirecionar para outra página
        window.location.href = "home.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
