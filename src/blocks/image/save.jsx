export default ({attributes}) => {
    const {
        image,
    } = attributes

    return (
        <figure>
            <img src={image.url} alt={image.alt ? image.alt : image.title}/>
        </figure>
    )
}

