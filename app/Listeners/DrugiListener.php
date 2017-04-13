<?php

namespace App\Listeners;

use App\Events\JakisEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DrugiListener
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
        \Log::info('drugi', ['user'=>$event->user]);
                echo "listen drudi";

    }
}
