<?php

namespace Lyntouch\Blocks\Slider;

use Lyntouch\Contracts\BlockInterface;

class SliderBlock implements BlockInterface
{

    public function setup()
    {

        function render_swiper_block($block, $content = '', $is_preview = false)
        {

            function swiperInit($block)
            {
                ?>
                <script>
                    let interval = setInterval(function() {
                        if (window.hasOwnProperty('Swiper')) {
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
                            if (window.innerWidth > swiper.breakpoint) {
                                swiper.active = true
                            }

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
                            clearInterval(interval);
                        }
                    }, 100);
                </script>
                <?php
            }

            add_action('wp_print_footer_scripts', function() use ($block) {
                swiperInit($block);
            });

            add_action('admin_footer', function() use ($block) {
                swiperInit($block);
            }, PHP_INT_MAX);

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

            Timber::render('admin/swiper.twig', $context);
        }

        add_action('acf/init', 'register_swiper_block');
        function register_swiper_block()
        {

            acf_register_block_type([
                                        'name'            => 'swiper',
                                        'title'           => __('Swiper'),
                                        'description'     => __('Swiper Slider Block'),
                                        'render_callback' => 'render_swiper_block',
                                        'category'        => 'formatting',
                                        'icon'            => 'dashicons-images-alt2',
                                        'keywords'        => ['slider', 'swiper'],
                                    ]);
        }

        function swiperAssetsForAdmin()
        {
            wp_enqueue_script('swiper_admin_scripts', lyntouch_root_url('/dist/js/swiper.js'), [], null);
            wp_enqueue_style('swiper_admin_styles', lyntouch_root_url('/dist/js/swiper.css'), [], null);
        }

        add_action('admin_enqueue_scripts', 'swiperAssetsForAdmin');
    }
}
