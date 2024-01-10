<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\ColumnController;
use App\Http\Middleware\TokenValidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(TokenValidate::class)->group(function() {
    Route::get('list-columns', [ColumnController::class, 'index']);
    Route::apiResource('columns', ColumnController::class)->except(['index', 'show']);
    Route::put('columns/{column}/reordered', [ColumnController::class, 'reordered']);
    
    Route::get('list-cards', [CardController::class, 'index']);
    Route::apiResource('cards', CardController::class)->except(['index', 'show']);
    Route::put('cards/{card}/order', [CardController::class, 'updateOrder']);
});

