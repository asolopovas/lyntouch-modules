<?php

namespace Lyntouch\Blocks\Gallery;

use Lyntouch\Contracts\BlockInterface;
use Timber\Timber;

class Gallery implements BlockInterface
{

    public function stylesAndScripts()
    {
        # Core Styles
        wp_enqueue_script('photoswipe-core', lyntouch_root_url('/dist/js/photoswipe.js'), [], null, null);
        wp_enqueue_style('photoswipe-core', lyntouch_root_url('/dist/css/photoswipe.css'), [], null);
    }

    public function renderSwiperBlock($block, $content = '', $is_preview = false)
    {

        $context = Timber::context();
        // Store block values.
        $context['block'] = $block;
        // post id
        $context['id'] = get_the_id();
        // Store field values.
        $context['fields'] = get_fields();
        // Store $is_preview value.
        $context['is_preview'] = $is_preview;

        $context['root_el'] = __DIR__.'/template/photoswipe.twig';

        Timber::render(__DIR__.'/template/gallery.twig', $context);
    }

    public function registerSwiperBlock(): void
    {
        $args = [
            'name'            => 'lyntouch-gallery',
            'title'           => __('Gallery'),
            'description'     => __('Image Gallery'),
            'render_callback' => [$this, 'renderSwiperBlock'],
            'enqueue_assets' => array($this, 'stylesAndScripts'),
            'category'        => 'formatting',
            'icon'            => file_get_contents(__DIR__. '/icon.svg'),
            'keywords'        => ['gallery'],
        ];
        acf_register_block_type($args);
    }

    public function setup(): void
    {
        add_action('acf/init', [$this, 'registerSwiperBlock']);
    }

}
