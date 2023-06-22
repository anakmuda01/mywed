<?php

namespace App\Http\Controllers\API;

use App\Models\Config;
use App\Models\Undangan;
use App\Models\StoryIndo;
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
        if ($request->key != '924rjnjefj9e9re###*w') {
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
        $config = Config::first();
        $indo_aktif = false;
        $indo_stories = [];
        if ($config) {
            $indo_aktif = $config->indo_aktif;

            if ($indo_aktif) {
                $indo_stories = StoryIndo::oldest()->get();
            }
        }

        $en_stories = [
            [
                'date' => "16 Nov 2022",
                'text' => "Our 1st Chat (WA)",
            ],
            [
                'date' => "01 Dec 2022",
                'text' => "His 1st Proposal",
            ],
            [
                'date' => "5 Dec 2022",
                'text' => "She's not ready yet - the beginning of silent treatment",
            ],
            [
                'date' => "15 Feb 2023",
                'text' => "The end of silent treatment where our story began",
            ],
            [
                'date' => "11 Mar 2023",
                'text' => "He proposed again and suggested her to pray istikhara, but she did it again. That's our last chat",
            ],
            [
                'date' => "16 Mar 2023",
                'text' => "Her first istikhara prayer, and she gave him a chance to meet her parents",
            ],
            [
                'date' => "22 Mar 2023",
                'text' => "He met her parents alone~",
            ],
            [
                'date' => "26 Mar 2023",
                'text' => "Our parents met and we're officially engaged",
            ],
            [
                'date' => "07 Jul 2023",
                'text' => "Our brand-new day begins",
            ],
        ];


        $undangan = Undangan::where('link', $id)->firstOrFail();
        return [
            'undangan' => $undangan,
            'indo_aktif' => (int) $indo_aktif,
            'indo_stories' => $indo_stories,
            'en_stories' => $en_stories
        ];
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
        if ($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        Undangan::findOrFail($request->id)->delete();

        return 'done';
    }
}
