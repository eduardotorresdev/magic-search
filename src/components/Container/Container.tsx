import { ComponentChildren } from "preact";
import "./Container.sass";

interface ContainerProps {
    children: ComponentChildren;
}

const Container = ({ children }: ContainerProps) => (
    <div className="container">{children}</div>
);

export default Container;
