<?php

namespace Lyntouch\Http\Controllers;

use League\Glide\ServerFactory;

class MediaController
{

    public function processMedia($request)
    {
        $server = ServerFactory::create([
                                            'driver' => 'imagick',
                                            'source' => wp_get_upload_dir()['basedir'],
                                            'cache'  => wp_get_upload_dir()['basedir'].'/glide_cache',
                                        ]);
        $server->outputImage($request->get('image'), $request->get('args'));
    }

}
