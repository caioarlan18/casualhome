<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Dados do formulário
  $nome = $_POST['nome'];
  $telefone = $_POST['telefone'];
  $motivoContato = $_POST['motivo-contato'];
  $mensagem = $_POST['mensagem'];

  // Configurações de email
  $destinatario = 'casualhomeoficial@gmail.com'; // Substitua pelo seu endereço de email
  $assunto = 'Formulário de Contato';

  // Corpo do email
  $corpoEmail = "Nome: $nome\n";
  $corpoEmail .= "Telefone: $telefone\n";
  $corpoEmail .= "Motivo do Contato: $motivoContato\n";
  $corpoEmail .= "Mensagem: $mensagem\n";

  // Cabeçalhos do email
  $headers = "From: $nome <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Envio do email
  if (mail($destinatario, $assunto, $corpoEmail, $headers)) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Erro ao enviar o email.";
  }
}
?>
