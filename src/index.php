<?php

use Lyntouch\Blocks\Image\ImageBlock;
use Lyntouch\Blocks\Slider\SliderBlock;
use Lyntouch\Bootstrap\App;


require_once __DIR__."/Blocks/Slider/SliderBlock.php";
require_once __DIR__."/acf/setup.php";

add_action('plugins_loaded', [new App, 'init']);
add_action('init', [new ImageBlock, 'setup']);


