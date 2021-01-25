import {StyledListHeader} from '../commonStyles'
import {StyledD,StyledDivWithBorder} from './style'
import React from "react";
import ProductList from "../ProductList";

const CartListHeader = ({cartListData}) => {
    return <StyledListHeader>
        <StyledD>
            <StyledDivWithBorder>
                no of items : {cartListData.length}
            </StyledDivWithBorder>
            <div>
                {cartListData.length ?
                    <ProductList listData={cartListData} showCheckBox={false}/> : 'your cart is Empty'}
            </div>
        </StyledD>
    </StyledListHeader>
};

export default CartListHeader;
