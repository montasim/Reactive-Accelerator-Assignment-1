import React from "react";

function Button(
    {
        customClass = "absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800",
        children,
        buttonText = "",
    }) {
    return (
        <button
            className={customClass}
        >
            {children}

            <span className="sr-only">{buttonText}</span>
        </button>
    )
}

export default Button
