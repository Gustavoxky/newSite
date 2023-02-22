import styled from 'styled-components'

export const ContainerSC = styled.div`
    display: flex;
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: #2c2c41d3;
    margin: 10px;
    &:hover {
        cursor: pointer;
        width: 310px;
        height: 160px;
        background-color: #181829;
        box-shadow: 0 0 3px 3px #1b1b1d;
    }
`
export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    position: absolute;
    width: 100vw;
    height: 200px;
    top: 400px;
`