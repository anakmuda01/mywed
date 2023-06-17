<?php

namespace App\Http\Controllers\API;

use App\Models\Undangan;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UndanganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $undangan = Undangan::latest()->get();

        return $undangan;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        $request->validate([
            'nama' => ['required']
        ]);

        $link = Str::uuid();

        $undangan = Undangan::create([
            'nama' => $request->nama,
            'pasangan' => $request->pasangan,
            'link' => $link
        ]);

        return $undangan;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Undangan::where('link', $id)->firstOrFail();
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
    public function destroy(Request $request)
    {
        if($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        Undangan::findOrFail($request->id)->delete();

        return 'done';
    }
}
