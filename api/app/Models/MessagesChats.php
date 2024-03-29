<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MessagesChats extends Model
{
    use HasFactory;
    protected $fillable = ['message', 'user_id', 'chat_id'];
}
