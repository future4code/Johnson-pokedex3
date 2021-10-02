import styled from "styled-components";
import Background from '../../assets/background.png'

export const PokemonDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: black;

    /* button {
        display: flex;
        width: 100px;
        height: 60px;
        justify-content: center;
        align-items: center;
    } */
`
// export const PokemonDetailsBackground = styled.div`
//     display: flex;
//     justify-content: center;
//     width: 74vw;
//     height: 84vh;
//     background-color: lightgray;
// `

export const PokemonDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 66vw;
    height: 48vh;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;

    img {
        width: 160px;
        height: 160px;        
    }

    .all {
        display: flex;
        width: 64vw;
        justify-content: space-around;
    }

    .sprites {
        display: flex;
        justify-content: space-around;
        width: 30vw;
        align-items: center;
        background-image: url(${Background});
        background-size: cover;
        border-radius: 4px;
    }

    .back {
        display: flex;
        flex-direction: column !important;
        margin-top: 210px;
        margin-left: 20px;
    }

    .front {
        display: flex;
        flex-direction: column !important;
        width: 100px;
        height: 100px;
        margin-bottom: 140px;
        margin-left: 200px;
    }

    .name__number {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .infos__types {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30vw;

        h1 {
            display: flex;
            justify-content: center;
        }
    }

    .infos {
        display: flex;
        width: 100%;
        height: 200px;
        justify-content: space-around;
        align-items: center;
        background-color: #30a7d7;
        border-radius: 4px;
    }

    .info_1 {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
    }

    .info_2 {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
    }

    .info_3 {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
    }

    .types {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        
        .types_names {
            display: flex;
            width: 292px;
            justify-content: space-between;

            span {
                width: 140px;
                height: 32px;
            }
        }
        
        .fire {
            display: flex;
            color: #fff;
            background-color: #fd7d24;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .grass {
            display: flex;
            color: #212121;
            background-color: #9bcc50;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .electric {
            display: flex;
            color: #212121;
            background-color: #eed535;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .water {
            display: flex;
            color: #fff;
            background-color: #4592c4;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .ground {
            display: flex;
            color: #212121;
            background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
            background-color: #f7de3f;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .rock {
            display: flex;
            color: #fff;
            background-color: #a38c21;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .fairy {
            display: flex;
            color: #212121;
            background-color: #fdb9e9;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .poison {
            display: flex;
            color: #fff;
            background-color: #b97fc9;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .bug {
            display: flex;
            color: #fff;
            background-color: #729f3f;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .dragon {
            display: flex;
            background-color: #97b3e6;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .psychic {
            display: flex;
            color: #fff;
            background-color: #f366b9;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .flying {
            display: flex;
            color: #212121;
            background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
            background-color: #3dc7ef;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .fighting {
            display: flex;
            color: #fff;
            background-color: #d56723;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .normal {
            display: flex;
            color: #212121;
            background-color: #a4acaf;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .steel {
            display: flex;
            color: #212121;
            background-color: #9eb7b8;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .ice {
            display: flex;
            color: #212121;
            background-color: #51c4e7;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .ghost {
            display: flex;
            color: #fff;
            background-color: #7b62a3;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .dragon {
            display: flex;
            color: #fff;
            background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
            background-color: #53a4cf;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }

        .dark {
            display: flex;
            color: #fff;
            background-color: #707070;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
        }
    }
`