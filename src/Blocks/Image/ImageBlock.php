<?php

namespace Lyntouch\Blocks\Image;

use Lyntouch\Contracts\BlockInterface;
use function DI\add;

class ImageBlock implements BlockInterface
{

    public function registerScriptsStyles()
    {
        wp_register_style(
            'lyntouch-image-block-editor',
            lyntouch_root_url('/dist/css/editor.css'),
            ['wp-edit-blocks'],
            null
        );
        wp_register_script(
            'lyntouch-image-block-js',
            lyntouch_root_url('/dist/js/index.js'),
            [
                'wp-blocks',
                'wp-i18n',
                'wp-element',
                'wp-editor',
                'wp-components',
            ],
            null,
            true
        );

        $scriptGlobals = [
            'pluginDirPath' => lyntouch_root_dir(),
            'pluginDirUrl'  => lyntouch_root_url(),
            'siteUrl'       => get_site_url(),
        ];
        wp_localize_script('lyntouch-image-block-js', 'lyntouchGlobal', $scriptGlobals);
    }

    public function setup()
    {

        $this->registerScriptsStyles();

        register_block_type('lyntouch/image-block', [
            //                                               'style'         => 'lyntouch_wp_media-style-css',
            'editor_style'  => 'lyntouch-image-block-editor',
            'editor_script' => 'lyntouch-image-block-js',
        ]);
    }
}
