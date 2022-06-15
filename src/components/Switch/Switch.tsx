import Moon from "@img/moon.svg";
import Sun from "@img/sun.svg";
import { forwardRef } from "preact/compat";
import {
    Ref,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "preact/hooks";
import "./Switch.sass";

interface SwitchProps {
    beforeChange?: (status: boolean) => boolean;
    onChange?: (status: boolean) => void;
    defaultValue?: boolean;
    role?: string;
    alt?: string;
    name?: string;
    title?: string;
}

export interface SwitchRef {
    setState: (newState: boolean, silently?: boolean) => void;
    getState: () => boolean;
}

const Switch = forwardRef(
    (
        {
            beforeChange,
            onChange,
            defaultValue,
            role,
            alt,
            name,
            title,
        }: SwitchProps,
        ref: Ref<SwitchRef>
    ) => {
        const isMounted = useRef(false);
        const preventEffect = useRef(false);
        const [active, setActive] = useState(defaultValue || false);

        useImperativeHandle(ref, () => ({
            setState: (newState, silently = false) => {
                if (silently) preventEffect.current = true;

                setActive(newState);
            },
            getState: () => active,
        }));

        const onClick = () => {
            setActive((active) => {
                if (beforeChange && !beforeChange(active)) {
                    return active;
                }

                return !active;
            });
        };

        useEffect(() => {
            if (!isMounted.current) {
                isMounted.current = true;
                return;
            }

            if (preventEffect.current) {
                preventEffect.current = false;
                return;
            }

            onChange && onChange(active);
        }, [active]);

        return (
            <label
                for={name}
                className={`switch ${active && "switch--active"}`}
            >
                <input
                    type="checkbox"
                    name={name}
                    id={name}
                    class="switch__input"
                    onChange={onClick}
                    role={role}
                    alt={alt}
                    title={title}
                />
                <span className="switch__circle" hidden>
                    <Moon
                        className="switch__icon switch__icon--enabled"
                        aria-hidden="true"
                        focusable="false"
                    />
                    <Sun
                        className="switch__icon switch__icon--disabled"
                        aria-hidden="true"
                        focusable="false"
                    />
                </span>
                <span className="switch__label">
                    {active ? "Modo claro" : "Modo escuro"}
                </span>
            </label>
        );
    }
);

export default Switch;
