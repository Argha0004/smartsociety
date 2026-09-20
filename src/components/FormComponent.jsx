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
                        rounded-lg
                        border
                        border-primary-light
                        bg-primary-light/30
                        text-white
                        outline-none
                        transition
                        placeholder:text-white/40
                        focus:border-accent
                        focus:ring-1
                        focus:ring-accent
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
                        rounded-lg
                        border
                        border-primary-light
                        bg-primary-light/30
                        text-white
                        outline-none
                        transition
                        placeholder:text-white/40
                        focus:border-accent
                        focus:ring-1
                        focus:ring-accent
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
                bg-primary-light
                font-semibold
                tracking-wide
                text-accent-light
                transition
                hover:bg-primary
                ${className}
            `}
        >
            {children}
        </button>
    );
}


export {
    InputField,
    Button,
};