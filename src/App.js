import ThemeContext from './sharedComponents/ThemeContext'
import React, {useEffect, useContext, useState, useRef} from "react";
import {StyledWrapper, StyledMain} from './style'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListHeader from "./components/ProductListHeader";
import CartListHeader from "./components/CartListHeader";

function App() {
    const theme = useContext(ThemeContext);
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
    const handleAddToCart = (indexList) => {
        setCartListData()
    };

    useEffect(() => {
        fetchProductListData().then(r => r);
    }, []);
    return (
        <ThemeContext.Provider value={theme}>
            <StyledWrapper>
                <Header/>
                <StyledMain>
                    <ProductListHeader productListData={productListData} handleSearch={handleSearch}
                                       inputRef={inputRef}/>
                    <CartListHeader cartListData={cartListData}/>
                </StyledMain>
                <Footer handleAddToCart={handleAddToCart}/>
            </StyledWrapper>
        </ThemeContext.Provider>
    );
}

export default App;
