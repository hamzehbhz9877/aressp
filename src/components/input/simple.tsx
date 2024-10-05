import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

// css

import "./input.scss"

type propsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>;

interface Props extends propsType {
    type: "text" | "number" | "email" | "password"|"url";
    label?: string;
    name?: string;
}

const SimpleInput = ({type,label,name,className,...rest}:Props) => {
    return (
        <div className="form-group text-[#8D8D8D]">
            {label?<label className="block mb-2 text-sm font-medium">{label}</label>:""}
            <input
                name={name}
                type={type}
                className={`
                 input-field
                 ${className ?? ""}`}
                {...rest}
            />
        </div>
    );
};

export default SimpleInput;