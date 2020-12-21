<?php
/**
 * Plugin Name: Lyntouch Modules
 * Plugin URI: https://github.com/asolopovas/wp-media.git
 * Description: Various blocks and functions for wordpress theme development
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
use Lyntouch\Blocks\Swiper\SwiperBlock;
use Lyntouch\Twig\TwigHelper;

require_once __DIR__.'/src/cleanup.php';
require_once __DIR__.'/src/filters-actions.php';

if (file_exists(__DIR__.'/vendor/autoload.php')) {
    require_once __DIR__.'/vendor/autoload.php';
}

# Load Image cropper
add_action('plugins_loaded', [new App, 'init']);
# Load Image Block
add_action('init', [new ImageBlock, 'setup']);

(new SwiperBlock())->setup();

add_filter('timber/twig', function($twig) {
    $twig_helper = new TwigHelper($twig);
    $twig_helper->functions();
    $twig_helper->filters();

    return $twig;
});
add_action('admin_enqueue_scripts', fn() => wp_enqueue_style('lyntouch-theme', lyntouch_root_url('/dist/css/global.css'), [], null));
