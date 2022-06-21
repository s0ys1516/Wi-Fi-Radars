<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> setLanguage ('ru', 'phpmailer/language/');
    $mail -> IsHTML(true);
// От кого
    $mail -> setFrom('test@mail.ru');
// кому
    $mail -> addAddress('test@mail.ru');   
// тема
    $mail -> Subject('Форма с сайта');  
?>