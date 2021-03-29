import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../design/variables";
import iconArrow from '../images/icon-arrow-dark.svg'
const Container = styled.div`
    background-color: white;
    width: 80vw;
    min-height: 60vh;
    z-index: 1;
    margin: 0 auto;
    border-radius: .5rem;
    /* Sombra */
    -webkit-box-shadow: 8px 8px 10px -2px rgba(0,0,0,0.29); 
    box-shadow: 8px 8px 10px -2px rgba(0,0,0,0.29);
        ul{
            margin:0;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            list-style: none;
            align-items: center;

                span{
                    background-color: ${colors.neutral.grayshBlue};
                    height: 1px;
                    width: 80%;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }

                li{
                    font-size: 1.3rem;
                    font-weight: 600;
                    cursor: pointer;
                    padding: 1rem;
                    position: relative;
                        span{
                            background-image: url(${iconArrow});
                            background-color: transparent;
                            width: 10px;
                            height: 7px;
                            position: absolute;
                            top: 50%;
                            transform: translate(0, -50%);
                            margin: 0 0 0 .5rem;
                        }
                        :active{
                            background-color: red;
                        }
                }

                button{
                    border: none;
                    border-radius: 1.5rem;
                    padding: 1rem 3rem;
                    background-image:
                        linear-gradient(
                            90deg,
                            rgba(255, 143, 112, 1) 0%,
                            rgba(255, 61, 84, 1) 100%
                        );
                    color: ${colors.neutral.white};
                    font-weight: 600;
                    margin-top: .5rem;
                    cursor: pointer;
                }
        }

`
const SubMenu = styled.div`
    width: 100%;
    border-radius: .5rem;
    background-color: #ececec;
    padding: 1rem;

        p{
            text-align: center;
            font-size: 1.1rem;
            padding: .5rem 0;
            font-weight: 600;
            color: ${colors.neutral.veryDarkGrayshBlue};
            cursor: pointer;
        }
`

const Sidebar = () => {

    const [productClick , setProductClick] = useState(false)
    const [companyClick , setCompanyClick] = useState(false)
    const [connectClick , setConnectClick] = useState(true)

    const resetStates = () =>{
        setProductClick(false)
        setCompanyClick(false)
        setConnectClick(false)
    }

    const subMenuClicked = e =>{

        resetStates()

        if (e.target.textContent.trim() === 'Product'){
            setProductClick(true)
        } else if (e.target.textContent.trim() === 'Company'){
            setCompanyClick(true)
        } else if (e.target.textContent.trim() === 'Connect'){
            setConnectClick(true)
    }
}

    return ( 
        <Container>
            <ul>
                <li onClick={subMenuClicked}>Product <span></span></li>
                {productClick
                ? <SubMenu>
                    <p>Products</p>
                    <p>Price</p>
                    <p>Help</p>
                </SubMenu> 
                : null}
                <li onClick={subMenuClicked}>Company <span></span></li>
                {companyClick
                ? <SubMenu>
                    <p>Mision</p>
                    <p>Blog</p>
                    <p>Team</p>
                </SubMenu> 
                : null}
                <li onClick={subMenuClicked}>Connect <span></span></li>
                {connectClick
                ? <SubMenu>
                    <p>Contact</p>
                    <p>Newsletter</p>
                    <p>Linkedin</p>
                </SubMenu> 
                : null}
                <span></span>
                <li>Login </li>
                <button type="button">Sign Up</button>
            </ul>
        </Container>
    );
}

export default Sidebar;