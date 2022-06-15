import { ComponentChildren } from "preact";
import "./Button.sass";

interface ButtonProps {
    className?: string;
    isActive?: boolean;
    onClick?: Function;
    disabled?: boolean;
    children: ComponentChildren;
}

const Button = ({
    className = "",
    isActive = false,
    onClick,
    disabled,
    children,
}: ButtonProps) => {
    return (
        <button
            type='button'
            className={`button ${className} ${isActive && "button--enabled"}`}
            disabled={disabled}
            onClick={(e) => {
                if(disabled) return;

                onClick && onClick(e);
            }}
        >
            {children}
        </button>
    );
};

export default Button;
