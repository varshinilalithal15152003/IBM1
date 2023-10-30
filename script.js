php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $course = $_POST["course"];
    
    // Here, you can process the data, save it to a database, or perform other actions.
    // You might want to use a database to store student records.
    
    echo "Student Information Submitted:<br>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Course: " . $course . "<br>";
}
?>