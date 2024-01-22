<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Usuário adm',
            'email' => 'adm@gmail.com',
            'email_verified_at' => now(),
            'password' => 'ipi123',
            'remember_token' => Str::random(10)
        ]);

        User::factory()->create([
            'name' => 'Guilherme Valença',
            'email' => 'gui@gmail.com',
            'email_verified_at' => now(),
            'password' => 'ipi123',
            'remember_token' => Str::random(10)
        ]);

        User::factory()->create([
            'name' => 'Claudiane Rodrigues',
            'email' => 'cra@gmail.com',
            'email_verified_at' => now(),
            'password' => 'ipi123',
            'remember_token' => Str::random(10)
        ]);

        User::factory()->create([
            'name' => 'Random User',
            'email' => 'random@gmail.com',
            'email_verified_at' => now(),
            'password' => 'ipi123',
            'remember_token' => Str::random(10)
        ]);

        User::factory()->create([
            'name' => 'User Socket',
            'email' => 'socket@gmail.com',
            'email_verified_at' => now(),
            'password' => 'ipi123',
            'remember_token' => Str::random(10)
        ]);
    }
}
