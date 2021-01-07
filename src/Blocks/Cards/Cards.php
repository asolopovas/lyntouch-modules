<?php

namespace Lyntouch\Blocks\Cards;

use Lyntouch\Contracts\BlockInterface;
use Timber\Timber;

class Cards implements BlockInterface
{

    public function stylesAndScripts()
    {
        # Core Styles
//        wp_enqueue_script('cards-core', lyntouch_root_url('/dist/js/swiper.js'), [], null, null);
//        wp_enqueue_style('cards-core', lyntouch_root_url('/dist/css/swiper.css'), [], null);
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

        Timber::render(__DIR__.'/template/cards.twig', $context);
    }

    public function registerSwiperBlock(): void
    {
        $args = [
            'name'            => 'lyntouch-cards',
            'title'           => __('Cards'),
            'description'     => __('Image Text Cards'),
            'render_callback' => [$this, 'renderSwiperBlock'],
            'category'        => 'formatting',
            'icon'            => file_get_contents(__DIR__. '/icon.svg'),
            'keywords'        => ['full-width-slider', 'swiper'],
        ];
        acf_register_block_type($args);
    }

    public function setup(): void
    {
        add_action('acf/init', [$this, 'registerSwiperBlock']);
    }
}
