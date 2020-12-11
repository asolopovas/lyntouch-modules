<?php

namespace Lyntouch\Blocks\Slider;

use Lyntouch\Contracts\BlockInterface;
use Timber\Timber;

class SliderBlock implements BlockInterface
{

    public function swiperInit($block)
    {
        ?>
        <script>
            whenDomReady().then(() => {
                setTimeout(() => {
                    console.log('timeout...')
                    let swiper = {
                        el: '.<?php echo $block['id'] ?>',
                        instance: '',
                        breakpoint: 1023,
                        active: false,
                        config: {
                            loop: true,
                            centeredSlides: true,
                            slidesPerView: 'auto',
                            spaceBetween: 1,
                            // Navigation arrows
                            navigation: {
                                nextEl: '.arrow-next',
                                prevEl: '.arrow-prev',
                            },
                        },
                    }

                    swiper.instance = new Swiper(swiper.el, swiper.config)
                    swiper.active = true
                    window.swiper = swiper

                    addEventListener('resize', debounce(() => {
                        if (window.innerWidth <= swiper.breakpoint && swiper.active === true) {
                            swiper.instance.destroy(true, true)
                            swiper.active = false
                        }
                        if (window.innerWidth > swiper.breakpoint && swiper.active === false) {
                            swiper.instance = new Swiper(swiper.el, swiper.config)
                            swiper.active = true
                        }
                    }, 300))
                }, 1000)
            })
        </script>
        <?php
    }

    public function renderSwiperBlock($block, $content = '', $is_preview = false)
    {
        add_action('wp_print_footer_scripts', fn() => $this->swiperInit($block));
        add_action('admin_footer', fn() => $this->swiperInit($block), PHP_INT_MAX);

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

        Timber::render(__DIR__.'/template/swiper.twig', $context);
    }

    public function registerSwiperBlock(): void
    {
        $args = [
            'name'            => 'swiper',
            'title'           => __('Swiper'),
            'description'     => __('Swiper Slider Block'),
            'render_callback' => [$this, 'renderSwiperBlock'],
            'category'        => 'formatting',
            'icon'            => 'dashicons-images-alt2',
            'keywords'        => ['slider', 'swiper'],
        ];
        acf_register_block_type($args);
    }

    public function stylesAndScripts(): void
    {
        wp_enqueue_script('swiper_admin_scripts', lyntouch_root_url('/dist/js/swiper.js'), [], null);
        wp_enqueue_style('swiper_admin_styles', lyntouch_root_url('/dist/css/swiper.css'), [], null);
    }

    public function setup(): void
    {
        add_action('admin_enqueue_scripts', [$this, 'stylesAndScripts']);
        add_action('acf/init', [$this, 'registerSwiperBlock']);
    }
}
