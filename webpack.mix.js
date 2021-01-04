let mix = require('laravel-mix');


mix.js('src/Blocks/Image/image-block.js', 'dist/js').react()
   .js('src/Blocks/Swiper/js/swiper.js', 'dist/js')
   .js('src/Gutenberg/hooks.js', 'dist/js')
   .sass('src/Blocks/Swiper/sass/swiper.scss', 'dist/css')
