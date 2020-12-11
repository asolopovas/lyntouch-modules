<?php

use Lyntouch\Blocks\Image\ImageBlock;
use Lyntouch\Bootstrap\App;
use Lyntouch\Blocks\Slider\SliderBlock;


# Load Image cropper
add_action('plugins_loaded', [new App, 'init']);
# Load Image Block
add_action('init', [new ImageBlock, 'setup']);

(new SliderBlock())->setup();
