function InputFormText({label, typeInput, name, placeholder, onChange, children, className, childrenInInput, value}) {
    return (
        <div className={className}>
            <div className={"mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"}>
                <div className={"sm:col-span-4"}>
                    <label className="block text-xl leading-6 text-gray-900">
                        {label}
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 mt-2 border focus:border-black focus:shadow-black hover:border-black">
                        <input type={typeInput} name={name} placeholder={placeholder}
                               className="flex-1 py-1.5 pl-1 placeholder:text-gray-400 focus:outline-none focus:shadow-none"
                               onChange={onChange} required value={value}
                        />
                        {childrenInInput}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default InputFormText;