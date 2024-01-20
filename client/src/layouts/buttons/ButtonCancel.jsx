function ButtonCancel({className, children, typeButton, onClick}) {
    return (
        <>
            <button type={typeButton ? typeButton : 'button'}
                    className={"rounded-md border border-sky-900 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:text-white " + className}
                    onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default ButtonCancel;