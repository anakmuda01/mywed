<?php

namespace App\Http\Controllers\API;

use App\Models\Config;
use App\Models\StoryIndo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StoryIndoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stories = StoryIndo::oldest()->get();
        $toggle = false;

        $config = Config::first();
        if ($config) {
            $toggle = $config->indo_aktif;
        }

        $payload = [
            'stories' => $stories,
            'toggle' => $toggle
        ];
        
        return $payload;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        $request->validate([
            'date' => ['required'],
            'text' => ['required']
        ]);

        $item = StoryIndo::create([
            'date' => $request->date,
            'text' => $request->text,
        ]);

        return $item;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        if ($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        StoryIndo::findOrFail($request->id)->delete();

        return 'done';
    }
}
