import {StyledThemeButton, StyledHeader} from './style'
import React, {useContext} from "react";
import {ThemeContext} from '../../sharedComponents/ThemeContext/index'

function Header() {
    const {switchTheme} = useContext(ThemeContext);
    return <StyledHeader>
        <StyledThemeButton color='red' onClick={() => switchTheme("red")}/>
        <StyledThemeButton color='green' onClick={() => switchTheme("green")}/>
    </StyledHeader>
}

export default Header;
