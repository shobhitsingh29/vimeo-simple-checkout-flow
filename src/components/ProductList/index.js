import React from "react";
import {StyledLi,StyledUl} from './style'

function ProductList({listData, showCheckBox = true,handleCheckbox}) {
    return <StyledUl>
        {listData ? listData.map(({id, title,selected},index) => {
            return <StyledLi key={id*index}>
                {showCheckBox && <input type='checkbox' checked={selected} onChange={handleCheckbox.bind(null,id)}/>}
                {title}
            </StyledLi>

        }) : <p>Loading.........</p>}
    </StyledUl>

}

export default ProductList;
