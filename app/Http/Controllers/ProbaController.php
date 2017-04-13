<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Events\JakisEvent;

class ProbaController extends Controller
{
    public function index(Request $request)
    {
    	// return $request->all();
    	return response()->json(['wszystko'=>$request->all()]);
    	return ['z controllera web'];
    }

    public function event()
    {
    	echo "string1";
    	$user = User::first();
    	
    	event(new JakisEvent($user) );

    	echo "string2";
    }
}
