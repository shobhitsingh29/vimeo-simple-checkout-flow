import {StyledListHeader, StyledDiv, StyledInput,} from '../commonStyles'
import {StyledSearch} from './style'
import React from "react";
import ProductList from "../ProductList";

const ProductListHeader = (props) => {
    return <StyledListHeader>
        <StyledDiv>
            <StyledInput width={'80%'} type='text' placeholder='enter product name here' ref={props.inputRef}/>
            <StyledSearch width={'20%'} onClick={props.handleSearch}>Search</StyledSearch>
        </StyledDiv>
        <ProductList productListData={props.productListData}/>

    </StyledListHeader>
};

export default ProductListHeader;
