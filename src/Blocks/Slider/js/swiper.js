import debounce from 'lodash/debounce'
import {Swiper, Navigation, Pagination} from 'swiper'

Swiper.use([Navigation, Pagination])

global.Swiper = Swiper
global.debounce = debounce
