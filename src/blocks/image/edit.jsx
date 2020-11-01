const {
    Button,
} = wp.components
const {
    // RichText,
    // ColorPalette,
    InspectorControls,
    MediaUploadCheck,
    MediaUpload,  // Thanks wp.editor!
} = wp.blockEditor;

const {
    PanelBody,
    TextControl,
} = wp.components

export default (props) => {
    const {
        attributes,
        className,
        setAttributes,
    } = props

    const {
        image,
        variations,
    } = attributes

    function addVariation(width, height, media) {
        if ( variations === "[]" ) {
            let newVar = JSON.parse(variations)

            if (! newVar.includes({width, height, media}) ) {
                newVar.push({width, height, media})
                setAttributes({variations: JSON.stringify(newVar)})
            }
        }
    }

    return ([
            <InspectorControls>
                <PanelBody title={'Image Size Variations'}>
                    {JSON.parse(variations).map((value) => {
                        return (<p>{value.width}</p>)
                    })}
                    <Button onClick={addVariation(100, 200, 300)} className="button">Add Variation</Button>
                </PanelBody>
            </InspectorControls>,
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
            </div>,
        ]
    );
}
