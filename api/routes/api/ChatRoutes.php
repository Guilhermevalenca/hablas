<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

Route::prefix('chat')
    ->controller(ChatController::class)
    ->group(function () {

        Route::post('searchPerson', 'searchPerson');

    });
