import { ComponentChildren } from "preact";
import "./List.sass";

interface ListProps {
    show: boolean;
    children: ComponentChildren;
}

const List = ({ show, children }: ListProps) => {
    return <ul className={`list ${show && 'list--show'}`}>{children}</ul>;
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
