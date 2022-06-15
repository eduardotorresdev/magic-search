import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import "./Input.sass";

interface InputProps {
    name: string;
    id?: string;
    placeholder?: string;
    title?: string;
    alt?: string;
    children?: ComponentChildren;
    onChange?: (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => void;
}

const Input = ({
    name,
    id,
    placeholder,
    title,
    alt,
    onChange,
    children,
}: InputProps) => {
    const [focus, setFocus] = useState(false);

    const toggleFocus = () => setFocus((focus) => !focus);

    return (
        <label className={`input ${focus && "input--focus"}`}>
            <span className="input__label" hidden>
                {placeholder}
            </span>
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
                onChange={(e) => onChange && onChange(e)}
            />
            {children}
        </label>
    );
};

export default Input;
