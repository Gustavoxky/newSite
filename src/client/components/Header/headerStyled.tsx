import styled from 'styled-components'
import { Title } from '../title'

export const HeaderSC = styled.div`
    margin: 0;
    align-items: center;
    box-sizing: border-box;
    padding: 0 50px;
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 80px;
`

export const MenuSC = styled.ul`
    display:flex;
    justify-content: space-around;
    flex-direction:row;
`

export const MenuContentSC = styled.li`
    display: flex;
    list-style: none;
    font-size:12px;
    display:flex;
    color:#fff;
    margin: 0 10px;
    justify-content: space-around;
    font-family:manrope, sans-serif;
        &hover {
            content: '';
            box-shadow: 0 0 0 3px #8257E5;
        }
`
export const LinkSC = styled.a`
    text-decoration: none;
    color: #d42ada;
    font-size: 20px;
    font-family: sans-serif;
    &:hover {
        color: #9d1dc4;
    }
`

export const LogoSC = styled(Title)`
    font-size: 35px;
    color: #610777;
    position: relative;
    right: 800px;
`