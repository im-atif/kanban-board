<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TokenValidate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken() ?? $request->get('access_token');
        if ($token === 'dQuX1eSF2q') return $next($request);
        
        return response()->json([
            'code' => 401,
            'status' => false,
            'message' => "Invalid or missing access token"
        ], 401);
    }
}
