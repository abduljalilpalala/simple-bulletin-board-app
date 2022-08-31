<?php

use App\Http\Controllers\API\ArticleController;
use App\Http\Controllers\API\VoteController;
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

Route::apiResource('article', ArticleController::class);
Route::apiResource('vote', VoteController::class)->only(['store', 'update']);
