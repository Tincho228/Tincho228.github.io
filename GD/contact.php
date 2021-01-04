<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $email_from = "Sitio Ganancias Depotivas";
    $email_subject = "Nuevo mensaje del Sitio Web";
    $email_body = "Nombre: $name.\n".
                  "Email: $email.\n".  
                  "Mensaje: $message.\n";
                
    $to = "consultas@ganancias-deportivas.com.ar";
    $headers = "De: $email_from \r\n";
    $headers .= "Responder a: $email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("location: gracias.html");
?>