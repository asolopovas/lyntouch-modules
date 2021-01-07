<?php

// ---------------------------------------------
// Save Redirect Plugin Setting - Increase Nr. of redirects
// ---------------------------------------------
use GuzzleHttp\Client;
use Timber\Loader;

add_filter('srm_max_redirects', 'dbx_srm_max_redirects');
function dbx_srm_max_redirects()
{
    return 250;
}

//-----------------------------------------
// Style Excerpt More Button
//-----------------------------------------
function new_excerpt_more()
{
    global $post;
    $permalink = get_permalink($post->ID);

    return "...<p class=\"post-more-button\" ><a href=\"$permalink\">Read the full article...</a></p>";
}

add_filter('excerpt_more', 'new_excerpt_more');

//-----------------------------------------
// Load tine_mce editor stylesheets
//-----------------------------------------
add_action('admin_init', 'tiny_mce_stylesheet');
function tiny_mce_stylesheet()
{
    add_editor_style('tiny_mce.min.css');
}

//-----------------------------------------
// Add output buffering
//-----------------------------------------
function app_output_buffer()
{
    ob_start();
}

add_action('init', 'app_output_buffer');

//-----------------------------------------
// Featured Image Column Admin Items List
//-----------------------------------------
add_filter('manage_posts_columns', 'featured_image_add_column');
add_filter('manage_pages_columns', 'featured_image_add_column');
function featured_image_add_column($columns)
{
    $columns['featured_image'] = 'Featured Image';

    return $columns;
}

// Featured Image Style
add_action('manage_posts_custom_column', 'featured_image_render_post_columns', 10, 2);
function featured_image_render_post_columns($column_name, $id)
{
    if ($column_name == 'featured_image' && $url = get_the_post_thumbnail_url($id)) {
        $thumb = media_resize($url, 300, 300);
        echo "
            <img src=\"$thumb\" width=\"300\" height=\"300\">
            ";
    }
}

//-----------------------------------------
// Custom Excerpt Length
//-----------------------------------------
add_filter('excerpt_length', 'custom_excerpt_length', 999);
function custom_excerpt_length($length)
{
    return 80;
}

//-----------------------------------------
// Add deffer/async loaded scripts
//-----------------------------------------
add_filter('script_loader_tag', 'add_async_attribute', 10, 2);
function add_async_attribute($tag, $handle)
{
    if ('app_scripts' !== $handle) {
        return $tag;
    }

    return str_replace(" type='text/javascript' src", ' defer async src', $tag);
}

//-----------------------------------------
// Overwrite Theme Stylesheet Directory Uri
//-----------------------------------------
add_filter('stylesheet_directory_uri', 'wpi_stylesheet_dir_uri', 10, 2);
function wpi_stylesheet_dir_uri($stylesheet_dir_uri)
{
    return $stylesheet_dir_uri.'/static/';
}

//-----------------------------------------
// Modify Navigation Arguments
//-----------------------------------------
add_filter('wp_nav_menu_args', 'modify_nav_menu_args');
function modify_nav_menu_args($args)
{
    if ('primary' == $args['theme_location']) {
        $menu = wp_get_nav_menu_object($args['menu']);
        $args['container_class'] = $menu->slug;
    }

    return $args;
}



//-----------------------------------------
// Search Only Posts
//-----------------------------------------
function search_filter($query)
{

    if ($query->is_search && !is_admin()) {
        $query->set('post_type', ['post']);
    }

    return $query;
}

add_filter('pre_get_posts', 'search_filter');

//-----------------------------------------
// Clear cache on post save
//-----------------------------------------
function clear_cache_fn()
{

    $WpFastestCache = di(\WpFastestCache::class);

    if (isset($_GET["path"])) {
        if ($_GET["path"]) {
            if ($_GET["path"] == "/") {
                $_GET["path"] = $_GET["path"]."index.html";
            }
        } else {
            $_GET["path"] = "/index.html";
        }

        $_GET["path"] = urldecode(esc_url_raw($_GET["path"]));

        $paths = [];
        array_push($paths, $WpFastestCache->getWpContentDir("/cache/all").$_GET["path"]);

        foreach ($paths as $key => $value) {
            if (file_exists($value)) {
                if (preg_match("/\/(all|wpfc-mobile-cache)\/index\.html$/i", $value)) {
                    @unlink($value);
                } else {
                    $WpFastestCache->rm_folder_recursively($value);
                }
            }
        }

        $WpFastestCache->delete_multiple_domain_mapping_cache();
    }
}

function clear_cache_on_post_save($post_id)
{
        $permalink = get_permalink($post_id);
        $_GET['path'] = parse_url($permalink)['path'];
        $loader = di(Loader::class);
        $loader->clear_cache_timber();
        $loader->clear_cache_twig();
        clear_cache_fn();
        try {
            $client = new Client();
            $client->request('GET', $permalink, ['verify' => false]);
        } catch (Exception $exception) {
            return;
        }
}

//add_action('save_post', 'clear_cache_on_post_save');

//-----------------------------------------
// Deactivating WordPress Scaling
//-----------------------------------------
add_filter('big_image_size_threshold', '__return_false');

