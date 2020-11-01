<?php

use League\Glide\ServerFactory;
use Symfony\Component\HttpFoundation\Request;

if (!defined('ABSPATH')) {
    exit;
}

Routes::map('media', function() {
    $request = Request::createFromGlobals();
    $server = ServerFactory::create([
                                        'source' => wp_get_upload_dir()['basedir'],
                                        'cache'  => wp_get_upload_dir()['basedir'].'/glide_cache',
                                    ]);
    $server->outputImage($request->get('image'), $request->get('args'));
});
