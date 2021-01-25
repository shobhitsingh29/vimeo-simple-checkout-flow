import {StyledThemeButton,StyledHeader} from './style'
import React from "react";

function Header() {
    return <StyledHeader>
        <StyledThemeButton color='red'/>
        <StyledThemeButton color='green'/>
    </StyledHeader>
}

export default Header;
