<?php

namespace App\Http\Controllers\API;

use App\Models\Config;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ToggleStoryController extends Controller
{
    public function toggleStoryIndo(Request $request)
    {
        if ($request->key != '924rjnjefj9e9re###*w') {
            return 'wow';
        }

        $config = Config::first();

        if (!$config) {
            Config::create([
                'indo_aktif' => $request->indo_aktif
            ]);
        } else {
            $config->update(
                [
                    'indo_aktif' => $request->indo_aktif
                ]
            );
        }

        return $request->indo_aktif;
    }
}
