function Link({ customClass = "", link = '#', linkText = "", children}) {
    return (
        <a className={customClass} href={link}>
            {linkText}
            {children ? children : ""}
        </a>
    )
}

export default Link
