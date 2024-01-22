<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chat extends Model
{
    use HasFactory;
    protected $fillable = ['user_id_1', 'user_id_2'];

    public function user_id_1(): HasMany
    {
        return $this->hasMany(User::class, 'id', 'user_id_1');
    }
    public function user_id_2(): HasMany
    {
        return $this->hasMany(User::class, 'id', 'user_id_2');
    }
    public function messages(): HasMany
    {
        return $this->hasMany(MessagesChats::class, 'chat_id', 'id');
    }
}
