import { Fragment, render } from "preact";
import {
    Page,
    Title,
    Container,
    Input,
    Header,
    List,
    ListItem,
    Movie,
} from "@components";
import ThemeContext from "./contexts/ThemeContext";
import "@sass/index.sass";
import { useEffect, useRef, useState } from "preact/hooks";
import { useMovies } from "@hooks";

const App = () => {
    const osTheme = useRef<"light" | "dark">(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );
    const [theme, setTheme] = useState<"light" | "dark" | "contrast">(
        osTheme.current
    );
    const { loading, movies, search } = useMovies();

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
                        onChange={(e) => search((e.target as any).value)}
                    ></Input>
                    <List show={loading || movies.length > 0}>
                        {loading ? (
                            <Fragment>
                                <ListItem>
                                    <Movie skeleton />
                                </ListItem>
                                <ListItem>
                                    <Movie skeleton />
                                </ListItem>
                                <ListItem>
                                    <Movie skeleton />
                                </ListItem>
                            </Fragment>
                        ) : (
                            movies.map((movie) => (
                                <ListItem>
                                    <Movie
                                        image={movie.image}
                                        title={movie.title}
                                        genres={movie.genres}
                                        score={movie.score}
                                    />
                                </ListItem>
                            ))
                        )}
                    </List>
                </Container>
            </Page>
        </ThemeContext.Provider>
    );
};

render(<App />, document.querySelector("#root"));
