<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class PagesController extends Controller
{
  public function tasksDashboardview(Request $request){

      $tasksArray = Task::all()->toArray();
      $injected = [
          'tasksArray' => $tasksArray?$tasksArray:[],
      ];
      return view('masterVuePage', ['injected' => json_encode($injected)]);
  }
}
