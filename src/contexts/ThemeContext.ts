import { createContext } from "preact";
import { StateUpdater } from "preact/hooks";

const ThemeContext = createContext<['light' | 'dark' | 'contrast', StateUpdater<"light" | "dark" | "contrast">]>(['light', () => { }]);

export default ThemeContext;