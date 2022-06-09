import { ComponentChildren } from "preact";
import "./Page.sass";

interface PageProps {
    children: ComponentChildren;
}

const Page = ({ children }: PageProps) => {
    return <main class="page">{children}</main>;
};

export default Page;
