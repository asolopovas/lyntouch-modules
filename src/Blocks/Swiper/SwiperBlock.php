<?php

namespace Lyntouch\Blocks\Swiper;

use Lyntouch\Contracts\BlockInterface;
use Timber\Timber;

class SwiperBlock implements BlockInterface
{

    public function stylesAndScripts()
    {
        wp_enqueue_script('lazysizes', 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js', [], null, null);
        # Core Styles
        wp_enqueue_script('swiper-core', lyntouch_root_url('/dist/js/swiper.js'), [], null, null);
        wp_enqueue_style('swiper-core', lyntouch_root_url('/dist/css/swiper.css'), [], null);
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
        // Render the block.
        $context['stylesPath'] = __DIR__.'/template/styles.twig';

        // Print Settings
        add_action('wp_print_footer_scripts', fn()=> Timber::render(__DIR__.'/template/settings.twig', $context));

        Timber::render(__DIR__.'/template/swiper.twig', $context);
    }

    public function registerSwiperBlock(): void
    {
        $args = [
            'name'            => 'swiper',
            'title'           => __('Swiper'),
            'description'     => __('Slider Block'),
            'render_callback' => [$this, 'renderSwiperBlock'],
            'category'        => 'formatting',
            'icon'            => 'dashicons-cover-image',
            'keywords'        => ['full-width-slider', 'swiper'],
        ];
        acf_register_block_type($args);
    }

    public function setup(): void
    {
        add_action('acf/init', [$this, 'registerSwiperBlock']);
        add_action('wp_enqueue_scripts', [$this, 'stylesAndScripts']);
        add_action('admin_enqueue_scripts', [$this, 'stylesAndScripts']);
    }
}
