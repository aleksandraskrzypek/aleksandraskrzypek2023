<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'aleksandraskrzypek97@gmail.com'; // Zmień na właściwy adres e-mail, na który chcesz otrzymywać wiadomości
    $subject = 'Nowa wiadomość z formularza kontaktowego';
    $body = "Imię: $firstName\n";
    $body .= "Nazwisko: $lastName\n";
    $body .= "Telefon: $phone\n";
    $body .= "E-mail: $email\n";
    $body .= "Wiadomość:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wysłanie wiadomości nie powiodło się.";
    }
}
?>