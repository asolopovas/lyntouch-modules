<?php

namespace Lyntouch\Twig;


use Lyntouch\Lib\Media;

class Functions
{

    public function resize($url, $width, $height, $format = 'jpg'): Media
    {
        return new Media($url, $width, $height, $format);
    }

}
