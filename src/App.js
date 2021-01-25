import ThemeContext from './sharedComponents/ThemeContext'
import React, {useContext} from "react";
import {StyledWrapper, StyledMain} from './style'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListHeader from "./components/ProductListHeader";
import CartListHeader from "./components/CartListHeader";

function App() {

    const theme = useContext(ThemeContext);
    return (
        <ThemeContext.Provider value={theme}>
            <StyledWrapper>
                <Header/>
                <StyledMain>
                    <ProductListHeader/>
                    <CartListHeader/>
                </StyledMain>
                <Footer/>
            </StyledWrapper>
        </ThemeContext.Provider>
    );
}

export default App;
