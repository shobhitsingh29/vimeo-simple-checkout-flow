import {StyledFooter, StyledBtn} from './style'
import React from "react";

const Footer = (props) => {
    return <StyledFooter>
        <StyledBtn onClick={props.handleAddToCart}>
            add to cart
        </StyledBtn>
        <StyledBtn>
            checkout
        </StyledBtn>
    </StyledFooter>
};

export default Footer;
