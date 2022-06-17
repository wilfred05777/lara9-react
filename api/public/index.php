<?php
// https://www.youtube.com/watch?v=dyQLsQm1EtI

// SQL:   
// INSERT INTO `products` (`id`, `description`, `price`, `stock`, `created_at`, `updated_at`) VALUES
// (1, 'Monitor LG 24', 25000.00, 12, '2021-07-27 01:18:57', '2021-07-27 01:18:57'),
// (2, 'Teclado Gamer RGB Redragon', 2700.00, 30, '2021-07-27 01:24:33', '2021-07-27 01:24:54'),
// (4, 'Consola PS4 1TB', 68000.00, 20, '2021-07-27 01:37:26', '2021-07-27 01:37:26'),
// (5, 'Webcam Logitech Pro', 10500.00, 15, '2021-07-27 01:38:44', '2021-07-27 01:38:44'),
// (6, 'Gabinete Gamer Sentey x10 RGB', 4500.00, 60, '2021-07-27 01:39:16', '2021-07-27 01:39:16');


// https://www.youtube.com/watch?v=_aj_adg1jeI

//https://github.com/infodp/API_Laravel_9_REACT/blob/main/api/app/Http/Controllers/Api/ProductController.php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
