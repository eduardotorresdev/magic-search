import { render } from "preact";
import { Page, Title, Container, Input, Header } from "@components";
import ThemeContext from "./contexts/ThemeContext";
import "@sass/index.sass";
import { useRef, useState } from "preact/hooks";

const App = () => {
    const osTheme = useRef<"light" | "dark">(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [theme, setTheme] = useState<"light" | "dark" | "contrast">(
        osTheme.current
    );

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Page>
                <Container>
                    <Header />
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
