import styled from "styled-components";
import { colors } from "../design/variables";
import iconHamburger from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg"
import bgPatternCircles from "../images/bg-pattern-intro.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";

//Styled components
const Header = styled.header`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    img {
        height: 1rem;
        cursor: pointer;
        transition: all 1s ease-out;

    }

    p {
        color: ${colors.neutral.white};
        font-weight: 600;
        font-size: 1.5rem;
        padding-left: 1rem;
    }
`;

const HeroWrapper = styled.div`
    width: 100vw;
    height: 70vh;
    background: rgb(255, 143, 112);
    background-image: url(${bgPatternCircles}),
        linear-gradient(
            180deg,
            rgba(255, 143, 112, 1) 0%,
            rgba(255, 61, 84, 1) 100%
        );
    border-bottom-left-radius: 5rem;
`;

const Hero = styled.div`
    width: 100vw;
    height: calc(70vh - (10vh + 1rem));
    color: ${colors.neutral.white};
    position: relative;
    h1 {
        font-weight: 600;
        text-align: center;
        font-size: 2rem;
        padding: 7rem 1rem 0 1rem;
        margin: 0;
    }

    h2 {
        font-weight: 300;
        text-align: center;
        padding: 1rem 1rem 0 1rem;
        margin: 0;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        padding-top: 2rem;

        button {
            padding: 0.75rem 1.25rem;
            border-radius: 1rem;
            border: 1px solid white;
            font-weight: 600;
            color: ${colors.neutral.white};
            background-color: transparent;
            cursor: pointer;
            :active {
                background-color: white;
                color: ${colors.primary.lightRed};
            }
        }

        .active {
            background-color: white;
            color: ${colors.primary.lightRed};
            margin-right: 0.5rem;

            :active {
                color: ${colors.neutral.white};
                background-color: transparent;
            }
        }
    }
`;

const HeaderAndHero = () => {
    const [menuClick, setmenuClick] = useState(false)

    //Función que abre o cierra el menu
    const handleMenu = () =>{
        if (menuClick === false){
            setmenuClick(true)
            return
        } else{
            setmenuClick(false)
        }
    }
    return (
        <HeroWrapper>
            <Header>
                <p>Blogr</p>
                <img src={menuClick? iconClose : iconHamburger} alt="iconHamurguer" onClick={handleMenu} />
            </Header>
            {menuClick ? <Sidebar/> : null}
            <Hero>
                <h1> A modern publishing platform</h1>
                <h2>Grow your audience and build your online brand</h2>
                <div className="wrapper">
                    <button className="active" type="button">
                        Start for Free
                    </button>
                    <button type="button">Learn More</button>
                </div>
            </Hero>
        </HeroWrapper>
    );
};

export default HeaderAndHero;
