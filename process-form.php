<?php

$firstname = $_POST["firstname"];
$emailadd = $_POST["emailadd"];
$comments = $_POST["subject"];

$host = "localhost";
$dbname = "contact_dB";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);

if(mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_errno());
}

$sql = "INSERT INTO messages (firstname, emailadd, comments)
        VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss",
                        $firstname,
                        $emailadd,
                        $comments);

mysqli_stmt_execute($stmt);

echo("Your message has been received!");

?>
