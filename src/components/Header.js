import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 16vh;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
`

const Header = () => {
    return (
        <HeaderContainer>
            HEADER
        </HeaderContainer>
    )
}

export default Header;