import styled from 'styled-components'

export const PokemonListPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  justify-content: center;
  `

export const PokemonListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 56%;
  justify-items: center;
  margin-top: 12vh;
  `

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 200px;
  height: 280px;
  border-radius: 16px;
  margin: 0 8px 48px 8px;
	box-shadow: 0 3px 24px rgba(100, 100, 100, 0.5);
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "fire":
        return '#FDDFDF';
            
      case "grass": 
        return '#DEFDE0';

      case "electric": 
        return '#FCF7DE';

      case "water": 
        return '#DEF3FD';

      case "ground": 
        return '#f4e7da';

      case "rock": 
        return '#d5d5d4';

      case "fairy": 
        return '#fceaff';

      case "poison": 
        return '#98d7a5';

      case "bug": 
        return '#f8d5a3';

      case "dragon": 
        return '#97b3e6';

      case "psychic": 
        return '#eaeda1';

      case "flying": 
        return '#F5F5F5';

      case "fighting": 
        return '#E6E0D4';
            
      case "normal": 
        return '#F5F5F5';
            
      default:
        return "#fff";
    }
  }};

  :hover {
    transform: scale(1.02);
  }

  span {
    margin: 0 0 4px 12px;
    font-size: 20px;
  }
  
  .poke-number {
    font-size: 14px;
    color: gray;
    margin-top: 4px;
  }

  button {
    display: flex;
    justify-content: center;
    /* width: 100%; */
    height: 28px;
    :hover {
      cursor: pointer;
    }
  }

  img {
    width: 200px;
    height: 200px;
    background-color: lightgray;
    border-radius: 4px;

    :hover {
      cursor: pointer;
    }
  }
`