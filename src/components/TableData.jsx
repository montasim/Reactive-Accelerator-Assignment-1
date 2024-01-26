function TableData({ tableKey = "", customClass = "p-5 text-sm md:text-xl", tableDataColSpan = 1, tableDataText = "", children }) {
    return (
        <td key={tableKey} className={customClass} colSpan={tableDataColSpan}>
            {tableDataText}
            {children ? children : "" }
        </td>
    )
}

export default TableData
