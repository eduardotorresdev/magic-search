import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import "./Input.sass";

interface InputProps {
    name: string;
    id?: string;
    placeholder?: string;
    title?: string;
    alt?: string;
    children?: ComponentChildren;
}

const Input = ({ name, id, placeholder, title, alt, children }: InputProps) => {
    const [focus, setFocus] = useState(false);

    const toggleFocus = () => setFocus((focus) => !focus);

    return (
        <label className={`input ${focus && "input--focus"}`}>
            <span className="input__label" hidden>{placeholder}</span>
            <input
                type="text"
                name={name}
                id={id}
                className={`input__field`}
                placeholder={placeholder}
                title={title}
                alt={alt}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
            />
            {children}
        </label>
    );
};

export default Input;
