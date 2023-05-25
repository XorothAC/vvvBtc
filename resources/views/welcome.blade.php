<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BTC/LTC Exchange rates</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex">
            @auth
            <a href="{{ url('/home') }}" class="nav-link">Home</a>
            @else
            <a href="{{ route('login') }}" class="nav-link">Log in</a>
            <a href="{{ route('register') }}" class="nav-link">Register</a>
            @endauth
        </div>
    </nav>
    <div class="">
        <div id="example"></div>
        <script src="{{ mix('js/app.js') }}"></script>
    </div>
</body>

</html>