import { Switch, Toolbar } from "@components";
import { ThemeContext } from "@contexts";
import { useContext } from "preact/hooks";
import './Header.sass';

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className="header">
            <Switch
                defaultValue={theme === "dark"}
                beforeChange={(status) => {
                    if (theme === "contrast") {
                        setTheme(status ? "dark" : "light");
                        return false;
                    }

                    return true;
                }}
                onChange={(status) => {
                    setTheme(status ? "dark" : "light");
                }}
                title="Altera o tema ativo"
                name="altera_tema"
            />
            <Toolbar />
        </div>
    );
};

export default Header;
