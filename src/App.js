import {ThemeStore} from './sharedComponents/ThemeContext'
import Theme from './sharedComponents/ThemeContext/theme'
import React, {useEffect, useState, useRef} from "react";
import {StyledWrapper, StyledMain} from './style'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListHeader from "./components/ProductListHeader";
import CartListHeader from "./components/CartListHeader";

function App() {
    const [productListData, setProductListData] = useState([]);
    const [cartListData, setCartListData] = useState([]);
    const inputRef = useRef(null);

    const fetchProductListData = async () => {

        const data = await fetch('https://my-json-server.typicode.com/shobhitsingh29/dummyProducts/products').then(res => res.json())
            .then(json => json);
        setProductListData(data);

    };

    const handleSearch = () => {
        if (inputRef.current.value) {
            const filteredProductListData = productListData.filter(({title}) => title.includes(inputRef.current.value));
            setProductListData(filteredProductListData);
        } else {
            fetchProductListData().then(r => r);
        }
    };
    const handleAddToCart = () => {
        const selectedList = productListData.filter(({selected}) => selected === true);

        setCartListData(cartListData.concat(selectedList));
    };

    const handleCheckout = () => {

        setCartListData([]);
    };

    const handleCheckbox = (selectedId, e) => {
        const selectedList = productListData.map((item) => {


            if (item.id === selectedId) {
                item.selected = !item.selected;
            }
            return item


        });
        setProductListData(selectedList)
    };

    useEffect(() => {
        fetchProductListData().then(r => r);
    }, []);
    return (
        <ThemeStore>
            <Theme>
                <StyledWrapper>
                    <Header/>
                    <StyledMain>
                        <ProductListHeader productListData={productListData} handleSearch={handleSearch}
                                           handleCheckbox={handleCheckbox}
                                           inputRef={inputRef}/>
                        <CartListHeader cartListData={cartListData}/>
                    </StyledMain>
                    <Footer handleAddToCart={handleAddToCart} handleCheckout={handleCheckout}/>
                </StyledWrapper>
            </Theme>
        </ThemeStore>
    );
}

export default App;
