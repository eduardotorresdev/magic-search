import { createContext } from "preact";

const ThemeContext = createContext<['light' | 'dark' | 'contrast', Function]>(['light', () => { }]);

export default ThemeContext;