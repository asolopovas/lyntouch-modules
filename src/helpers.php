<?php

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

function lyntouch_root_dir($value = ''): string
{
    return $value ? plugin_dir_path(__DIR__).$value : plugin_dir_path(__DIR__);
}

function lyntouch_root_url($value = ''): string
{
    return $value ? plugins_url($value, dirname(__FILE__)) : plugin_dir_url(__DIR__);
}
