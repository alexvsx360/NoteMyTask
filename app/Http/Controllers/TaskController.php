<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource filtred and paginated by request.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function getTasks(Request $request)
    {
        $tasksRecord = Task::all()->toArray();
        return response()->json(['message' => 'OK', 'tasksArray' => $tasksRecord])->setStatusCode(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function createNewTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|string',
            'text' => 'required|string|min:1|max:200',
            'target_date' => 'required|date_format:Y-m-d H:i',
        ]);

        if($validator->fails()){
            return response()->json(['message' => $validator->errors(), 'status' => 'failed'], 422);
        }

        $tasksRecord = new Task($request->all());
        $tasksRecord->save();
        return response()->json(['message' => 'OK','createdTaskId' => $tasksRecord->id, 'status' => 'success'], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function updateTask(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric',
            'status' => 'required|string',
            'text' => 'required|string|min:1|max:200',
            'target_date' => 'required|date_format:Y-m-d H:i',
        ]);

        if($validator->fails()){
            return response()->json(['message' => $validator->errors(), 'status' => 'failed'], 422);
        }

        $tasksRecord = Task::find($request['id']);
        $tasksRecord->update($request->all());
        $tasksRecord->save();

        return response()->json(['message' => 'OK','updatedTask' => $tasksRecord, 'status' => 'success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteTask(Request $request)
    {
        $validator = Validator::make(['id' => $request->taskId], [
            'id' => 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json(['message' => $validator->errors(), 'status' => 'failed'], 422);
        }

        $tasksDestroyd = Task::destroy($request->taskId);
        if ($tasksDestroyd) {
            return response()->json(['message' => 'OK', 'status' => 'success'], 200);
        }
        return response()->json(['message' => 'failed to find or destroy task record', 'status' => 'failed'], 500);
    }
}
