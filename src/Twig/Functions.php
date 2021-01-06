<?php

namespace Lyntouch\Twig;

use Lyntouch\Lib\Media;

class Functions
{

    public function resize($url, $width, $height, $format = 'jpg'): Media
    {
        return new Media($url, $width, $height, $format);
    }

    public function srcset(string $url, int $width, int $height, array $dpr, $format = 'jpg'): string
    {
        $output = [];
        foreach ($dpr as $key => $value) {
            $multiplier = $key+1;
            $str = $this->resize($url, $width * $multiplier, $height*$multiplier, $format);

            $output[$key] = $key == 0 ? "$str" : "$str {$multiplier}x";
        }

        return implode(', ', $output);
    }

}
