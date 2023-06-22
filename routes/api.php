<?php

use App\Http\Controllers\API\StoryIndoController;
use App\Http\Controllers\API\ToggleStoryController;
use App\Http\Controllers\API\UndanganController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::apiResources([
    'undangan' => UndanganController::class,
    'love-story-indo' => StoryIndoController::class
]);

Route::post('/hapus-undangan', [UndanganController::class, 'destroy']);
Route::post('/hapus-love-story-indo', [UndanganController::class, 'destroy']);

Route::post('/config-toggle-story-indo', [ToggleStoryController::class, 'toggleStoryIndo']);