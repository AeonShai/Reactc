import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function Button(){
    const theme = useContext(ThemeContext);
    console.log(theme);
    return <div> Active Theme: {theme.theme}
    <br />
            <button onClick={() => theme.setTheme(theme.theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
}

export default Button;