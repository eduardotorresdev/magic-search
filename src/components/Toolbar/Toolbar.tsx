import { Button } from "@components";
import { useFontSize } from "@hooks";
import { useContext, useEffect, useRef } from "preact/hooks";
import { ThemeContext } from "@contexts";
import "./Toolbar.sass";

const Toolbar = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const lastThemeRef = useRef(theme);
    const { increment, decrement, canIncrement, canDecrement, percentage } =
        useFontSize();

    useEffect(() => {
        if (theme !== "contrast") {
            lastThemeRef.current = theme;
        }
    }, [theme]);

    return (
        <div className="toolbar">
            <div className="toolbar__section">
                Acessibilidade:
                <Button disabled={!canIncrement} onClick={() => increment()}>
                    A+
                </Button>
                <Button disabled={!canDecrement} onClick={() => decrement()}>
                    A-
                </Button>
                <Button
                    isActive={theme === "contrast"}
                    onClick={() =>
                        setTheme((theme) =>
                            theme === "contrast"
                                ? lastThemeRef.current
                                : "contrast"
                        )
                    }
                >
                    Alto contraste
                </Button>
                <span
                    className={`toolbar__float ${
                        percentage !== 100 && "toolbar__float--show"
                    }`}
                >
                    Tamanho do texto: {percentage}%
                </span>
            </div>
        </div>
    );
};

export default Toolbar;
