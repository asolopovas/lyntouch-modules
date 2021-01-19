let mix = require('laravel-mix');

mix.js('src/Blocks/Image/image-block.js', 'dist/js').react()
   .js('src/Blocks/Swiper/js/swiper.js', 'dist/js')
   .js('src/Gutenberg/hooks.js', 'dist/js')
   .js('src/Blocks/Gallery/js/photoswipe.js', 'dist/js')
   .sass('src/Blocks/Swiper/sass/swiper.scss', 'dist/css')
   .sass('src/Blocks/Gallery/sass/photoswipe.scss', 'dist/css')
   .options({processCssUrls: false})
   .webpackConfig({
       resolve: {
           alias: {
               'photoSwipe': 'photoswipe/dist/photoswipe.js',
               'photoSwipeUI': 'photoswipe/dist/photoswipe-ui-default.js',
           },
       },
   })
