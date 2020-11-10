<?php

use Symfony\Component\HttpFoundation\Request;

if (!function_exists('dd')) {

    function dd($var)
    {
        dump($var);
        die();
    }
}

if (!function_exists('di')) {

    function di($var) {
        $container = new DI\Container();
        return $container->get($var);
    }
}
