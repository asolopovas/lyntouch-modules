<?php

namespace Lyntouch\Twig;

use League\Flysystem\Exception;
use Lyntouch\Lib\Media;

class Functions
{

    public function env($value)
    {
        return env($value);
    }

    public function build($name)
    {
        return build($name);
    }

    public function placeholder($width, $height, $color = '#cac9ca'): string
    {
        [$r, $g, $b] = sscanf($color, "#%02x%02x%02x");
        $out = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='{$width}' height='{$height}' viewBox='0 0 {$width} {$height}'><rect width='100%' height='100%' fill='rgb({$r}, {$g}, {$b})' /></svg>";

        return str_replace('>', '%3E', str_replace('<', '%3C', $out));
    }

    public function resize($url, $width, $height, $format = 'jpg'): Media
    {
        return new Media($url, $width, $height, $format);
    }

    public function srcset(string $url, $width, $height, array $dpr, $format = 'jpg'): string
    {
        try {
            $output = [];
            foreach ($dpr as $key => $value) {
                $multiplier = $key + 1;
                $str = $this->resize($url, $width * $multiplier, $height * $multiplier, $format);

                $output[$key] = $key == 0 ? "$str" : "$str {$multiplier}x";
            }

            return implode(', ', $output);
        } catch (\Exception $e) {
            file_put_contents('/tmp/error-wp.log', 'Error');
        }
    }

    public function ratio($ratio_w, $ratio_h, $portrait)
    {
        return $portrait ? $ratio_h / $ratio_w  : $ratio_w / $ratio_h;
    }

}
