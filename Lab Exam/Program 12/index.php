<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication</title>
</head>
<body>
    <h1>Authentication</h1>
    <form method="POST">
        <label for="username">Enter username</label>
        <input type="text" name="username" placeholder="Username"><br><br>
        <label for="password">Enter password</label>
        <input type="password" name="password" placeholder="Password"><br><br>
        <input type="submit" value="submit">

    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $uname = $_POST["username"];
            $pass = $_POST["password"];
            $file = fopen("login.txt", "r");
            $authenticated = false;
            while (($line = fgets($file)) !== false) {
                $line = trim($line);  // Remove newline characters
                if ($line == $uname . ":" . $pass) {
                    $authenticated = true;
                    break;
                }
            }
            fclose($file);

            if ($authenticated) {
                echo "<script>alert('Access granted!')</script>";
            } else {
                echo "<script>alert('Incorrect username or password')</script>";
            }
        }
        ?>
    
</body>
</html>