import styled from "styled-components";

export const PokemonListPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  justify-content: center;
  position: relative;
`;

export const PokemonListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 56%;
  justify-items: center;
  margin-top: 24vh;
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  border-radius: 16px;
  margin: 0 8px 48px 8px;
  box-shadow: 0 3px 24px rgba(100, 100, 100, 0.5);
  transition: 0.3s;

  span {
    display: flex;
    margin: 0 0 8px 12px;
    font-size: 20px;

    :nth-child(2) {
      display: flex;
      padding: 2px;
      align-self: center;
      justify-content: center;
      background-color: #f1f1f1;
      border-radius: 50px;
      width: 30%;
      color: #a1a1a1;
    }
  }

  .poke-number {
    font-size: 14px;
    color: grey;
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 5;
    transition: 0.3s;

    :hover {
      transform: scale(1.09);
      transition: 0.3s;
      -webkit-filter: drop-shadow(5px 5px 5px grey);
      filter: drop-shadow(5px 5px 5px grey);
    }
  }
`;

export const DivImage = styled.div`
  z-index: 2;
  border-radius: 50%;
  background-color: red;
  width: 80%;
  height: 80%;
  margin: 5% 10% 5% 10%;
  background-color: #fff;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    transition: 0.3s;
    -webkit-filter: drop-shadow(5px 5px 5px grey);
    filter: drop-shadow(5px 5px 5px grey);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;

  height: 10%;
  width: 100%;
  background-color: transparent;
  border-radius: 16px;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: 0.1s;

    :nth-child(1) {
      transition: 0.1s;
      border-radius: 0 0 16px 16px;
      padding-left: 20px;
      background-image: linear-gradient(
        to right,
        #ff8008 0%,
        #ffc837 51%,
        #ff8008 100%
      );
      :hover {
        transition: 0.5s;
        background-position: right center;
        background-image: linear-gradient(
          to right,
          #ffc837 0%,
          #ff8008 51%,
          #ffc837 100%
        );
      }
    }
    :nth-child(2) {
      border-radius: 16px;
      background-image: linear-gradient(
        to right,
        #eb3349 0%,
        #f45c43 51%,
        #eb3349 100%
      );
      :hover {
        transition: 0.5s;
        background-position: right center;
        background-image: linear-gradient(
          to right,
          #f45c43 0%,
          #eb3349 51%,
          #f45c43 100%
        );
      }
    }
  }
`;
