import {StyledListHeader, StyledDiv, StyledInput,} from '../commonStyles'
import {StyledSearch} from './style'
import React, {useEffect, useState} from "react";
import ProductList from "../ProductList";

function ProductListHeader() {
    const [productListData, setProductListData] = useState([]);

    const fetchProductListData = async () => {

        const data = await fetch('https://my-json-server.typicode.com/shobhitsingh29/dummyProducts/products').then(res => res.json())
            .then(json => json);
        setProductListData(data);

    };
    useEffect(() => {
        fetchProductListData().then(r => r);
    }, []);

    return <StyledListHeader>
        <StyledDiv>
            <StyledInput width={'80%'} type='text' placeholder='enter product name here'/>
            <StyledSearch width={'20%'}>Search</StyledSearch>
        </StyledDiv>
        <ProductList productListData={productListData}/>

    </StyledListHeader>
}

export default ProductListHeader;
