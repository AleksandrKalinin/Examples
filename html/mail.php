<?php

$recepient = "jurist-rachkov@mail.ru";
$sitename = "jurist-rachkov.by";

$fname = trim($_POST["fname"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$sname = trim($_POST["sname"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $fname \nПочта: $email \nТекст: $text \nФамилия: $sname \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");