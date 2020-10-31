<?php
/**
 * Plugin Name: Lyntouch Media
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

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
