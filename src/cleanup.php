<?php

// ---------------------------------------------
// Add custom posts into RSS Feed
// ---------------------------------------------
// Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links_extra', 3);
// Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'feed_links', 2);

// ---------------------------------------------
// Add Excerpt Field to Pages
// ---------------------------------------------
add_action('init', 'add_excerpt_field_to_pages');
function add_excerpt_field_to_pages()
{
    add_post_type_support('page', 'excerpt');
}

// ---------------------------------------------
// Remove Emoji related styles and scripts
// ---------------------------------------------
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('admin_print_styles', 'print_emoji_styles');

// ---------------------------------------------
// Remove wp-embed scripts
// ---------------------------------------------
add_action('wp_footer', 'deregister_wp_embed_scripts');
function deregister_wp_embed_scripts()
{
    wp_deregister_script('wp-embed');
}

// ---------------------------------------------
// Remove Wordpress Favicon
// ---------------------------------------------
add_filter( 'get_site_icon_url', '__return_false' );
add_action( 'do_faviconico', 'wp_favicon_remover');
function wp_favicon_remover() {
    exit;
}

//-----------------------------------------
// Remove Gutenberg Styles
//-----------------------------------------
add_action('wp_print_styles', 'wps_deregister_styles', 100);
function wps_deregister_styles()
{
    wp_dequeue_style('wp-block-library');
}

