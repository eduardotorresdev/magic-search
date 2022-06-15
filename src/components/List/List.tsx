import { ComponentChildren } from "preact";
import "./List.sass";

interface ListProps {
    children: ComponentChildren;
}

const List = ({ children }: ListProps) => {
    return <ul className="list">{children}</ul>;
};

interface ListItemProps {
    children: ComponentChildren;
}

const ListItem = ({ children }: ListItemProps) => {
    return (
        <li className="list__item">
            {children}
        </li>
    );
};

export { List, ListItem };
