import './editor.scss';
import './style.scss';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
import save from './save.jsx'
import edit from './edit.jsx'

registerBlockType('lyntouch/wp-media', {
    title: __('Lyntouch - Image Block'), // Block title.
    icon: 'shield',
    category: 'common',
    attributes: {
        image: {
            type: 'object',
            selector: 'js-book-details-image',
        },
    },
    keywords: [
        __('lyntouch-blocks'),
    ],
    edit,
    save,
});
