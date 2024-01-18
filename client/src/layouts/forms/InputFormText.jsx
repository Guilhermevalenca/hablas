function InputFormText({label, typeInput, name, placeholder, changeInput, children}) {
    return (
        <>
            <div className={"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"}>
                <div className={"sm:col-span-4"}>
                    <label className="text-center block text-2xl leading-6 text-gray-900">
                        {label}
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 mt-2">
                        <input type={typeInput} name={name} placeholder={placeholder}
                               className="flex-1 py-1.5 pl-1 placeholder:text-gray-400 border focus:border-blue-600 focus:shadow-blue"
                               onChange={changeInput} required
                        />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default InputFormText;