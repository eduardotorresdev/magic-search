import { ComponentChildren } from "preact";
import "./Button.sass";

interface ButtonProps {
    className?: string;
    isActive?: boolean;
    onClick?: () => void;
    children: ComponentChildren;
}

const Button = ({
    className = "",
    isActive = false,
    onClick,
    children,
}: ButtonProps) => {
    return (
        <button
            className={`button ${className} ${isActive && "button--enabled"}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
