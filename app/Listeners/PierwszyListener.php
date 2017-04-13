<?php

namespace App\Listeners;

use App\Events\JakisEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class PierwszyListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  JakisEvent  $event
     * @return void
     */
    public function handle(JakisEvent $event)
    {
        \Log::info('abc', ['user'=> $event->user]);
        echo "listen pierwszy";
    }
}
