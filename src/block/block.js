import './editor.scss';
import './style.scss';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType('lyntouch/wp-media', {
    title: __('Lyntouch - Image Block'), // Block title.
    icon: 'shield',
    category: 'common',
    keywords: [
        __('lyntouch-blocks'),
    ],

    edit: (props) => {
        return (
            <div></div>
        );
    },

    save: (props) => {
        return (
            <div></div>
        );
    },
});
