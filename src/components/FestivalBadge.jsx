import React from "react";

function FestivalBadge({ children }) {
    return (
        <div
            className="
                mb-8
                rounded-full
                border
                border-primary-light
                bg-primary-light/20
                px-5
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-accent-light
                sm:text-xs
            "
        >
            <span className="relative mr-2 inline-flex size-2.5">
                {/* Animated outer light */}
                <span
                    className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-primary-light
                        opacity-75
                    "
                />

                {/* Static center light */}
                <span
                    className="
                        relative
                        inline-flex
                        size-2.5
                        rounded-full
                        bg-primary-light
                    "
                />
            </span>

            {children}
        </div>
    );
}

export default FestivalBadge;