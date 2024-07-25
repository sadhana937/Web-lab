<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP FILE BACKUP</title>
</head>
<body>
    <h1>Store Data in a File</h1>
    <form method="POST">
        <textarea name="data" id="data" rows="5" cols="40"></textarea>
        <br><br>
        <input type="submit" value="submit">
        <input type="reset" value="reset">

    </form>
    <p>
    <?php
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $data = $_POST['data'];
        if (!empty($data)){
            $file = fopen('./data.txt', 'a');
            fwrite($file, $data."\n");
            fclose($file);
            echo $text;
            echo "<br> Successfully submitted!"; 
        }
        else{
            echo "Please enter some data";
        }
    }
    ?>
    </p>
</body>
</html>