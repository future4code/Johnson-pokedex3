import React from "react";
import styled from "styled-components";
import GottaCatchEmAll from "../assets/catch.png"
import Button from '@material-ui/core/Button/Button';
import { useHistory } from "react-router";

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 18vh;
    justify-content: space-between;
    align-items: center;
    background-color: red;
     position: absolute;
     img {
         width: 14%;
         margin-right: 40%;
     }
`

const Header = () => {
    const history = useHistory()

    const goToPokedex = () => {
        history.push('/pokedex')
    }


    return (
        <>
            <HeaderContainer>
                <Button onClick={goToPokedex} style={{ marginLeft: '20px', }} variant="contained" color="warning">Pokédex</Button>
                <img src={GottaCatchEmAll} alt={"Logo Pokémon"} />
            </HeaderContainer>
        </>
    )
}

export default Header;