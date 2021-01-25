import {StyledFooter, StyledBtn} from './style'
import React from "react";

const Footer = ({handleCheckout,handleAddToCart}) => {
    return <StyledFooter>
        <StyledBtn onClick={handleAddToCart}>
            add to cart
        </StyledBtn>
        <StyledBtn onClick={handleCheckout}>
            checkout
        </StyledBtn>
    </StyledFooter>
};

export default Footer;
