import { render } from "preact";
import Page from "@components/Page/Page";
import Title from "@components/Title/Title";
import Container from "@components/Container/Container";
import "@sass/index.sass";

const App = () => (
    <Page>
        <Container>
            <Title>magicSearch 🪄</Title>
        </Container>
    </Page>
);

render(<App />, document.querySelector("#root"));
