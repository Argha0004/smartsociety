function MainContainer({ children, className = "" }) {
    return (
        <div
            className={`
                mx-auto
                w-full
                max-w-300
                px-4
                sm:px-6
                lg:px-0
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default MainContainer;