<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <title>Adv Charts</title>
    </head>
    <body>
        <?php $level = $_GET['level']; ?>
        <div class="chart-container">
            <canvas id="vendite-mensili"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="vendite-mensili2"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="vendite-mensili2-pie"></canvas>
        </div>

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
