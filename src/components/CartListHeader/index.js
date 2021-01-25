import {StyledListHeader, StyledDiv} from '../commonStyles'
import React from "react";

function CartListHeader() {
    return <StyledListHeader>
        <StyledDiv>
            <div>
                no of items
            </div>
            <div>
                cart items added........
            </div>
        </StyledDiv>
    </StyledListHeader>
}

export default CartListHeader;
