import { ComponentChildren } from "preact"
import './Toolbar.sass' 

interface ToolbarProps {
    children: ComponentChildren
}

const Toolbar = ({children}: ToolbarProps) => {
    return <div className="toolbar">{children}</div>
}

export default Toolbar;