<?php

use App\Http\Controllers\TaskController;
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

Route::controller(TaskController::class)->group(function () {
    Route::post('/tasks/get-all', 'getTasks');
    Route::post('/tasks', 'createNewTask');
    Route::put('/tasks', 'updateTask');
    Route::delete('/tasks/{taskId}', 'deleteTask');
});
