<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FFXIV DND</title>


    <!-- Scripts -->
    {!! App::make('App\Framework\Autoloader')->loadJS() !!}

    <!-- Styles -->
    {!! App::make('App\Framework\Autoloader')->loadCSS() !!}

    <!-- font awesome -->
    <script src="https://kit.fontawesome.com/561a940732.js" crossorigin="anonymous"></script>

</head>

<body style="height:100%" onload="init('welcome')">

<div id="page_container" class="page-container">

    <!-- React root DOM -->
    <div id="page_login" class="h-100">
    </div>

</div>

</body>
</html>
