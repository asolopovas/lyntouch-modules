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

import './editor.scss'

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

    function addVariation() {
            let newVar = JSON.parse(variations)
            let newSize = {width: null, height: null, media: null}
            console.log(newVar)
            if (!newVar.includes(newSize)) {
                newVar.push(newSize)
                setAttributes({variations: JSON.stringify(newVar)})
            }
    }

    let variationsArr = JSON.parse(variations)
    return ([
            <InspectorControls>
                <PanelBody title={'Image Size Variations'}>
                    {variationsArr.map((value, index) => {
                        return (
                            <div className="flex flex-wrap border">
                                <TextControl
                                    className="w-1/2"
                                    label="Width"
                                    type="number"
                                    value={value.width}
                                    onChange={value => {
                                        variationsArr[index].width = value
                                        setAttributes({variations: JSON.stringify(variationsArr)});
                                    }}
                                    min={150}
                                    max={3000}
                                />
                                <TextControl
                                    label="Height"
                                    type="number"
                                    className="w-1/2"
                                    value={value.height}
                                    onChange={value => {
                                        variationsArr[index].height = value
                                        setAttributes({variations: JSON.stringify(variationsArr)});
                                    }}
                                    min={150}
                                    max={2000}
                                />
                                <TextControl
                                    label="Media"
                                    type="string"
                                    className="w-full"
                                    value={value.media}
                                    onChange={value => {
                                        variationsArr[index].media = value
                                        setAttributes({variations: JSON.stringify(variationsArr)});
                                    }}
                                />
                            </div>
                        )
                    })}
                    <Button onClick={addVariation} className="button">Add Variation</Button>
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
