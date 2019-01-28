<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class User extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // Eloquent::unguard();

        // // Ask for db migration refresh, default is no
        // if ($this->command->confirm('Do you wish to refresh migration before seeding, it will clear all old data ?')) {

        //     // Call the php artisan migrate:fresh using Artisan
        //     $this->command->call('migrate:fresh');

        //     $this->command->line("Database cleared.");
        // }

        // $this->call(User::class);

        // $this->command->info("Database seeded.");

        // // Re Guard model
        // Eloquent::reguard();


    }
}
