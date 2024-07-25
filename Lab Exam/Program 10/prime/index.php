<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Checker</title>
</head>
<body>
    <h1>Prime Number Checker</h1>
    <form method="POST">
        <label for="number">Enter a number:</label>
        <input type="number" name="number" id="number" required>
        <button type="submit">Submit</button>
    </form>
    <p>
        <?php
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $number = $_POST["number"];
            if ($number == 1 || $number == 0){
                echo "Number is neither prime nor non prime";
                return;
            }

            $flag = 0;
            for ($i = 2; $i <=sqrt($number); $i++){
                if ($number % $i == 0){
                    $flag = 1;
                    break;
                }
            }
            if ($flag === 0)
                echo "Number is prime";
            
            else
                echo "Number is non prime";
            
        }
        ?>
    </p>
</body>
</html>