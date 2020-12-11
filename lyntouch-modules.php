<?php
/**
 * Plugin Name: Lyntouch Modules
 * Plugin URI: https://github.com/asolopovas/wp-media.git
 * Description: lyntouch-media helps to deal with wordpress media
 * Author: Andrius Solopovas
 * Author URI: https://lyntouch.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

use Lyntouch\Blocks\Image\ImageBlock;
use Lyntouch\Bootstrap\App;
use Lyntouch\Blocks\Slider\SliderBlock;

if (file_exists(__DIR__.'/vendor/autoload.php')) {
    require_once __DIR__.'/vendor/autoload.php';
}

# Load Image cropper
add_action('plugins_loaded', [new App, 'init']);
# Load Image Block
add_action('init', [new ImageBlock, 'setup']);

(new SliderBlock())->setup();
