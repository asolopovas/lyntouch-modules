<?php

namespace Lyntouch;

class BlocksInit
{
    public function setupBlock()
    {
        wp_register_style('lyntouch_wp_media-block-editor-css', // Handle.
                          plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
                          ['wp-edit-blocks'], // Dependency to include the CSS after it.
                          null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
        );

        wp_register_script('lyntouch_wp_media-block-js', // Handle.
                           plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
                           ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'], // Dependencies, defined above.
                           null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
                           true // Enqueue the script in the footer.
        );

        wp_localize_script('lyntouch_wp_media-block-js', 'lyntouchGlobal', // Array containing dynamic data for a JS Global.
                           [
                               'pluginDirPath' => plugin_dir_path(__DIR__),
                               'pluginDirUrl'  => plugin_dir_url(__DIR__),
                               'siteUrl'       => get_site_url()
                               // Add more data here that you want to access from `cgbGlobal` object.
                           ]);

        register_block_type('lyntouch/wp-media', [
            //                                               'style'         => 'lyntouch_wp_media-style-css',
            'editor_style'  => 'lyntouch_wp_media-block-editor-css',
            'editor_script' => 'lyntouch_wp_media-block-js',
        ]);
    }

}


