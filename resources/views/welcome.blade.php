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

</head>

<body style="height:100%" onload="init()">

<div id="layout_container" class="layout-container">

    <!-- React root DOM -->
    <div id="layouts_login" class="h-100">
    </div>

</div>

<!-- React JS -->
<script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>
