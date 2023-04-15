<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     */
    public function register(): void {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void {
        /** @var Application */
        $app = $this->app;

        Model::preventLazyLoading(! $app->isProduction());
        Model::preventSilentlyDiscardingAttributes(! $app->isProduction());
    }
}
