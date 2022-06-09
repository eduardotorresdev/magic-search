import { ComponentChildren } from "preact"
import './Title.sass'

interface TitleProps {
    children: ComponentChildren
}

const Title = ({children}: TitleProps) => {
    return (
        <h1 className="title">{children}</h1>
    );
}

export default Title;