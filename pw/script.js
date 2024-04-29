function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error = false;
    var errorMessage = '';

    if (name.trim() === '') {
        error = true;
        errorMessage += 'Por favor, insira seu nome.\n';
    }

    if (email.trim() === '') {
        error = true;
        errorMessage += 'Por favor, insira seu email.\n';
    } else if (!validateEmail(email)) {
        error = true;
        errorMessage += 'Por favor, insira um email válido.\n';
    }

    if (message.trim() === '') {
        error = true;
        errorMessage += 'Por favor, insira sua mensagem.\n';
    }

    if (error) {
        alert(errorMessage);
        return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
