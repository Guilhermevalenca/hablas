import {useState} from "react";
import Icon from "@mdi/react";
import {mdiEyeOffOutline, mdiEyeOutline} from "@mdi/js";

function InputFormPassword({label, name, onChange, placeholder, className, isVisiblePassOpen, children, value}) {
    const [visiblePassword, setVisiblePassword] = useState(false);
    function ChangeVisiblePassword() {
        if(isVisiblePassOpen) {
            return (
                <>
                    <div className={"bg-white border border-transparent flex items-center text-gray-600"} onClick={() => setVisiblePassword(!visiblePassword)}>
                        {visiblePassword ? <Icon path={mdiEyeOutline} size={1.2}/> : <Icon path={mdiEyeOffOutline} size={1.2} />}
                    </div>
                </>
            );
        } else {
            return null;
        }
    }
    return (
        <div className={className}>
            <div className={"mt-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"}>
                <div className={"sm:col-span-4"}>
                    <label className="block text-xl leading-6 text-gray-900">
                        {label}
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 mt-2 border focus:border-black focus:shadow-black hover:border-black">
                        <input type={visiblePassword ? 'text' : "password"} name={name}
                               placeholder={placeholder}
                               className="flex-1 py-1.5 pl-1 placeholder:text-gray-400 focus:outline-none focus:shadow-none"
                               onChange={onChange} value={value}
                        />
                        <ChangeVisiblePassword/>

                    </div>

                    {children}

                </div>
            </div>
        </div>
    );
}

export default InputFormPassword;