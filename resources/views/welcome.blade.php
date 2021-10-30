@extends('layouts.app')

@section('content')
	<div class="flex bg-gray-100 border-b border-gray-300 py-4">
		<div class="container mx-auto flex justify-between">
			<div class="flex">
				<router-link to='/laravel/LaravelVueSPA/' exact class="mr-4">Home</router-link>
				<router-link to='/laravel/LaravelVueSPA/about'>About</router-link>				
			</div>
			<div class="flex">
				<router-link to='/laravel/LaravelVueSPA/login' class="mr-4">Login</router-link>
				<router-link to='/laravel/LaravelVueSPA/register'>Register</router-link>						
			</div>
		</div>
	</div>
	<div class="mx-auto py-2">
		<router-view></router-view>
	</div>
@endsection