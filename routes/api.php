<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MenuController;
use App\Http\Controllers\MenuItemController;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['web']], function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::post('/register', [RegisterController::class, 'register']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [LoginController::class, 'logout']);
        Route::post('/me', [LoginController::class, 'me']);
    });
});

Route::resource('menu', MenuController::class);


Route::controller(MenuItemController::class)
    ->prefix('menu_item')
    ->as('menu_item.')
    ->group(function () {
        Route::get('', 'index')->name('index');
        Route::get('/filter', 'filter')->name('filter');
    });






