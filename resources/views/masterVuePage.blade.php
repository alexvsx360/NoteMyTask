@extends('layouts.app')

@section('content')
    <app-component :injected="{{$injected}}"></app-component>
@endsection
