function TableData(
    {
        inputType = "search",
        customClass = "z-20 block w-full bg-white-500 px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800",
        InputPlaceholder = "Search by Student ",
        IsRequired = true,
        onChangeFunction
    }) {
    return (
        <input
            type={inputType}
            className={customClass}
            placeholder={InputPlaceholder}
            required={IsRequired}
            onChange={onChangeFunction}
        />
    )
}

export default TableData
