<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Processamento dos dados aqui (por exemplo, enviar email, salvar no banco de dados, etc.)

    // Exemplo de exibição dos dados
    echo "<h2>Dados recebidos:</h2>";
    echo "<p><strong>Nome:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Mensagem:</strong> $message</p>";
}
?>
