<?php

use Lyntouch\Lib\Media;

if (!function_exists('dd')) {
    function dd($var)
    {
        dump($var);
        die();
    }
}

if (!function_exists('di')) {
    function di($var)
    {
        $container = new DI\Container();

        return $container->get($var);
    }
}

/**
 * @param int       $width
 * @param float|int $ratio
 *
 * @return int
 */
function heightByRatio(int $width, float $ratio = 2 / 3): int
{
    return (int) round($width / $ratio);
}

function lyntouch_root_dir($value = ''): string
{
    return $value ? plugin_dir_path(__DIR__).$value : plugin_dir_path(__DIR__);
}

function lyntouch_root_url($value = ''): string
{
    return $value ? plugins_url($value, dirname(__FILE__)) : plugin_dir_url(__DIR__);
}

function resize($url, $width, $height, $format = 'jpg'): Media
{
    return new Media($url, $width, $height, $format);
}
