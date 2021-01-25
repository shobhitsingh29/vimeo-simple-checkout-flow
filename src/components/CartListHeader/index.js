import {StyledListHeader} from '../commonStyles'
import { StyledD} from './style'
import React from "react";

const CartListHeader = (props) => {
    return <StyledListHeader>
        <StyledD>
            <div>
                no of items {props.cartListData.length}
            </div>
            <div>
                your cart is Empty
            </div>
        </StyledD>
    </StyledListHeader>
};

export default CartListHeader;
