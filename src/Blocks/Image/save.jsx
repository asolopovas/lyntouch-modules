import "./style.scss"
function resizeImg(path, width, height) {
    return {
        width,
        height,
        src: `${lyntouchGlobal.siteUrl}/media?image=${path}&args[w]=${width}&args[h]=${height}&args[fit]=crop`,
        srcSet: `${lyntouchGlobal.siteUrl}/media?image=${path}&args[w]=${width}&args[h]=${height}&args[fit]=crop, ${lyntouchGlobal.siteUrl}/media?image=${path}&args[w]=${width * 2}&args[h]=${height * 2}&args[fit]=crop 2x`,
    }
}

export default ({attributes}) => {
    const {
        image,
        variations,
    } = attributes

    const imgVariations = JSON.parse(variations)
    const imgPath = image.sizes.full.url.replace(`${lyntouchGlobal.siteUrl}/wp-content/uploads/`, '')
    const img = imgVariations.length > 0
        ? resizeImg(imgPath, imgVariations[0].width, imgVariations[0].height)
        : image.sizes.full.url

    return (
        <picture>
            {imgVariations.map(img => {
                const imgObj = resizeImg(imgPath, img.width, img.height)
                return <source srcSet={imgObj.srcSet} media={`(${img.media})`}/>
            })}
            <img
                src={img.src}
                alt={image.alt ? image.alt : image.title}
                width={img.width}
                height={img.height}
            />
        </picture>
    )
}

