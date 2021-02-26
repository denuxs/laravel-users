<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json($user, 200);
        }

        return response()->json(['message' => 'The email or password you’ve entered is incorrect'], 400);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name'  => 'required',
            'phone'      => 'required|integer',
            'email'      => 'email|required|unique:users',
            'password'   => 'required|min:6|confirmed',
        ]);

        $errors = $validator->errors();

        if ($validator->fails()) {
            return response()->json(['message' => $errors->all()], 400);
        }

        $data             = $request->all();
        $data['password'] = Hash::make($request->password);

        $user = User::create($data);

        return response($user, 201);
    }
}
