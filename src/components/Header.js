import React from "react";
import styled from "styled-components";
import GottaCatchEmAll from "../assets/catch.png"


const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 18vh;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
     
     img {
         width: 14%;
     }
`

const Header = () => {
    return (
        <HeaderContainer>
            <img src={GottaCatchEmAll} alt={"Logo Pokémon"} />
        </HeaderContainer>
    )
}

export default Header;