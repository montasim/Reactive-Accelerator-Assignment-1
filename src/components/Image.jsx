function Image({ customClass = "h-[40px]", imageSrc = "#", imageAltText = "", imageWidth = "", imageHeight = ""}) {
    return (
        <img
            className={customClass}
            src={imageSrc}
            alt={imageAltText}
            width={imageWidth}
            height={imageHeight}
        />
    )
}

export default Image
