import React, {useContext} from "react";
import {ThemeContext} from './index'
import {ThemeProvider} from "styled-components";

const themes = {
    red: {
        background: "red",
    },
    green: {
        background: "green",
    },
    white: {
        background: "gray",
    },
};
const Theme = ({children}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
