function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    helperText = "",
    required = false,
    className = "",
    inputClassName = "",
}) {
    return (
        <div className={className}>
            {/* Label */}

            <label
                htmlFor={name}
                className="
                    mb-2
                    block
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-accent-light
                "
            >
                {label}
            </label>

            {/* Textarea */}

            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`
                        min-h-37.5
                        w-full
                        resize-none
                        rounded-lg
                        border
                        border-[#edd9b526]
                        bg-[#ffffff08]
                        px-4
                        py-3
                        text-sm
                        text-accent-light
                        outline-none
                        transition-all
                        duration-300
                        ease-out
                        placeholder:text-white/40
                        hover:border-[#edd9b573]
                        hover:ring-1
                        hover:ring-[#edd9b526]
                        focus:border-accent-light
                        focus:ring-2
                        focus:ring-[#edd9b540]
                        focus:ring-offset-0
                        ${inputClassName}
                    `}
                />
            ) : (
                /* Normal Input */

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`
                        h-11
                        w-full
                        rounded-md
                        border
                        border-[#edd9b526]
                        bg-[#ffffff08]
                        px-4
                        text-sm
                        text-accent-light
                        outline-none
                        transition-all
                        duration-300
                        ease-out
                        placeholder:text-white/40
                        hover:border-[#edd9b573]
                        hover:ring-1
                        hover:ring-[#edd9b526]
                        focus:border-accent-light
                        focus:ring-2
                        focus:ring-[#edd9b540]
                        focus:ring-offset-0
                        ${inputClassName}
                    `}
                />
            )}

            {/* Helper Text */}

            {helperText && (
                <p className="mt-1.5 text-xs text-white/40">
                    {helperText}
                </p>
            )}
        </div>
    );
}

function Button({
    children,
    type = "button",
    onClick,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                rounded-lg
                border
                border-primary-light
                font-semibold
                tracking-wide
                text-accent-light
                transition-all
                duration-300
                ease-out
                hover:bg-primary
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export { InputField, Button };