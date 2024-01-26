function TableRow({ customClass = "bg-white-800/5", tableRowText = "", children }) {
    return (
        <tr className={customClass}>
            {tableRowText}
            {children ? children : "" }
        </tr>
    )
}

export default TableRow
