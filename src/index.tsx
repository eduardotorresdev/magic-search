import { render } from "preact";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import Container from "@components/Container/Container";
import Input from "@components/Input/Input";
import Toolbar from "@components/Toolbar/Toolbar";
import Button from "@components/Button/Button";
import Switch, { SwitchRef } from "@components/Switch/Switch";
import ThemeContext from "./contexts/ThemeContext";
import "@sass/index.sass";
import { useRef, useState } from "preact/hooks";
import { useFontSize } from "@hooks";

const App = () => {
    const osTheme = useRef<"light" | "dark">(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [theme, setTheme] = useState<"light" | "dark" | "contrast">(
        osTheme.current
    );
    const switchRef = useRef<SwitchRef | null>(null);
    const { increment, decrement, canIncrement, canDecrement, percentage } =
        useFontSize();

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Page>
                <Container>
                    <Toolbar>
                        <Switch
                            ref={switchRef}
                            defaultValue={theme === "dark"}
                            beforeChange={(status) => {
                                if (theme === "contrast") {
                                    setTheme(status ? "dark" : "light");
                                    return false;
                                }

                                return true;
                            }}
                            onChange={(status) => {
                                setTheme(status ? "dark" : "light");
                            }}
                            title="Altera o tema ativo"
                            name="altera_tema"
                        />
                        <div className="toolbar__section">
                            Acessibilidade:
                            <Button
                                disabled={!canIncrement}
                                onClick={() => increment()}
                            >
                                A+
                            </Button>
                            <Button
                                disabled={!canDecrement}
                                onClick={() => decrement()}
                            >
                                A-
                            </Button>
                            <Button
                                isActive={theme === "contrast"}
                                onClick={() =>
                                    setTheme((theme) =>
                                        theme === "contrast"
                                            ? switchRef.current.getState()
                                                ? "dark"
                                                : "light"
                                            : "contrast"
                                    )
                                }
                            >
                                Alto contraste
                            </Button>
                            <span className={`toolbar__float ${percentage !== 100 && 'toolbar__float--show'}`}>
                                Tamanho do texto: {percentage}%
                            </span>
                        </div>
                    </Toolbar>
                    <Title>
                        magic<strong>Search</strong> 🪄
                    </Title>
                    <Input
                        name="terms"
                        placeholder="Olá, o que vamos procurar hoje? 🤓"
                        title="Buscar um filme"
                        alt="Insira aqui as palavras-chave a serem buscadas"
                    ></Input>
                </Container>
            </Page>
        </ThemeContext.Provider>
    );
};

render(<App />, document.querySelector("#root"));
