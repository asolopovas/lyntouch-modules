let mix = require('laravel-mix');

mix.react('src/Blocks/Image/index.js', 'dist/js')
   .js('src/Blocks/Slider/js/swiper.js', 'dist/js')
   .sass('src/Blocks/Image/style.scss', 'dist/css')
   .sass('src/Blocks/Image/editor.scss', 'dist/css')
   .sass('src/Blocks/Slider/sass/swiper.scss', 'dist/css')
