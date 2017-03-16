<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProbaController extends Controller
{
    public function index(Request $request)
    {
    	// return $request->all();
    	return response()->json(['wszystko'=>$request->all()]);
    	return ['z controllera web'];
    }
}
