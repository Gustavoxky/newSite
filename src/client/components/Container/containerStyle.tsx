import styled from 'styled-components'

export const ContainerSC = styled.div`
    display: flex;
    width: 10rem;
    height: 150px;
    border-radius: 10px;
    background-color: #7474964c;
    margin: 10px;
    &:hover {
        cursor: pointer;
        width: 310px;
        height: 160px;
        background-color: #24212b;
    }
`
export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: absolute;
    width: 100%;
    height: 200px;
    top: 400px;
`