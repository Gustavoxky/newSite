import styled from 'styled-components'

export const ContainerSC = styled.div`
    display: flex;
    width: 300px;
    height: 150px;
    border-radius: 10px;
    background-color: #7474964c;
    margin: 10px;
    &:hover {
        cursor: pointer;
        width: 310px;
        height: 160px;
        background-color: #31107e;
    }
`
export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: absolute;
    width: 100vw;
    height: 200px;
    top: 400px;
`