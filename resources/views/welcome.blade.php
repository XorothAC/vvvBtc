@extends('layouts.app')

@section('content')

<body class="">
    <div class="">
        @auth
        <div class="container text-center">
            <div className="col">
                <div id="currency-list" className="row"></div>
                <div id="currency-rates" className="row"></div>
            </div>
        </div>
        @else
        <div class="container col-md-8 justify-content-center">
            <div class="card">
                <div class="card-header">Not authorized for use.</div>
                <div class="card-body">Please login to get exchange rates.</div>
            </div>
        </div>
        @endauth
    </div>
</body>
@endsection