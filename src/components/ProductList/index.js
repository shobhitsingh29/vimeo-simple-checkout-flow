import React from "react";
import {StyledLi} from './style'

function ProductList({productListData}) {
    return <ul>

        {productListData ? productListData.map(({id,title}) => {
            return <StyledLi key={id}>
                <input type='checkbox' />
                {title}
            </StyledLi>

        }) : <p>Loading.........</p>}
    </ul>

}

export default ProductList;
