import styled from 'styled-components'

export const HeaderSC = styled.div`
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