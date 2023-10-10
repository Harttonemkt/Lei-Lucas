const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value ==="") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verificar se o e-mail está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha seu e-mail");
        return;
    }

    

    //Verificar a situação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione uma opção ");
        return;
    }

    // Verifica se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert(" Por favor digite a mensagem");
        return;

    }

    // Se todos os campos estiverem corretamente preenchidos, envie a form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
     );

    if (emailRegex.test(email)) {
     return true
    }

     return false
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha válida
        return true
    }
    // senha inválida
    return false
}