let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.react('src/Blocks/Image/index.js', 'dist/js')
   .sass('src/Blocks/Image/style.scss', 'dist/css')
   .sass('src/assets/admin/global.scss', 'dist/css')
   .sass('src/Blocks/Image/editor.scss', 'dist/css')
   .js('src/Blocks/Swiper/js/swiper.js', 'dist/js')
   .sass('src/Blocks/Swiper/sass/swiper.scss', 'dist/css')
   .tailwind()
