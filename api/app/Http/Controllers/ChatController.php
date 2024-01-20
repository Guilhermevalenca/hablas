<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chats = Chat::with('user_id_1')
            ->with('user_id_2')
            ->where('user_id_1','=', auth()->id())
            ->orWhere('user_id_2','=', auth()->id())
            ->get();
        return response($chats, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreChatRequest $request)
    {
        $validation = $request->validated();
        $chat = Chat::create([
            'user_id_1' => auth()->id(),
            'user_id_2' => $validation['user_id']
        ]);
        return response(['success' => true, 'chat_id' => $chat->id], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChatRequest $request, Chat $chat)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }

    public function searchUsers(Request $request)
    {
        $result = User::where('name', 'LIKE', '%' . $request->input('name') . '%')->get();
        return response($result, 200);
    }
}
