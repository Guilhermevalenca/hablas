<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

Route::prefix('chat')
    ->controller(ChatController::class)
    ->middleware('auth:sanctum')
    ->group(function () {

        Route::get('', 'index');
        Route::post('', 'store');
        Route::post('searchUsers', 'searchUsers');

    });
