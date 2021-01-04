<?php

namespace Lyntouch\Gutenberg;

class Hooks
{

    public function registerScriptsStyles()
    {
        wp_register_script(
            'lyntouch-hooks-js',
            lyntouch_root_url('/dist/js/hooks.js'),
            [
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-editor',
                'wp-hooks',
            ],
            null,
            true
        );
        wp_enqueue_script('lyntouch-hooks-js');

        //        $scriptGlobals = [
//            'pluginDirPath' => lyntouch_root_dir(),
//            'pluginDirUrl'  => lyntouch_root_url(),
//            'siteUrl'       => get_site_url(),
//        ];
//        wp_localize_script('lyntouch-hooks-js', 'lyntouchGlobal', $scriptGlobals);
    }

    public function setup()
    {
        add_action( 'enqueue_block_editor_assets', [$this, 'registerScriptsStyles'] );
    }
}
