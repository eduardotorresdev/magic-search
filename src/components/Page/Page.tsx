import { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";
import ThemeContext from "../../contexts/ThemeContext";
import "./Page.sass";

interface PageProps {
    children: ComponentChildren;
}

const Page = ({ children }: PageProps) => {
    const [theme,] = useContext(ThemeContext);

    return <main class={`page page--${theme}`}>{children}</main>;
};

export default Page;
