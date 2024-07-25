<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date</title>
    <style>
        h1, date{
            text-align: center;
        }
        date{
            color: green;
        }
    </style>
</head>
<body>
    <h1>Today is 
    <date>
        <?php
        $today = date("d-m-Y");
        echo $today;
        ?>
    </date>
    </h1>
</body>
</html>