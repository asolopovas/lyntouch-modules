const {
    Button,
} = wp.components
const {
    // RichText,
    // InspectorControls,
    // ColorPalette,
    MediaUploadCheck,
    MediaUpload,  // Thanks wp.editor!
} = wp.blockEditor;

export default (props) => {
    const {attributes, className, setAttributes} = props
    const {image} = attributes

    return (
        <div className={className}>
            <MediaUploadCheck>
                <MediaUpload
                    className="js-book-details-image wp-admin-book-details-image"
                    allowedTypes={['image']}
                    multiple={false}
                    value={image ? image.id : ''}
                    onSelect={image => setAttributes({image: image})}
                    render={({open}) => (
                        image
                            ?
                            <figure>
                                <img src={image.url} width={image.width / 2}/>
                                <Button onClick={() => setAttributes({image: ''})} className="button is-small">Remove</Button>
                            </figure>
                            :
                            <Button onClick={open} className="button">Upload Image</Button>
                    )}
                />
            </MediaUploadCheck>
        </div>
    );
}
